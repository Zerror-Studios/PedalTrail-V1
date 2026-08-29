import Image from 'next/image';

export default function ExperienceSection() {
  return (
    <section className="relative w-full   flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/about/GF1.png"
          alt="People socializing at a gathering"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Orange Overlay Banner */}
      {/* Using #FF6000 to match the brand's orange color */}
      <div className="relative z-10 w-full  bg-[#FF6000] p-8 md:p-12 lg:p-16 flex flex-col mt-[40vh] md:flex-row md:items-end justify-between gap-10 shadow-2xl">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:max-w-[70%] lg:max-w-[60%]">
          <h4 className="NeueM text-white text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight mb-6 md:mb-8">
            Bringing People Together Through The<br className="hidden md:block" /> 
            Game And The Experiences Around It.
          </h4>
          <p className=" text-white t max-w-[500px]">
            A Close-Knit Group Of Players, Shared Tables, New Connections,
            Competitive Matches, And Stories That Stay With You Long After
            The Final Point.
          </p>
        </div>

        {/* Right Side: Call to Action */}
        <div className="w-full md:w-auto shrink-0 flex md:justify-end md:pb-2">
          <button className="bg-white text-black text-[11px] md:text-xs  uppercase py-4 px-8 w-max transition-colors hover:bg-gray-100">
            <span> Read more on the trial</span>
          </button>
        </div>
        
      </div>
      
    </section>
  );
}