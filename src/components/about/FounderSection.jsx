"use client"; // Required for GSAP hooks in Next.js App Router

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FounderSection() {
  // 1. Create refs for the container and the elements to animate
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const profileRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);

  // 2. Set up the GSAP ScrollTrigger animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // Triggers when the top of this section hits 75% down the viewport
        once: true, // Only plays the animation once
      },
    });

    // Heading animation
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    // Profile block animation
    .fromTo(
      profileRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      "-=0.6" // Overlap with previous animation
    )
    // Two-column text stagger animation
    .fromTo(
      [textLeftRef.current, textRightRef.current],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
      "-=0.6"
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#F6F5F2] py-20 md:py-32 px-6 flex flex-col items-center overflow-hidden"
    >
      <div className="container max-w-[1000px] mx-auto flex flex-col items-center">
        
        {/* Main Heading */}
        {/* Added fluid clamp() sizing so it scales smoothly from mobile to desktop */}
        <h3 
          ref={headingRef}
          className="NeueR text-center text-[#1C1C1A] mb-10 max-w-[800px] mx-auto text-[clamp(1.75rem,5vw,3rem)] leading-[1.2] md:leading-[1.1]"
        >
          We Wanted To Create<br />
          Something More Than A<br />
          Tournament.
        </h3>

        {/* Profile/Author Block */}
        <div 
          ref={profileRef}
          className="flex items-center gap-4 mb-16 md:mb-28"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-300 relative shrink-0">
             {/* Swapped to next/image for better performance and consistency */}
            <Image 
              src="/images/about/PROFIL.jpg" 
              alt="Mateo Alvarez" 
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 48px, 56px"
            />
          </div>
          <div className="flex flex-col">
            <span className="NeueM text-[#1C1C1A] text-sm md:text-base leading-tight">
              Mateo Alvarez
            </span>
            <span className="Inter text-[#767676] text-xs md:text-sm mt-0.5">
              Founder, The Padel Trail
            </span>
          </div>
        </div>

        {/* Two-Column Text Block */}
        {/* Automatically stacks on mobile, splits to 2 columns on medium screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full text-[#555555]">
          <p 
            ref={textLeftRef}
            className="Inter text-sm md:text-base leading-[1.6]"
          >
            The Padel Trail Is A Curated Sporting Experience Built Around One
            Simple Idea: The Game Is Only Part Of The Journey. We Bring Together
            32 Players, Selected In Pairs, And Take Them Somewhere Worth
            Discovering. Across The Court And Beyond It,
          </p>
          <p 
            ref={textRightRef}
            className="Inter text-sm md:text-base leading-[1.6]"
          >
            Every Part Of The Experience Is Thoughtfully Considered From The
            Competition And The Place To The People And The Moments In
            Between. It Is Competitive When It Needs To Be, Relaxed When It Should
            Be, And Always Designed To Feel Like More Than Another Week Away.
          </p>
        </div>

      </div>
    </section>
  );
}