// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Footer = () => {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(imageRef.current, {
//         yPercent: 20, // Moves the background image down on scroll for a parallax effect
//         ease: 'none',
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top bottom', // Starts when the top of the footer hits the bottom of the viewport
//           end: 'bottom top',   // Ends when the bottom of the footer leaves the top of the viewport
//           scrub: true,         // Links animation directly to scroll progress
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//    <>
//    <div 
//      ref={containerRef} 
//      className='w-full h-screen bg-black flex flex-col relative overflow-hidden'
//    >
      
//      {/* Background Image Layer with Parallax */}
//      <img 
//        ref={imageRef}
//        src="/images/home/FOOTER.png" 
//        alt="Padel Trail Footer Background" 
//        className='w-full h-full object-cover object-center absolute top-0 left-0 z-0 scale-[1.2] will-change-transform' 
//      />
     
//      {/* Dark Gradient Overlay for Text Readability */}
//      <div className="absolute inset-0 bg-black/40 z-10"></div>

//      {/* Faint Vertical Grid Lines Layer */}
//      <div className="absolute inset-0 z-20 grid grid-cols-5 pointer-events-none px-10">
//        <div className="border-r border-white/20 h-full"></div>
//        <div className="border-r border-white/20 h-full"></div>
//        <div className="border-r border-white/20 h-full"></div>
//        <div className="border-r border-white/20 h-full"></div>
//        <div className="h-full"></div>
//      </div>

//      {/* Main Content Layer */}
//      <div className='w-full h-full z-30 relative flex flex-col justify-between'>
       
//        {/* Top Navigation Grid */}
//        <div className="grid grid-cols-5 gap-4 px-10 pt-32 text-white w-full">
         
//          {/* Column 1: Explore */}
//          <div className="flex flex-col gap-6">
//            <span className="text-xs tracking-widest uppercase text-gray-300 Inter">Explore</span>
//            <ul className="flex flex-col gap-3 text-4xl NeueR">
//              <li className="cursor-pointer hover:opacity-70 transition-opacity">The Trail</li>
//              <li className="cursor-pointer hover:opacity-70 transition-opacity">Edition 01</li>
//              <li className="cursor-pointer hover:opacity-70 transition-opacity">Destinations</li>
//              <li className="cursor-pointer hover:opacity-70 transition-opacity">The Format</li>
//            </ul>
//          </div>

//          {/* Column 2: Empty Spacer */}
//          <div></div>

//          {/* Column 3: The Game / The Journey */}
//          <div className="flex flex-col gap-6">
//            <div className="flex gap-4 items-center text-xs tracking-widest uppercase Inter">
//              <button className="px-5 py-2 border border-white/50 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer">
//                The Game
//              </button>
//              <span className="text-gray-300 cursor-pointer hover:text-white transition-colors">The Journey</span>
//            </div>
//            <p className="text-sm text-gray-200 max-w-[250px] leading-relaxed NeueR">
//              The Padel Trail is a unique journey<br />through the heart of Spain.
//            </p>
//          </div>

//          {/* Column 4: Experience */}
//          <div className="flex flex-col gap-6">
//            <span className="text-xs tracking-widest uppercase text-gray-300 Inter">Experience</span>
//            <ul className="flex flex-col gap-2 text-base text-gray-200 NeueR">
//              <li className="cursor-pointer hover:text-white transition-colors">The Courts</li>
//              <li className="cursor-pointer hover:text-white transition-colors">The Matches</li>
//              <li className="cursor-pointer hover:text-white transition-colors">The Journey</li>
//              <li className="cursor-pointer hover:text-white transition-colors">The People</li>
//            </ul>
//          </div>

//          {/* Column 5: Participate */}
//          <div className="flex flex-col gap-6">
//            <span className="text-xs tracking-widest uppercase text-gray-300 Inter">Participate</span>
//            <ul className="flex flex-col gap-2 text-base text-gray-200 NeueR">
//              <li className="cursor-pointer hover:text-white transition-colors">Apply to Play</li>
//              <li className="cursor-pointer hover:text-white transition-colors">Become a Partner</li>
//              <li className="cursor-pointer hover:text-white transition-colors">Contact</li>
//            </ul>
//          </div>

//        </div>

//        {/* Bottom Giant Typographic Text */}
//        <div className="w-full px-10 pb-8">
//          <h1 className="text-[13vw]! leading-[13vw]! text-white tracking-tight NeueM m-0 p-0">
//            PADEL TRAIL
//          </h1>
//        </div>
//      </div>

//      {/* Solid White Bottom Bar */}
//      <div className="w-full bg-[#F8F8F8] text-black py-4 px-10 flex justify-between items-center text-[10px] sm:text-xs uppercase tracking-widest font-semibold z-40 relative Inter">
//        <span>The Padel Trail</span>
//        <span>© 2026</span>
//        <span>Spain · Edition 01 · 2026</span>
//        <span>Privacy Policy</span>
//        <span>Terms & Conditions</span>
//      </div>

//    </div>
//    </>
//   )
// }

// export default Footer;


