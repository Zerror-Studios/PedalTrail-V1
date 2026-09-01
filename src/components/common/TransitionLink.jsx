"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

export default function TransitionLink({ href, children, onClick, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = (e) => {
    // If the user clicks a link to the page they are already on, do not trigger transition.
    if (pathname === href) {
      if (onClick) onClick(e);
      return;
    }

    e.preventDefault();

    const tl = gsap.timeline({
      onComplete: () => {
        // Call any existing onClick handler (like closing a mobile menu)
        // after the overlay has fully covered the screen
        if (onClick) {
          onClick(e);
        }
        router.push(href);
      },
    });

    // Animate the overlay sliding up
    tl.to("#transition-overlay", {
      y: "0%",
      duration: 0.6,
      ease: "power3.inOut",
    })
      // Animate the logo scaling up, fading in, and rotating slightly
      .fromTo("#transition-logo", {
        opacity: 0,
        scale: 0.5,
        rotation: -45,
      }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      }, "-=0.3");
  };

  return (
    <Link href={href} onClick={handleTransition} {...props}>
      {children}
    </Link>
  );
}
