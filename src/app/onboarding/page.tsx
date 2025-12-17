"use client";

import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";

export default function OnboardingPage() {
  const router = useRouter();
  const [orgName, setOrgName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API Call
    setTimeout(() => {
        router.push("/dashboard");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />
      
      <section className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#1718fe]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-[#1718fe]" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Organizasyon Oluştur</h1>
            <p className="text-gray-400 text-sm">Devam etmek için bir ekip veya şirket profili oluşturun.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded">
                {error}
              </div>
            )}

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Organizasyon İsmi</label>
                <input
                    type="text"
                    placeholder="Örn: Acme Inc."
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    required
                    className="w-full h-12 px-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1718fe] rounded-lg transition-colors"
                />
            </div>

            <Button
              disabled={loading}
              className="w-full h-12 bg-[#1718fe] hover:bg-[#1718fe]/90 text-white font-bold gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
              Oluştur ve Başla
            </Button>
          </form>

            <div className="mt-6 text-center">
                 <p className="text-xs text-gray-500">
                    Bir davetiyeniz mi var? E-postanızı kontrol edin.
                </p>
            </div>
        </div>
      </section>
    </main>
  );
}
