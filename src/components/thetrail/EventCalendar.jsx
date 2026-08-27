// // export default function EventCalendar() {
// //   const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// //   const calendarDays = [
// //     // Week 1 (Inactive/Faded)
// //     { date: "11", muted: true },
// //     { date: "12", muted: true },
// //     { date: "13", muted: true },
// //     { date: "14", muted: true },
// //     { date: "15", muted: true },
// //     { date: "16", muted: true },
// //     { date: "17", muted: true },

// //     // Week 2
// //     { date: "18" },
// //     { date: "19" },
// //     { date: "20" },
// //     { date: "21" },
// //     { date: "22", text: "Arrive in Spain" },
// //     { date: "23", text: "Coach: Train together." },
// //     { date: "24", text: "Competition begins", circled: true },

// //     // Week 3
// //     { date: "25", text: "Explore: Experience Spain beyond the court." },
// //     { date: "26", text: "Local Club Play" },
// //     { date: "27", text: "Compete: The tournament moves forward." },
// //     { date: "28", text: "Semi Finals" },
// //     { date: "29", text: "THE FINAL MATCH", highlighted: true },
// //     { date: "30", text: "Depart: The Trail comes to an end." },
// //     { date: "31" },
// //   ];

// //   return (
// //     <section className="w-full h-fit bg-[#f4f4f4] text-black min-h-screen px-6 py-12 md:px-16 md:py-20 flex flex-col justify-center">
// //       <div className="mx-auto w-full">
        
// //         {/* Header Section */}
// //         <div className="mb-12">
// //           <h3 className="NeueR text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.1] text-[#1a1a1a] max-w-2xl">
// //             A curated path through competition and culture.
// //           </h3>
// //           <p className="NeueR text-xs sm:text-sm font-semibold tracking-wider text-neutral-600 uppercase mt-8">
// //             OCTOBER 23 - 31/2026
// //           </p>
// //         </div>

// //         {/* Calendar Grid Container */}
// //         <div className="bg-white border border-neutral-200 rounded-sm overflow-x-auto shadow-sm">
// //           <div className="min-w-[700px]">
            
// //             {/* Days Header */}
// //             <div className="grid grid-cols-7 border-b border-neutral-200 bg-white">
// //               {daysOfWeek.map((day, idx) => (
// //                 <div
// //                   key={idx}
// //                   className="py-3 text-center text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-500 uppercase border-r border-neutral-200 last:border-r-0"
// //                 >
// //                   {day}
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Calendar Cells Grid */}
// //             <div className="grid grid-cols-7 h-[70vh]">
// //               {calendarDays.map((item, idx) => (
// //                 <div
// //                   key={idx}
// //                   className={`relative p-3 sm:p-4 min-h-[110px] sm:min-h-[140px] flex flex-col justify-between border-b border-r border-neutral-200 transition-colors ${
// //                     idx % 7 === 6 ? "border-r-0" : ""
// //                   } ${
// //                     idx >= 14 ? "border-b-0" : ""
// //                   } ${
// //                     item.highlighted
// //                       ? "BGORG text-white"
// //                       : item.muted
// //                       ? "bg-[#f8f8f8]"
// //                       : "bg-white"
// //                   }`}
// //                 >
// //                   {/* Top Date Header */}
// //                   <div className="flex items-center">
// //                     {item.circled ? (
// //                       <h5 className="w-fit h-fit p-2 rounded-full border border-[#FF6000] text-[#FF6000] flex items-center justify-center text-sm sm:text-base font-normal">
// //                         {item.date}
// //                       </h5>
// //                     ) : (
// //                       <h5
// //                         className={`text-sm sm:text-base ${
// //                           item.muted
// //                             ? "text-neutral-400 font-light"
// //                             : item.highlighted
// //                             ? "text-white font-medium"
// //                             : "text-neutral-900 font-normal"
// //                         }`}
// //                       >
// //                         {item.date}
// //                       </h5>
// //                     )}
// //                   </div>

// //                   {/* Event Text Description */}
// //                   {item.text && (
// //                     <p
// //                       className={`text-[11px] sm:text-xs leading-snug mt-2 ${
// //                         item.highlighted
// //                           ? "text-white font-semibold uppercase"
// //                           : "text-neutral-800 font-normal"
// //                       }`}
// //                     >
// //                       {item.text}
// //                     </p>
// //                   )}
// //                 </div>
// //               ))}
// //             </div>

// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// export default function EventCalendar() {
//   const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

//   const calendarDays = [
//     // Week 1 (Inactive/Faded)
//     { date: "11", day: "MON", muted: true },
//     { date: "12", day: "TUE", muted: true },
//     { date: "13", day: "WED", muted: true },
//     { date: "14", day: "THU", muted: true },
//     { date: "15", day: "FRI", muted: true },
//     { date: "16", day: "SAT", muted: true },
//     { date: "17", day: "SUN", muted: true },

//     // Week 2
//     { date: "18", day: "MON" },
//     { date: "19", day: "TUE" },
//     { date: "20", day: "WED" },
//     { date: "21", day: "THU" },
//     { date: "22", day: "FRI", text: "Arrive in Spain" },
//     { date: "23", day: "SAT", text: "Coach: Train together." },
//     { date: "24", day: "SUN", text: "Competition begins", circled: true },

//     // Week 3
//     { date: "25", day: "MON", text: "Explore: Experience Spain beyond the court." },
//     { date: "26", day: "TUE", text: "Local Club Play" },
//     { date: "27", day: "WED", text: "Compete: The tournament moves forward." },
//     { date: "28", day: "THU", text: "Semi Finals" },
//     { date: "29", day: "FRI", text: "THE FINAL MATCH", highlighted: true },
//     { date: "30", day: "SAT", text: "Depart: The Trail comes to an end." },
//     { date: "31", day: "SUN" },
//   ];

//   return (
//     <section className="w-full h-fit bg-[#f4f4f4] text-black min-h-screen px-4 py-10 sm:px-6 sm:py-12 md:px-16 md:py-20 flex flex-col justify-center">
//       <div className="mx-auto w-full">

//         {/* Header Section */}
//         <div className="mb-8 sm:mb-12">
//           <h3 className="NeueR text-3xl sm:text-5xl md:text-6xl font-serif leading-[1.1] text-[#1a1a1a] max-w-2xl">
//             A curated path through competition and culture.
//           </h3>
//           <p className="NeueR text-xs sm:text-sm font-semibold tracking-wider text-neutral-600 uppercase mt-6 sm:mt-8">
//             OCTOBER 23 - 31/2026
//           </p>
//         </div>

//         {/* Mobile: Stacked list view (below md) */}
//         <div className="md:hidden bg-white border border-neutral-200 rounded-sm shadow-sm divide-y divide-neutral-200">
//           {calendarDays
//             .filter((item) => !item.muted)
//             .map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`flex items-start gap-4 p-4 ${
//                   item.highlighted ? "BGORG text-white" : "bg-white"
//                 }`}
//               >
//                 <div className="flex flex-col items-center shrink-0 w-12">
//                   {item.circled ? (
//                     <span className="w-9 h-9 rounded-full border border-[#FF6000] text-[#FF6000] flex items-center justify-center text-sm">
//                       {item.date}
//                     </span>
//                   ) : (
//                     <span
//                       className={`text-lg font-normal ${
//                         item.highlighted ? "text-white font-medium" : "text-neutral-900"
//                       }`}
//                     >
//                       {item.date}
//                     </span>
//                   )}
//                   <span
//                     className={`text-[10px] tracking-widest uppercase mt-1 ${
//                       item.highlighted ? "text-white/80" : "text-neutral-400"
//                     }`}
//                   >
//                     {item.day}
//                   </span>
//                 </div>
//                 <p
//                   className={`text-xs leading-snug pt-1.5 ${
//                     item.highlighted
//                       ? "text-white font-semibold uppercase"
//                       : item.text
//                       ? "text-neutral-800 font-normal"
//                       : "text-neutral-400 italic"
//                   }`}
//                 >
//                   {item.text || "No scheduled event"}
//                 </p>
//               </div>
//             ))}
//         </div>

//         {/* Desktop / Tablet: Calendar Grid Container (md and up) */}
//         <div className="hidden md:block bg-white border border-neutral-200 rounded-sm overflow-x-auto shadow-sm">
//           <div className="min-w-[700px]">

//             {/* Days Header */}
//             <div className="grid grid-cols-7 border-b border-neutral-200 bg-white">
//               {daysOfWeek.map((day, idx) => (
//                 <div
//                   key={idx}
//                   className="py-3 text-center text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-500 uppercase border-r border-neutral-200 last:border-r-0"
//                 >
//                   {day}
//                 </div>
//               ))}
//             </div>

