"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex justify-center ${
        mounted && scrolled
          ? "top-6"
          : "top-0"
      }`}
    >
      <div 
        className={`px-8 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          mounted && scrolled
             ? "w-[90%] md:w-[70%] max-w-[1400px] py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
             : "w-full max-w-[1400px] py-8 border-b border-white/5 bg-transparent backdrop-blur-[2px]"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#1718fe] flex items-center justify-center text-white shadow-[0_0_20px_rgba(23,24,254,0.3)]">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <span className="text-xl font-medium text-white tracking-tight">Kisagu</span>
        </Link>

        {/* Navigation - Centered Absolute */}
        <nav className="hidden md:flex items-center gap-12 font-mono text-xs tracking-wide absolute left-1/2 -translate-x-1/2">
          <Link href="/about" className="text-gray-400 hover:text-[#1718fe] transition-colors uppercase">
            Hakkımızda
          </Link>
          <Link href="/blog" className="text-gray-400 hover:text-[#1718fe] transition-colors uppercase">
            Blog
          </Link>
          <Link href="/features" className="text-gray-400 hover:text-[#1718fe] transition-colors uppercase">
            Özellikler
          </Link>
          <Link href="/pricing" className="text-gray-400 hover:text-[#1718fe] transition-colors uppercase">
            Fiyatlandırma
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <Link 
            href="/login" 
            className="text-gray-400 hover:text-white transition-colors uppercase tracking-wide hidden sm:block"
          >
            Giriş Yap
          </Link>
          <Button
            asChild
            className="bg-[#1718fe] hover:bg-[#1718fe]/90 text-white rounded-none px-6 py-5 uppercase tracking-wide shadow-[0_0_20px_rgba(23,24,254,0.4)] hover:shadow-[0_0_30px_rgba(23,24,254,0.6)] transition-all"
          >
            <Link href="/signup">ERKEN ERİŞİM</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
