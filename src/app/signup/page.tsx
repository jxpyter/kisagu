"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Building2, User, Shield, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SignupPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'org_admin' | 'org_member' | 'admin'>('org_admin');
  const [loading, setLoading] = useState(false);
  
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState(""); // For Org Admin
  const [inviteCode, setInviteCode] = useState(""); // For Member

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create Mock User based on selection
    let mockUser;

    if (activeTab === 'admin') {
        mockUser = {
            name: name || "New Admin",
            role: "admin",
            tags: [],
            email: email || "admin@new.com",
            apiKey: "ks_live_new_admin_key"
        };
    } else if (activeTab === 'org_admin') {
        mockUser = {
            name: name || "New Founder",
            role: "member",
            tags: ["org_admin"],
            organizationId: { _id: "new_org", name: orgName || "My New Company", plan: "Starter" },
            apiKey: "ks_live_founder_key"
        };
    } else {
        // Org Member
        mockUser = {
            name: name || "New Teammate",
            role: "member",
            tags: [], // No admin tag
            organizationId: { _id: "existing_org", name: "Acme Inc (Joined)", plan: "Pro" },
            apiKey: "ks_live_teammate_key"
        };
    }

    // Simulate Network Request
    setTimeout(() => {
        localStorage.setItem("mock_user", JSON.stringify(mockUser));
        setLoading(false);
        
        if (activeTab === 'admin') {
            router.push("/admin");
        } else {
            router.push("/dashboard");
        }
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#1718fe] selection:text-white flex flex-col">
      <Header />
      
      <section className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold mb-3 tracking-tight">Hesap Oluştur</h1>
            <p className="text-gray-400 text-sm">
              Sistemi deneyimlemek için kayıt türünü seçin.
            </p>
          </div>

          {/* Role Selection Tabs */}
          <div className="grid grid-cols-3 gap-2 mb-8 bg-white/5 p-1 rounded-lg">
             <button
                onClick={() => setActiveTab('org_admin')}
                className={cn(
                    "flex flex-col items-center gap-1 py-3 px-2 rounded-md text-xs font-medium transition-all",
                    activeTab === 'org_admin' ? "bg-[#0a0a0a] text-purple-400 shadow-lg border border-purple-500/20" : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                )}
             >
                <Building2 className="w-4 h-4" />
                Yeni Şirket
             </button>
             <button
                onClick={() => setActiveTab('org_member')}
                className={cn(
                    "flex flex-col items-center gap-1 py-3 px-2 rounded-md text-xs font-medium transition-all",
                    activeTab === 'org_member' ? "bg-[#0a0a0a] text-blue-400 shadow-lg border border-blue-500/20" : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                )}
             >
                <User className="w-4 h-4" />
                Ekibe Katıl
             </button>
             <button
                onClick={() => setActiveTab('admin')}
                className={cn(
                    "flex flex-col items-center gap-1 py-3 px-2 rounded-md text-xs font-medium transition-all",
                    activeTab === 'admin' ? "bg-[#0a0a0a] text-red-500 shadow-lg border border-red-500/20" : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                )}
             >
                <Shield className="w-4 h-4" />
                Platform
             </button>
          </div>

          <form onSubmit={handleSignup} className="space-y-4 bg-[#0a0a0a] border border-white/10 p-6 rounded-xl shadow-2xl">
            
            {/* Dynamic Header based on Tab */}
            <div className="mb-4 pb-4 border-b border-white/5">
                <h3 className="tex-sm font-medium text-white flex items-center gap-2">
                    {activeTab === 'org_admin' && <><Building2 className="w-4 h-4 text-purple-500" /> Organizasyon Hesabı</>}
                    {activeTab === 'org_member' && <><User className="w-4 h-4 text-blue-500" /> Personel Hesabı</>}
                    {activeTab === 'admin' && <><Shield className="w-4 h-4 text-red-500" /> Yönetici Hesabı</>}
                </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs text-gray-500 font-mono">AD SOYAD</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-10 px-3 bg-[#050505] border border-white/10 text-white focus:border-white/30 rounded-md text-sm"
                    />
                </div>
                 <div className="space-y-1">
                    <label className="text-xs text-gray-500 font-mono">E-POSTA</label>
                     <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-10 px-3 bg-[#050505] border border-white/10 text-white focus:border-white/30 rounded-md text-sm"
                    />
                </div>
            </div>

            {/* Dynamic Fields */}
            {activeTab === 'org_admin' && (
                <div className="space-y-1 animate-in fade-in slide-in-from-top-2">
                     <label className="text-xs text-purple-500 font-mono">ŞİRKET / ORGANİZASYON ADI</label>
                     <input
                        type="text"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="Örn: Acme Inc."
                        className="w-full h-10 px-3 bg-[#050505] border border-purple-500/20 text-white focus:border-purple-500/50 rounded-md text-sm"
                    />
                </div>
            )}

            {activeTab === 'org_member' && (
                <div className="space-y-1 animate-in fade-in slide-in-from-top-2">
                     <label className="text-xs text-blue-500 font-mono">DAVET KODU</label>
                     <input
                        type="text"
                        value={inviteCode}
                        onChange={(e) => setInviteCode(e.target.value)}
                        placeholder="Örn: INV-8293-AB"
                        className="w-full h-10 px-3 bg-[#050505] border border-blue-500/20 text-white focus:border-blue-500/50 rounded-md text-sm"
                    />
                </div>
            )}

             {activeTab === 'admin' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-xs animate-in fade-in slide-in-from-top-2">
                    Dikkat: Platform yöneticisi olarak tüm sistemi yönetme yetkisine sahip olacaksınız.
                </div>
            )}

            <div className="space-y-1">
                 <label className="text-xs text-gray-500 font-mono">ŞİFRE</label>
                 <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-10 px-3 bg-[#050505] border border-white/10 text-white focus:border-white/30 rounded-md text-sm"
                />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className={cn(
                  "w-full h-12 mt-4 text-white font-bold gap-2",
                  activeTab === 'org_admin' ? "bg-purple-600 hover:bg-purple-700" :
                  activeTab === 'org_member' ? "bg-blue-600 hover:bg-blue-700" :
                  "bg-red-600 hover:bg-red-700"
              )}
            >
              {loading ? "Hesap Oluşturuluyor..." : "Kayıt Ol ve Başla"} <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <p className="mt-8 text-center text-xs text-gray-500">
            Zaten hesabınız var mı?{" "}
            <Link href="/login" className="text-white hover:underline transition-colors">
              Giriş Yap
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
