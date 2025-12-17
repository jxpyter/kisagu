"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Startups & Scale-ups", desc: "Hızlı büyüme sürecinde güvenlikten ödün vermeyin. Dakikalar içinde entegre olan, performans kaybı yaşatmayan hafif yapı." },
  { id: "02", title: "E-Ticaret & Fintech", desc: "Müşteri güveni en büyük sermayeniz. Fraud tespiti, DDoS koruması ve veri sızıntılarına karşı 7/24 kalkan." },
  { id: "03", title: "Kurumsal & Enterprise", desc: "Mevcut SIEM/SOAR yapılarıyla tam uyumlu. KVKK/GDPR uyumluluğu, gelişmiş raporlama ve özel SLA desteği." },
  { id: "04", title: "SaaS & Platformlar", desc: "Kullanıcılarınız için kesintisiz uptime. API güvenliği ve bot koruması ile servis kalitenizi koruyun." },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".service-item");
      
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-32 bg-black text-white px-6">
      <div ref={triggerRef} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Side - Sticky Heading */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <p className="font-mono text-[#1718fe] text-xs mb-4 uppercase">/ HİZMET ALANLARI</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-8">
              Her ölçek için <br/> <span className="text-gray-400">kritik koruma</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              İster yeni başlayan bir girişim, ister milyonlarca işlemi yöneten bir dev olun. Tehdit yüzeyinizi analiz ediyor ve size özel savunma hattı kuruyoruz.
            </p>
          </div>
        </div>

        {/* Right Side - Services List */}
        <div className="lg:w-2/3 flex flex-col">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item group py-12 border-t border-white/10 flex flex-col md:flex-row md:items-start gap-8 cursor-pointer transition-colors hover:bg-white/5 px-4 rounded-xl"
            >
              <span className="text-sm font-mono text-gray-500 pt-1">{service.id}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-medium">{service.title}</h3>
                  <ArrowRight className="w-5 h-5 -rotate-45 text-white/50 group-hover:text-white group-hover:rotate-0 transition-all duration-300" />
                </div>
                <p className="text-gray-400 leading-relaxed max-w-lg">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  );
}
