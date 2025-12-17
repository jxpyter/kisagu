import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#1718fe] selection:text-white">
      <Header />

      <section className="pt-48 pb-24 px-6 max-w-[1400px] mx-auto">
        <div className="max-w-4xl">
          <p className="font-mono text-[#1718fe] text-xs mb-8">/ HAKKIMIZDA</p>
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-12 leading-[0.9]">
            GÜVENLİĞİ
            <br />
            <span className="text-gray-600">YENİDEN TANIMLIYORUZ</span>
          </h1>

          <div className="space-y-12 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            <p>
              Kisagu, siber güvenliğin karmaşık ve manuel süreçlerini otonom bir
              yapıya kavuşturmak için kuruldu. Geleneksel güvenlik araçlarının
              aksine, insan müdahalesine ihtiyaç duymadan tehditleri tespit
              eden, analiz eden ve engelleyen bir yapay zeka asistanıdır.
            </p>

            <p>
              Misyonumuz, her ölçekten işletmenin siber güvenliğini kur ve unut
              basitliğine indirgemek. 7/24 uyanık, yorulmayan ve sürekli öğrenen
              bir analist ile dijital varlıklarınızı koruyoruz.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32 border-t border-white/10 pt-24">
          <div>
            <h3 className="text-2xl font-medium text-white mb-6">Vizyonumuz</h3>
            <p className="text-gray-400 leading-relaxed">
              Yapay zeka tabanlı otonom güvenlik sistemlerinde global standart
              olmak ve siber güvenliği herkes için erişilebilir kılmak.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium text-white mb-6">
              Teknolojimiz
            </h3>
            <p className="text-gray-400 leading-relaxed">
              LLM tabanlı davranış analizi, gerçek zamanlı log işleme ve otonom
              karar mekanizmaları ile sıfır gün (zero-day) saldırılarına karşı
              bile proaktif koruma.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
