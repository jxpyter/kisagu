"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial states to prevent FOUC
    gsap.set([badgeRef.current, titleRef.current, ".hero-text"], { 
      autoAlpha: 0, 
      y: 50
    });
    
    // Buttons are already opacity-0 via CSS to prevent FOUC
    // We just set their initial Y position here
    gsap.set(".hero-btn", { y: 20 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out", force3D: true } });

    tl.to(badgeRef.current, {
      y: 0,
      autoAlpha: 1,
      duration: 1, // Slightly increased duration for smoother power3 ease
      delay: 0.1,
    })
      .to(titleRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 1.2,
      }, "-=0.8")
      .to(".hero-text", {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.05,
      }, "-=0.9")
      .to(".hero-btn", {
        y: 0,
        autoAlpha: 1, // GSAP handles opacity: 1 and visibility: visible
        duration: 0.8,
        stagger: 0.1,
      }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20"
    >
      {/* Premium Background Ambience */}
      <div className="absolute inset-0 bg-[#050505]">
        {/* Grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:96px_96px] opacity-20" />
        
        {/* Spotlights */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1718fe]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-700" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#a371f7]/20 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent blur-3xl opacity-30" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div 
          ref={badgeRef}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-12"
        >
          <span className="w-2 h-2 bg-[#1718fe] rounded-full animate-pulse" />
          <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            7/24 Otonom Sistem
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white mb-10 leading-[1.1]"
        >
          OTONOM
          <br />
          <span className="text-gray-500">GÜVENLİK</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-text text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
          Analiste ihtiyaç duymayan, kendi kendine karar veren ve uygulayan
          <br className="hidden md:block" /> yeni nesil yapay zeka güvenlik asistanı.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Button
            asChild
            className="hero-btn opacity-0 bg-[#1718fe] hover:bg-[#1718fe]/90 text-white min-w-[200px] h-14 text-sm font-mono uppercase tracking-widest rounded-none shadow-[0_0_20px_rgba(23,24,254,0.4)] hover:shadow-[0_0_30px_rgba(23,24,254,0.6)] transition-all"
          >
            <Link href="/signup">
              Ücretsiz Başla
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="hero-btn opacity-0 border-white/10 hover:bg-white/5 hover:text-white text-gray-400 min-w-[200px] h-14 text-sm font-mono uppercase tracking-widest rounded-none bg-transparent transition-all hover:border-[#1718fe]/50"
          >
            <Link href="/features">
              Sistemi İncele
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
