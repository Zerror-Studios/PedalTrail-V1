'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

gsap.registerPlugin(ScrollTrigger);

const GENDER_OPTIONS = ['Male', 'Female'];
const YES_NO_OPTIONS = ['Yes', 'No'];
const SPORT_OPTIONS = ['Tennis', 'Squash', 'Badminton', 'Cricket', 'Football'];
const PLAYING_SINCE_OPTIONS = [
  'Under 3 months',
  '3 months to 1 Year',
  '1 year to 2 years',
  '2 years to 3 years',
  'More than 3 years',
];
const LEVEL_OPTIONS = ['2.0 - 2.5', '2.5 - 3.0', '3.0 - 3.5', '3.5 - 4.0', '4.0 - 4.5', '4.5 - 5.0'];

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  gender: z.string().min(1, 'Gender is required'),
  dobMonth: z.string().min(1, 'Required').max(2, 'Invalid'),
  dobDay: z.string().min(1, 'Required').max(2, 'Invalid'),
  dobYear: z.string().min(4, 'Required').max(4, 'Invalid'),
  city: z.string().min(1, 'City is required'),
  phone: z.string().min(10, 'Valid phone is required'),
  email: z.string().email('Valid email is required'),
  instagram: z.string().optional(),
  tagSocials: z.string().min(1, 'Required'),
  profession: z.string().min(1, 'Profession is required'),
  sportingBackground: z.array(z.string()).optional(),
  sportingBackgroundOther: z.string().optional(),
  playingSince: z.string().min(1, 'Required'),
  selfLevel: z.string().min(1, 'Required'),
  acceptedTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms' }),
  }),
});

