"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Template({ children }) {
  useEffect(() => {
    // When the template mounts (new route loaded), animate the overlay sliding down/away
    const tl = gsap.timeline({
      onComplete: () => {
        // Reset overlay to bottom for the next transition
        gsap.set("#transition-overlay", { y: "100%" });
        // Reset logo to hidden state
        gsap.set("#transition-logo", { opacity: 0, scale: 0.75 });
      }
    });

    tl.to("#transition-overlay", {
      y: "-100%",
      duration: 0.6,
      ease: "power3.inOut",
      delay: 0.1, // Slight delay to ensure new page content is rendered
    });
  }, []);

  return <>{children}</>;
}
