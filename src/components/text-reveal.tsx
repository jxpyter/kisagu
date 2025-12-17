"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const words = textRef.current.querySelectorAll(".word");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Scrolls for 1.5 screen heights while pinned
        scrub: 1,
        pin: true, // Holds the section in place while animating
      },
    });

    tl.to(words, {
      color: "white",
      stagger: 0.1,
      filter: "blur(0px)",
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  const text = "Siber tehditler her zaman görünür değildir. Geleneksel yöntemler yetersiz kaldığında, Kisagu yapay zeka ile görünmeyeni görür.";

  return (
    <section 
      ref={containerRef} 
      className="h-screen flex items-center justify-center bg-[#050505] relative w-full"
    >
      <div 
        ref={textRef}
        className="max-w-4xl mx-auto px-6 text-4xl md:text-6xl font-medium text-center leading-tight lg:leading-tight"
      >
        {text.split(" ").map((word, i) => (
          <span 
            key={i} 
            className="word inline-block mr-3 text-white/20 blur-sm transition-colors duration-500"
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}