'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 20, // Moves the background image down on scroll for a parallax effect
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom', // Starts when the top of the footer hits the bottom of the viewport
          end: 'bottom top',   // Ends when the bottom of the footer leaves the top of the viewport
          scrub: true,         // Links animation directly to scroll progress
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
   <>
   <div 
     ref={containerRef} 
     className='w-full min-h-screen lg:h-screen bg-black flex flex-col relative overflow-hidden'
   >
      
     {/* Background Image Layer with Parallax.
         `inset-0` (instead of a fixed h-full) keeps this covering the whole
         section even when the nav grid stacks taller on mobile. */}
     <img 
       ref={imageRef}
       src="/images/home/FOOTER.png" 
       alt="Padel Trail Footer Background" 
       className='w-full h-full object-cover object-center absolute inset-0 z-0 scale-[1.2] will-change-transform' 
     />
     
     {/* Dark Gradient Overlay for Text Readability */}
     <div className="absolute inset-0 bg-black/40 z-10"></div>

     {/* Faint Vertical Grid Lines Layer - purely decorative, only meaningful
         once the nav actually reaches 5 columns at lg */}
     <div className="hidden lg:grid absolute inset-0 z-20 lg:grid-cols-5 pointer-events-none lg:px-10">
       <div className="border-r border-white/20 h-full"></div>
       <div className="border-r border-white/20 h-full"></div>
       <div className="border-r border-white/20 h-full"></div>
       <div className="border-r border-white/20 h-full"></div>
       <div className="h-full"></div>
     </div>

     {/* Main Content Layer */}
     <div className='w-full h-full z-30 relative flex flex-col justify-between gap-10 lg:gap-0'>
       
       {/* Top Navigation Grid.
           2 cols on mobile (clean 2x2 of the real content blocks) -> 4 cols
           at sm (spacer stays hidden, 4 blocks fill it exactly) -> 5 cols at
           lg once the spacer column is reintroduced. */}
       <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 px-5 sm:px-8 lg:px-10 pt-16 sm:pt-24 lg:pt-32 text-white w-full">
         
         {/* Column 1: Explore */}
         <div className="flex flex-col gap-4 sm:gap-6">
           <span className="text-xs tracking-widest uppercase text-gray-300 Inter">Explore</span>
           <ul className="flex flex-col gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl NeueR">
             <li className="cursor-pointer hover:opacity-70 transition-opacity">The Trail</li>
             <li className="cursor-pointer hover:opacity-70 transition-opacity">Edition 01</li>
             <li className="cursor-pointer hover:opacity-70 transition-opacity">Destinations</li>
             <li className="cursor-pointer hover:opacity-70 transition-opacity">The Format</li>
           </ul>
         </div>

         {/* Column 2: Empty Spacer - only reserved as a column at lg, where
             the 5-column layout needs the breathing room */}
         <div className="hidden lg:block"></div>

         {/* Column 3: The Game / The Journey */}
         <div className="flex flex-col gap-4 sm:gap-6">
           <div className="flex flex-wrap gap-3 sm:gap-4 items-center text-xs tracking-widest uppercase Inter">
             <button className="px-5 py-2 border border-white/50 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer">
               The Game
             </button>
             <span className="text-gray-300 cursor-pointer hover:text-white transition-colors">The Journey</span>
           </div>
           <p className="text-sm text-gray-200 max-w-[280px] sm:max-w-[250px] leading-relaxed NeueR">
             The Padel Trail is a unique journey<br className="hidden sm:block" /> through the heart of Spain.
           </p>
         </div>

         {/* Column 4: Experience */}
         <div className="flex flex-col gap-4 sm:gap-6">
           <span className="text-xs tracking-widest uppercase text-gray-300 Inter">Experience</span>
           <ul className="flex flex-col gap-2 text-base text-gray-200 NeueR">
             <li className="cursor-pointer hover:text-white transition-colors">The Courts</li>
             <li className="cursor-pointer hover:text-white transition-colors">The Matches</li>
             <li className="cursor-pointer hover:text-white transition-colors">The Journey</li>
             <li className="cursor-pointer hover:text-white transition-colors">The People</li>
           </ul>
         </div>

         {/* Column 5: Participate */}
         <div className="flex flex-col gap-4 sm:gap-6">
           <span className="text-xs tracking-widest uppercase text-gray-300 Inter">Participate</span>
           <ul className="flex flex-col gap-2 text-base text-gray-200 NeueR">
             <li className="cursor-pointer hover:text-white transition-colors">Apply to Play</li>
             <li className="cursor-pointer hover:text-white transition-colors">Become a Partner</li>
             <li className="cursor-pointer hover:text-white transition-colors">Contact</li>
           </ul>
         </div>

       </div>

       {/* Bottom Giant Typographic Text - vw-based sizing already scales,
           just tuned the ratio slightly per breakpoint so it doesn't crowd
           the edges on narrow phones */}
       <div className="w-full px-5 sm:px-8 lg:px-10 pb-6 sm:pb-8">
         <h1 className="text-[16vw]! sm:text-[14vw]! lg:text-[13vw]! leading-[16vw]! sm:leading-[14vw]! lg:leading-[13vw]! text-white tracking-tight NeueM m-0 p-0">
           PADEL TRAIL
         </h1>
       </div>
     </div>

     {/* Solid White Bottom Bar - stacks and centers on mobile instead of
         cramming 5 items into one row */}
     <div className="w-full bg-[#F8F8F8] max-sm:absolute max-sm:bottom-0 max-sm:left-0 text-black py-4 px-5 sm:px-10 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-center sm:justify-between items-center text-center sm:text-left text-[10px] sm:text-xs uppercase tracking-widest font-semibold z-40 relative Inter">
       <span>The Padel Trail</span>
       <span>© 2026</span>
       <span>Spain · Edition 01 · 2026</span>
       <span>Privacy Policy</span>
       <span>Terms & Conditions</span>
     </div>

   </div>
   </>
  )
}

export default Footer;