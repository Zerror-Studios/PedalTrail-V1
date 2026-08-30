"use client"; // Required for GSAP hooks in Next.js App Router

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function EcosystemSection() {
  const carouselItems = [
    {
      id: 1,
      title: '01 // Style',
      description: 'Masters Of The Spanish Style. Tactical Insights And Equipment Designed To Elevate Your Competitive',
      url: `/images/home/C1.png`
    },
    {
      id: 2,
      title: '02 // Travel',
      description: 'Engage With The Local Padel Community. Experience Firsthand The Passion And Unique Rhythm Of Spanish Club Play.',
      url: `/images/home/C2.png`
    },
    {
      id: 3,
      title: '03 // Culture',
      description: 'Curated Architectural Deep Dives Into The Rich History And Modern Marvels.',
      url: `/images/home/C3.png`
    },
  ];

  // Duplicating the items to create the seamless infinite loop
  const loopItems = [...carouselItems, ...carouselItems];

  // GSAP Refs
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const btnRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(() => {
    // Entrance animation timeline when scrolling into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Fires when top of section reaches 80% down the screen
        once: true, // Only play once
      }
    });

    // 1. Heading slides up and fades in
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    // 2. Button slides up 
    .fromTo(
      btnRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6"
    )
    // 3. The entire marquee section fades in
    .fromTo(
      marqueeRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.6"
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      
      {/* Top Text Content */}
      {/* Added max-w-screen-xl and mx-auto to contain it on ultra-wide screens */}
      <div className="px-6 md:px-12 lg:px-10 mb-12 md:mb-20 max-w-screen-2xl mx-auto">
        <h3 
          ref={headingRef}
          // Used clamp() for fluid typography scaling perfectly from mobile to desktop
          className="NeueM text-[#1C1C1A] text-[clamp(2rem,5vw,4rem)] leading-[1.1] tracking-tight mb-8"
        >
          Sport Is Where We Start. The<br className="hidden md:block" />
          Ecosystem Is Much Bigger.
        </h3>
        <div ref={btnRef}>
          <button className="bg-[#FF6000] text-white uppercase text-sm md:text-base py-3 px-6 transition-opacity hover:opacity-90 font-medium tracking-wide">
            <span>Read more on the trial</span>
          </button>
        </div>
      </div>

      {/* Infinite Marquee Section (Right to Left) */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Swapped from-to values so it moves Right to Left */
          @keyframes marqueeLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-left {
            display: flex;
            width: max-content;
            /* 35s controls the speed. linear keeps the speed constant */
            animation: marqueeLeft 35s linear infinite;
          }
          .animate-marquee-left:hover {
            animation-play-state: paused;
          }
        `
      }} />

      <div className="w-full relative" ref={marqueeRef}>
        <div className="animate-marquee-left gap-4 md:gap-8 px-4 md:px-0">
          {loopItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              // Changed w-[300px] to w-[85vw] on mobile so it looks proportional to the screen
              className="w-[85vw] sm:w-[320px] md:w-[450px] lg:w-[550px] flex-shrink-0 flex flex-col"
            >
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] mb-5 md:mb-6 overflow-hidden bg-gray-100">
                <Image
                  src={item.url}
                  alt={`Ecosystem representation for ${item.title}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 85vw, (max-width: 768px) 320px, (max-width: 1200px) 450px, 550px"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 md:gap-3 pr-4">
                <h5 className="NeueM text-[#1C1C1A] text-lg md:text-xl font-medium">
                  {item.title}
                </h5>
                {/* Added specific font sizes and color for better mobile legibility */}
                <span className="text-sm md:text-base text-[#555555] leading-[1.6] md:max-w-[85%]">
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