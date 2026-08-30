"use client"; // Required in Next.js App Router when using hooks like useRef/useGSAP

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register the useGSAP hook (best practice for React 18+)
gsap.registerPlugin(useGSAP);

// Replicating the custom color from your CSS
const colors = {
  blueCourt: '#003e8c',
  headline: '#212121',
  bodyText: '#1c1c1c',
};

export default function PadelHeroPage() {
  // 1. Create refs for the elements we want to animate
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const headlineRef = useRef(null);
  const textRef = useRef(null);

  // 2. Set up the GSAP animation timeline
  useGSAP(() => {
    const tl = gsap.timeline();

    // Background Image: Slight zoom out and fade in
    tl.fromTo(
      bgRef.current,
      { scale: 1.15, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
    )
    // Headline: Slide up and fade in (overlaps with background animation)
    .fromTo(
      headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
      "-=0.8" // Starts 0.8 seconds before the previous animation finishes
    )
    // Body Text: Slide up and fade in (overlaps with headline animation)
    .fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=0.8"
    );
  }, { scope: containerRef }); // Scope isolates these animations to this component

  return (
    <main 
      ref={containerRef} 
      className="relative w-full h-[100dvh] min-h-[500px] overflow-hidden font-sans bg-black"
    >
      
      {/* Background Image Container */}
      <div ref={bgRef} className="absolute inset-0 z-0 origin-center">
        <Image
          src="/images/about/ABOUTHS.png"
          alt="Padel player on blue court"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-90" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-end md:grid md:grid-cols-12 h-full w-full mx-auto p-6 sm:p-8 md:p-12 lg:p-16 gap-6 md:gap-0 md:items-end">
        
        {/* Main Headline */}
        <div className="md:col-span-7 lg:col-span-6 md:pb-16 lg:pb-20 md:self-end">
          <h3 
            ref={headlineRef}
            className="NeueM text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] font-medium tracking-tight text-white/95"
          >
            MORE THAN A GAME.
            <br />
            A TRAIL WORTH
            <br />
            TAKING.
          </h3>
        </div>

        {/* Small Body Paragraph */}
        <div className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9 flex justify-start md:justify-end md:pb-12 md:self-end">
          <p 
            ref={textRef}
            className="text-sm md:text-base leading-relaxed text-white/90 text-left md:text-left w-full max-w-[350px] md:max-w-none"
          >
            The Padel Trail Brings Together People Who Love The Game And Want To Experience It Differently - Through Considered Competition, Exceptional Destinations, And Time Well Spent Together.
          </p>
        </div>
        
      </div>
    </main>
  );
}