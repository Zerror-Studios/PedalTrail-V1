// import React from 'react';

// export default function DetailSection() {
//   return (
//     <section className="min-h-screen w-full bg-[#f0f4f6] px-6 py-12 md:px-12 md:py-20 flex flex-col justify-center">
//       <div className="mx-auto max-w-7xl w-full">
//         {/* Top Section: Triptych Images + Paragraph Text */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
//           {/* 3-Panel Image Grid */}
//           <div className="lg:col-span-9 grid grid-cols-3 gap-2 sm:gap-4 md:gap-5">
//             {/* Panel 1 */}
//             <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-slate-200">
//               <img
//                 src="/images/home/Z1.png"
//                 alt="Padel Court Net Detail"
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* Panel 2 */}
//             <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-slate-200">
//               <img
//                 src="/images/home/Z2.png"
//                 alt="Padel Ball on Blue Court"
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* Panel 3 */}
//             <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-slate-200">
//               <img
//                 src="/images/home/Z3.png"
//                 alt="Orange Wall with Palm Leaf Shadows"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Side Text (Right Aligned Bottom on Desktop) */}
//           <div className="lg:col-span-3 lg:pb-1">
//             <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-slate-800 font-normal tracking-wide">
//               We Focus On The Essentials And Execute Them Flawlessly. Quality
//               Over Noise. Intention Over Impulse. The Padel Trail Is A
//               Commitment To A Higher Standard Of Sporting Travel.
//             </p>
//           </div>
//         </div>

//       </div>
//         {/* Bottom Section: Large Serif Heading */}
//         <div className="mt-8 md:mt-12 lg:mt-16">
//           <h3 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#2b2d2f] tracking-tight leading-[1.05]">
//             Considered In <br />
//             Every Detail.
//           </h3>
//         </div>
//     </section>
//   );
// }

import React from 'react';

export default function DetailSection() {
  return (
    <section className=" h-fit sm:min-h-screen w-full bg-[#f0f4f6] px-6 py-12 md:px-12 md:py-20 flex flex-col justify-center">
      <div className="mx-auto max-w-7xl w-full">
        {/* Top Section: Triptych Images + Paragraph Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* 3-Panel Image Grid (Expanded to 10 cols) */}
          <div className="lg:col-span-10 grid grid-cols-3 gap-2 sm:gap-4 md:gap-5">
            {/* Panel 1 */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-slate-200">
              <img
                src="/images/home/Z1.png"
                alt="Padel Court Net Detail"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Panel 2 */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-slate-200">
              <img
                src="/images/home/Z2.png"
                alt="Padel Ball on Blue Court"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Panel 3 */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-slate-200">
              <img
                src="/images/home/Z3.png"
                alt="Orange Wall with Palm Leaf Shadows"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Side Text (Narrowed column grid & capped max-width) */}
          <div className="lg:col-span-2 lg:pb-1 max-sm:hidden">
            <p className="max-w-[200px] text-xs sm:text-[13px] leading-snug text-slate-800 font-normal tracking-wide">
              We Focus On The Essentials And Execute Them Flawlessly. Quality
              Over Noise. Intention Over Impulse. The Padel Trail Is A
              Commitment To A Higher Standard Of Sporting Travel.
            </p>
          </div>
        </div>

      </div>
        {/* Bottom Section: Large Serif Heading */}
        <div className="mt-8 md:mt-12 lg:mt-16">
          <h3 className="font-serif NeueM text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#2b2d2f] tracking-tight leading-[1.05]">
            Considered In <br />
            Every Detail.
          </h3>
        </div>

        <div className=" w-full sm:hidden mt-5">
            <p className="max-w-full Inter text-xs sm:text-[13px] leading-snug text-slate-800 font-normal tracking-wide">
              We Focus On The Essentials And Execute Them Flawlessly. Quality
              Over Noise. Intention Over Impulse. The Padel Trail Is A
              Commitment To A Higher Standard Of Sporting Travel.
            </p>
          </div>
    </section>
  );
}