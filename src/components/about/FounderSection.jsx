export default function FounderSection() {
  return (
    <section className="w-full bg-[#F6F5F2] py-20 md:py-32 px-6 flex flex-col items-center">
      <div className="container max-w-[1000px] mx-auto flex flex-col items-center">
        
        {/* Main Heading */}
        <h4 className="NeueR text-center text-[#1C1C1A] mb-10 max-w-[800px] mx-auto">
          We Wanted To Create<br />
          Something More Than A<br />
          Tournament.
        </h4>

        {/* Profile/Author Block */}
        <div className="flex items-center gap-4 mb-20 md:mb-28">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 relative">
             {/* Replace with actual avatar image path */}
            <img 
              src="/avatar-placeholder.jpg" 
              alt="Mateo Alvarez" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="NeueM text-[#1C1C1A] text-sm md:text-base leading-tight">Mateo Alvarez</span>
            <span className="Inter text-[#767676] text-xs md:text-sm mt-0.5">Founder, The Padel Trail</span>
          </div>
        </div>

        {/* Two-Column Text Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full text-[#555555]">
          <p className="Inter text-sm md:text-base leading-[1.6]">
            The Padel Trail Is A Curated Sporting Experience Built Around One
            Simple Idea: The Game Is Only Part Of The Journey. We Bring Together
            32 Players, Selected In Pairs, And Take Them Somewhere Worth
            Discovering. Across The Court And Beyond It,
          </p>
          <p className="Inter text-sm md:text-base leading-[1.6]">
            Every Part Of The Experience Is Thoughtfully Considered From The
            Competition And The Place To The People And The Moments In
            Between. It Is Competitive When It Needs To Be, Relaxed When It Should
            Be, And Always Designed To Feel Like More Than Another Week Away.
          </p>
        </div>

      </div>
    </section>
  );
}