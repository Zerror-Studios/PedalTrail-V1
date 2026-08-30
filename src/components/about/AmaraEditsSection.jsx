"use client"; // Required for Next.js App Router when using GSAP/refs

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AmaraEditsSection() {
  // 1. Create Refs for GSAP targeting
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  // 2. Setup ScrollTrigger Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // Triggers when the section is 75% visible in viewport
        once: true,
      }
    });

    // Eyebrow and Heading fade/slide up
    tl.fromTo(
      eyebrowRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo(
      headingRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.4"
    )
    // Divider animates its width (scales from left to right)
    .fromTo(
      dividerRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.5"
    )
    // Paragraphs cascade in using a shared class
    .fromTo(
      '.amara-text',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
      "-=0.4"
    )
    // Image container fades in while image subtly scales down (parallax-like elegant reveal)
    .fromTo(
      imageContainerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      "-=0.8"
    )
    .fromTo(
      imageRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 1.5, ease: 'power3.out' },
      "-=1"
    );
  }, { scope: sectionRef });

  return (
    <main 
      ref={sectionRef}
      // Used min-h-[100dvh] to ensure standard full height on mobile browsers (Safari URL bar fix)
      className="min-h-[100dvh] bg-white flex flex-col lg:flex-row items-center justify-between w-full overflow-hidden"
    >
      
      {/* Left Column: Text Content */}
      {/* Fixed mobile padding. Scaled padding from px-6 on mobile up to large padding on desktop */}
      <div className="w-full lg:w-1/2 px-6 py-16 md:px-10 lg:py-24 lg:pl-16 xl: flex flex-col justify-start">
        
        {/* Eyebrow text */}
        <span 
          ref={eyebrowRef}
          className="text-[#E08565] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4"
        >
          Amara Edits
        </span>
        
        {/* Main Heading */}
        <h3 
          ref={headingRef}
          // Added clamp() to smoothly scale text size between mobile and desktop without rigid breakpoints
          className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] NeueM text-[#2C2C2C] mb-8"
        >
          The World behind <br className="hidden md:block" />
          The Padel trial.
        </h3>
        
        {/* Accent Divider Line */}
        <div 
          ref={dividerRef}
          className="w-12 h-[2px] bg-[#E08565] mb-8"
        ></div>
        
        {/* Paragraphs */}
        <div className="space-y-6 text-[#6B6B6B] text-base md:text-lg max-w-[500px] leading-relaxed">
          <p className="amara-text">
            The Padel Trail Is Part Of Amara Edits, A Company Creating Considered 
            Experiences Across Travel, Sport, Culture, And Hospitality. We Believe 
            The Way An Experience Comes Together Matters Just As Much As 
            Where It Takes You.
          </p>
          <p className="amara-text">
            From The Destination And The Details To The People And The Pace, 
            Every Experience Is Shaped With Intention. Amara Edits Brings This 
            Philosophy To Every Project, Creating Experiences That Feel Thoughtful, 
            Authentic, And Worth Remembering.
          </p>
        </div>
      </div>

      {/* Right Column: Image */}
      {/* Normalized padding for mobile. Centered gracefully. */}
      <div className="w-full lg:w-1/2 px-6 pb-16 md:px-12 lg:py-24 lg:pr-16 xl:pr-24 flex justify-center items-center">
        <div 
          ref={imageContainerRef}
          // Changed to relative container to support Next.js <Image /> component
          className="w-full relative shadow-sm overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[85vh]"
        >
          {/* Swapped standard <img> for Next.js <Image /> for automated optimization */}
          <Image 
            ref={imageRef}
            src="/images/about/AGI.png" 
            alt="Indoor Padel Court with wooden aesthetics" 
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
      
    </main>
  );
}