//             {/* Calendar Cells Grid */}
//             <div className="grid grid-cols-7 h-[70vh]">
//               {calendarDays.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className={`relative p-3 sm:p-4 min-h-[110px] sm:min-h-[140px] flex flex-col justify-between border-b border-r border-neutral-200 transition-colors ${
//                     idx % 7 === 6 ? "border-r-0" : ""
//                   } ${
//                     idx >= 14 ? "border-b-0" : ""
//                   } ${
//                     item.highlighted
//                       ? "BGORG text-white"
//                       : item.muted
//                       ? "bg-[#f8f8f8]"
//                       : "bg-white"
//                   }`}
//                 >
//                   {/* Top Date Header */}
//                   <div className="flex items-center">
//                     {item.circled ? (
//                       <h5 className="w-fit h-fit p-2 rounded-full border border-[#FF6000] text-[#FF6000] flex items-center justify-center text-sm sm:text-base font-normal">
//                         {item.date}
//                       </h5>
//                     ) : (
//                       <h5
//                         className={`text-sm sm:text-base ${
//                           item.muted
//                             ? "text-neutral-400 font-light"
//                             : item.highlighted
//                             ? "text-white font-medium"
//                             : "text-neutral-900 font-normal"
//                         }`}
//                       >
//                         {item.date}
//                       </h5>
//                     )}
//                   </div>

