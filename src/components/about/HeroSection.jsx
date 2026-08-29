import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-fit overflow-hidden flex items-center">
      
      {/* Full Viewport Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/IMG.png"
          alt="Padel racket and ball leaning against a net"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full h-full  mx-auto flex flex-col md:flex-row">
        
        {/* Left Side: Large Brand Typography */}
        <div className="flex-1 flex items-end p-6 md:p-12 lg:p-16 pb-12 md:pb-24">
          <h1 className="NeueM text-white text-[clamp(4.5rem,11vw,9rem)] leading-[0.85] tracking-tight uppercase drop-shadow-lg">
            The<br />
            Padel<br />
            Trail
          </h1>
        </div>

        {/* Right Side: Frosted Glass Content Panel */}
        <div className="flex-1 flex items-center justify-center md:justify-end p-6 md:p-12 lg:p-16">
          <div className="w-full max-w-[550px] bg-[#1A1A1A]/40 backdrop-blur-md p-10 md:p-14 shadow-2xl">
            
            <h2 className="NeueM text-white text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight mb-6">
              The First Trail Is<br />
              Just The Beginning.
            </h2>
            
            <p className="font-sans text-white/95 text-sm md:text-base mb-12 pr-4">
              Our First Trail Is The Beginning Of A New Chapter In Sporting Travel With New 
              Destinations, New Experiences, And A Community That Grows Along The Way.
            </p>
            
            <button className="bg-white text-black text-[10px] md:text-xs  uppercase py-4 px-8 transition-colors hover:bg-gray-200">
             <span>Discover the first trail</span> 
            </button>
            
          </div>
        </div>

      </div>
    </section>
  );
}