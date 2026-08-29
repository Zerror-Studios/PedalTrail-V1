import Image from 'next/image';

const trailItems = [
  {
    title: 'The Game',
    description: 'Padel Should Be Competitive But Respectful. We Prioritize Sportsmanship And The Joy Of A Hard-Fought Rally Over Simple Victory.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
  },
  {
    title: 'The People',
    description: 'A Trip Is Only As Good As The Company. We Curate Our Fields To Ensure A Mix Of Interesting, Like-Minded Individuals.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: 'The Place',
    description: 'Environment Dictates Mood. We Choose Locations That Inspire, Relax, And Offer A Sense Of Quiet Luxury Away From The Crowds.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
  },
  {
    title: 'The Details',
    description: "It's The Small Things That Elevate An Experience. From The Quality Of The Balls To The Post-Match Espresso, Nothing Is Overlooked.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <line x1="7.05" y1="7.05" x2="16.95" y2="16.95"></line>
        <line x1="7.05" y1="16.95" x2="16.95" y2="7.05"></line>
      </svg>
    ),
  },
];

export default function TrailDetailsSection() {
  return (
    <section className="relative w-full min-h-screen py-24 md:py-32 px-6 lg:px-10 overflow-hidden flex justify-center">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/the-trail/BG_11.png"
          alt="Orange textured background with shadows"
          fill
          className="object-cover object-center scale-[1.5]"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full  flex flex-col">
        
        {/* Headline */}
        <h4 className="NeueM text-white text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] mb-16 md:mb-24">
          The Game Is Only<br />
          Part Of Trail
        </h4>

        {/* List Items */}
        <div className="flex flex-col border-b-2 border-white">
          {trailItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row md:items-center py-10 md:py-8 border-t-2 border-white gap-6 md:gap-12"
            >
              {/* Icon and Title (Left Column) */}
              <div className="flex items-center gap-6 md:w-[35%] shrink-0">
                <div className="w-12 h-12 rounded-full border border-white/80 flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <h5 className="NeueM  text-white text-xl md:text-2xl tracking-wide">
                  {item.title}
                </h5>
              </div>

              {/* Description (Right Column) */}
              <div className="md:w-[65%]">
                <p className=" text-white text-sm md:text-base opacity-95">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}