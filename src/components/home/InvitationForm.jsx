'use client';

import React, { useState } from 'react';

export default function InvitationForm() {
  const [formData, setFormData] = useState({
    player01: '',
    player02: '',
    email: '',
    whatsapp: '',
    city: '',
    padelLevel: '',
    notes: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative">

        <div className='w-[1px] h-[85vh] bg-gray-200 absolute top-1/2 left-[20%] -translate-y-1/2'/>
        <div className='w-[1px] h-[85vh] bg-gray-200 absolute top-1/2 right-[20%] -translate-y-1/2'/>

      <div className="w-full max-w-2xl bg-white border border-gray-200 p-8 md:p-12 ">
        
        {/* Header */}
        <div className="mb-8">
          <h5 className=" NeueM text-red-600 mb-2">
            APPLY FOR AN INVITATION
          </h5>
          <p className="text-gray-500 text-sm">
            Book Your Trial And Get On Court.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Player 01 & Player 02 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Player 01
              </label>
              <input
                type="text"
                name="player01"
                placeholder="Name"
                value={formData.player01}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Player 02
              </label>
              <input
                type="text"
                name="player02"
                placeholder="Name"
                value={formData.player02}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email & Whatsapp Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Whatsapp Number
              </label>
              <input
                type="tel"
                name="whatsapp"
                placeholder="1 (555) 000-0000"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
          </div>

          {/* Row 3: City & Padel Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Padel Level
              </label>
              <div className="relative">
                <select
                  name="padelLevel"
                  value={formData.padelLevel}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-400 focus:text-gray-800 focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Level 04.45</option>
                  <option value="beginner">Beginner (1.0 - 2.0)</option>
                  <option value="intermediate">Intermediate (2.5 - 3.5)</option>
                  <option value="advanced">Advanced (4.0+)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Textarea: Anything we should know? */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Anything we should know?
            </label>
            <input
              type="text"
              name="notes"
              placeholder="A little context about you and your partner"
              value={formData.notes}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-300 pb-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <input
              type="checkbox"
              name="acceptedTerms"
              id="terms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
            />
            <label htmlFor="terms" className="text-xs text-gray-600 leading-relaxed">
              I accept Padel Elite's{' '}
              <a href="#" className="underline hover:text-gray-800">Terms of Service</a> and acknowledge that I <br/> have read the{' '}
              <a href="#" className="underline hover:text-gray-800">Privacy Policy</a>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex flex-col items-center">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-3.5 bg-red-600 text-white font-semibold text-xs uppercase tracking-widest hover:bg-red-700 transition-colors shadow-sm"
            >
              SUBMIT
            </button>
            <span className="text-xs text-gray-400 mt-4">
              We'll contact you to confirm your session.
            </span>
          </div>

        </form>

      </div>
    </div>
  );
}