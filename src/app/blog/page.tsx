import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#1718fe] selection:text-white">
      <Header />
      
      <section className="pt-48 pb-24 px-6 max-w-[1400px] mx-auto">
        <div className="mb-24">
          <p className="font-mono text-[#1718fe] text-xs mb-8">/ GÜNLÜK</p>
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-6 leading-[0.9]">
            GÜVENLİK
            <br />
            <span className="text-gray-600">İÇGÖRÜLERİ</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mt-8">
            Siber güvenlik dünyasından en son haberler, teknik analizler ve Kisagu kullanım rehberleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((article, index) => (
            <Link 
              href={`/blog/${article.slug}`} 
              key={index}
              className="group border border-white/10 bg-[#0a0a0a] p-8 hover:border-[#1718fe]/50 transition-colors"
            >
              <div className="flex items-center justify-between font-mono text-xs text-gray-500 mb-8">
                <span className="text-[#1718fe]">{article.category}</span>
                <span>{article.date}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-[#1718fe] transition-colors">
                {article.title}
              </h3>
              
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wide">
                Oku <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