//                   {/* Event Text Description */}
//                   {item.text && (
//                     <p
//                       className={`text-[11px] sm:text-xs leading-snug mt-2 ${
//                         item.highlighted
//                           ? "text-white font-semibold uppercase"
//                           : "text-neutral-800 font-normal"
//                       }`}
//                     >
//                       {item.text}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function EventCalendar() {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

  const calendarDays = [
    // Week 1 (Inactive/Faded)
    { date: '11', day: 'MON', muted: true },
    { date: '12', day: 'TUE', muted: true },
    { date: '13', day: 'WED', muted: true },
    { date: '14', day: 'THU', muted: true },
    { date: '15', day: 'FRI', muted: true },
    { date: '16', day: 'SAT', muted: true },
    { date: '17', day: 'SUN', muted: true },

    // Week 2
    { date: '18', day: 'MON' },
    { date: '19', day: 'TUE' },
    { date: '20', day: 'WED' },
    { date: '21', day: 'THU' },
    { date: '22', day: 'FRI', text: 'Arrive in Spain' },
    { date: '23', day: 'SAT', text: 'Coach: Train together.' },
    { date: '24', day: 'SUN', text: 'Competition begins', circled: true },

    // Week 3
    { date: '25', day: 'MON', text: 'Explore: Experience Spain beyond the court.' },
    { date: '26', day: 'TUE', text: 'Local Club Play' },
    { date: '27', day: 'WED', text: 'Compete: The tournament moves forward.' },
    { date: '28', day: 'THU', text: 'Semi Finals' },
    { date: '29', day: 'FRI', text: 'THE FINAL MATCH', highlighted: true },
    { date: '30', day: 'SAT', text: 'Depart: The Trail comes to an end.' },
    { date: '31', day: 'SUN' },
  ]

  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const dateRangeRef = useRef(null)
  const mobileListRef = useRef(null)
  const desktopGridRef = useRef(null)
  const mobileRowRefs = useRef([])
  const desktopCellRefs = useRef([])

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })

      // Initial states
      gsap.set(headingRef.current, { opacity: 0, y: 30 })
      gsap.set(dateRangeRef.current, { opacity: 0, y: 16 })
      gsap.set(mobileListRef.current, { opacity: 0, y: 20 })
      gsap.set(desktopGridRef.current, { opacity: 0, y: 20 })
      gsap.set(mobileRowRefs.current, { opacity: 0, y: 14 })
      gsap.set(desktopCellRefs.current, { opacity: 0, y: 14 })

      tl
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.9 })
        .to(dateRangeRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
        // Container fades in (border/shadow appears)
        .to(mobileListRef.current, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .to(desktopGridRef.current, { opacity: 1, y: 0, duration: 0.5 }, '<')
        // Mobile rows stagger in
        .to(mobileRowRefs.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
        }, '-=0.2')
        // Desktop cells stagger in (row by row feel via small stagger)
        .to(desktopCellRefs.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: {
            each: 0.025,
            from: 'start',
          },
        }, '<')
    },
    { scope: sectionRef }
  )

  const mutedDays = calendarDays.filter((item) => !item.muted)

  return (
    <section
      ref={sectionRef}
      className="w-full h-fit bg-[#f4f4f4] text-black min-h-screen px-4 py-10 sm:px-6 sm:py-12 md:px-16 md:py-20 flex flex-col justify-center"
    >
      <div className="mx-auto w-full">

        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <h3
            ref={headingRef}
            className="NeueR text-3xl sm:text-5xl md:text-6xl font-serif leading-[1.1] text-[#1a1a1a] max-w-2xl"
          >
            A curated path through competition and culture.
          </h3>
          <p
            ref={dateRangeRef}
            className="NeueR text-xs sm:text-sm font-semibold tracking-wider text-neutral-600 uppercase mt-6 sm:mt-8"
          >
            OCTOBER 23 - 31/2026
          </p>
        </div>

        {/* Mobile: Stacked list view (below md) */}
        <div
          ref={mobileListRef}
          className="md:hidden bg-white border border-neutral-200 rounded-sm shadow-sm divide-y divide-neutral-200"
        >
          {mutedDays.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (mobileRowRefs.current[idx] = el)}
              className={`flex items-start gap-4 p-4 ${
                item.highlighted ? 'BGORG text-white' : 'bg-white'
              }`}
            >
              <div className="flex flex-col items-center shrink-0 w-12">
                {item.circled ? (
                  <span className="w-9 h-9 rounded-full border border-[#FF6000] text-[#FF6000] flex items-center justify-center text-sm">
                    {item.date}
                  </span>
                ) : (
                  <span
                    className={`text-lg font-normal ${
                      item.highlighted ? 'text-white font-medium' : 'text-neutral-900'
                    }`}
                  >
                    {item.date}
                  </span>
                )}
                <span
                  className={`text-[10px] tracking-widest uppercase mt-1 ${
                    item.highlighted ? 'text-white/80' : 'text-neutral-400'
                  }`}
                >
                  {item.day}
                </span>
              </div>
              <p
                className={`text-xs leading-snug pt-1.5 ${
                  item.highlighted
                    ? 'text-white font-semibold uppercase'
                    : item.text
                    ? 'text-neutral-800 font-normal'
                    : 'text-neutral-400 italic'
                }`}
              >
                {item.text || 'No scheduled event'}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop / Tablet: Calendar Grid Container (md and up) */}
        <div
          ref={desktopGridRef}
          className="hidden md:block bg-white border border-neutral-200 rounded-sm overflow-x-auto shadow-sm"
        >
          <div className="min-w-[700px]">

            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-neutral-200 bg-white">
              {daysOfWeek.map((day, idx) => (
                <div
                  key={idx}
                  className="py-3 text-center text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-500 uppercase border-r border-neutral-200 last:border-r-0"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Cells Grid */}
            <div className="grid grid-cols-7 h-[70vh]">
              {calendarDays.map((item, idx) => (
                <div
                  key={idx}
                  ref={(el) => (desktopCellRefs.current[idx] = el)}
                  className={`relative p-3 sm:p-4 min-h-[110px] sm:min-h-[140px] flex flex-col justify-between border-b border-r border-neutral-200 transition-colors ${
                    idx % 7 === 6 ? 'border-r-0' : ''
                  } ${
                    idx >= 14 ? 'border-b-0' : ''
                  } ${
                    item.highlighted
                      ? 'BGORG text-white'
                      : item.muted
                      ? 'bg-[#f8f8f8]'
                      : 'bg-white'
                  }`}
                >
                  {/* Top Date Header */}
                  <div className="flex items-center">
                    {item.circled ? (
                      <h5 className="w-fit h-fit p-2 rounded-full border border-[#FF6000] text-[#FF6000] flex items-center justify-center text-sm sm:text-base font-normal">
                        {item.date}
                      </h5>
                    ) : (
                      <h5
                        className={`text-sm sm:text-base ${
                          item.muted
                            ? 'text-neutral-400 font-light'
                            : item.highlighted
                            ? 'text-white font-medium'
                            : 'text-neutral-900 font-normal'
                        }`}
                      >
                        {item.date}
                      </h5>
                    )}
                  </div>

                  {/* Event Text Description */}
                  {item.text && (
                    <p
                      className={`text-[11px] sm:text-xs leading-snug mt-2 ${
                        item.highlighted
                          ? 'text-white font-semibold uppercase'
                          : 'text-neutral-800 font-normal'
                      }`}
                    >
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}