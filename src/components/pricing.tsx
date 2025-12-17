"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Başlangıç",
    price: "₺7999",
    period: "/ay",
    description: "Küçük işletmeler için",
    features: [
      "5 cihaza kadar koruma",
      "Temel tehdit algılama",
      "E-posta bildirimleri",
      "7/24 destek",
    ],
    popular: false,
  },
  {
    name: "Profesyonel",
    price: "₺14999",
    period: "/ay",
    description: "Büyüyen işletmeler için",
    features: [
      "25 cihaza kadar koruma",
      "Gelişmiş AI tehdit analizi",
      "Gerçek zamanlı bildirimler",
      "Öncelikli destek",
      "API erişimi",
      "Özel entegrasyonlar",
    ],
    popular: true,
  },
  {
    name: "Kurumsal",
    price: "Özel",
    period: "fiyat",
    description: "Büyük kurumlar için",
    features: [
      "Sınırsız cihaz koruma",
      "En gelişmiş AI modelleri",
      "Dedicated güvenlik uzmanı",
      "SLA garantisi",
      "On-premise seçeneği",
    ],
    popular: false,
  },
];

export function Pricing() {
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
      id="pricing"
      className="relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-[#1718fe] text-sm font-medium uppercase tracking-widest mb-4">/ Fiyatlandırma</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            Basit ve <span className="text-[#1718fe]">şeffaf</span> fiyatlar
          </h2>
          <p className="text-lg text-gray-400">
            14 gün ücretsiz deneyin. Kredi kartı gerekmez.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl transition-all duration-500 flex flex-col ${
                plan.popular 
                  ? "bg-[#0a0a0a] border border-[#1718fe] shadow-[0_0_40px_rgba(23,24,254,0.15)] scale-105 z-10" 
                  : "bg-[#0a0a0a] border border-white/5 hover:border-[#1718fe]/50"
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1718fe] text-white text-xs font-medium rounded-full shadow-[0_0_20px_rgba(23,24,254,0.4)]">
                  En Popüler
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-1 text-white">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-medium text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-400">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#1718fe] mt-1">/</span>
                    <span className="text-sm text-gray-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 mt-auto border-t border-white/10">
                <Button
                  asChild
                  className={`w-full rounded-none h-12 uppercase tracking-wide font-mono text-sm ${
                    plan.popular
                      ? "bg-[#1718fe] text-white hover:bg-[#1718fe]/90 shadow-[0_0_20px_rgba(23,24,254,0.2)] hover:shadow-[0_0_30px_rgba(23,24,254,0.4)]"
                      : "bg-[#white]/5 border border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  <Link href="/signup">
                    {plan.name === "Kurumsal" ? "İletişime Geç" : "Waitlist'e Katıl"}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
