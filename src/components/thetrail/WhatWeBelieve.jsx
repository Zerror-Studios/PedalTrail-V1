// // import React from 'react';

// // export default function WhatWeBelieve() {
// //   const items = [
// //     {
// //       icon: (
// //        <img src='/svg/BONE.svg' alt='IMG' className='w-full h-fit flex justify-center items-center' />
// //       ),
// //       title: 'The Game',
// //       description: 'Padel Should Be Competitive But Respectful. We Prioritize Sportsmanship And The Joy Of A Hard-Fought Rally Over Simple Victory.',
// //     },
// //     {
// //       icon: (
// //        <img src='/svg/HUMAN.svg' alt='IMG' className='w-full h-fit flex justify-center items-center' />
       
       
// //       ),
// //       title: 'The People',
// //       description: 'A Trip Is Only As Good As The Company. We Curate Our Fields To Ensure A Mix Of Interesting, Like-Minded Individuals.',
// //     },
// //     {
// //       icon: (
// //         <img src='/svg/log.svg' alt='IMG' className='w-full h-fit flex justify-center items-center' />
       
// //       ),
// //       title: 'The Place',
// //       description: 'Environment Dictates Mood. We Choose Locations That Inspire, Relax, And Offer A Sense Of Quiet Luxury Away From The Crowds.',
// //     },
// //     {
// //       icon: (
// //          <img src='/svg/str.svg' alt='IMG' className='w-full h-fit flex justify-center items-center' />
// //       ),
// //       title: 'The Details',
// //       description: "It's The Small Things That Elevate An Experience. From The Quality Of The Balls To The Post-Match Espresso, Nothing Is Overlooked.",
// //     },
// //   ];

// //   return (
// //     <section className="relative min-h-screen bg-[#FF6000] text-white flex flex-col justify-between overflow-hidden px-6 py-12 md:px-16 md:py-20">
// //       {/* Background Palm Shadow Overlay (Optional SVG effect) */}
// //       <div className="absolute w-full h-full top-0 left-0 ">
// //         <img src="/images/the-trail\BG_11.png" alt="IMG" className='w-full h-full object-cover object-center' />
// //       </div>

// //       {/* Header Section */}
// //       <div className="relative z-10 text-center max-w-xl mx-auto mb-16 space-y-6">
// //         <h3 className="NeueR font-serif text-4xl md:text-6xl tracking-wide text-white">
// //           What We Belive
// //         </h3>
// //         <button className="bg-white text-black  tracking-tighter uppercase px-6 py-3 transition-colors hover:bg-gray-100">
// //           <p>Request An Invitation</p>
// //         </button>
// //       </div>

// //       {/* Content List Section */}
// //       <div className="relative z-10 max-w-4xl mx-auto w-full border-t border-white/20">
// //         {items.map((item, index) => (
// //           <div
// //             key={index}
// //             className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-6 border-b border-white/20"
// //           >
// //             {/* Left: Icon & Title */}
// //             <div className="md:col-span-4 flex items-center space-x-4">
// //               <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center shrink-0">
// //                 {item.icon}
// //               </div>
// //               <h5 className="NeueR font-serif text-xl md:text-2xl text-white">
// //                 {item.title}
// //               </h5>
// //             </div>

// //             {/* Right: Text Description */}
// //             <div className="md:col-span-8">
// //               <p className=" text-sm md:text-base text-white/90 leading-relaxed">
// //                 {item.description}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Bottom White Court Border Line (As shown on far right of design) */}
// //       <div className="absolute top-0 right-8 bottom-0 w-2 bg-white/40 pointer-events-none hidden lg:block" />
// //     </section>
// //   );
// // }

// import React from 'react';

