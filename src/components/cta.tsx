"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted for waitlist:", email);
      setSubmitted(true);
      setEmail("");
      // In a real app, you would send this to your API
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-48 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1718fe]/10 via-transparent to-transparent pointer-events-none" />

      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1718fe]/20 bg-[#1718fe]/5">
            <span className="w-2 h-2 bg-[#1718fe] rounded-full animate-pulse" />
            <span className="text-[#1718fe] text-xs font-mono uppercase tracking-widest">Erken Erişim</span>
          </div>
        </div>

        <h2 className="text-5xl md:text-7xl font-semibold text-white mb-8 leading-[0.9] tracking-tight">
          GELECEĞİN
          <br />
          GÜVENLİĞİNE <span className="text-gray-500">KATILIN</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Sınırlı sayıda kullanıcı için erken erişim başladı. Sıranızı ayırtın ve Kisagu deneyimine ilk siz ulaşın.
        </p>

        {/* Waitlist Form */}
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="bg-[#1718fe]/10 border border-[#1718fe]/20 text-[#1718fe] px-8 py-6 rounded-lg text-center animate-fade-in-up">
              <p className="font-mono text-sm tracking-wide">TEŞEKKÜRLER! LİSTEYE EKLENDİNİZ.</p>
              <p className="text-xs mt-2 text-gray-400">Yakında sizinle iletişime geçeceğiz.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresinizi girin"
                required
                className="flex-1 px-6 py-4 rounded-none bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1718fe] focus:bg-white/10 transition-all font-mono text-sm h-14"
              />
              <Button
                type="submit"
                className="bg-[#1718fe] hover:bg-[#1718fe]/90 text-white font-medium px-8 py-4 rounded-none h-14 font-mono uppercase tracking-wide transition-all hover:px-10"
              >
                Kayıt Ol
              </Button>
            </form>
          )}
          <p className="text-xs text-gray-600 mt-6 font-mono">
            *SPAM YOK. SADECE GÜVENLİK. İSTEDİĞİNİZ ZAMAN AYRILABİLİRSİNİZ.
          </p>
        </div>
      </div>
    </section>
  );
}
