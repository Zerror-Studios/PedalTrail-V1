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
    <section className="bg-white text-black min-h-screen py-16  overflow-hidden flex flex-col justify-between gap-[20vh] pt-[10vh]">
      <div className="px-5 flex flex-col gap-5">
        <h3 className="NeueM  ">
          COME FOR THE GAME. <span className=" text-[#6E6E6E]">STAY </span>
          <br /> <span className=" text-[#6E6E6E]">FOR EVERYTHING ELSE.</span>
        </h3>
        <p className="Inter font-light! capitalize">
          We believe padel is more than just a sport; it's a vehicle for <br />
          connection, travel, and unforgettable experiences. The Trail is <br />
          designed to seamlessly blend intense competition with world- <br />
          class hospitality and cultural immersion.
        </p>
      </div>

      {/* Infinite Marquee Image Container */}
      <div className="w-full overflow-hidden relative">
        <div ref={marqueeRef} className="flex gap-2 w-max">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex flex-col w-1/2  shrink-0 group">
              {/* Top Text label */}
              <div className="text-xs md:text-sm Inter tracking-wider  mb-3 uppercase">
                {item.topText}
              </div>
              {/* Image box */}
              <div className="relative w-full aspect-5/4 overflow-hidden bg-neutral-100 ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
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
