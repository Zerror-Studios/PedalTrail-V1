// 'use client';

// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Lable = () => {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.to(imageRef.current, {
//         yPercent: 20, // Moves the image down by 20% of its container height on scroll
//         ease: 'none',
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top bottom', // Starts when top of container hits bottom of viewport
//           end: 'bottom top',   // Ends when bottom of container hits top of viewport
//           scrub: true,         // Links the movement directly to the scrollbar
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className='w-full h-fit flex justify-center items-center py-[10vh]'>
//       <div className='max-w-2xl h-fit'>
//         <h1 className='NeueM'>NOT JUST A <br />PADEL TRIP.</h1>

//         {/* Parallax Container */}
//         <div 
//           ref={containerRef}
//           className='w-full aspect-square overflow-hidden mt-5 flex justify-center items-center relative'
//         >
//           <img 
//             ref={imageRef}
//             src='/images/home/E1.png' 
//             alt="img" 
//             className='w-full h-full object-center object-cover absolute top-0 left-0 z-10 scale-[1.2] will-change-transform' 
//           />

//           <div className='w-full h-full absolute top-0 left-0 z-20 text-white p-10 flex items-end'>
//             <h3 className='NeueM'>A JOURNEY <br />WORTH BEING <br /> INVITED TO.</h3>
//           </div>
//         </div>

//         <div className='w-fit h-fit px-20 text-white bg-[#FE2115] py-5 mt-10 cursor-pointer'>
//           <p className='Inter uppercase'>Request for invitation</p>
//         </div>

//         <p className='NeueM text-[black]/40 mt-5'>Applications Reviewed Privately</p>
//       </div>
//     </div>
//   );
// };

// export default Lable;


'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Lable = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 20, // Moves the image down by 20% of its container height on scroll
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom', // Starts when top of container hits bottom of viewport
          end: 'bottom top',   // Ends when bottom of container hits top of viewport
          scrub: true,         // Links the movement directly to the scrollbar
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='w-full h-fit flex justify-center items-center py-[8vh] sm:py-[10vh] px-5 sm:px-0'>
      <div className='w-full max-w-2xl h-fit'>
        <h1 className='NeueM'>NOT JUST A <br />PADEL TRIP.</h1>

        {/* Parallax Container */}
        <div 
          ref={containerRef}
          className='w-full aspect-square overflow-hidden mt-5 flex justify-center items-center relative'
        >
          <img 
            ref={imageRef}
            src='/images/home/E1.png' 
            alt="img" 
            className='w-full h-full object-center object-cover absolute top-0 left-0 z-10 scale-[1.2] will-change-transform' 
          />

          <div className='w-full h-full absolute top-0 left-0 z-20 text-white p-6 sm:p-10 flex items-end'>
            <h3 className='NeueM'>A JOURNEY <br />WORTH BEING <br /> INVITED TO.</h3>
          </div>
        </div>

        <div className='w-full sm:w-fit h-fit px-8 sm:px-20 text-white bg-[#FE2115] py-4 sm:py-5 mt-8 sm:mt-10 cursor-pointer text-center'>
          <p className='Inter uppercase'>Request for invitation</p>
        </div>

        <p className='NeueM text-[black]/40 mt-5'>Applications Reviewed Privately</p>
      </div>
    </div>
  );
};

export default Lable;