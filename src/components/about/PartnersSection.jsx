"use client"; // Required for GSAP hooks in Next.js App Router

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PartnersSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);

  const partners = [
    {
      name: 'Adidas',
      logo: (
        <svg className="h-8 md:h-10 lg:h-12 w-auto fill-current" viewBox="0 0 24 24">
          <path d="M23.167 19.34L13.14 2.833h-3.411l7.85 12.923-3.69 2.083L7.766 7.421H4.355l6.702 11.02-3.69 2.083L3.411 14.15H0l5.068 8.35h18.099l.008-.838-.008-2.322z" />
        </svg>
      ),
    },
    {
      name: 'Otto Group',
      logo: (
        <span className="font-sans font-bold text-xl md:text-2xl lg:text-3xl tracking-tighter lowercase">
          otto group
        </span>
      ),
    },
    {
      name: 'Ralph Lauren',
      logo: (
        <span className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.35em] uppercase font-light text-center">
          Ralph Lauren
        </span>
      ),
    },
    {
      name: 'Laudes Foundation',
      logo: (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs md:text-sm lg:text-base font-serif tracking-wide">
            <span>Laudes</span>
            <div className="w-6 md:w-8 lg:w-12 h-[1px] bg-black"></div>
          </div>
          <span className="text-[9px] md:text-[10px] tracking-widest uppercase text-gray-700 font-sans">
            Foundation
          </span>
        </div>
      ),
    },
    {
      name: 'Norrøna',
      logo: (
        <div className="flex items-center gap-1">
          <span className="font-sans font-black tracking-wider text-sm md:text-lg lg:text-xl uppercase">
            Norrøna
          </span>
          <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z" />
          </svg>
        </div>
      ),
    },
  ];

  // GSAP ScrollTrigger Entrance Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Triggers when the section reaches 80% down the viewport
        once: true,
      }
    });

    // Heading reveal
    tl.fromTo(
      headingRef.current,
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    // Subtext reveal
    .fromTo(
      subtextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.5"
    )
    // Staggered logo reveal with slight dynamic scaling
    .fromTo(
      ".partner-logo-item",
      { y: 25, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 0.8, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power3.out" 
      },
      "-=0.4"
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-white py-16 sm:py-24 md:py-32 lg:py-36 px-6 sm:px-8 md:px-12 mx-auto overflow-hidden"
    >
      <div>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-28">
          <h3 
            ref={headingRef}
            className="NeueM text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#1C1C1A] leading-[1.15] tracking-tight max-w-xl"
          >
            Built With People Who<br className="hidden sm:block" />
            {" "}Share The Vision.
          </h3>
          <p 
            ref={subtextRef}
            className="text-xs sm:text-sm text-[#555555] max-w-[280px] leading-relaxed"
          >
            The Trail Comes To Life Through The People And Brands We Work With.
          </p>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 md:gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`partner-logo-item flex items-center justify-center w-full h-16 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                index === 4 ? 'col-span-2 sm:col-span-1' : 'col-span-1'
              }`}
            >
              {partner.logo}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}