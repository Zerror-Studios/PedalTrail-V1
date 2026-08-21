"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const cardsData = [
  {
    id: "01",
    title: "COACHING",
    description: "Train With Experienced Padel Coaches In A Focused Session Designed Around Your Game.",
    isOrange: false,
  },
  {
    id: "02",
    title: "LOCAL PLAYER",
    description: "Step Onto The Court With Local Players And Experience Padel The Spanish Way.",
    isOrange: false,
  },
  {
    id: "03",
    title: "KNOCKOUT",
    description: "From Quarter-Finals To The Final, Every Match Takes You One Step Closer To The Win.",
    isOrange: false,
  },
  {
    id: "WINNER",
    title: "SEASON 2",
    description: "Win The Final And Earn Your Place In The Next Edition Of The Padel Trail.",
    isOrange: true,
  },
];

export default function FeaturesGridSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative  text-white  mb-[10vh] h-fit px-5 md:px-10 flex items-center mt-auto justify-center overflow-hidden">
      {/* Background Court / Visual Overlay Mock */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 -z-10"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1600&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Grid Container */}
      <div ref={containerRef} className=" mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between p-8 h-[420px] transition-transform duration-300 hover:-translate-y-2 ${
              card.isOrange 
                ? "bg-[#ff3b00] text-white" 
                : "bg-[#161d24]/90 backdrop-blur-md border border-neutral-700/50 text-white"
            }`}
          >
            {/* Top Section */}
            <div>
              <div className="text-xl md:text-2xl font-light NeueM  tracking-wide mb-6">
                {card.id} {card.id !== "WINNER" ? "/ " : "→ "} {card.title}
              </div>
            </div>

            {/* Bottom Description */}
            <div>
              <p className="Inter text-neutral-200">
                {card.description}
              </p>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  );
}