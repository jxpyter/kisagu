import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#1718fe] selection:text-white">
      <Header />
      
      <article className="pt-48 pb-24 px-6 max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-[#1718fe] transition-colors mb-12 uppercase tracking-wide group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Geri Dön
        </Link>

        {/* Header */}
        <header className="mb-16 border-b border-white/10 pb-16">
          <div className="flex items-center gap-4 font-mono text-xs mb-6">
            <span className="text-[#1718fe] px-3 py-1 rounded-full bg-[#1718fe]/10 border border-[#1718fe]/20">
              {post.category}
            </span>
            <span className="text-gray-500">{post.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white mb-8">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white 
          prose-p:text-gray-400 prose-p:leading-relaxed prose-p:font-light
          prose-li:text-gray-400
          prose-strong:text-white prose-strong:font-medium
          prose-a:text-[#1718fe] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
      </article>

      <Footer />
    </main>
  );
}
