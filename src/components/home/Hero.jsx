// // "use client";
// // import gsap from 'gsap'
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import { useEffect } from 'react';
// // gsap.registerPlugin(ScrollTrigger)

// // export default function Hero() {

// //   useEffect(()=>{

// //     const homeHeroTL1 = gsap.timeline();

// //   },[])

// //   return (
// //     <div className="w-full min-h-svh flex relative p-5 sm:p-10 overflow-hidden">
// //       {/* BG-Img */}
// //       <div className="w-full h-full absolute top-0 left-0 z-1">
// //         <img
// //           src="/images/home/HeroBG.png"
// //           alt="IMG"
// //           className="w-full h-full object-cover object-top"
// //         />
// //       </div>

// //       {/* Center-Info */}
// //       <div className="w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center flex-col text-center px-6">
// //         <span className="Inter text-white text-[0.7rem] sm:text-[0.85rem] md:text-[1rem]">
// //           SEASON 01 · SPAIN · AUTUMN 2026
// //         </span>
// //         <h1 className="text-white NeueR">THE PADEL TRAIL</h1>
// //       </div>

// //       {/* Bottom-Info-Bar: one flex wrapper instead of two independently
// //           absolutely-positioned corner elements, so they stack cleanly on
// //           mobile instead of overlapping */}
// //       <div className="w-full absolute bottom-0 left-0 z-20 p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
// //         {/* Additional-Info-Left */}
// //         <div className="w-full sm:w-[55%] md:w-[38%] lg:w-1/5 aspect-auto sm:aspect-5/3 bg-black/50 p-3 sm:p-2 flex flex-col justify-between gap-4 sm:gap-0">
// //           {/* Top_Info */}
// //           <div className="w-full h-fit flex justify-between items-center">
// //             <span className="text-[0.7rem] leading-[0.7rem] text-white tracking-tighter Inter">
// //               SEASON 01{" "}
// //             </span>

// //             <div className="w-fit h-fit bg-white Inter px-6 sm:px-10 md:px-15 py-2 sm:py-2.5">
// //               <span className="text-black text-[0.7rem] uppercase leading-[0.7rem]">
// //                 Apply
// //               </span>
// //             </div>
// //           </div>

// //           {/* Info */}
// //           <div className="w-full h-fit flex flex-col gap-6 sm:gap-10">
// //             <div className="capitalize text-white Inter text-[0.8rem] leading-[0.9rem] font-thin!">
// //               A private padel, wellness and travel{" "}
// //               <br className="hidden sm:block" /> experience across Spain.
// //             </div>

// //             <div className="capitalize text-white Inter text-[1rem] leading-[1rem] font-thin!">
// //               Autumn 2026
// //             </div>
// //           </div>
// //         </div>

// //         {/* Additional-Info-Right */}
// //         <div className="uppercase text-white Inter text-[0.75rem] sm:text-[0.8rem] leading-[0.9rem] font-thin! sm:text-right">
// //           32 players. 9 days. One{" "}
// //           <br className="hidden sm:block" /> invitation to remember.
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const bgWrapperRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power3.out" },
//       });

//       // Initial state setup to prevent flash of content
//       gsap.set([".center-text-item", ".bottom-bar-item"], {
//         opacity: 0,
//         y: 40,
//       });

//       gsap.set(bgWrapperRef.current, {
//         width: "220px",
//         height: "220px",
//         rotation: 25,
//         xPercent: -50,
//         yPercent: -50,
//         y: "120vh",
//         opacity: 1,
//         // borderRadius: "20px",
//       });

//       // Animation sequence
//       tl.to(bgWrapperRef.current, {
//         y: "0vh",
//         duration: 1.2,
//         ease: "power3.out",
//       })
//         .to(bgWrapperRef.current, {
//           rotation: 0,
//           width: "100%",
//           height: "100%",
//           borderRadius: "0px",
//           duration: 1.2,
//           ease: "expo.inOut",
//         })
//         .to(
//           ".center-text-item",
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             stagger: 0.15,
//           },
//           "-=0.3"
//         )
//         .to(
//           ".bottom-bar-item",
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             stagger: 0.15,
//           },
//           "-=0.5"
//         );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="w-full min-h-svh flex relative p-5 sm:p-10 overflow-hidden bg-black">
//       {/* BG-Img Container */}
//       <div
//         ref={bgWrapperRef}
//         className="absolute top-1/2 left-1/2 z-1 overflow-hidden"
//       >
//         <img
//           src="/images/home/HeroBG.png"
//           alt="Hero Background"
//           className="w-full h-full object-cover object-top"
//         />
//       </div>

//       {/* Center-Info */}
//       <div className="w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center flex-col text-center px-6 pointer-events-none">
//         <span className="center-text-item Inter text-white text-[0.7rem] sm:text-[0.85rem] md:text-[1rem]">
//           SEASON 01 · SPAIN · AUTUMN 2026
//         </span>
//         <h1 className="center-text-item text-white NeueR">THE PADEL TRAIL</h1>
//       </div>

//       {/* Bottom-Info-Bar */}
//       <div className="w-full absolute bottom-0 left-0 z-20 p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
//         {/* Additional-Info-Left */}
//         <div className="bottom-bar-item w-full sm:w-[55%] md:w-[38%] lg:w-1/5 aspect-auto sm:aspect-5/3 bg-black/50 p-3 sm:p-2 flex flex-col justify-between gap-4 sm:gap-0">
//           {/* Top_Info */}
//           <div className="w-full h-fit flex justify-between items-center">
//             <span className="text-[0.7rem] leading-[0.7rem] text-white tracking-tighter Inter">
//               SEASON 01{" "}
//             </span>

