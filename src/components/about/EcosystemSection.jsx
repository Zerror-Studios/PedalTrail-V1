import React from 'react';
import Image from 'next/image';

export default function EcosystemSection() {
  const carouselItems = [
    {
      id: 1,
      title: '01 // Style',
      description: 'Masters Of The Spanish Style. Tactical Insights And Equipment Designed To Elevate Your Competitive',
      url:`/images/home/C1.png`
    },
    {
      id: 2,
      title: '02 // Travel',
      description: 'Engage With The Local Padel Community. Experience Firsthand The Passion And Unique Rhythm Of Spanish Club Play.',
       url:`/images/home/C2.png`
    },
    {
      id: 3,
      title: '03 // Culture',
      description: 'Curated Architectural Deep Dives Into The Rich History And Modern Marvels.',
       url:`/images/home/C3.png`
    },
  ];

  // Duplicating the items to create the seamless infinite loop
  const loopItems = [...carouselItems, ...carouselItems];

  return (
    <section className="w-full bg-white py-20 md:py-32 overflow-hidden">
      {/* Top Text Content */}
      <div className="  px-6  mb-16 md:mb-24">
        <h4 className="NeueM text-[#1C1C1A] text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight  mb-8">
          Sport Is Where We Start. The<br />
          Ecosystem Is Much Bigger.
        </h4>
        <button className="bg-[#FF6000] text-white  uppercase py-2 px-4 transition-opacity hover:opacity-90">
          <span>Read more on the trial</span>
        </button>
      </div>

      {/* Infinite Marquee Section (Left to Right) */}
      {/* We use inline styles for the keyframes to ensure it works without modifying tailwind.config.js */}
      <style flex="true" dangerouslySetInnerHTML={{
        __html: `
          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-right {
            display: flex;
            width: max-content;
            animation: marqueeRight 35s linear infinite;
          }
          .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        `
      }} />

      <div className="w-full relative">
        <div className="animate-marquee-right gap-6 md:gap-10 px-6">
          {loopItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="w-[300px] md:w-[450px] lg:w-[550px] flex-shrink-0 flex flex-col">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                <Image
                  src={item.url}
                  alt={`Ecosystem representation for ${item.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 450px, 550px"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3 pr-4">
                <h5 className=" NeueM text-[#1C1C1A]">
                  {item.title}
                </h5>
                <span className=" sm:max-w-[70%]">
                  {item.description}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}