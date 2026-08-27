// import React from 'react';
// import Image from 'next/image';

// export default function GameTrailSection() {
//   const cards = [
//     {
//       number: "01",
//       title: "COACHING",
//       description:
//         "Learn From Masters Of The Spanish Style. Tactical Insights And Technical Refinement Designed To Elevate Your Competitive Edge.",
//       image: "/images/the-trail/LG1.png", // Replace with your image path
//       alt: "Loewe Storefront",
//     },
//     {
//       number: "02",
//       title: "Local Players",
//       description:
//         "Engage With The Local Padel Community. Experience Firsthand The Passion And Unique Rhythm Of Spanish Club Play.",
//       image: "/images/the-trail/LG2.png", // Replace with your image path
//       alt: "Spanish Cityscape Overview",
//     },
//     {
//       number: "03",
//       title: "CULTURE",
//       description:
//         "Curated Architectural Tours, Private Gallery Viewings, And Deep Dives Into The Historical Fabric Of Our Host Cities.",
//       image: "/images/the-trail/LG3.png", // Replace with your image path
//       alt: "Prado Museum Architecture",
//     },
//     {
//       number: "04",
//       title: "DINING & WELLNESS",
//       description:
//         "Michelin-Starred Culinary Experiences And World-Class Recovery Facilities To Ensure Peak Performance And Utter Relaxation.",
//       image: "/images/the-trail/LG4.png", // Replace with your image path
//       alt: "Art Gallery Viewings",
//     },
//   ];

//   return (
//     <section className="bg-white text-[#2E2E2E] px-6 py-16 md:px-16 lg:px-24">
//       <div className=" mx-auto">
//         {/* Section Heading */}
//         <div className="mb-12 md:mb-16 max-w-xl">
//           <h2 className="NeueR font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.1]">
//             The Game Is Only <br />
//             Part Of The Trail
//           </h2>
//         </div>

//         {/* 2x2 Feature Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-y-16">
//           {cards.map((card) => (
//             <div key={card.number} className="flex flex-col">
//               {/* Image Container */}
//               <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
//                 <Image
//                   src={card.image}
//                   alt={card.alt}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   className="object-cover object-center"
//                 />
//               </div>

//               {/* Title & Number */}
//               <div className="flex items-baseline space-x-2 mb-3">
//                 <p className="NeueR font-serif text-lg md:text-xl text-gray-900">
//                   {card.number} //
//                 </p>
//                 <h5 className="NeueR font-serif text-lg md:text-xl text-gray-900 tracking-wide uppercase">
//                   {card.title}
//                 </h5>
//               </div>

//               {/* Description */}
//               <p className=" text-xs md:text-sm text-gray-700 leading-relaxed max-w-md">
//                 {card.description}
//               </p>
//             </div>
//           ))}
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

export default function GameTrailSection() {
  const cards = [
    {
      number: '01',
      title: 'COACHING',
      description:
        'Learn From Masters Of The Spanish Style. Tactical Insights And Technical Refinement Designed To Elevate Your Competitive Edge.',
      image: '/images/the-trail/LG1.png',
      alt: 'Loewe Storefront',
    },
    {
      number: '02',
      title: 'Local Players',
      description:
        'Engage With The Local Padel Community. Experience Firsthand The Passion And Unique Rhythm Of Spanish Club Play.',
      image: '/images/the-trail/LG2.png',
      alt: 'Spanish Cityscape Overview',
    },
    {
      number: '03',
      title: 'CULTURE',
      description:
        'Curated Architectural Tours, Private Gallery Viewings, And Deep Dives Into The Historical Fabric Of Our Host Cities.',
      image: '/images/the-trail/LG3.png',
      alt: 'Prado Museum Architecture',
    },
    {
      number: '04',
      title: 'DINING & WELLNESS',
      description:
        'Michelin-Starred Culinary Experiences And World-Class Recovery Facilities To Ensure Peak Performance And Utter Relaxation.',
      image: '/images/the-trail/LG4.png',
      alt: 'Art Gallery Viewings',
    },
  ]

  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardRefs = useRef([])
  const imageWrapRefs = useRef([])
  const imageRefs = useRef([])
  const textRefs = useRef([])

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
      gsap.set(headingRef.current, { opacity: 0, y: 30 })
      gsap.set(imageWrapRefs.current, { clipPath: 'inset(0 0 100% 0)' })
      gsap.set(imageRefs.current, { scale: 1.15 })
      gsap.set(textRefs.current, { opacity: 0, y: 20 })

      tl.to(headingRef.current, { opacity: 1, y: 0, duration: 0.8 })

      // Each card gets its own image reveal + text fade, staggered across cards
      cards.forEach((_, index) => {
        const position = index === 0 ? '-=0.4' : '-=0.7'

        tl
          .to(imageWrapRefs.current[index], {
            clipPath: 'inset(0 0 0% 0)',
            duration: 1,
            ease: 'power4.inOut',
          }, position)
          .to(imageRefs.current[index], {
            scale: 1,
            duration: 1.3,
            ease: 'power3.out',
          }, '<')
          .to(textRefs.current[index], {
            opacity: 1,
            y: 0,
            duration: 0.6,
          }, '-=0.6')
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="bg-white text-[#2E2E2E] px-6 py-16 md:px-16 lg:px-24"
    >
      <div className="mx-auto">
        {/* Section Heading */}
        <div ref={headingRef} className="mb-12 md:mb-16 max-w-xl">
          <h2 className="NeueR font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.1]">
            The Game Is Only <br />
            Part Of The Trail
          </h2>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-y-16">
          {cards.map((card, index) => (
            <div
              key={card.number}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex flex-col"
            >
              {/* Image Container */}
              <div
                ref={(el) => (imageWrapRefs.current[index] = el)}
                className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100"
              >
                <div ref={(el) => (imageRefs.current[index] = el)} className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Title, Number & Description */}
              <div ref={(el) => (textRefs.current[index] = el)}>
                <div className="flex items-baseline space-x-2 mb-3">
                  <p className="NeueR font-serif text-lg md:text-xl text-gray-900">
                    {card.number} //
                  </p>
                  <h5 className="NeueR font-serif text-lg md:text-xl text-gray-900 tracking-wide uppercase">
                    {card.title}
                  </h5>
                </div>

                <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-md">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}