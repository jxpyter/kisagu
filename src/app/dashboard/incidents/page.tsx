"use client";

import { Activity, GitCommit, AlertCircle, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Log {
  _id: string;
  timestamp: string;
  ip: string;
  path: string;
  riskScore: number;
  method: string;
}

export default function IncidentsPage() {
  const [incidents, setIncidents] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock Fetch
    const mocks: Log[] = [
         { _id: '1', method: 'POST', path: '/api/sql-injection-test', ip: '45.2.1.99', riskScore: 90, timestamp: new Date(Date.now() - 10000000).toISOString() },
         { _id: '2', method: 'GET', path: '/wp-login.php', ip: '192.168.1.33', riskScore: 75, timestamp: new Date(Date.now() - 50000000).toISOString() }
    ];
    setTimeout(() => {
        setIncidents(mocks);
        setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="p-6 lg:p-8 pt-24 lg:pt-8 max-w-[1000px] mx-auto space-y-8">
      
       <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Anomali & Olaylar</h1>
        <p className="text-gray-400">Sadece yüksek riskli API saldırıları ve yetkisiz erişim denemeleri.</p>
      </div>

      <div className="relative border-l border-white/10 ml-6 space-y-12 pb-12">
        {loading && <div className="pl-8 text-gray-500">Yükleniyor...</div>}
        
        {!loading && incidents.length === 0 && (
            <div className="pl-8 text-green-500 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" />
                Henüz kritik bir olay yaşanmadı.
            </div>
        )}

        {incidents.map((event) => (
          <div key={event._id} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-[#050505] shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-colors bg-red-500`} />
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-start group-hover:translate-x-1 transition-transform">
               <div className="min-w-[120px]">
                 <p className="text-sm font-bold text-white">{new Date(event.timestamp).toLocaleDateString()}</p>
                 <p className="text-xs text-gray-500 font-mono">{new Date(event.timestamp).toLocaleTimeString()}</p>
               </div>
               
               <div className="flex-1 bg-[#0a0a0a] border border-white/10 p-5 rounded-lg hover:border-white/20 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                     <AlertCircle className="w-4 h-4 text-red-500" />
                     <h3 className="text-base font-medium text-white">Yüksek Riskli Erişim ({event.riskScore})</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-2">
                    <strong>{event.method}</strong> {event.path}
                  </p>
                  <div className="text-xs font-mono text-gray-500 bg-white/5 p-2 rounded">
                    Kaynak IP: {event.ip}
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
