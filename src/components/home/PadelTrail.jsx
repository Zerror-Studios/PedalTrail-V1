// 'use client';

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import FeaturesGridSection from "./FeaturesGridSection";

// // Register ScrollTrigger so GSAP knows how to use it
// gsap.registerPlugin(ScrollTrigger);

// const PadelTrail = () => {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const firstContRef = useRef(null);

//   useEffect(() => {
//     // Using gsap.context for clean cleanup and scoping in React
//     let ctx = gsap.context(() => {
//       // 1. Background Image Parallax Effect
//       gsap.to(imageRef.current, {
//         yPercent: 30, // Moves the image down by 30% of its height as you scroll
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top bottom", // Animation starts when top of container hits bottom of viewport
//           end: "bottom top",   // Animation ends when bottom of container hits top of viewport
//           scrub: true,         // Links animation directly to scrollbar
//         },
//       });

//       // 2. Opacity Fade-In Animation for First-Cont
//       gsap.fromTo(
//         firstContRef.current,
//         {
//           opacity: 0,
//           y: 40, // Optional subtle move-up effect for extra smoothness
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: firstContRef.current,
//             start: "top 85%", // Starts fading when the top of the container reaches 85% of viewport height
//             end: "top 40%",   // Reaches full opacity as it scrolls higher
//             toggleActions: "play none none reverse", // Reverses fade if scrolled back up
//           },
//         }
//       );
//     }, containerRef);

//     // Completely cleans up the animations when component unmounts
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="w-full h-[200vh] relative overflow-hidden flex flex-col">
//       {/* 
//         Note: `scale-[1.3]` prevents empty white space from appearing at edges during parallax scroll.
//       */}
//       <img
//         ref={imageRef}
//         src="/images/home/PL.png"
//         alt="IMG"
//         className="w-full h-full object-cover object-center absolute top-0 left-0 -z-1 scale-[1.3]"
//       />

//       {/* First-Cont */}
//       <div 
//         ref={firstContRef}
//         className="w-[95%] h-[95vh] mt-[20vh] z-10 mx-auto relative py-[13vh] px-[5vw] will-change-transform"
//       >
//         {/* BlackDrop */}
//         <div className="w-full h-full absolute top-0 left-0 bg-black/70 backdrop-blur-md z-[-1]" />

//         {/* Top */}
//         <div className="w-full h-[60%] flex">
//           {/* Left */}
//           <div className="h-full w-[50%] flex flex-col gap-10">
//             {/* 1 */}
//             <div className="w-fit h-fit flex flex-col gap-5">
//               <span className="text-[0.7rem] leading-[0.7rem] uppercase text-white">
//                 COMPOSITION
//               </span>
//               <h5 className="NeueM text-white">16 men / 16 women / 16 pairs</h5>
//             </div>

//             {/* 2 */}
//             <div className="w-fit h-fit flex flex-col gap-5">
//               <span className="text-[0.7rem] leading-[0.7rem] uppercase text-white">
//                 STANDARD
//               </span>
//               <h5 className="NeueM text-white">LEVEL 3.25 - 4</h5>
//             </div>

//             {/* 3 */}
//             <div className="w-fit h-fit flex flex-col gap-5">
//               <span className="text-[0.7rem] leading-[0.7rem] uppercase text-white">
//                 SELECTION
//               </span>
//               <h5 className="NeueM text-white">APPLICATION & REVIEW</h5>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="h-full w-[50%] flex flex-col justify-start items-end">
//             <div>
//               <h1 className="NeueM text-white">32</h1>
//               <h4 className="NeueM text-white">PLAYERS</h4>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="w-full h-[40%] flex justify-start items-end text-white/80">
//           <h4 className="NeueM">
//             A private, invitation-only experience <br /> combining padel, competition,
//             travel and <br /> exceptional experiences across Spain.
//           </h4>
//         </div>
//       </div>

//       {/* Middle */}
//       <div className="px-10 mt-10">
//         <h3 className="NeueM uppercase text-white">
//           the format makes the <br /> trail
//         </h3>
//       </div>

//       <FeaturesGridSection />
//     </div>
//   );
// };

// export default PadelTrail;

'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturesGridSection from "./FeaturesGridSection";

