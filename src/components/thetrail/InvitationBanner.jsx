// export default function InvitationBanner() {
//   const details = [
//     {
//       label: "COMPOSITION",
//       value: "16 men / 16 women / 16 pairs",
//     },
//     {
//       label: "STANDARD",
//       value: "LEVEL 3.25 - 4",
//     },
//     {
//       label: "SELECTION",
//       value: "APPLICATION & REVIEW",
//     },
//   ];

//   return (
//     <section className="w-full BGBLUE text-white px-20 py-12 ">
//       <div className=" flex flex-col md:flex-row justify-between w-full items-start md:items-top gap-10">
        
//         {/* Left Column: Details List */}
//         <div className="flex flex-col gap-8">
//           {details.map((item, index) => (
//             <div key={index} className="flex flex-col gap-2">
//               <span className="NeueR text-xs uppercase tracking-wider text-white/80">
//                 {item.label}
//               </span>
//               <h4 className="NeueR text-2xl sm:text-3xl font-medium text-white tracking-wide">
//                 {item.value}
//               </h4>
//             </div>
//           ))}
//         </div>

//         {/* Right Column: CTA Button */}
//         <div className="pt-2">
//           <button className="bg-white text-black text-xs uppercase tracking-wider font-medium px-6 py-4 shadow-sm hover:bg-neutral-100 transition-colors">
//             Request An Invitation
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

export default function InvitationBanner() {
  const details = [
    {
      label: "COMPOSITION",
      value: "16 men / 16 women / 16 pairs",
    },
    {
      label: "STANDARD",
      value: "LEVEL 3.25 - 4",
    },
    {
      label: "SELECTION",
      value: "APPLICATION & REVIEW",
    },
  ];

  return (
    <section className="w-full BGBLUE text-white px-6 py-10 sm:px-10 sm:py-12 md:px-20">
      <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-top gap-8 md:gap-10">

        {/* Left Column: Details List */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full md:w-auto">
          {details.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="NeueR text-xs uppercase tracking-wider text-white/80">
                {item.label}
              </span>
              <h5 className="NeueR text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-wide break-words">
                {item.value}
              </h5>
            </div>
          ))}
        </div>

        {/* Right Column: CTA Button */}
        <div className="pt-2 w-full md:w-auto">
          <button className="w-full md:w-auto bg-white text-black text-xs uppercase tracking-wider font-medium px-6 py-4 shadow-sm hover:bg-neutral-100 transition-colors">
            Request An Invitation
          </button>
        </div>

      </div>
    </section>
  );
}