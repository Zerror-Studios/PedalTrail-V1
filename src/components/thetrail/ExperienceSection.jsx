// // import React from "react";
// // import Image from "next/image";

// // export default function ExperienceSection() {
// //   return (
// //     <section className="min-h-screen bg-white text-[#2E2E2E] flex items-center justify-center p-6 md:p-12 lg:p-16">
// //       <div className=" w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        
// //         {/* Left Column: Content */}
// //         <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          
// //           {/* Top Logo / Icon */}
// //           <div>
// //             <span className="font-serif text-3xl font-normal block mb-4">P</span>
// //             <div className="w-[1px] h-12 bg-gray-300"></div>
// //           </div>

// //           {/* Main Headline */}
// //           <div>
// //             <h2 className="NeueM text-3xl sm:text-4xl md:text-5xl leading-tight font-normal text-gray-900">
// //               We Wanted To Create The Kind Of Week People Remember.
// //             </h2>
// //           </div>

// //           {/* Descriptive Body Paragraphs */}
// //           <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
// //             {/* Paragraph 1 with Orange Left Accent Border */}
// //             <div className="pl-6 border-l-2 border-[#FF5500]">
// //               <p>
// //                 Most Sports Trips Are Either Exhausting Schedules Or Chaotic Package
// //                 Holidays. We Wanted Something Else Entirely. A Considered Environment
// //                 Where The Quality Of The Padel Is Matched By The Quality Of The
// //                 Surrounding Experience.
// //               </p>
// //             </div>

// //             {/* Paragraph 2 */}
// //             <p>
// //               The Padel Trail Is An Antidote To The Noise. It's For Those Who
// //               Appreciate Design, Excellent Food, Meaningful Connection, And The Pursuit
// //               Of Better Padel—In Equal Measure.
// //             </p>
// //           </div>

// //           {/* CTA Button */}
// //           <div>
// //             <button className="bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs tracking-wider uppercase font-semibold px-8 py-3.5 transition-colors duration-200">
// //               About Us
// //             </button>
// //           </div>

// //           {/* Circular Stamp / Crest */}
// //           <div className="pt-4">
// //             <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center relative">
// //               <span className="font-serif text-xl">P</span>
// //               {/* SVG Circular Text Ring */}
// //               <svg
// //                 className="absolute inset-0 w-full h-full animate-spin-slow"
// //                 viewBox="0 0 100 100"
// //               >
// //                 <path
// //                   id="circlePath"
// //                   d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
// //                   fill="none"
// //                 />
// //                 <text className="text-[9px] uppercase tracking-widest fill-gray-600">
// //                   <textPath href="#circlePath">
// //                     PADEL TRAIL • PADEL TRAIL •
// //                   </textPath>
// //                 </text>
// //               </svg>
// //             </div>
// //           </div>

// //         </div>

// //         {/* Right Column: Hero Image */}
// //         <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-full w-full pl-[5vw]">
// //           <div className="relative w-full h-full min-h-[500px] overflow-hidden">
// //             <Image
// //               src="/images/the-trail/IMGALOT.png" // Replace with your image path
// //               alt="Velazquez Monument and Prado Museum Architecture"
// //               fill
// //               priority
// //               className="object-cover object-center"
// //             />
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// import React from "react";
// import Image from "next/image";

// export default function ExperienceSection() {
//   return (
//     <section className="min-h-screen bg-white text-[#2E2E2E] flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16">
//       <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

//         {/* Left Column: Content */}
//         <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">

//           {/* Top Logo / Icon */}
//           <div>
//             <span className="font-serif text-2xl sm:text-3xl font-normal block mb-4">P</span>
//             <div className="w-[1px] h-10 sm:h-12 bg-gray-300"></div>
//           </div>

//           {/* Main Headline */}
//           <div>
//             <h2 className="NeueM text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-normal text-gray-900">
//               We Wanted To Create The Kind Of Week People Remember.
//             </h2>
//           </div>

//           {/* Descriptive Body Paragraphs */}
//           <div className="space-y-5 sm:space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
//             {/* Paragraph 1 with Orange Left Accent Border */}
//             <div className="pl-4 sm:pl-6 border-l-2 border-[#FF5500]">
//               <p>
//                 Most Sports Trips Are Either Exhausting Schedules Or Chaotic Package
//                 Holidays. We Wanted Something Else Entirely. A Considered Environment
//                 Where The Quality Of The Padel Is Matched By The Quality Of The
//                 Surrounding Experience.
//               </p>
//             </div>

//             {/* Paragraph 2 */}
//             <p>
//               The Padel Trail Is An Antidote To The Noise. It's For Those Who
//               Appreciate Design, Excellent Food, Meaningful Connection, And The Pursuit
//               Of Better Padel—In Equal Measure.
//             </p>
//           </div>

//           {/* CTA Button */}
//           <div>
//             <button className="w-full sm:w-auto bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs tracking-wider uppercase font-semibold px-8 py-3.5 transition-colors duration-200">
//               About Us
//             </button>
//           </div>

