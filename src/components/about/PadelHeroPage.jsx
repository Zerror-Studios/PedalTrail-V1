import Image from 'next/image';


// Replicating the custom color from your CSS
const colors = {
  blueCourt: '#003e8c', // Approximated court color
  headline: '#212121', // Dark grey/black for headline
  bodyText: '#1c1c1c', // Slightly lighter body text
};

export default function PadelHeroPage() {
  return (
    <main className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/ABOUTHS.png" // Place your image file here
          alt="Padel player on blue court"
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="opacity-95" // Slight opacity for text contrast
        />
        
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 grid h-full w-full mx-auto p-8 md:p-12 lg:p-16 grid-cols-12 gap-6 items-end">
        {/* Main Headline (Left, Mid-Bottom) */}
        <div className="col-span-12 md:col-span-7 lg:col-span-6 pb-20 self-end">
          <h3 className="NeueM text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] font-medium tracking-tight text-white/95">
            MORE THAN A GAME.
            <br />
            A TRAIL WORTH
            <br />
            TAKING.
          </h3>
        </div>

        {/* Small Body Paragraph (Right, Bottom) */}
        <div className="col-span-12 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9 flex justify-end pb-12 self-end">
          <p className=" text-sm md:text-base leading-relaxed text-white max-w-[320px] text-right md:text-left md:max-w-none">
            The Padel Trail Brings Together People Who Love The Game And Want To Experience It Differently - Through Considered Competition, Exceptional Destinations, And Time Well Spent Together.
          </p>
        </div>
      </div>
    </main>
  );
}