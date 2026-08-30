"use client"; // Required for GSAP hooks in Next.js App Router

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  // GSAP ScrollTrigger Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Triggers when section is 80% visible
        once: true,
      }
    });

    // 1. Heading slide up
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    // 2. Form fields staggered reveal
    .fromTo(
      ".contact-form-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    )
    // 3. Right column contact details staggered reveal
    .fromTo(
      ".contact-detail-item",
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" },
      "-=0.6"
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-16 sm:py-24 md:py-32 px-5 sm:px-10 md:px-10 lg:px-10 font-sans overflow-hidden"
    >
      <div className=" mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 xl:gap-32">
        
        {/* Left Column: Form Section */}
        <div className="flex-1">
          <h3 
            ref={headingRef}
            // Used clamp() for fluid scaling between mobile and desktop sizes
            className="NeueM text-[clamp(3rem,8vw,4.5rem)] leading-[1.1] tracking-tight uppercase text-[#1C1C1A] mb-8 md:mb-12"
          >
            Get in touch
          </h3>

          <form className="flex flex-col gap-4 sm:gap-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Row 1: Name and Email */}
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              {/* Name Input */}
              <div className="contact-form-item flex-1 border border-gray-200 p-4 flex flex-col justify-center focus-within:border-gray-400 transition-colors">
                <label htmlFor="name" className="text-xs sm:text-sm NeueM font-semibold text-gray-800 mb-1">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your name" 
                  className="w-full outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
                />
              </div>

              {/* Email Input */}
              <div className="contact-form-item flex-1 border border-gray-200 p-4 flex flex-col justify-center focus-within:border-gray-400 transition-colors">
                <label htmlFor="email" className="text-xs sm:text-sm NeueM font-semibold text-gray-800 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="your@email.com" 
                  className="w-full outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
                />
              </div>
            </div>

            {/* Row 2: Select Enquiry */}
            <div className="contact-form-item relative border border-gray-200 p-4 flex flex-col justify-center focus-within:border-gray-400 transition-colors cursor-pointer">
              <label htmlFor="enquiry" className="text-xs sm:text-sm NeueM font-semibold text-gray-800 mb-1 cursor-pointer">
                What can we help you with?
              </label>
              <select 
                id="enquiry"
                className="w-full outline-none text-sm text-gray-500 bg-transparent appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled hidden>Select an enquiry</option>
                <option value="general">General Enquiry</option>
                <option value="press">Press & Media</option>
                <option value="partnership">Partnerships</option>
              </select>
              {/* Custom Dropdown Chevron */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 mt-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {/* Row 3: Textarea */}
            <div className="contact-form-item border border-gray-200 p-4 flex flex-col focus-within:border-gray-400 transition-colors">
              <label htmlFor="message" className="text-xs sm:text-sm NeueM font-semibold text-gray-800 mb-1">
                Your message
              </label>
              <textarea 
                id="message"
                placeholder="Tell us a little more..." 
                rows={4}
                className="w-full outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent resize-none mt-1"
              />
            </div>

            {/* Submit Button & Helper Text */}
            <div className="contact-form-item mt-2 flex flex-col items-start gap-3 sm:gap-4">
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#FF6000] text-white text-[11px] md:text-xs uppercase tracking-wide py-4 sm:py-3 px-8 hover:bg-[#e55600] transition-colors font-medium"
              >
                <span>Send Enquiry</span>
              </button>
              <p className="text-xs sm:text-sm text-gray-500">
                We&apos;ll get back to you as soon as we can.
              </p>
            </div>
            
          </form>
        </div>

        {/* Right Column: Contact Details */}
        {/* Adjusted padding to align nicely with the first input field on desktop */}
        <div className="w-full lg:w-[30%] flex flex-col gap-8 sm:gap-10 lg:pt-[5.5rem]">
          
          {/* Email Info */}
          <div className="contact-detail-item flex flex-col gap-1">
            <span className="text-[10px] sm:text-xs md:text-sm NeueM font-semibold text-black uppercase tracking-widest">
              Email
            </span>
            <a href="mailto:hello@thepadeltrail.com" className="text-base sm:text-lg md:text-xl text-gray-800 hover:text-[#FF6000] transition-colors">
              hello@thepadeltrail.com
            </a>
          </div>

          {/* Location Info */}
          <div className="contact-detail-item flex flex-col gap-1">
            <span className="text-[10px] sm:text-xs md:text-sm NeueM font-semibold text-black uppercase tracking-widest">
              Location
            </span>
             <a href="#" className="text-base sm:text-lg md:text-xl text-gray-800 hover:text-[#FF6000] transition-colors">
              Madrid, Spain
            </a>
          </div>

          {/* Instagram Info */}
          <div className="contact-detail-item flex flex-col gap-1">
            <span className="text-[10px] sm:text-xs md:text-sm NeueM font-semibold text-black uppercase tracking-widest">
              Instagram
            </span>
            <a href="#" className="text-base sm:text-lg md:text-xl text-gray-800 hover:text-[#FF6000] transition-colors">
              @thepadeltrail
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}