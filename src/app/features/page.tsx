import { Header } from "@/components/header";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <div className="pt-20">
        <Features />
      </div>
      <Footer />
    </main>
  );
}
