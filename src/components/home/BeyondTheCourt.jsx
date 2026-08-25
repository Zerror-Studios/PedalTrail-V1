// // "use client";

// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const Data = [
// //   {
// //     url: `/images/home/C1.png`,
// //     text1: 'Ibiza',
// //     text2: 'late nights, by the sea',
// //   },
// //   {
// //     url: `/images/home/C2.png`,
// //     text1: 'Mallorca',
// //     text2: 'sunset, by sail',
// //   },
// //   {
// //     url: `/images/home/C3.png`,
// //     text1: 'costa brava',
// //     text2: 'lunch, by the coast',
// //   },
// //   {
// //     url: `/images/home/C4.png`,
// //     text1: 'barcelona',
// //     text2: 'after hours, in the city',
// //   },
// // ];

// // const BeyondTheCourt = () => {
// //   const containerRef = useRef(null);
// //   const itemsRef = useRef([]);

// //   useEffect(() => {
// //     const elements = itemsRef.current.filter(Boolean);

// //     const ctx = gsap.context(() => {
// //       gsap.fromTo(
// //         elements,
// //         {
// //           opacity: 0,
// //           y: 50,
// //         },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 1,
// //           ease: "power3.out",
// //           stagger: 0.2, // Staggers each grid item sequentially
// //           scrollTrigger: {
// //             trigger: containerRef.current,
// //             start: "top 80%",
// //             toggleActions: "play none none reverse",
// //           },
// //         }
// //       );
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <div
// //       ref={containerRef}
// //       className="w-full min-h-screen grid grid-rows-2 grid-cols-3 p-10 gap-10 space-y-[2vh] pt-[10vh]"
// //     >
// //       {/* Title Box */}
// //       <div ref={(el) => (itemsRef.current[0] = el)}>
// //         <h3 className="uppercase NeueM">
// //           Beyond <br /> the <br /> court
// //         </h3>
// //       </div>

// //       {/* Data Grid Items */}
// //       {Data.map((item, i) => {
// //         // Offset index by 1 since title takes index 0 in our ref array
// //         const refIndex = i + 1;
// //         return (
// //           <div
// //             key={i}
// //             ref={(el) => (itemsRef.current[refIndex] = el)}
// //             className="w-full h-full flex flex-col group cursor-pointer"
// //           >
// //             {/* Image Container with Hover Scale */}
// //             <div className="w-full aspect-4/5 overflow-hidden rounded-md bg-neutral-900">
// //               <img
// //                 src={item.url}
// //                 alt="img"
// //                 className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
// //               />
// //             </div>
// //             {/* Text description */}
// //             <div className="w-full h-[100px] mt-6">
// //               <span className="uppercase Inter font-bold tracking-wide">
// //                 {item.text1}
// //               </span>
// //               <p className="capitalize Inter text-black mt-1">
// //                 {item.text2}
// //               </p>
// //             </div>
// //           </div>
// //         );
// //       })}

// //       {/* Description Paragraph Box */}
// //       <div
// //         ref={(el) => (itemsRef.current[5] = el)}
// //         className="w-full h-full flex justify-center items-center"
// //       >
// //         <p className="Inter capitalize w-[70%] text-black">
// //           From ancient streets to modern courts, Spain has always known how to
// //           bring people together.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BeyondTheCourt;


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
//       className="w-full min-h-fit lg:min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 p-5 sm:p-8 md:p-10 gap-6 sm:gap-8 md:gap-10 pt-[8vh] lg:pt-[10vh]"
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
//             <div className="w-full h-fit sm:h-[100px] mt-4 sm:mt-6">
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
//         <p className="Inter capitalize w-full sm:w-[70%] text-black text-center sm:text-left">
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
    text1: "Ibiza",
    text2: "late nights, by the sea",
  },
  {
    url: `/images/home/C2.png`,
    text1: "Mallorca",
    text2: "sunset, by sail",
  },
  {
    url: `/images/home/C3.png`,
    text1: "costa brava",
    text2: "lunch, by the coast",
  },
  {
    url: `/images/home/C4.png`,
    text1: "barcelona",
    text2: "after hours, in the city",
  },
];

const BeyondTheCourt = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const cardDivsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const elements = itemsRef.current.filter(Boolean);
    const images = imagesRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // 1. Entrance Stagger Reveal
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
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Parallax Scroll Effect on inner images
      images.forEach((img) => {
        gsap.fromTo(
          img,
          {
            yPercent: -15,
          },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3. 3D Card Tilt Mouse Move Effect on the image wrapper DIV
  const handleMouseMove = (e, index) => {
    const cardDiv = cardDivsRef.current[index];
    if (!cardDiv) return;

    const rect = cardDiv.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse coordinates relative to the center of the div (-1 to 1)
    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    // Max rotation angles in degrees
    const maxTiltX = 4; // Tilt along X-axis (up/down)
    const maxTiltY = 4; // Tilt along Y-axis (left/right)

    gsap.to(cardDiv, {
      transformPerspective: 1000,
      rotateX: -mouseY * maxTiltX, // Moving mouse up tilts top edge back/forward
      rotateY: mouseX * maxTiltY,   // Moving mouse right tilts right edge forward
      scale3d: 1.03,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (index) => {
    const cardDiv = cardDivsRef.current[index];
    if (!cardDiv) return;

    gsap.to(cardDiv, {
      transformPerspective: 1000,
      rotateX: 0,
      rotateY: 0,
      scale3d: 1,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-fit BGLIGHTBLUE lg:min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 p-5 sm:p-8 md:p-10 gap-6 sm:gap-8 md:gap-10 pt-[8vh] lg:pt-[10vh]"
    >
      {/* Title Box */}
      <div ref={(el) => (itemsRef.current[0] = el)}>
        <h3 className="uppercase NeueM">
          Beyond <br /> the <br /> court
        </h3>
      </div>

      {/* Data Grid Items */}
      {Data.map((item, i) => {
        const refIndex = i + 1;
        return (
          <div
            key={i}
            ref={(el) => (itemsRef.current[refIndex] = el)}
            className="w-full h-full flex flex-col group cursor-pointer [perspective:1000px]"
          >
            {/* 3D Tilted Image Div */}
            <div
              ref={(el) => (cardDivsRef.current[i] = el)}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="w-full aspect-4/5 overflow-hidden  bg-neutral-900 will-change-transform [transform-style:preserve-3d]"
            >
              <img
                ref={(el) => (imagesRef.current[i] = el)}
                src={item.url}
                alt={item.text1}
                className="w-full h-full object-cover object-center scale-125 will-change-transform pointer-events-none"
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