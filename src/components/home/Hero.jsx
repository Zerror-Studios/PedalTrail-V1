"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { RiVolumeUpLine, RiVolumeMuteLine, RiArrowDownSLine } from "@remixicon/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const introOverlayRef = useRef(null);
  const finalContentRef = useRef(null);

  // States: 'initial', 'playing', 'ended'
  const [introState, setIntroState] = useState("initial");
  const [isMuted, setIsMuted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const remaining = videoRef.current.duration - videoRef.current.currentTime;
      if (!isNaN(remaining)) {
        setTimeLeft(Math.ceil(remaining));
      }
    }
  };

  useEffect(() => {
    let lenisCheckInterval;

    // Lock scroll if not ended
    if (introState !== "ended") {
      document.body.style.overflow = "hidden";

      if (window.lenis) {
        window.lenis.stop();
      } else {
        // Poll for lenis to be initialized by LenisScroll component
        lenisCheckInterval = setInterval(() => {
          if (window.lenis) {
            window.lenis.stop();
            clearInterval(lenisCheckInterval);
          }
        }, 50);
      }
    } else {
      document.body.style.overflow = "auto";
      if (window.lenis) window.lenis.start();
    }

    return () => {
      document.body.style.overflow = "auto";
      if (window.lenis) window.lenis.start();
      if (lenisCheckInterval) clearInterval(lenisCheckInterval);
    };
  }, [introState]);

  const handlePlayVideo = (muted) => {
    setIsMuted(muted);
    setIntroState("playing");

    // Animate out the intro overlay
    gsap.to(introOverlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        if (videoRef.current) {
          videoRef.current.muted = muted;
          videoRef.current
            .play()
            .catch((e) => console.error("Video play failed:", e));
        }
      },
    });
  };

  const handleSkip = () => {
    setIntroState("ended");
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration || 100;
      videoRef.current.pause();
    }
    showFinalContent();
  };

  const handleVideoEnded = () => {
    setIntroState("ended");
    showFinalContent();
  };

  const showFinalContent = () => {
    // Reveal the final text and bottom bar
    gsap.fromTo(
      finalContentRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".center-text-item",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );

    gsap.fromTo(
      ".bottom-bar-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
        ease: "power3.out",
      }
    );
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Parallax effect on the video/background
  useEffect(() => {
    if (introState === "ended") {
      const ctx = gsap.context(() => {
        gsap.to(videoRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, heroRef);
      return () => ctx.revert();
    }
  }, [introState]);

  // Initial Overlay Animation
  useEffect(() => {
    if (introState === "initial") {
      gsap.fromTo(
        ".intro-anim-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full min-h-svh flex relative overflow-hidden bg-black"
    >
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-1 overflow-hidden">
        <video
          ref={videoRef}
          src="/video/PTVIDEO.mp4"
          className="w-full h-full object-cover object-center origin-center"
          playsInline
          onEnded={handleVideoEnded}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
        />
      </div>

      {/* Controls: Skip & Mute */}
      {introState === "playing" && (
        <div className="absolute bottom-5 right-10 sm:bottom-10 sm:right-10 z-50 flex items-center gap-3">
          <button
            onClick={handleSkip}
            className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-5 py-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer text-xs sm:text-sm tracking-wider uppercase Inter"
          >
            <span>Skip</span>
            <span className="opacity-60">|</span>
            <span className="opacity-80 font-mono">
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </span>
          </button>

          <button
            onClick={toggleMute}
            className="text-white bg-black/30 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            {isMuted ? (
              <RiVolumeMuteLine size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <RiVolumeUpLine size={20} className="sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      )}

      {/* Initial Intro Overlay */}
      <div
        ref={introOverlayRef}
        className={`absolute top-0 left-0 w-full h-full z-40 flex flex-col justify-center items-center bg-black/40 backdrop-blur-md px-5 transition-opacity duration-500 ${introState !== "initial" ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
      >
        <h1 className="intro-anim-item text-white NeueR text-4xl sm:text-6xl md:text-8xl tracking-wider mb-2 text-center opacity-0">
          THE PADEL TRAIL
        </h1>
        <p className="intro-anim-item text-white/80 Inter text-sm sm:text-base md:text-lg mb-10 tracking-widest uppercase font-light text-center opacity-0">
          Continue this Experience With
        </p>

        <div className="intro-anim-item flex flex-col sm:flex-col gap-4 items-center opacity-0">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => handlePlayVideo(false)}
              className="w-48 sm:w-auto px-8 py-3 bg-[#FF6D35] text-white Inter text-[0.8rem] uppercase tracking-wider hover:bg-[#e95c24] transition-colors duration-300 cursor-pointer"
            >
              Sound On
            </button>
            <button
              onClick={() => handlePlayVideo(true)}
              className="w-48 sm:w-auto px-8 py-3 bg-transparent border border-white/30 text-white Inter text-[0.8rem] uppercase tracking-wider hover:bg-white/10 transition-colors duration-300 cursor-pointer"
            >
              Sound Off
            </button>
          </div>
        </div>
      </div>

      {/* Final Content Container */}
      <div
        ref={finalContentRef}
        className={`w-full h-full absolute top-0 left-0 z-20 ${introState === "ended"
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Center-Info */}
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col text-center px-6 pointer-events-none">
          <span className="center-text-item Inter text-white text-[0.7rem] sm:text-[0.85rem] md:text-[1rem] drop-shadow-md">
            SEASON 01 · SPAIN · AUTUMN 2026
          </span>
          <h1 className="center-text-item text-white NeueR drop-shadow-lg">
            THE PADEL TRAIL
          </h1>
        </div>

        {/* Bottom-Info-Bar */}
        <div className="w-full absolute bottom-0 left-0 p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 pointer-events-auto">
          {/* Additional-Info-Left */}


          {/* Additional-Info-Right */}
          <div className="bottom-bar-item flex flex-col items-center justify-center uppercase mx-auto text-white Inter text-[0.75rem] sm:text-[0.8rem] leading-[0.9rem] font-thin! sm:text-right drop-shadow-md">
            <span className="mb-1">SCROLL</span>
            <div className="animate-bounce">
              <RiArrowDownSLine size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
