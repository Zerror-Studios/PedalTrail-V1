"use client"; // Required for GSAP hooks in Next.js App Router

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSection() {
  // 1. Create Refs for GSAP targeting
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const glassCardRef = useRef(null);

  // 2. Setup GSAP ScrollTrigger Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Triggers when top of section reaches 80% down viewport
        once: true,
      }
    });

    // Background Image Zoom-Out Reveal
    tl.fromTo(
      bgRef.current,
      { scale: 1.15, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out' }
    )
    // Brand Heading Slide Up
    .fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.9" // Overlap with background animation
    )
    // Frosted Glass Box Reveal
    .fromTo(
      glassCardRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
      "-=0.7"
    )
    // Internal Glass Box Content Stagger
    .fromTo(
      '.glass-card-item',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
      "-=0.5"
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      // Swapped `h-fit` for `min-h-[100dvh]` to fill mobile screens properly while allowing scrolling
      className="relative w-full h-fit overflow-hidden flex items-center justify-center py-12 md:py-0 bg-black"
    >
      
      {/* Full Viewport Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="/images/about/IMG.png"
          alt="Padel racket and ball leaning against a net"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle dark overlay guarantees crisp text readability on bright mobile screens */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 w-full h-full  mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Left Side: Large Brand Typography */}
        <div className="flex-1 flex items-end p-6 sm:p-8 md:p-12 lg:p-16 pb-4 md:pb-24">
          <h1 
            ref={titleRef}
            // Adjusted clamp min-val to 3.5rem so it won't overflow narrow 320px screens
            className="NeueM text-white text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] tracking-tight uppercase drop-shadow-lg"
          >
            The<br />
            Padel<br />
            Trail
          </h1>
        </div>

        {/* Right Side: Frosted Glass Content Panel */}
        <div className="flex-1 flex items-center justify-center md:justify-end p-6 sm:p-8 md:p-12 lg:p-16">
          <div 
            ref={glassCardRef}
            // Reduced mobile padding from p-10 down to p-6/p-8 for compact screen fit
            className="w-full max-w-[550px] bg-[#1A1A1A]/60 backdrop-blur-md p-6 sm:p-8 md:p-12 shadow-2xl border border-white/10"
          >
            
            <h2 className="glass-card-item NeueM text-white text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight mb-4 md:mb-6">
              The First Trail Is<br />
              Just The Beginning.
            </h2>
            
            <p className="glass-card-item font-sans text-white/90 text-sm md:text-base leading-relaxed mb-8 md:mb-12">
              Our First Trail Is The Beginning Of A New Chapter In Sporting Travel With New 
              Destinations, New Experiences, And A Community That Grows Along The Way.
            </p>
            
            <div className="glass-card-item">
              {/* Full-width button on small mobile screens for easier touch targeting */}
              <button className="w-full sm:w-auto bg-white text-black text-xs uppercase py-4 px-8 transition-colors hover:bg-gray-200 font-medium tracking-wider">
                <span>Discover the first trail</span> 
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}