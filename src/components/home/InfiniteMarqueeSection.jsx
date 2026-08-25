"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const items = [
  {
    topText: "9 DAYS",
    title: "MADRID CITYSCAPE",
    image: "/images/home/B1.png",
  },
  {
    topText: "8 MATCHES",
    title: "PARK CITADEL",
    image: "/images/home/B2.png",
  },
  {
    topText: "4 STAGES",
    title: "ARCHITECTURAL WONDER",
    image: "/images/home/B3.png",
  },
];

export default function InfiniteMarqueeSection() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Duplicate content seamlessly for infinite loop effect
    const content = marquee.innerHTML;
    marquee.innerHTML += content;

    const totalWidth = marquee.scrollWidth / 2;

    const tween = gsap.to(marquee, {
      x: `-=${totalWidth}`,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <section className="bg-white text-black min-h-screen py-10 sm:py-14 overflow-hidden flex flex-col justify-between gap-12 pt-[6vh] sm:pt-[8vh]">
      <div className="px-5 md:px-10 flex flex-col gap-4">
        <div className="NeueM text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight">
          <h3>Come For The Game.Stay</h3>
          <h3 className="text-[#2e2e2e]">For Everything Else.</h3>
        </div>
        <p className="Inter font-light capitalize max-w-xl text-xs sm:text-sm text-neutral-800 leading-relaxed">
          We Believe Padel Is More Than Just A Sport; It's A Vehicle For Connection, Travel, <br className="hidden md:block" />
          And Unforgettable Experiences. The Trail Is Designed To Seamlessly Blend <br className="hidden md:block" />
          Intense Competition With World- Class Hospitality And Cultural Immersion.
        </p>
      </div>

      {/* Infinite Marquee Image Container */}
      <div className="w-full overflow-hidden relative">
        <div ref={marqueeRef} className="flex gap-3 w-max">
          {[...items, ...items].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col w-[70vw] sm:w-[45vw] md:w-[31vw] shrink-0 group"
            >
              {/* Top Text label */}
              <div className="text-[11px] sm:text-xs Inter tracking-wider mb-2 uppercase text-neutral-700">
                {item.topText}
              </div>
              {/* Image box - Height controlled with standard landscape aspect ratio */}
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 70vw, (max-width: 1200px) 45vw, 31vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}