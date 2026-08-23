// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Data = [
//   {
//     url: `/images/home/C1.png`,
//     text1: 'Ibiza',
//     text2: 'late nights, by the sea',
//   },
//   {
//     url: `/images/home/C2.png`,
//     text1: 'Mallorca',
//     text2: 'sunset, by sail',
//   },
//   {
//     url: `/images/home/C3.png`,
//     text1: 'costa brava',
//     text2: 'lunch, by the coast',
//   },
//   {
//     url: `/images/home/C4.png`,
//     text1: 'barcelona',
//     text2: 'after hours, in the city',
//   },
// ];

// const BeyondTheCourt = () => {
//   const containerRef = useRef(null);
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     const elements = itemsRef.current.filter(Boolean);

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         elements,
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           stagger: 0.2, // Staggers each grid item sequentially
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full min-h-screen grid grid-rows-2 grid-cols-3 p-10 gap-10 space-y-[2vh] pt-[10vh]"
//     >
//       {/* Title Box */}
//       <div ref={(el) => (itemsRef.current[0] = el)}>
//         <h3 className="uppercase NeueM">
//           Beyond <br /> the <br /> court
//         </h3>
//       </div>

//       {/* Data Grid Items */}
//       {Data.map((item, i) => {
//         // Offset index by 1 since title takes index 0 in our ref array
//         const refIndex = i + 1;
//         return (
//           <div
//             key={i}
//             ref={(el) => (itemsRef.current[refIndex] = el)}
//             className="w-full h-full flex flex-col group cursor-pointer"
//           >
//             {/* Image Container with Hover Scale */}
//             <div className="w-full aspect-4/5 overflow-hidden rounded-md bg-neutral-900">
//               <img
//                 src={item.url}
//                 alt="img"
//                 className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
//               />
//             </div>
//             {/* Text description */}
//             <div className="w-full h-[100px] mt-6">
//               <span className="uppercase Inter font-bold tracking-wide">
//                 {item.text1}
//               </span>
//               <p className="capitalize Inter text-black mt-1">
//                 {item.text2}
//               </p>
//             </div>
//           </div>
//         );
//       })}

//       {/* Description Paragraph Box */}
//       <div
//         ref={(el) => (itemsRef.current[5] = el)}
//         className="w-full h-full flex justify-center items-center"
//       >
//         <p className="Inter capitalize w-[70%] text-black">
//           From ancient streets to modern courts, Spain has always known how to
//           bring people together.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BeyondTheCourt;


"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Data = [
  {
    url: `/images/home/C1.png`,
    text1: 'Ibiza',
    text2: 'late nights, by the sea',
  },
  {
    url: `/images/home/C2.png`,
    text1: 'Mallorca',
    text2: 'sunset, by sail',
  },
  {
    url: `/images/home/C3.png`,
    text1: 'costa brava',
    text2: 'lunch, by the coast',
  },
  {
    url: `/images/home/C4.png`,
    text1: 'barcelona',
    text2: 'after hours, in the city',
  },
];

const BeyondTheCourt = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const elements = itemsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2, // Staggers each grid item sequentially
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-fit lg:min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 p-5 sm:p-8 md:p-10 gap-6 sm:gap-8 md:gap-10 pt-[8vh] lg:pt-[10vh]"
    >
      {/* Title Box */}
      <div ref={(el) => (itemsRef.current[0] = el)}>
        <h3 className="uppercase NeueM">
          Beyond <br /> the <br /> court
        </h3>
      </div>

      {/* Data Grid Items */}
      {Data.map((item, i) => {
        // Offset index by 1 since title takes index 0 in our ref array
        const refIndex = i + 1;
        return (
          <div
            key={i}
            ref={(el) => (itemsRef.current[refIndex] = el)}
            className="w-full h-full flex flex-col group cursor-pointer"
          >
            {/* Image Container with Hover Scale */}
            <div className="w-full aspect-4/5 overflow-hidden rounded-md bg-neutral-900">
              <img
                src={item.url}
                alt="img"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
              />
            </div>
            {/* Text description */}
            <div className="w-full h-fit sm:h-[100px] mt-4 sm:mt-6">
              <span className="uppercase Inter font-bold tracking-wide">
                {item.text1}
              </span>
              <p className="capitalize Inter text-black mt-1">
                {item.text2}
              </p>
            </div>
          </div>
        );
      })}

      {/* Description Paragraph Box */}
      <div
        ref={(el) => (itemsRef.current[5] = el)}
        className="w-full h-full flex justify-center items-center"
      >
        <p className="Inter capitalize w-full sm:w-[70%] text-black text-center sm:text-left">
          From ancient streets to modern courts, Spain has always known how to
          bring people together.
        </p>
      </div>
    </div>
  );
};

export default BeyondTheCourt;