// export default function WhatWeBelieve() {
//   const items = [
//     {
//       icon: (
//         <img src='/svg/BONE.svg' alt='IMG' className='w-4 h-4 sm:w-5 sm:h-5 object-contain' />
//       ),
//       title: 'The Game',
//       description: 'Padel Should Be Competitive But Respectful. We Prioritize Sportsmanship And The Joy Of A Hard-Fought Rally Over Simple Victory.',
//     },
//     {
//       icon: (
//         <img src='/svg/HUMAN.svg' alt='IMG' className='w-4 h-4 sm:w-5 sm:h-5 object-contain' />
//       ),
//       title: 'The People',
//       description: 'A Trip Is Only As Good As The Company. We Curate Our Fields To Ensure A Mix Of Interesting, Like-Minded Individuals.',
//     },
//     {
//       icon: (
//         <img src='/svg/log.svg' alt='IMG' className='w-4 h-4 sm:w-5 sm:h-5 object-contain' />
//       ),
//       title: 'The Place',
//       description: 'Environment Dictates Mood. We Choose Locations That Inspire, Relax, And Offer A Sense Of Quiet Luxury Away From The Crowds.',
//     },
//     {
//       icon: (
//         <img src='/svg/str.svg' alt='IMG' className='w-4 h-4 sm:w-5 sm:h-5 object-contain' />
//       ),
//       title: 'The Details',
//       description: "It's The Small Things That Elevate An Experience. From The Quality Of The Balls To The Post-Match Espresso, Nothing Is Overlooked.",
//     },
//   ];

//   return (
//     <section className="relative min-h-screen bg-[#FF6000] text-white flex flex-col justify-between overflow-hidden px-6 py-12 sm:px-10 md:px-16 md:py-20">
//       {/* Background Palm Shadow Overlay */}
//       <div className="absolute w-full h-full top-0 left-0">
//         <img src="/images/the-trail/BG_11.png" alt="IMG" className='w-full h-full object-cover object-center' />
//       </div>

//       {/* Header Section */}
//       <div className="relative z-10 text-center max-w-xl mx-auto mb-10 sm:mb-16 space-y-5 sm:space-y-6">
//         <h3 className="NeueR font-serif text-3xl sm:text-5xl md:text-6xl tracking-wide text-white">
//           What We Belive
//         </h3>
//         <button className="w-full sm:w-auto bg-white text-black text-xs sm:text-sm tracking-tighter uppercase px-6 py-3 transition-colors hover:bg-gray-100">
//           <p>Request An Invitation</p>
//         </button>
//       </div>

//       {/* Content List Section */}
//       <div className="relative z-10 max-w-4xl mx-auto w-full border-t border-white/20">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start md:items-center py-6 border-b border-white/20"
//           >
//             {/* Left: Icon & Title */}
//             <div className="md:col-span-4 flex items-center space-x-4">
//               <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 flex items-center justify-center shrink-0">
//                 {item.icon}
//               </div>
//               <h5 className="NeueR font-serif text-lg sm:text-xl md:text-2xl text-white">
//                 {item.title}
//               </h5>
//             </div>

//             {/* Right: Text Description */}
//             <div className="md:col-span-8 pl-[52px] md:pl-0">
//               <p className="text-sm md:text-base text-white/90 leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bottom White Court Border Line */}
//       <div className="absolute top-0 right-8 bottom-0 w-2 bg-white/40 pointer-events-none hidden lg:block" />
//     </section>
//   );
// }

