import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { UseCases } from "@/components/use-cases";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { TextReveal } from "@/components/text-reveal";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <Hero />
      <TextReveal />
      <Services />
      <Features />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
