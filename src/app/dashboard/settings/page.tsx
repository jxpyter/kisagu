"use client";

import { Button } from "@/components/ui/button";
import { Bell, Lock, User, Save, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [user, setUser] = useState<{name: string, email: string} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock Data from LocalStorage
    const stored = localStorage.getItem("mock_user");
    if (stored) {
        setUser(JSON.parse(stored));
    } else {
        setUser({ name: "Demo User", email: "demo@kisagu.com" });
    }
    setLoading(false);
  }, []);

  return (
    <div className="p-6 lg:p-8 pt-24 lg:pt-8 max-w-[800px] mx-auto space-y-8">
      
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Ayarlar</h1>
        <p className="text-gray-400">Hesap bilgileriniz ve sistem tercihleriniz.</p>
      </div>

      <div className="space-y-8">
        
        {/* Profile Section */}
        <section className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
           <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
              <User className="w-5 h-5 text-[#1718fe]" />
              <h2 className="text-lg font-bold text-white">Profil Bilgileri</h2>
           </div>
           
           {loading ? (
             <div className="flex items-center gap-2 text-gray-500">
                <Loader2 className="w-4 h-4 animate-spin" /> Yükleniyor...
             </div>
           ) : (
            <div className="grid gap-6">
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-500 text-xs">
                    Güvenlik sebebiyle profil bilgileriniz sisteme kayıt olduğunuz haliyle sabitlenmiştir. 
                    Değişiklik talebi için yönetici ile iletişime geçin.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Ad Soyad</label>
                        <input 
                            type="text" 
                            value={user?.name || ''} 
                            disabled 
                            className="w-full h-10 px-3 bg-white/5 border border-white/10 rounded-md text-gray-500 cursor-not-allowed" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">E-posta</label>
                        <input 
                            type="email" 
                            value={user?.email || ''} 
                            disabled 
                            className="w-full h-10 px-3 bg-white/5 border border-white/10 rounded-md text-gray-500 cursor-not-allowed" 
                        />
                    </div>
                </div>
            </div>
           )}
        </section>

         {/* Notifications Section */}
        <section className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 opacity-80">
           <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
              <Bell className="w-5 h-5 text-[#1718fe]" />
              <h2 className="text-lg font-bold text-white">Bildirim Tercihleri</h2>
           </div>
           <div className="space-y-4">
              {['E-posta ile kritik alarmları al', 'Haftalık rapor gönder', 'Yeni giriş yapıldığında bildir'].map((label, i) => (
                 <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{label}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={i === 0} className="sr-only peer" />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1718fe]"></div>
                    </label>
                 </div>
              ))}
           </div>
        </section>

        <div className="flex justify-end pt-4">
           <Button className="bg-[#1718fe] hover:bg-[#1718fe]/90 text-white font-mono uppercase tracking-wide gap-2">
              <Save className="w-4 h-4" /> Tercihleri Kaydet
           </Button>
        </div>

      </div>
    </div>
  );
}