'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function WhatWeBelieve() {
  const items = [
    {
      icon: (
        <img src='/svg/BONE.svg' alt='IMG' className='w-4 h-4 sm:w-5 sm:h-5 object-contain' />
      ),
      title: 'The Game',
      description: 'Padel Should Be Competitive But Respectful. We Prioritize Sportsmanship And The Joy Of A Hard-Fought Rally Over Simple Victory.',
    },
    {
      icon: (
        <img src='/svg/HUMAN.svg' alt='IMG' className='w-4 h-4 sm:w-5 sm:h-5 object-contain' />
      ),
      title: 'The People',
      description: 'A Trip Is Only As Good As The Company. We Curate Our Fields To Ensure A Mix Of Interesting, Like-Minded Individuals.',
    },
    {
      icon: (
        <img src='/svg/log.svg' alt='IMG' className='w-4 h-4 sm:w-5 sm:h-5 object-contain' />
      ),
      title: 'The Place',
      description: 'Environment Dictates Mood. We Choose Locations That Inspire, Relax, And Offer A Sense Of Quiet Luxury Away From The Crowds.',
    },
    {
      icon: (
        <img src='/svg/str.svg' alt='IMG' className='w-4 h-4 sm:w-5 sm:h-5 object-contain' />
      ),
      title: 'The Details',
      description: "It's The Small Things That Elevate An Experience. From The Quality Of The Balls To The Post-Match Espresso, Nothing Is Overlooked.",
    },
  ]

  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const headingRef = useRef(null)
  const ctaRef = useRef(null)
  const listRef = useRef(null)
  const rowRefs = useRef([])
  const iconRefs = useRef([])
  const borderRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      })

      // Initial states
      gsap.set(bgRef.current, { opacity: 0, scale: 1.1 })
      gsap.set(headingRef.current, { opacity: 0, y: 30 })
      gsap.set(ctaRef.current, { opacity: 0, y: 16 })
      gsap.set(listRef.current, { opacity: 0 })
      gsap.set(rowRefs.current, { opacity: 0, y: 24 })
      gsap.set(iconRefs.current, { opacity: 0, scale: 0.6 })
      gsap.set(borderRef.current, { scaleY: 0, transformOrigin: 'top' })

      tl
        .to(bgRef.current, { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' })
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=1.1')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to(listRef.current, { opacity: 1, duration: 0.3 }, '-=0.2')
        .to(iconRefs.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'back.out(2)',
          stagger: 0.12,
        }, '-=0.1')
        .to(rowRefs.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.12,
        }, '<')
        .to(borderRef.current, {
          scaleY: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        }, '-=0.5')
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#FF6000] text-white flex flex-col justify-between overflow-hidden px-6 py-12 sm:px-10 md:px-16 md:py-20"
    >
      {/* Background Palm Shadow Overlay */}
      <div ref={bgRef} className="absolute w-full h-full top-0 left-0">
        <img src="/images/the-trail/BG_11.png" alt="IMG" className='w-full h-full object-cover object-center' />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center max-w-xl mx-auto mb-10 sm:mb-16 space-y-5 sm:space-y-6">
        <h3 ref={headingRef} className="NeueR font-serif text-3xl sm:text-5xl md:text-6xl tracking-wide text-white">
          What We Belive
        </h3>
        <button
          ref={ctaRef}
          className="w-full sm:w-auto bg-white text-black text-xs sm:text-sm tracking-tighter uppercase px-6 py-3 transition-colors hover:bg-gray-100"
        >
          <span>Request An Invitation</span>
        </button>
      </div>

      {/* Content List Section */}
      <div ref={listRef} className="relative z-10 max-w-4xl mx-auto w-full border-t border-white/20">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (rowRefs.current[index] = el)}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start md:items-center py-6 border-b border-white/20"
          >
            {/* Left: Icon & Title */}
            <div className="md:col-span-4 flex items-center space-x-4">
              <div
                ref={(el) => (iconRefs.current[index] = el)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/40 flex items-center justify-center shrink-0"
              >
                {item.icon}
              </div>
              <h5 className="NeueR font-serif text-lg sm:text-xl md:text-2xl text-white">
                {item.title}
              </h5>
            </div>

            {/* Right: Text Description */}
            <div className="md:col-span-8 pl-[52px] md:pl-0">
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom White Court Border Line */}
      {/* <div
        ref={borderRef}
        className="absolute top-0 right-8 bottom-0 w-2 bg-white/40 pointer-events-none hidden lg:block"
      /> */}
    </section>
  )
}