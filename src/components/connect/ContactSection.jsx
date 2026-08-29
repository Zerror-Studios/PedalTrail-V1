import React from 'react';

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32 px-6 lg:px-20 font-sans">
      <div className=" mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left Column: Form Section */}
        <div className="flex-1">
          <h2 className="NeueM text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight uppercase text-[#1C1C1A] mb-12">
            Get in touch
          </h2>

          <form className="flex flex-col gap-6" >
            
            {/* Row 1: Name and Email */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Name Input */}
              <div className="flex-1 border border-gray-200 p-4 flex flex-col justify-center focus-within:border-gray-400 transition-colors">
                <label htmlFor="name" className="text-sm NeueM font-semibold text-gray-800 mb-1">
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
              <div className="flex-1 border border-gray-200 p-4 flex flex-col justify-center focus-within:border-gray-400 transition-colors">
                <label htmlFor="email" className="text-sm NeueM font-semibold text-gray-800 mb-1">
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
            <div className="relative border border-gray-200 p-4 flex flex-col justify-center focus-within:border-gray-400 transition-colors cursor-pointer">
              <label htmlFor="enquiry" className="text-sm NeueM font-semibold text-gray-800 mb-1 cursor-pointer">
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
            <div className="border border-gray-200 p-4 flex flex-col focus-within:border-gray-400 transition-colors">
              <label htmlFor="message" className="text-sm NeueM font-semibold text-gray-800 mb-1">
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
            <div className="mt-2 flex flex-col items-start gap-4">
              <button 
                type="submit"
                className="bg-[#FF6000] text-white text-[11px] md:text-xs  uppercase tracking-wide py-3 px-8 hover:bg-[#e55600] transition-colors"
              >
                <span>Send Enquiry </span>
              </button>
              <p className=" text-gray-500">
                We'll get back to you as soon as we can.
              </p>
            </div>
            
          </form>
        </div>

        {/* Right Column: Contact Details */}
        <div className="w-full lg:w-[30%] flex flex-col gap-10 lg:pt-28">
          
          {/* Email Info */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] md:text-sm NeueM font-semibold text-black uppercase tracking-widest">
              Email
            </span>
            <a href="mailto:hello@thepadeltrail.com" className="text-lg md:text-xl text-gray-800 hover:text-[#FF6000] transition-colors">
              hello@thepadeltrail.com
            </a>
          </div>

          {/* Location Info */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] md:text-sm NeueM font-semibold text-black uppercase tracking-widest">
              Location
            </span>
             <a href="#" className="text-lg md:text-xl text-gray-800 hover:text-[#FF6000] transition-colors">
              Madrid, Spain
            </a>
          </div>

          {/* Instagram Info */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] md:text-sm NeueM font-semibold text-black uppercase tracking-widest">
              Instagram
            </span>
            <a href="#" className="text-lg md:text-xl text-gray-800 hover:text-[#FF6000] transition-colors">
              @thepadeltrail
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}