//           {/* Circular Stamp / Crest */}
//           <div className="pt-2 sm:pt-4 hidden sm:block">
//             <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-300 flex items-center justify-center relative">
//               <span className="font-serif text-lg sm:text-xl">P</span>
//               {/* SVG Circular Text Ring */}
//               <svg
//                 className="absolute inset-0 w-full h-full animate-spin-slow"
//                 viewBox="0 0 100 100"
//               >
//                 <path
//                   id="circlePath"
//                   d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                   fill="none"
//                 />
//                 <text className="text-[9px] uppercase tracking-widest fill-gray-600">
//                   <textPath href="#circlePath">
//                     PADEL TRAIL • PADEL TRAIL •
//                   </textPath>
//                 </text>
//               </svg>
//             </div>
//           </div>

//         </div>

//         {/* Right Column: Hero Image */}
//         <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full w-full lg:pl-[5vw]">
//           <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden">
//             <Image
//               src="/images/the-trail/IMGALOT.png"
//               alt="Velazquez Monument and Prado Museum Architecture"
//               fill
//               priority
//               className="object-cover object-center"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ExperienceSection() {
  const sectionRef = useRef(null)
  const logoRef = useRef(null)
  const dividerRef = useRef(null)
  const headlineRef = useRef(null)
  const para1Ref = useRef(null)
  const para2Ref = useRef(null)
  const ctaRef = useRef(null)
  const crestRef = useRef(null)
  const imageWrapRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
            toggleActions: 'play reverse play reverse',
        },
      })

      // Initial states — left column
      gsap.set(logoRef.current, { opacity: 0, y: 16 })
      gsap.set(dividerRef.current, { scaleY: 0, transformOrigin: 'top' })
      gsap.set(headlineRef.current, { opacity: 0, y: 30 })
      gsap.set(para1Ref.current, { opacity: 0, y: 20 })
      gsap.set(para2Ref.current, { opacity: 0, y: 20 })
      gsap.set(ctaRef.current, { opacity: 0, y: 16 })
      gsap.set(crestRef.current, { opacity: 0, scale: 0.85 })

      // Initial states — image
      gsap.set(imageWrapRef.current, { clipPath: 'inset(0 0 100% 0)' })
      gsap.set(imageRef.current, { scale: 1.15 })

      tl
        .to(logoRef.current, { opacity: 1, y: 0, duration: 0.6 })
        .to(dividerRef.current, { scaleY: 1, duration: 0.5, ease: 'power2.inOut' }, '-=0.3')
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.2')
        .to(para1Ref.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to(para2Ref.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .to(crestRef.current, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3')
        // Image animates in parallel with the left column, starting near the top
        .to(imageWrapRef.current, {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.3,
          ease: 'power4.inOut',
        }, 0.1)
        .to(imageRef.current, {
          scale: 1,
          duration: 1.6,
          ease: 'power3.out',
        }, 0.1)
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white text-[#2E2E2E] flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

        {/* Left Column: Content */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">

          {/* Top Logo / Icon */}
          <div>
            <span ref={logoRef} className="font-serif text-2xl sm:text-3xl font-normal block mb-4">
              P
            </span>
            <div ref={dividerRef} className="w-[1px] h-10 sm:h-12 bg-gray-300"></div>
          </div>

          {/* Main Headline */}
          <div>
            <h2
              ref={headlineRef}
              className="NeueM text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-normal text-gray-900"
            >
              We Wanted To Create The Kind Of Week People Remember.
            </h2>
          </div>

          {/* Descriptive Body Paragraphs */}
          <div className="space-y-5 sm:space-y-6 text-sm md:text-base leading-relaxed text-gray-700">
            {/* Paragraph 1 with Orange Left Accent Border */}
            <div ref={para1Ref} className="pl-4 sm:pl-6 border-l-2 border-[#FF5500]">
              <p>
                Most Sports Trips Are Either Exhausting Schedules Or Chaotic Package
                Holidays. We Wanted Something Else Entirely. A Considered Environment
                Where The Quality Of The Padel Is Matched By The Quality Of The
                Surrounding Experience.
              </p>
            </div>

            {/* Paragraph 2 */}
            <p ref={para2Ref}>
              The Padel Trail Is An Antidote To The Noise. It's For Those Who
              Appreciate Design, Excellent Food, Meaningful Connection, And The Pursuit
              Of Better Padel—In Equal Measure.
            </p>
          </div>

          {/* CTA Button */}
          <div ref={ctaRef}>
            <button className="w-full sm:w-auto bg-[#FF5500] hover:bg-[#e04b00] text-white text-xs tracking-wider uppercase font-semibold px-8 py-3.5 transition-colors duration-200">
              About Us
            </button>
          </div>

          {/* Circular Stamp / Crest */}
          <div className="pt-2 sm:pt-4 hidden sm:block">
            <div
              ref={crestRef}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gray-300 flex items-center justify-center relative"
            >
              <span className="font-serif text-lg sm:text-xl">P</span>
              {/* SVG Circular Text Ring */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow"
                viewBox="0 0 100 100"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9px] uppercase tracking-widest fill-gray-600">
                  <textPath href="#circlePath">
                    PADEL TRAIL • PADEL TRAIL •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full w-full lg:pl-[5vw]">
          <div
            ref={imageWrapRef}
            className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden"
          >
            <div ref={imageRef} className="relative w-full h-full">
              <Image
                src="/images/the-trail/IMGALOT.png"
                alt="Velazquez Monument and Prado Museum Architecture"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}