"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "Logları Toplar",
    description: "Web sunucuları, API gateway, Cloud servisleri ve Firewall loglarını tek merkezde toplayarak tam görünürlük sağlar.",
  },
  {
    number: "02",
    title: "Tehditleri Tespit Eder",
    description: "Brute force, SQL injection, Rate limit ihlalleri ve Cloud anomalilerini AI ve kural tabanlı motoruyla anında yakalar.",
  },
  {
    number: "03",
    title: "Otomatik Müdahale",
    description: "Sadece uyarı vermez; IP bloklama, kullanıcı izolasyonu ve API key iptali gibi aksiyonları analiste ihtiyaç duymadan alır.",
  },
  {
    number: "04",
    title: "Hızlı Kurulum",
    description: "30 dakika içinde sistemlerinize entegre olur. Karmaşık konfigürasyonlara gerek kalmadan anında korumaya başlar.",
  },
  {
    number: "05",
    title: "Zero-Trust Mimarisi",
    description: "Varsayılan olarak 'hiçbir şeye güvenme' ilkesini uygular. Ağ içindeki yatay hareketleri (lateral movement) ve yetki yükseltme girişimlerini engeller.",
  },
  {
    number: "06",
    title: "Otomatik Uyumluluk",
    description: "KVKK, GDPR ve ISO 27001 standartlarına uygun loglama yapar. Denetimler için gerekli raporları tek tıkla üretir.",
  },
];

export function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const features = gsap.utils.toArray<HTMLElement>(".feature-item");
    
    // Set initial state
    gsap.set(features, { autoAlpha: 0, y: 50 });

    features.forEach((feature, i) => {
      gsap.to(feature, {
        scrollTrigger: {
          trigger: feature,
          start: "top 90%", // Trigger earlier (when top of element hits 90% of viewport)
          toggleActions: "play none none reverse",
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.1,
      });
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative py-32 px-6 bg-[#050505]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <p className="font-mono text-[#1718fe] text-xs mb-8">/ ÖZELLİKLER</p>
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
            GÜVENLİK
            <br />
            <span className="text-gray-600">ÖZELLİKLERİ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item group"
            >
              <div className="font-mono text-[#1718fe] text-sm mb-6">
                /{feature.number}
              </div>
              <h3 className="text-3xl font-medium text-white mb-6 group-hover:text-[#1718fe] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
