"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "99.9%", label: "Tehdit Tespit", suffix: "Oranı" },
  { value: "<15sn", label: "Ortalama", suffix: "Müdahale" },
  { value: "500+", label: "Kurumsal", suffix: "Müşteri" },
  { value: "7/24", label: "Otonom", suffix: "Koruma" },
];

const steps = [
  {
    number: "01",
    title: "Entegrasyon",
    description: "Agentless veya lightweight-agent mimarisi ile sunucularınıza, Cloud API'lerinize ve WAF loglarınıza saniyeler içinde bağlanır.",
  },
  {
    number: "02",
    title: "Heuristik Analiz",
    description: "Toplanan veriler, imza tabanlı olmayan davranışsal AI modellerimizle işlenir. Zero-day ve anomali tabanlı tehditler reel zamanda tespit edilir.",
  },
  {
    number: "03",
    title: "Otonom Mitigasyon",
    description: "SOAR yetenekleriyle; Firewall kuralları güncellenir, zararlı IP'ler bloklanır ve riskli oturumlar (session kills) sonlandırılır.",
  },
  {
    number: "04",
    title: "Feedback Loop",
    description: "Her olaydan öğrenen modeller (Reinforcement Learning), yanlış pozitif oranını düşürerek güvenlik duruşunuzu sürekli optimize eder.",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-32 px-6"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-700`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-medium text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label} <span className="text-gray-500">{stat.suffix}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className={`max-w-3xl mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-[#1718fe] text-xs mb-4 uppercase">/ NASIL ÇALIŞIR</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            Dört adımda <span className="text-gradient-orange">tam koruma</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 3) * 150}ms` }}
            >
              {/* Step number */}
              <div className="text-7xl font-bold text-white/5 mb-4">
                {step.number}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-medium text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-12 h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
