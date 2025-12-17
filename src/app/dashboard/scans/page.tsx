"use client";

import { Button } from "@/components/ui/button";
import { ScanLine, Play, Clock, CheckCircle2, AlertTriangle, Loader2, Signal } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ScanResult {
  id: number;
  url: string;
  timestamp: string;
  latency: number;
  status: number;
  suggestion: string;
}

export default function ScansPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState("https://");
  const [scanName, setScanName] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scans, setScans] = useState<ScanResult[]>([]);

  const runScan = async () => {
    setIsScanning(true);
    setIsModalOpen(false);

    // Simulate Network Request / Ping (or actually fetch if CORS allows)
    const startTime = Date.now();
    let status = 200;
    let latency = 0;

    try {
        // Attempt a real fetch (might fail due to CORS, but let's try or simulate)
        // For demo, we will simulate a latency based on random
        await new Promise(r => setTimeout(r, Math.random() * 500 + 50)); 
        latency = Math.floor(Math.random() * 200 + 20); // 20-220ms
    } catch (e) {
        status = 500;
    }

    const newScan: ScanResult = {
        id: Date.now(),
        url: targetUrl,
        timestamp: new Date().toLocaleTimeString(),
        latency,
        status,
        suggestion: latency > 200 ? "CDN kullanımı veya veritabanı optimizasyonu önerilir." : "Performans değerleri ideal."
    };

    setScans([newScan, ...scans]);
    setIsScanning(false);
  };

  return (
    <div className="p-6 lg:p-8 pt-24 lg:pt-8 max-w-[1600px] mx-auto space-y-8">
      
      {/* New Scan Modal */}
      <Dialog 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yeni Performans Taraması"
      >
            <div className="space-y-4 py-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Tarama İsmi</label>
                    <Input 
                        placeholder="Örn: Ana Sayfa Testi" 
                        value={scanName}
                        onChange={(e) => setScanName(e.target.value)}
                        className="bg-white/5 border-white/10 text-white"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Hedef URL</label>
                    <Input 
                        placeholder="https://api.example.com/v1/users" 
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                        className="bg-white/5 border-white/10 text-white font-mono"
                    />
                </div>
            </div>
            <DialogFooter>
                <Button variant="ghost" onClick={() => setIsModalOpen(false)} className="text-gray-400">İptal</Button>
                <Button onClick={runScan} className="bg-[#1718fe] text-white">Taramayı Başlat</Button>
            </DialogFooter>
      </Dialog>
 
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">API Performans Testi</h1>
          <p className="text-gray-400 mt-1">Endpoint yanıt sürelerini ölçün ve iyileştirme önerileri alın.</p>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)}
          disabled={isScanning}
          className="bg-[#1718fe] hover:bg-[#1718fe]/90 text-white font-mono text-xs uppercase tracking-wide h-10 gap-2"
        >
          {isScanning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
          {isScanning ? "TEST EDİLİYOR..." : "YENİ TEST OLUŞTUR"}
        </Button>
      </div>

      {/* Active Scan Card */}
      {isScanning && (
        <div className="bg-[#0a0a0a] border border-[#1718fe]/50 rounded-xl p-6 relative overflow-hidden group animate-pulse">
           <div className="flex items-center gap-4">
               <Signal className="w-8 h-8 text-[#1718fe]" />
               <div>
                   <h3 className="text-lg font-bold text-white">Ping Gönderiliyor...</h3>
                   <p className="font-mono text-gray-400 text-sm">{targetUrl}</p>
               </div>
           </div>
        </div>
      )}

      {/* History Table */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-lg font-bold text-white">Test Geçmişi</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-white/5 text-gray-400 font-mono text-xs uppercase tracking-wider">
                <th className="px-6 py-4">Zaman</th>
                <th className="px-6 py-4">Hedef</th>
                <th className="px-6 py-4">Durum (HTTP)</th>
                <th className="px-6 py-4">Yanıt Süresi</th>
                <th className="px-6 py-4">Öneri</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {scans.map((scan) => (
                <tr key={scan.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 text-gray-300 flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-600" />
                    {scan.timestamp}
                  </td>
                  <td className="px-6 py-4 text-white font-mono">
                    {scan.url}
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2 py-1 rounded text-xs font-bold", 
                        scan.status === 200 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    )}>
                        {scan.status} OK
                    </span>
                  </td>
                  <td className="px-6 py-4">
                     <span className={cn("font-mono font-bold",
                        scan.latency < 100 ? "text-green-500" : 
                        scan.latency < 300 ? "text-yellow-500" : "text-red-500"
                     )}>
                        {scan.latency}ms
                     </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-xs">
                     {scan.suggestion}
                  </td>
                </tr>
              ))}
               {scans.length === 0 && !isScanning && (
                 <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">Henüz performans testi yapılmadı.</td>
                 </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
