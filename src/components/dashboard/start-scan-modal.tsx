"use client";

import { Dialog, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Shield, Zap, Target } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

interface StartScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StartScanModal({ isOpen, onClose }: StartScanModalProps) {
  const [scanType, setScanType] = useState<"quick" | "full" | "custom">("quick");
  const [target, setTarget] = useState("Production API");
  const { toast } = useToast();
  const router = useRouter();

  const handleScan = () => {
    onClose();
    toast({
      type: "loading",
      title: "Tarama Başlatılıyor...",
      message: "Sistem kaynakları analiz için hazırlanıyor.",
      duration: 2000
    });

    setTimeout(() => {
      toast({
        type: "success",
        title: "Tarama Başladı",
        message: "Sonuçları tarama sayfasından takip edebilirsiniz.",
        duration: 3000
      });
      router.push("/dashboard/scans");
    }, 2000);
  };

  return (
    <Dialog 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Yeni Güvenlik Taraması" 
      description="Analiz tipini ve hedefleri seçerek taramayı başlatın."
    >
      <div className="space-y-4 my-6">
        <label className="text-sm font-medium text-gray-300">Tarama Tipi Seçin</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setScanType("quick")}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
              scanType === "quick" 
                ? "bg-[#1718fe]/10 border-[#1718fe] text-[#1718fe]" 
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Zap className="w-6 h-6" />
            <span className="text-xs font-bold uppercase">Hızlı</span>
          </button>
          
          <button
            onClick={() => setScanType("full")}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
              scanType === "full" 
                ? "bg-[#1718fe]/10 border-[#1718fe] text-[#1718fe]" 
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Shield className="w-6 h-6" />
            <span className="text-xs font-bold uppercase">Tam Sistem</span>
          </button>

           <button
            onClick={() => setScanType("custom")}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
              scanType === "custom" 
                ? "bg-[#1718fe]/10 border-[#1718fe] text-[#1718fe]" 
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <Target className="w-6 h-6" />
            <span className="text-xs font-bold uppercase">Özel</span>
          </button>
        </div>

        <div className="space-y-2">
           <label className="text-sm font-medium text-gray-300">Hedef</label>
           
           {scanType === 'full' && (
             <div className="w-full h-10 px-3 bg-[#1718fe]/10 border border-[#1718fe]/30 rounded-md text-[#1718fe] text-sm flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Tam Sistem Taraması (Tüm Varlıklar)</span>
             </div>
           )}

           {scanType === 'quick' && (
             <select 
               value={target}
               onChange={(e) => setTarget(e.target.value)}
               className="w-full h-10 px-3 bg-[#050505] border border-white/10 rounded-md text-white text-sm focus:border-[#1718fe] focus:outline-none"
             >
                <option>Production API</option>
                <option>Web Frontend</option>
                <option>Database Cluster</option>
             </select>
           )}

           {scanType === 'custom' && (
             <div className="animate-in fade-in slide-in-from-top-2 duration-200">
               <textarea 
                 placeholder="/api/v1/users&#10;/api/v1/orders&#10;https://subdomain.example.com"
                 className="w-full h-24 p-3 bg-[#050505] border border-white/10 rounded-md text-white text-sm focus:border-[#1718fe] focus:outline-none resize-none font-mono"
               />
               <p className="text-xs text-gray-500 mt-1">Her satıra bir endpoint veya path yazınız.</p>
             </div>
           )}
        </div>
      </div>

      <DialogFooter>
        <Button variant="ghost" onClick={onClose} className="text-gray-400 hover:text-white">İptal</Button>
        <Button onClick={handleScan} className="bg-[#1718fe] hover:bg-[#1718fe]/90 text-white">
           Analizi Başlat
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