// Register ScrollTrigger so GSAP knows how to use it
gsap.registerPlugin(ScrollTrigger);

const PadelTrail = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const firstContRef = useRef(null);

  useEffect(() => {
    // Using gsap.context for clean cleanup and scoping in React
    let ctx = gsap.context(() => {
      // 1. Background Image Parallax Effect
      gsap.to(imageRef.current, {
        yPercent: 30, // Moves the image down by 30% of its height as you scroll
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // Animation starts when top of container hits bottom of viewport
          end: "bottom top",   // Animation ends when bottom of container hits top of viewport
          scrub: true,         // Links animation directly to scrollbar
        },
      });

      // 2. Opacity Fade-In Animation for First-Cont
      gsap.fromTo(
        firstContRef.current,
        {
          opacity: 0,
          y: 40, // Optional subtle move-up effect for extra smoothness
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: firstContRef.current,
            start: "top 85%", // Starts fading when the top of the container reaches 85% of viewport height
            end: "top 40%",   // Reaches full opacity as it scrolls higher
            toggleActions: "play none none reverse", // Reverses fade if scrolled back up
          },
        }
      );
    }, containerRef);

    // Completely cleans up the animations when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[200vh] relative overflow-hidden flex flex-col">
      {/* 
        Note: `scale-[1.3]` prevents empty white space from appearing at edges during parallax scroll.
        `inset-0` (instead of a fixed h-full) keeps the image covering the whole
        section even as the content above grows taller on small screens.
      */}
      <img
        ref={imageRef}
        src="/images/home/PL.png"
        alt="IMG"
        className="w-full h-full object-cover object-center absolute inset-0 -z-1 scale-[1.3]"
      />

      {/* First-Cont */}
      <div 
        ref={firstContRef}
        className="w-[90%] sm:w-[95%] h-fit lg:h-[95vh] mt-[12vh] sm:mt-[16vh] lg:mt-[20vh] z-10 mx-auto relative py-10 sm:py-12 lg:py-[13vh] px-6 sm:px-8 lg:px-[5vw] will-change-transform"
      >
        {/* BlackDrop */}
        <div className="w-full h-full absolute top-0 left-0 bg-black/70 backdrop-blur-md z-[-1]" />

        {/* Top */}
        <div className="w-full flex flex-col lg:flex-row lg:h-[60%] gap-10 lg:gap-0">
          {/* Left */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {/* 1 */}
            <div className="w-fit h-fit flex flex-col gap-3 sm:gap-5">
              <span className="text-[0.7rem] leading-[0.7rem] uppercase text-white">
                COMPOSITION
              </span>
              <h5 className="NeueM text-white">16 men / 16 women / 16 pairs</h5>
            </div>

            {/* 2 */}
            <div className="w-fit h-fit flex flex-col gap-3 sm:gap-5">
              <span className="text-[0.7rem] leading-[0.7rem] uppercase text-white">
                STANDARD
              </span>
              <h5 className="NeueM text-white">LEVEL 3.25 - 4</h5>
            </div>

            {/* 3 */}
            <div className="w-fit h-fit flex flex-col gap-3 sm:gap-5">
              <span className="text-[0.7rem] leading-[0.7rem] uppercase text-white">
                SELECTION
              </span>
              <h5 className="NeueM text-white">APPLICATION & REVIEW</h5>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[50%] flex flex-col items-start lg:justify-start lg:items-end">
            <div>
              <h1 className="NeueM text-white">32</h1>
              <h4 className="NeueM text-white">PLAYERS</h4>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full lg:h-[40%] flex justify-start items-end text-white/80 mt-10 lg:mt-0">
          <h4 className="NeueM">
            A private, invitation-only experience <br className="hidden lg:block" /> combining padel, competition,
            travel and <br className="hidden lg:block" /> exceptional experiences across Spain.
          </h4>
        </div>
      </div>

      {/* Middle */}
      <div className="px-6 sm:px-10 mt-10">
        <h3 className="NeueM uppercase text-white">
          the format makes the <br className="hidden sm:block" /> trail
        </h3>
      </div>

      <FeaturesGridSection />
    </div>
  );
};

export default PadelTrail;