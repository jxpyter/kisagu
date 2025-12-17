"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Shield, Users, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleDemoLogin = (type: 'admin' | 'org_admin' | 'org_member') => {
    let userData;

    if (type === 'admin') {
        userData = {
            name: "Kisagu",
            role: "admin",
            tags: [],
            email: "admin@kisagu.com"
        };
        localStorage.setItem("mock_user", JSON.stringify(userData));
        router.push("/admin");
    } else if (type === 'org_admin') {
        userData = {
            name: "Robert Davis",
            role: "member",
            tags: ["org_admin"],
            organizationId: { _id: "org1", name: "Acme Corp", plan: "Pro" },
            email: "robert@acme.com",
            apiKey: "ks_live_founder_key"
        };
        localStorage.setItem("mock_user", JSON.stringify(userData));
        router.push("/dashboard");
    } else {
        userData = {
            name: "James Wilson",
            role: "member",
            tags: [],
            organizationId: { _id: "org1", name: "Acme Corp", plan: "Pro" },
            email: "james@acme.com",
            apiKey: "ks_live_teammate_key"
        };
        localStorage.setItem("mock_user", JSON.stringify(userData));
        router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#1718fe] selection:text-white flex flex-col">
      <Header />
      
      <section className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 p-8 rounded-xl shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Demo Girişi</h1>
            <p className="text-gray-400 text-sm">
              Sistemi test etmek için bir rol seçin.
            </p>
          </div>

          <div className="space-y-4">
            <Button 
                onClick={() => handleDemoLogin('admin')}
                className="w-full h-14 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 justify-start px-6 gap-4 text-base"
            >
                <div className="p-2 bg-red-500 rounded text-white"><Shield className="w-4 h-4" /></div>
                Platform Admin
            </Button>

            <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                <div className="relative flex justify-center"><span className="bg-[#0a0a0a] px-2 text-xs text-gray-500 uppercase">Müşteri Paneli</span></div>
            </div>

            <Button 
                onClick={() => handleDemoLogin('org_admin')}
                className="w-full h-14 bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 border border-purple-500/20 justify-start px-6 gap-4 text-base"
            >
                <div className="p-2 bg-purple-500 rounded text-white"><Users className="w-4 h-4" /></div>
                <div>
                    <div className="font-bold">Org Admin</div>
                    <div className="text-xs opacity-70 font-normal text-left">Tam Yetkili + Ekip Yönetimi</div>
                </div>
            </Button>

            <Button 
                onClick={() => handleDemoLogin('org_member')}
                className="w-full h-14 bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 border border-blue-500/20 justify-start px-6 gap-4 text-base"
            >
                <div className="p-2 bg-blue-500 rounded text-white"><User className="w-4 h-4" /></div>
                <div>
                    <div className="font-bold">Org Member</div>
                    <div className="text-xs opacity-70 font-normal text-left">Görüntüleme Yetkisi</div>
                </div>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
