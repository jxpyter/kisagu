import { Header } from "@/components/header";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <div className="pt-20">
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
