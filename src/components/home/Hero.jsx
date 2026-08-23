// "use client";

// export default function Hero() {
//   return (
//     <div className="w-full min-h-svh flex relative p-10 overflow-hidden">
//       {/* BG-Img */}
//       <div className="w-full h-full absolute top-0 left-0 z-1">
//         <img
//           src="/images/home/HeroBG.png"
//           alt="IMG"
//           className="w-full h-full object-cover object-top"
//         />
//       </div>

//       {/* Center-Info */}
//       <div className="w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center flex-col">
//         <span className="Inter text-white text-[1rem]">
//           SEASON 01 · SPAIN · AUTUMN 2026
//         </span>
//         <h1 className="text-white NeueR">THE PADEL TRAIL</h1>
//       </div>

//       {/* Additional-Info-Left*/}
//       <div className="w-1/5 aspect-5/3 bg-black/50 absolute bottom-5 left-5 z-20 p-2 flex flex-col justify-between">
//         {/* Top_Info */}
//         <div className="w-full h-fit flex justify-between items-center">
//           <span className="text-[0.7rem] leading-[0.7rem] text-white tracking-tighter Inter">
//             SEASON 01{" "}
//           </span>

//           <div className="w-fit h-fit bg-white Inter px-15 py-2.5">
//             <span className="text-black text-[0.7rem] uppercase leading-[0.7rem]">
//               Apply
//             </span>
//           </div>
//         </div>

//         {/* Info */}
//         <div className="w-full h-fit flex flex-col gap-10">
//           <div className=" capitalize text-white Inter text-[0.8rem] leading-[0.9rem] font-thin! ">
//             A private padel, wellness and travel <br /> experience across Spain.
//           </div>

//           <div className="capitalize text-white Inter text-[1rem] leading-[1rem] font-thin!">
//             Autumn 2026
//           </div>
//         </div>
//       </div>

//       <div className=" uppercase text-white Inter text-[0.8rem] leading-[0.9rem] font-thin! absolute right-5 bottom-5 z-20 ">
//         32 players. 9 days. One <br /> invitation to remember.
//       </div>
//     </div>
//   );
// }


"use client";

export default function Hero() {
  return (
    <div className="w-full min-h-svh flex relative p-5 sm:p-10 overflow-hidden">
      {/* BG-Img */}
      <div className="w-full h-full absolute top-0 left-0 z-1">
        <img
          src="/images/home/HeroBG.png"
          alt="IMG"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Center-Info */}
      <div className="w-full h-full absolute top-0 left-0 z-10 flex justify-center items-center flex-col text-center px-6">
        <span className="Inter text-white text-[0.7rem] sm:text-[0.85rem] md:text-[1rem]">
          SEASON 01 · SPAIN · AUTUMN 2026
        </span>
        <h1 className="text-white NeueR">THE PADEL TRAIL</h1>
      </div>

      {/* Bottom-Info-Bar: one flex wrapper instead of two independently
          absolutely-positioned corner elements, so they stack cleanly on
          mobile instead of overlapping */}
      <div className="w-full absolute bottom-0 left-0 z-20 p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
        {/* Additional-Info-Left */}
        <div className="w-full sm:w-[55%] md:w-[38%] lg:w-1/5 aspect-auto sm:aspect-5/3 bg-black/50 p-3 sm:p-2 flex flex-col justify-between gap-4 sm:gap-0">
          {/* Top_Info */}
          <div className="w-full h-fit flex justify-between items-center">
            <span className="text-[0.7rem] leading-[0.7rem] text-white tracking-tighter Inter">
              SEASON 01{" "}
            </span>

            <div className="w-fit h-fit bg-white Inter px-6 sm:px-10 md:px-15 py-2 sm:py-2.5">
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
        <div className="uppercase text-white Inter text-[0.75rem] sm:text-[0.8rem] leading-[0.9rem] font-thin! sm:text-right">
          32 players. 9 days. One{" "}
          <br className="hidden sm:block" /> invitation to remember.
        </div>
      </div>
    </div>
  );
}