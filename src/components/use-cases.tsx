"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenarios = [
  {
    title: "API Brute Force Saldırısı",
    situation: "Bir IP 5 dakika içinde 200'den fazla başarısız giriş denemesi yapıyor.",
    detection: "Logları toplar, deseni yakalar ve 'Brute Force' uyarısı oluşturur.",
    action: "IP adresini Firewall üzerinden otomatik olarak engeller ve Slack bildirimi gönderir.",
  },
  {
    title: "Path Scan / Recon Saldırısı",
    situation: "Bir bot /admin, /.env gibi hassas dosyalara yüzlerce keşif isteği gönderiyor.",
    detection: "15 saniye içinde tarama desenini tespit eder.",
    action: "IP'yi 24 saatliğine banlar ve olayı dashboard'a işler.",
  },
  {
    title: "İçeriden Şüpheli Davranış",
    situation: "Normalde veritabanına erişmeyen bir çalışan bir anda 3.000 sorgu çekiyor.",
    detection: "Kullanıcı davranış anomalisi (Behavior Anomaly) olarak işaretler.",
    action: "Kullanıcı hesabını geçici olarak devre dışı bırakır.",
  },
  {
    title: "Cloud Güvenlik İhlali",
    situation: "AWS IAM kullanıcısı beklenmedik şekilde yeni kullanıcı oluşturup log siliyor.",
    detection: "CloudTrail olaylarını analiz edip anomali skoru üretir.",
    action: "Policy rollback yapar veya kullanıcıyı devre dışı bırakır.",
  },
  {
    title: "Error Spike / DDoS",
    situation: "Bir endpoint normalden %300 daha fazla hata vermeye başlıyor.",
    detection: "Hata oranını temel çizgi (baseline) ile karşılaştırıp alarm üretir.",
    action: "Rate limitleri otomatik yükseltir ve IP gruplarını izole eder.",
  },
  {
    title: "Webhook Abuse Tespiti",
    situation: "Aynı kullanıcı ID'si veya IP üzerinden ücretsiz API endpointleri spam'leniyor.",
    detection: "Hesap veya IP bazlı aşırı kullanım anomalisi tespit eder.",
    action: "IP'yi engeller ve ilgili hesabı izole eder.",
  },
];

export function UseCases() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".case-card");
    
    // Set initial state
    gsap.set(cards, { autoAlpha: 0, y: 100 });

    gsap.to(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", // More forgiving trigger
      },
      y: 0,
      autoAlpha: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <p className="font-mono text-[#1718fe] text-xs mb-4">/ SENARYOLAR</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white max-w-2xl leading-tight">
            GERÇEK DÜNYA
            <br />
            <span className="text-gray-600">KORUMA ÖRNEKLERİ</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div 
              key={index}
              className="case-card p-8 border border-white/10 hover:border-[#1718fe]/50 transition-colors bg-[#0a0a0a]"
            >
              <div className="font-mono text-gray-500 text-xs mb-6">
                CASE_{(index + 1).toString().padStart(2, '0')}
              </div>
              
              <h3 className="text-xl font-medium text-white mb-6 min-h-[56px]">
                {scenario.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#1718fe] mb-2 font-mono">Durum</div>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {scenario.situation}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-widest text-green-500 mb-2 font-mono">Otomatik Aksiyon</div>
                  <p className="text-sm text-white leading-relaxed">
                    {scenario.action}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
