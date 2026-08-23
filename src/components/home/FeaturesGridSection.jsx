"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        x: "100vw",
        opacity: 0,
      });

      gsap.to(cards, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "none",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 110%",
          toggleActions: "play none none reverse",
          // markers: true, // uncomment while debugging
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative text-white mb-[10vh] h-fit px-5 md:px-10 flex items-center mt-auto justify-center overflow-hidden">
      {/* <div className="absolute inset-0 bg-black/50 -z-10" /> */}

      {/* Grid Container */}
      <div
        ref={containerRef}
        className="mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`relative flex flex-col justify-between p-8 sm:h-[420px] max-sm:5/4 transition-transform duration-300 hover:-translate-y-2 will-change-transform ${
              card.isOrange
                ? "bg-[#ff3b00] text-white"
                : "bg-[#161d24]/90 backdrop-blur-md border border-neutral-700/50 text-white"
            }`}
          >
            {/* Top Section */}
            <div>
              <div className="text-xl md:text-2xl font-light NeueM tracking-wide mb-6">
                {card.id} {card.id !== "WINNER" ? "/ " : "→ "} {card.title}
              </div>
            </div>

            {/* Bottom Description */}
            <div>
              <p className="Inter text-neutral-200">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}