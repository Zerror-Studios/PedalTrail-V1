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
    <section className="w-full BGBLUE text-white px-20 py-12 ">
      <div className=" flex flex-col md:flex-row justify-between w-full items-start md:items-top gap-10">
        
        {/* Left Column: Details List */}
        <div className="flex flex-col gap-8">
          {details.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="NeueR text-xs uppercase tracking-wider text-white/80">
                {item.label}
              </span>
              <h4 className="NeueR text-2xl sm:text-3xl font-medium text-white tracking-wide">
                {item.value}
              </h4>
            </div>
          ))}
        </div>

        {/* Right Column: CTA Button */}
        <div className="pt-2">
          <button className="bg-white text-black text-xs uppercase tracking-wider font-medium px-6 py-4 shadow-sm hover:bg-neutral-100 transition-colors">
            Request An Invitation
          </button>
        </div>

      </div>
    </section>
  );
}