//             <div className="w-fit h-fit bg-white Inter px-6 sm:px-10 md:px-15 py-2 sm:py-2.5 cursor-pointer">
//               <span className="text-black text-[0.7rem] uppercase leading-[0.7rem]">
//                 Apply
//               </span>
//             </div>
//           </div>

//           {/* Info */}
//           <div className="w-full h-fit flex flex-col gap-6 sm:gap-10">
//             <div className="capitalize text-white Inter text-[0.8rem] leading-[0.9rem] font-thin!">
//               A private padel, wellness and travel{" "}
//               <br className="hidden sm:block" /> experience across Spain.
//             </div>

//             <div className="capitalize text-white Inter text-[1rem] leading-[1rem] font-thin!">
//               Autumn 2026
//             </div>
//           </div>
//         </div>

//         {/* Additional-Info-Right */}
//         <div className="bottom-bar-item uppercase text-white Inter text-[0.75rem] sm:text-[0.8rem] leading-[0.9rem] font-thin! sm:text-right">
//           32 players. 9 days. One{" "}
//           <br className="hidden sm:block" /> invitation to remember.
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const bgWrapperRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Initial state setup
      gsap.set([".center-text-item", ".bottom-bar-item"], {
        opacity: 0,
        y: 40,
      });

      gsap.set(bgWrapperRef.current, {
        width: "220px",
        height: "220px",
        // rotation: 25,
        xPercent: -50,
        yPercent: -50,
        y: "120vh",
        opacity: 1,
      });

      // Scale up inner image slightly to give parallax movement headroom without clipping
      gsap.set(imgRef.current, {
        scale: 1.25,
      });

      // Preloader Intro Animation Sequence
      tl.to(bgWrapperRef.current, {
        y: "0vh",
        duration: 1.2,
        ease: "power3.out",
      })

        .to(
          ".GGIMG",
          {
            opacity: 1,
            duration: 1.2,
            ease: "expo.inOut",
          },
          "aa1",
        )
        .to(
          ".LLLOGO",
          {
            rotation: -25,
            opacity: 0,
            duration: 1.2,
            ease: "expo.inOut",
          },
          "aa1",
        )

        .to(bgWrapperRef.current, {
          rotation: 0,
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          duration: 1.2,
          ease: "expo.inOut",
        })

        .to(
          ".center-text-item",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.3",
        )
        .to(
          ".bottom-bar-item",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.5",
        );

      // Parallax effect on scroll
      gsap.to(imgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-svh flex relative p-5 sm:p-10 overflow-hidden bg-black"
    >
      {/* BG-Img Container */}
      <div
        ref={bgWrapperRef}
        className="absolute top-1/2 left-1/2 z-1 overflow-hidden"
      >
        <img
          ref={imgRef}
          src="/images/home/HeroBG.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-0 GGIMG object-top origin-center"
        />

        <div className="w-full h-full absolute LLLOGO top-0 left-0  z-99 flex justify-center items-center">
          <img
            src="/svg/logo.svg"
            alt="IMg"
            className=" w-[50px] h-[50px] object-cover object-center"
          />
        </div>
      </div>

      {/* Center-Info */}
      <div className="w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center flex-col text-center px-6 pointer-events-none">
        <span className="center-text-item Inter text-white text-[0.7rem] sm:text-[0.85rem] md:text-[1rem]">
          SEASON 01 · SPAIN · AUTUMN 2026
        </span>
        <h1 className="center-text-item text-white NeueR">THE PADEL TRAIL</h1>
      </div>

      {/* Bottom-Info-Bar */}
      <div className="w-full absolute bottom-0 left-0 z-20 p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
        {/* Additional-Info-Left */}
        <div className="bottom-bar-item w-full sm:w-[55%] md:w-[38%] lg:w-1/5 aspect-auto sm:aspect-5/3 bg-black/50 p-3 sm:p-2 flex flex-col justify-between gap-4 sm:gap-0">
          {/* Top_Info */}
          <div className="w-full h-fit flex justify-between items-center">
            <span className="text-[0.7rem] leading-[0.7rem] text-white tracking-tighter Inter">
              SEASON 01{" "}
            </span>

            <div className="w-fit h-fit bg-white Inter px-6 sm:px-10 md:px-15 py-2 sm:py-2.5 cursor-pointer">
              <span className="text-black text-[0.7rem] uppercase leading-[0.7rem]">
                Apply
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="w-full h-fit flex flex-col gap-6 sm:gap-10">
            <div className="capitalize text-white Inter text-[0.8rem] leading-[0.9rem] font-thin!">
              A private padel, wellness and travel{" "}
              <br className="hidden sm:block" /> experience across Spain.
            </div>

            <div className="capitalize text-white Inter text-[1rem] leading-[1rem] font-thin!">
              Autumn 2026
            </div>
          </div>
        </div>

        {/* Additional-Info-Right */}
        <div className="bottom-bar-item uppercase text-white Inter text-[0.75rem] sm:text-[0.8rem] leading-[0.9rem] font-thin! sm:text-right">
          32 players. 9 days. One <br className="hidden sm:block" /> invitation
          to remember.
        </div>
      </div>
    </div>
  );
}
