"use client";

import { Users, Server, DollarSign, Activity, LogOut } from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { SystemTrafficChart } from "@/components/admin/system-traffic-chart";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [stats, setStats] = useState({ users: 0, logs: 0, highRisk: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check Auth
    const storedUser = localStorage.getItem("mock_user");
    if (!storedUser) {
        router.push("/login");
        return;
    }
    const user = JSON.parse(storedUser);
    if (user.role !== 'admin') {
        router.push("/dashboard"); // Redirect non-admins
        return;
    }

    // Mock Data Loading
    setTimeout(() => {
        setStats({
            users: 148,
            logs: 254392,
            highRisk: 12
        });
        setLoading(false);
    }, 600);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("mock_user");
    router.push("/login");
  };

  return (
    <div className="p-6 lg:p-8 pt-24 lg:pt-8 space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
            <h1 className="text-3xl font-bold text-white">Platform Genel Bakış</h1>
            <p className="text-gray-400 mt-1">Sistem istatistikleri ve anlık durum.</p>
        </div>
        <Button onClick={handleLogout} variant="ghost" className="text-gray-500 hover:text-white hover:bg-white/5">
            <LogOut className="w-4 h-4 mr-2" />
            Çıkış
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Toplam Kullanıcı" 
          value={loading ? "..." : stats.users.toString()} 
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          highlightColor="#ea580c"
          description="Kayıtlı kullanıcı sayısı"
        />
        <StatsCard 
          title="Toplam İstek (Logs)" 
          value={loading ? "..." : "1.2M"} 
          icon={Activity}
          trend={{ value: 8, isPositive: true }}
          highlightColor="#16a34a"
          description="İşlenen toplam request"
        />
        <StatsCard 
          title="Aktif Sunucular" 
          value="12/12" 
          icon={Server}
          highlightColor="#2563eb"
          description="Tüm clusterlar up"
        />
         <StatsCard 
          title="Saldırı & Olaylar" 
          value={loading ? "..." : stats.highRisk.toString()} 
          icon={Activity}
          trend={{ value: 2, isPositive: false }}
          highlightColor="#dc2626"
          description="Yüksek riskli aktivite"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Section */}
        <div className="lg:col-span-2">
            <SystemTrafficChart />
        </div>

        {/* Alerts / Activity Feed */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 h-[400px] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white">Sistem Durumu</h3>
                <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded uppercase">NORMAL</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                Sistem stabil çalışıyor.
            </div>
        </div>

      </div>
    </div>
  );
}
