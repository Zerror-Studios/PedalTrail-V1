// import React from 'react'

// const TTHero = () => {
//   return (
//     <div className='w-full h-svh grid grid-cols-1 grid-rows-2'>
//       <div className='w-full h-full flex flex-col justify-end items-center gap-2 pb-[6vh] sm:pb-[8vh] md:pb-[10vh] px-4 text-center'>
//         <span className='text-[10px] sm:text-xs md:text-sm tracking-widest'>
//           SEASON 01 · SPAIN · AUTUMN 2026
//         </span>
//         <h1 className='NeueM text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none'>
//           THE TRAIL
//         </h1>
//       </div>
//       <div className='w-full h-full overflow-hidden'>
//         <img
//           src="/images/the-trail/TTHome.png"
//           alt="IMG"
//           className='w-full h-full object-cover object-center'
//         />
//       </div>
//     </div>
//   )
// }

// export default TTHero

'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const TTHero = () => {
  const container = useRef(null)
  const labelRef = useRef(null)
  const titleRef = useRef(null)
  const imageWrapRef = useRef(null)
  const imageRef = useRef(null)
  const curtainRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      // Initial states
      gsap.set(labelRef.current, { opacity: 0, y: 16 })
      gsap.set(titleRef.current, { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' })
      gsap.set(imageRef.current, { scale: 1.15 })
      gsap.set(curtainRef.current, { scaleY: 1, transformOrigin: 'top' })

      tl
        // Curtain sits on top of image, then wipes down to reveal it
        .to(curtainRef.current, {
          scaleY: 0,
          duration: 1.1,
          ease: 'power4.inOut',
          transformOrigin: 'bottom',
        }, 0.15)
        // Image drifts back to natural scale as it's revealed
        .to(imageRef.current, {
          scale: 1,
          duration: 1.6,
          ease: 'power3.out',
        }, 0.15)
        // Title clip-reveals upward
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0)',
          duration: 1,
        }, 0.5)
        // Label fades up last
        .to(labelRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }, 0.75)
    },
    { scope: container }
  )

  return (
    <div ref={container} className='w-full h-svh grid grid-cols-1 grid-rows-2'>
      <div className='w-full h-full flex flex-col justify-end items-center gap-2 pb-[6vh] sm:pb-[8vh] md:pb-[10vh] px-4 text-center'>
        <span ref={labelRef} className='text-[10px] sm:text-xs md:text-sm tracking-widest'>
          SEASON 01 · SPAIN · AUTUMN 2026
        </span>
        <h1 ref={titleRef} className='NeueM text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none'>
          THE TRAIL
        </h1>
      </div>

      <div ref={imageWrapRef} className='relative w-full h-full overflow-hidden'>
        <img
          ref={imageRef}
          src="/images/the-trail/TTHome.png"
          alt="IMG"
          className='w-full h-full object-cover object-center'
        />
        {/* Curtain overlay for the wipe reveal */}
        <div
          ref={curtainRef}
          className='absolute inset-0 bg-[#0987D8] pointer-events-none'
        />
      </div>
    </div>
  )
}

export default TTHero