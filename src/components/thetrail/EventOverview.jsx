export default function EventOverview() {
  const stats = [
    { label: "PLAYERS", value: "32" },
    { label: "PAIRS", value: "16" },
    { label: "DURATION", value: "9 DAYS" },
    { label: "LOCATION", value: "SPAIN" },
  ];

  return (
    <section className="w-full bg-white text-black px-10 pt-[10vh] pb-[5vh]">
      <div className=" mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        
        {/* Left Column: Title & Description */}
        <div className="max-w-xl flex flex-col justify-between gap-12">
          <h3 className="NeueM font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight font-normal text-black">
            Nine Days. One <br />
            Journey.
          </h3>
          
          <p className="text-xs sm:text-sm text-neutral-800 capitalize  max-w-md">
            An Exclusive, High-Performance Padel Experience That Transcends
            The Court. Compete, Explore, And Connect Across The Most
            Breathtaking Landscapes In Spain.
          </p>
        </div>

        {/* Right Column: Key Stats Grid */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-12 lg:gap-x-24 lg:gap-y-16 pt-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wider  font-semibold">
                {stat.label}
              </span>
              <h3 className=" text-4xl sm:text-5xl  tracking-tight ">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}