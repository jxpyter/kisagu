"use client";

import { Button } from "@/components/ui/button";
import { Key, ShieldAlert, Users, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  role: 'admin' | 'member';
  tags?: string[];
  apiKey?: string;
  organizationId?: {
    _id: string;
    name: string;
    plan: string;
  };
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("mock_user");
    if (!storedUser) {
        router.push("/login");
        return;
    }
    setUser(JSON.parse(storedUser));
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
      localStorage.removeItem("mock_user");
      router.push("/login");
  };

  const copyApiKey = () => {
    if (user?.apiKey) {
      navigator.clipboard.writeText(user.apiKey);
      alert("API Anahtarı kopyalandı!");
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">Yükleniyor...</div>;
  }

  const isOrgAdmin = user?.tags?.includes('org_admin');

  return (
    <div className="p-6 lg:p-8 pt-24 lg:pt-8 max-w-[1600px] mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold text-white">
                {user?.organizationId?.name || "Kullanıcı Paneli"}
            </h1>
            <span className={`text-xs px-2 py-1 rounded border font-mono uppercase ${
                isOrgAdmin 
                ? "bg-purple-500/10 text-purple-500 border-purple-500/20" 
                : "bg-blue-500/10 text-blue-500 border-blue-500/20"
            }`}>
                {isOrgAdmin ? 'ORG ADMIN' : 'ORG MEMBER'}
            </span>
          </div>
          <p className="text-gray-400">Hoşgeldin {user?.name}</p>
        </div>
        
        <div className="flex gap-3">
             <Button onClick={copyApiKey} variant="outline" className="border-[#1718fe]/50 text-[#1718fe] hover:bg-[#1718fe]/10">
                <Key className="w-4 h-4 mr-2" />
                API ANAHTARI
            </Button>
            <Button onClick={handleLogout} variant="ghost" className="text-gray-500 hover:text-white hover:bg-white/5">
                <LogOut className="w-4 h-4" />
            </Button>
        </div>
       
      </div>

      {/* MEMBER VIEW CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 space-y-4">
          <div className="w-12 h-12 bg-[#1718fe]/10 rounded-lg flex items-center justify-center">
            <Key className="w-6 h-6 text-[#1718fe]" />
          </div>
          <h2 className="text-xl font-semibold text-white">API Entegrasyonu</h2>
          <p className="text-gray-400 text-sm">
            Tüm isteklerde `x-api-key` header'ı olarak gönderin.
          </p>
          <div className="bg-black/50 p-4 rounded border border-white/5 font-mono text-xs text-gray-300 break-all">
            {user?.apiKey || '................................'}
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 space-y-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
            <ShieldAlert className="w-6 h-6 text-green-500" />
          </div>
          <h2 className="text-xl font-semibold text-white">Durum: Aktif</h2>
          <p className="text-gray-400 text-sm">
            {user?.organizationId ? `${user.organizationId.name} organizasyonu güvende.` : 'Hesabınız aktif.'}
          </p>
        </div>

        {/* ORG ADMIN ONLY CARD */}
        {isOrgAdmin && (
             <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8 space-y-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-500" />
                </div>
                <div className="flex justify-between items-start">
                    <h2 className="text-xl font-semibold text-white">Ekip Yönetimi</h2>
                    <span className="text-xs bg-purple-500/10 text-purple-500 px-2 py-1 rounded">ADMIN</span>
                </div>
                <p className="text-gray-400 text-sm">
                    Organizasyonunuza yeni üyeler davet edin ve yetkilerini yönetin.
                </p>
                <Button className="w-full border border-white/10 hover:bg-white/5" variant="outline">
                    Yönet
                </Button>
            </div>
        )}
      </div>

    </div>
  );
}
