export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    slug: "yapay-zeka-ile-ddos-onleme",
    category: "GÜVENLİK",
    date: "12 ARALIK 2024",
    title: "Yapay Zeka ile DDoS Saldırılarını Önleme",
    excerpt:
      "Geleneksel rate-limiting yöntemlerinin ötesinde, AI tabanlı trafik analizi ile saldırıları kaynağında durdurun.",
    content: `
      <p class="mb-6">Geleneksel güvenlik duvarları, belirli kurallara uymayan paketleri engellemekte başarılıdır. Ancak modern DDoS saldırıları, meşru trafiği taklit ederek bu savunmaları aşabilir. İşte burada Yapay Zeka devreye giriyor.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4">Davranışsal Analiz</h2>
      <p class="mb-6">AI modellerimiz, normal kullanıcı davranışlarını öğrenir. Bir IP adresi, normal bir kullanıcıdan 100 kat daha hızlı istek gönderiyorsa veya insan dışı gezinme modelleri sergiliyorsa, sistem bunu anında "anomali" olarak işaretler.</p>

      <h2 class="text-2xl font-bold text-white mb-4">Otonom Müdahale</h2>
      <p class="mb-6">Bir saldırı tespit edildiğinde, Kisagu saniyeler içinde aksiyon alır. Dinamik olarak WAF kuralları oluşturur, şüpheli IP bloklarını karantinaya alır ve sistem yöneticilerini bilgilendirir. Bu süreçte hiçbir insan müdahalesine gerek duyulmaz.</p>

      <div class="bg-white/5 p-6 rounded-lg border border-white/10 my-8">
        <h3 class="font-mono text-[#1718fe] mb-2">/ SONUÇ</h3>
        <p class="text-sm">Kisagu kullanan işletmeler, DDoS saldırılarına karşı %99.9 daha hızlı yanıt süresi elde etmiştir.</p>
      </div>
    `,
  },
  {
    slug: "zero-day-tehditleri",
    category: "TEKNOLOJİ",
    date: "08 ARALIK 2024",
    title: "Zero-Day Tehditleri ve Davranışsal Analiz",
    excerpt:
      "İmza tabanlı korumanın yetersiz kaldığı durumlarda anomalileri tespit etmenin yolları.",
    content: `
      <p class="mb-6">Siber güvenlik dünyasında en büyük korku, henüz keşfedilmemiş ve yaması bulunmayan "Zero-Day" açıklarının kullanılmasıdır.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4">Bilinmeyeni Yakalamak</h2>
      <p class="mb-6">İmzaya dayalı antivirüsler sadece bilinen tehditleri durdurabilir. Kisagu ise saldırının "nasıl göründüğüne" değil, "ne yapmaya çalıştığına" odaklanır. Dosya sistemine izinsiz erişim, yetki yükseltme denemeleri veya şüpheli ağ trafiği, saldırı yeni olsa bile tespit edilir.</p>
    `,
  },
  {
    slug: "api-guvenligi-hatalari",
    category: "REHBER",
    date: "24 KASIM 2024",
    title: "API Güvenliğinde En Sık Yapılan 5 Hata",
    excerpt:
      "Modern web uygulamalarında API endpointlerinizi güvence altına almak için kritik kontrol listesi.",
    content: `
      <p class="mb-6">API'ler modern internetin omurgasıdır, ancak aynı zamanda saldırganların bir numaralı hedefidir. İşte kaçınmanız gerekenler:</p>
      
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>BOLA (Broken Object Level Authorization) zafiyetleri.</li>
        <li>Gereksiz veri ifşası (Excessive Data Exposure).</li>
        <li>Rate limiting eksikliği.</li>
        <li>Yetersiz loglama ve izleme.</li>
        <li>Güvensiz API anahtarı yönetimi.</li>
      </ul>
      
      <p>Kisagu, tüm bu zafiyetleri otomatik olarak tarar ve raporlar.</p>
    `,
  },
  {
    slug: "kisagu-v2-surum-notlari",
    category: "HABER",
    date: "15 KASIM 2024",
    title: "Kisagu v2.0 Sürüm Notları",
    excerpt:
      "Yeni otonom aksiyon modülleri ve geliştirilmiş dashboard özellikleri yayında.",
    content: `
      <p class="mb-6">Büyük güncelleme yayında! Müşteri geri bildirimleri doğrultusunda geliştirdiğimiz v2.0 ile tanışın.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4">Yenilikler</h2>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li><strong>Otonom Karar Motoru:</strong> Yanlış pozitif oranı %0.01'in altına düşürüldü.</li>
        <li><strong>Yeni Dashboard:</strong> Gerçek zamanlı tehdit haritası eklendi.</li>
        <li><strong>Slack Entegrasyonu:</strong> Kritik uyarıları ekibinize anında iletin.</li>
      </ul>
    `,
  },
];
