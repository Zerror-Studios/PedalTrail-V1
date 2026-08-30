"use client"; // Required for GSAP in Next.js App Router

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

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
  // GSAP Refs
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const headlineRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // Triggers when the top of the section reaches 75% down the viewport
        once: true, // Animation only plays once
      }
    });

    // 1. Background subtly zooms into resting state
    tl.fromTo(
      bgRef.current,
      { scale: 1.6, opacity: 0 },
      { scale: 1.5, opacity: 1, duration: 1.5, ease: 'power3.out' }
    )
    // 2. Headline slides up and fades in
    .fromTo(
      headlineRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=1" // Overlap with background animation
    )
    // 3. List items cascade in one by one using a class selector and stagger
    .fromTo(
      '.trail-item',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      "-=0.6" // Overlap with headline
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-[100dvh] py-20 md:py-32 px-5 lg:px-12 overflow-hidden flex justify-center bg-[#bd4d18]" // Added a fallback background color
    >
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          ref={bgRef}
          src="/images/the-trail/BG_11.png"
          alt="Orange textured background with shadows"
          fill
          className="object-cover object-center scale-[1.5]"
          priority
        />
        {/* Optional: Add a dark overlay gradient if text readability ever becomes an issue */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
      </div>

      {/* Content Overlay */}
      {/* Added max-w-7xl and mx-auto so content doesn't stretch infinitely on huge monitors */}
      <div className="relative z-10 w-full  mx-auto flex flex-col justify-center px-5">
        
        {/* Headline */}
        <h3 
          ref={headlineRef}
          // Changed static sizes to clamp() for smooth mobile-to-desktop scaling
          className="NeueM text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] mb-12 md:mb-20 max-w-3xl"
        >
          The Game Is Only<br />
          Part Of Trail
        </h3>

        {/* List Items Container */}
        {/* Lowered border opacity slightly to white/30 so it looks more elegant against the background */}
        <div className="flex flex-col border-b border-white/40">
          {trailItems.map((item, index) => (
            <div 
              key={index} 
              // Added "trail-item" class to target them easily with GSAP
              className="trail-item flex flex-col md:flex-row md:items-center py-8 md:py-10 border-t border-white/40 gap-4 md:gap-12"
            >
              {/* Icon and Title (Left Column) */}
              <div className="flex items-center gap-5 md:w-[40%] lg:w-[35%] shrink-0">
                {/* Ensure icon wrapper doesn't shrink on mobile */}
                <div className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <h5 className="NeueM text-white text-xl md:text-2xl lg:text-3xl tracking-wide">
                  {item.title}
                </h5>
              </div>

              {/* Description (Right Column) */}
              <div className="md:w-[60%] lg:w-[65%] pl-[68px] md:pl-0">
                {/* On mobile, added left padding (pl-[68px]) so text aligns nicely with the title, bypassing the icon */}
                <p className="text-white/90 text-[15px] md:text-base lg:text-lg leading-[1.6]">
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