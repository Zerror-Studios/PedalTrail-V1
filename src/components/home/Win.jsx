// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Data1 = [
//   {
//     url: `/images/home/D1.png`,
//     text1: "winner",
//     text2: "Full invitation to Season 02.",
//     logo: `/svg/DD1.svg`,
//   },
//   {
//     url: `/images/home/D2.png`,
//     text1: "1st runner up",
//     text2: "Priority placement for future editions.",
//     logo: `/svg/DD2.svg`,
//   },
//   {
//     url: `/images/home/D3.png`,
//     text1: "2nd runner up",
//     text2: "Exclusive Trail merchandise.",
//     logo: `/svg/DD3.svg`,
//   },
// ];

// const Win = () => {
//   const containerRefON = useRef(null);
//   const cardsRefJO = useRef([]);

//   useEffect(() => {
//     const cards = cardsRefJO.current.filter(Boolean);

//     const ctx = gsap.context(() => {
//       gsap.set(cards, {
//         x: "100vw",
//         opacity: 0,
//         force3D: true,
//       });

//       gsap.to(cards, {
//         x: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power3.out", // Smoothed out for a clean, natural slide
//         stagger: 0.15,
//         scrollTrigger: {
//           trigger: containerRefON.current,
//           start: "top 85%", // Adjusted trigger so cards start coming in gracefully as they enter viewport
//           toggleActions: "play none none reverse",
//           // markers: true, // uncomment while debugging
//         },
//       });
//     }, containerRefON);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRefON} className="w-full h-fit p-10 overflow-hidden">
//       <div className="w-full h-fit flex flex-col">
//         <h3 className="NeueM uppercase">WIN YOUR WAY BACK.</h3>
//         <p className="Inter mt-5 max-w-sm text-neutral-400">
//           The Trail is designed to seamlessly blend intense competition with
//           world-class hospitality and cultural immersion.
//         </p>
//       </div>

//       <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
//         {Data1.map((item, i) => {
//           return (
//             <div
//               key={i}
//               ref={(el) => (cardsRefJO.current[i] = el)}
//               className="w-full aspect-5/4 overflow-hidden relative group cursor-pointer will-change-transform rounded-md"
//             >
//               {/* Background Image with Hover Scale */}
//               <img
//                 src={item.url}
//                 alt="IMG"
//                 className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1] transition-transform duration-700 ease-out group-hover:scale-105"
//               />

             

//               {/* Content */}
//               <div className="w-full h-full p-10 flex justify-between flex-col">
//                 <div className="w-12 aspect-square relative overflow-hidden">
//                   <img
//                     src={item.logo}
//                     alt="Logo"
//                     className="w-full h-full object-contain object-center"
//                   />
//                 </div>

//                 <div className="flex flex-col w-full text-white">
//                   <h4 className="NeueM uppercase">{item.text1}</h4>
//                   <span className="Inter mt-2 capitalize text-neutral-200">
//                     {item.text2}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Win;


"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Data1 = [
  {
    url: `/images/home/D1.png`,
    text1: "winner",
    text2: "Full invitation to Season 02.",
    logo: `/svg/DD1.svg`,
  },
  {
    url: `/images/home/D2.png`,
    text1: "1st runner up",
    text2: "Priority placement for future editions.",
    logo: `/svg/DD2.svg`,
  },
  {
    url: `/images/home/D3.png`,
    text1: "2nd runner up",
    text2: "Exclusive Trail merchandise.",
    logo: `/svg/DD3.svg`,
  },
];

const Win = () => {
  const containerRefON = useRef(null);
  const cardsRefJO = useRef([]);

  useEffect(() => {
    const cards = cardsRefJO.current.filter(Boolean);

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        x: "100vw",
        opacity: 0,
        force3D: true,
      });

      gsap.to(cards, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out", // Smoothed out for a clean, natural slide
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRefON.current,
          start: "top 85%", // Adjusted trigger so cards start coming in gracefully as they enter viewport
          toggleActions: "play none none reverse",
          // markers: true, // uncomment while debugging
        },
      });
    }, containerRefON);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRefON} className="w-full h-fit p-5 sm:p-8 md:p-10 overflow-hidden">
      <div className="w-full h-fit flex flex-col">
        <h3 className="NeueM uppercase">WIN YOUR WAY BACK.</h3>
        <p className="Inter mt-5 max-w-sm text-neutral-400">
          The Trail is designed to seamlessly blend intense competition with
          world-class hospitality and cultural immersion.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10">
        {Data1.map((item, i) => {
          return (
            <div
              key={i}
              ref={(el) => (cardsRefJO.current[i] = el)}
              className="w-full aspect-5/4 sm:aspect-5/4 overflow-hidden relative group cursor-pointer will-change-transform rounded-md"
            >
              {/* Background Image with Hover Scale */}
              <img
                src={item.url}
                alt="IMG"
                className="absolute top-0 left-0 w-full h-full object-cover object-center z-[-1] transition-transform duration-700 ease-out group-hover:scale-105"
              />

             

              {/* Content */}
              <div className="w-full h-full p-6 sm:p-8 md:p-10 flex justify-between flex-col">
                <div className="w-10 sm:w-12 aspect-square relative overflow-hidden">
                  <img
                    src={item.logo}
                    alt="Logo"
                    className="w-full h-full object-contain object-center"
                  />
                </div>

                <div className="flex flex-col w-full text-white">
                  <h4 className="NeueM uppercase">{item.text1}</h4>
                  <span className="Inter mt-2 capitalize text-neutral-200">
                    {item.text2}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Win;