export default function InvitationForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      dobMonth: '',
      dobDay: '',
      dobYear: '',
      city: '',
      phone: '',
      email: '',
      instagram: '',
      tagSocials: '',
      profession: '',
      sportingBackground: [],
      sportingBackgroundOther: '',
      playingSince: '',
      selfLevel: '',
      acceptedTerms: false,
    },
  });

  const containerRef = useRef(null);
  const formBoxRef = useRef(null);
  const stepContentRef = useRef(null);

  // Initial Container Reveal Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 110%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.set('.court-line', { strokeDashoffset: 1 })
        .set(formBoxRef.current, { opacity: 0, scale: 0.95, y: 20 });

      tl.to('.court-line', {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        stagger: 0.1,
      }).to(
        formBoxRef.current,
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Step Transition Animation
  useEffect(() => {
    if (stepContentRef.current) {
      gsap.fromTo(
        stepContentRef.current.children,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
      );
    }
  }, [step]);

  const handleSportToggle = (sport) => {
    const current = watch('sportingBackground') || [];
    const already = current.includes(sport);
    if (already) {
      setValue('sportingBackground', current.filter((s) => s !== sport), { shouldValidate: true });
    } else {
      setValue('sportingBackground', [...current, sport], { shouldValidate: true });
    }
  };

  const onSubmit = async (data) => {
    setStatus('submitting');
    try {
      const res = await fetch('/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      setStatus('success');
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus('error');
    }
  };

  const handleNext = async () => {
    let fieldsToValidate = [];
    if (step === 1) {
      fieldsToValidate = ['firstName', 'lastName', 'gender', 'dobMonth', 'dobDay', 'dobYear'];
    } else if (step === 2) {
      fieldsToValidate = ['city', 'phone', 'email', 'instagram', 'tagSocials'];
    }

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const lineStyle = {
    fill: 'none',
    stroke: '#d1d5db',
    strokeWidth: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md text-center bg-white/90 border border-gray-200 shadow-2xl rounded-sm p-10">
          <h5 className="font-bold text-red-600 mb-2 tracking-wide">THANK YOU</h5>
          <p className="text-gray-500 text-sm">
            Your application has been received. We'll be in touch to confirm your session.
          </p>
        </div>
      </div>
    );
  }

  const watchSportingBackground = watch('sportingBackground') || [];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-6 relative overflow-hidden"
    >
      {/* BACKGROUND SVGS (Same as original) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 block md:hidden" viewBox="0 0 500 1200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="400" height="1100" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="100" y1="50" x2="100" y2="1150" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="400" y1="50" x2="400" y2="1150" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="20" y1="600" x2="480" y2="600" pathLength="1" className="court-line" style={{ ...lineStyle, strokeWidth: 1, stroke: '#9ca3af' }} />
        <line x1="100" y1="325" x2="400" y2="325" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="100" y1="875" x2="400" y2="875" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="250" y1="325" x2="250" y2="875" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="250" y1="50" x2="250" y2="70" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="250" y1="1150" x2="250" y2="1130" pathLength="1" className="court-line" style={lineStyle} />
      </svg>
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="900" height="500" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="50" y1="125" x2="950" y2="125" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="50" y1="475" x2="950" y2="475" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="500" y1="20" x2="500" y2="580" pathLength="1" className="court-line" style={{ ...lineStyle, strokeWidth: 1, stroke: '#9ca3af' }} />
        <line x1="275" y1="125" x2="275" y2="475" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="725" y1="125" x2="725" y2="475" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="275" y1="300" x2="725" y2="300" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="50" y1="300" x2="70" y2="300" pathLength="1" className="court-line" style={lineStyle} />
        <line x1="950" y1="300" x2="930" y2="300" pathLength="1" className="court-line" style={lineStyle} />
      </svg>

      {/* Form Container: Now strictly 80vh and a flex column */}
      <div
        ref={formBoxRef}
        className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-sm border border-gray-200 opacity-0 rounded-sm flex flex-col h-fit"
      >
        {/* Header and Step Indicator (Fixed at Top) */}
        <div className="p-6 md:p-8 pb-4 flex-shrink-0 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 gap-4">
          <div>
            <h5 className="font-bold text-[#FF6D35] mb-1 tracking-wide text-sm md:text-base">APPLY FOR AN INVITATION</h5>
            <p className="text-gray-500 text-xs">Book Your Trial And Get On Court.</p>
          </div>

          {/* 1 - 2 - 3 Animated Tracker */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((num) => (
              <React.Fragment key={num}>
                <div
                  className={`flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 ${
                    step === num ? 'bg-[#FF6D35] text-white shadow-md scale-110' :
                    step > num ? 'bg-red-100 text-[#FF6D35]' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {num}
                </div>
                {num < 3 && <div className={`w-4 md:w-6 h-[2px] transition-colors duration-300 ${step > num ? 'bg-red-200' : 'bg-gray-100'}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-4" ref={stepContentRef}>

            {/* ====== STEP 1: Personal Info ====== */}
            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">First Name</label>
                    <input
                      type="text" placeholder="First name"
                      {...register('firstName')}
                      className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${errors.firstName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#FF6D35]'}`}
                    />
                    {errors.firstName && <span className="text-[10px] text-red-500">{errors.firstName.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Last Name</label>
                    <input
                      type="text" placeholder="Last name"
                      {...register('lastName')}
                      className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${errors.lastName ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-[#FF6D35]'}`}
                    />
                    {errors.lastName && <span className="text-[10px] text-red-500">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Gender</label>
                  <div className="flex gap-4">
                    {GENDER_OPTIONS.map((opt) => (
                      <label key={opt} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="radio" value={opt}
                          {...register('gender')}
                          className="h-3.5 w-3.5 text-red-600 focus:ring-red-500"
                        /> {opt}
                      </label>
                    ))}
                  </div>
                  {errors.gender && <span className="text-[10px] text-red-500">{errors.gender.message}</span>}
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Date of Birth</label>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <input
                        type="number" placeholder="MM" min="1" max="12"
                        {...register('dobMonth')}
                        className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${errors.dobMonth ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600'}`}
                      />
                    </div>
                    <div>
                      <input
                        type="number" placeholder="DD" min="1" max="31"
                        {...register('dobDay')}
                        className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${errors.dobDay ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600'}`}
                      />
                    </div>
                    <div>
                      <input
                        type="number" placeholder="YYYY" min="1900" max="2100"
                        {...register('dobYear')}
                        className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${errors.dobYear ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600'}`}
                      />
                    </div>
                  </div>
                  {(errors.dobMonth || errors.dobDay || errors.dobYear) && <span className="text-[10px] text-red-500">Date of Birth is incomplete</span>}
                </div>
              </>
            )}

            {/* ====== STEP 2: Contact Info ====== */}
            {step === 2 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">City</label>
                    <input
                      type="text" placeholder="City"
                      {...register('city')}
                      className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${errors.city ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600'}`}
                    />
                    {errors.city && <span className="text-[10px] text-red-500">{errors.city.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Phone Number</label>
                    <input
                      type="tel" placeholder="1 (555) 000-0000"
                      {...register('phone')}
                      className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600'}`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-500">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Email</label>
                    <input
                      type="email" placeholder="Email"
                      {...register('email')}
                      className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600'}`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500">{errors.email.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Instagram Handle</label>
                    <input
                      type="text" placeholder="@handle"
                      {...register('instagram')}
                      className="w-full bg-transparent border-b border-gray-300 pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Can we tag you on our socials?</label>
                  <div className="flex gap-4">
                    {YES_NO_OPTIONS.map((opt) => (
                      <label key={opt} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="radio" value={opt}
                          {...register('tagSocials')}
                          className="h-3.5 w-3.5 text-[#FF6D35] focus:ring-[#FF6D35]"
                        /> {opt}
                      </label>
                    ))}
                  </div>
                  {errors.tagSocials && <span className="text-[10px] text-red-500">{errors.tagSocials.message}</span>}
                </div>
              </>
            )}

            {/* ====== STEP 3: Padel & Background ====== */}
            {step === 3 && (
              <>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Profession</label>
                  <input
                    type="text" placeholder="e.g. Finance, Acme Corp, VP"
                    {...register('profession')}
                    className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition-colors ${errors.profession ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600'}`}
                  />
                  {errors.profession && <span className="text-[10px] text-red-500">{errors.profession.message}</span>}
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Any sporting background?</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {SPORT_OPTIONS.map((opt) => (
                      <label key={opt} className="flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={watchSportingBackground.includes(opt)}
                          onChange={() => handleSportToggle(opt)}
                          className="h-3.5 w-3.5 rounded border-gray-300 text-[#FF6D35] focus:ring-[#FF6D35]"
                        /> {opt}
                      </label>
                    ))}
                  </div>
                  <input
                    type="text" placeholder="Other (optional)"
                    {...register('sportingBackgroundOther')}
                    className="w-full bg-transparent border-b border-gray-300 pb-1.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Playing Padel since</label>
                    <select
                      {...register('playingSince')}
                      className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.playingSince ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600'}`}
                    >
                      <option value="" disabled>Select duration</option>
                      {PLAYING_SINCE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {errors.playingSince && <span className="text-[10px] text-red-500">{errors.playingSince.message}</span>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-gray-700 uppercase tracking-wider mb-1">Self-assessed level?</label>
                    <select
                      {...register('selfLevel')}
                      className={`w-full bg-transparent border-b pb-1.5 text-sm text-gray-800 focus:outline-none transition-colors appearance-none cursor-pointer ${errors.selfLevel ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600'}`}
                    >
                      <option value="" disabled>Select level</option>
                      {LEVEL_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    {errors.selfLevel && <span className="text-[10px] text-red-500">{errors.selfLevel.message}</span>}
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-1">
                  <input
                    type="checkbox" id="terms"
                    {...register('acceptedTerms')}
                    className="mt-1 h-3.5 w-3.5 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-[11px] text-gray-600 leading-snug">
                    I accept Padel Elite's <a href="#" className="underline hover:text-gray-800">Terms of Service</a> and acknowledge that I have read the <a href="#" className="underline hover:text-gray-800">Privacy Policy</a>.
                  </label>
                </div>
                {errors.acceptedTerms && <span className="text-[10px] text-red-500 block">{errors.acceptedTerms.message}</span>}
              </>
            )}
          </div>

          {/* Footer with Controls (Fixed at Bottom) */}
          <div className="p-6 md:p-4 flex-shrink-0 border-t border-gray-100 flex justify-between items-center bg-gray-50/50">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-gray-800 transition-colors"
              >
                Go Back
              </button>
            ) : <div />} {/* Empty div ensures 'Next' button aligns right via justify-between */}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-2.5 bg-[#FF6D35] text-white font-semibold text-[10px] md:text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm cursor-pointer"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-2.5 bg-[#FF6D35] text-white font-semibold text-[10px] md:text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Form'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}