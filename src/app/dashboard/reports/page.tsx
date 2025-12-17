"use client";

import { Button } from "@/components/ui/button";
import { FileText, Download, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import { useState } from "react";

export default function ReportsPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const downloadReport = async (format: 'json' | 'csv', highRisk = false) => {
    setLoading(true);
    toast({
        type: "loading",
        title: "Rapor Hazırlanıyor",
        message: "Veriler sunucudan çekiliyor...",
        duration: 1000
    });

    try {
        // Mock API Fetch
        await new Promise(r => setTimeout(r, 1000));
        
        const mockData = [
             { _id: '1', method: 'POST', path: '/api/login', ip: '192.168.1.105', statusCode: 401, responseTime: 45, riskScore: 20, timestamp: new Date().toISOString() },
             { _id: '2', method: 'GET', path: '/api/admin/users', ip: '10.0.0.5', statusCode: 200, responseTime: 120, riskScore: 10, timestamp: new Date().toISOString() },
             { _id: '3', method: 'POST', path: '/api/sql-injection-test', ip: '45.2.1.99', statusCode: 403, responseTime: 15, riskScore: 90, timestamp: new Date().toISOString() }
        ];

        const data = highRisk ? mockData.filter(d => d.riskScore > 50) : mockData;
        
        let content = "";
        let mimeType = "";
        let extension = "";

        if (format === 'json') {
            content = JSON.stringify(data, null, 2);
            mimeType = "application/json";
            extension = "json";
        } else {
            // Convert to CSV
            const headers = ["ID", "Timestamp", "Method", "Path", "Status", "IP", "RiskScore", "ResponseTime"];
            const rows = data.map((l: any) => [
                l._id, 
                l.timestamp, 
                l.method, 
                l.path, 
                l.statusCode, 
                l.ip, 
                l.riskScore, 
                l.responseTime
            ].join(","));
            content = [headers.join(","), ...rows].join("\n");
            mimeType = "text/csv";
            extension = "csv";
        }

        // Trigger Download
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `kisagu_report_${highRisk ? 'threats' : 'full'}_${Date.now()}.${extension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        toast({
            type: "success",
            title: "İndirme Tamamlandı",
            message: "Rapor cihazınıza kaydedildi.",
        });

    } catch (e) {
        toast({
            type: "error",
            title: "Hata",
            message: "Rapor oluşturulamadı.",
        });
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 pt-24 lg:pt-8 max-w-[1600px] mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Rapor Merkezi</h1>
          <p className="text-gray-400 mt-1">Sistem kayıtlarını farklı formatlarda dışa aktarın.</p>
        </div>
      </div>

      {/* Reports Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Full Report Card */}
         <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                    <FileText className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Tüm Trafik Dökümü</h3>
                    <p className="text-sm text-gray-400">Sistemdeki tüm API istek kayıtları.</p>
                </div>
            </div>
            <div className="flex gap-3">
                <Button 
                    onClick={() => downloadReport('csv', false)} 
                    disabled={loading}
                    variant="outline" 
                    className="flex-1 border-white/10 hover:bg-white/5"
                >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Download className="w-4 h-4 mr-2" />}
                    CSV İndir
                </Button>
                <Button 
                    onClick={() => downloadReport('json', false)} 
                    disabled={loading}
                    variant="outline" 
                    className="flex-1 border-white/10 hover:bg-white/5"
                >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Download className="w-4 h-4 mr-2" />}
                    JSON İndir
                </Button>
            </div>
         </div>

         {/* Threats Report Card */}
         <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                    <FileText className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Tehdit & İhlal Raporu</h3>
                    <p className="text-sm text-gray-400">Sadece yüksek riskli olayları içerir.</p>
                </div>
            </div>
            <div className="flex gap-3">
                <Button 
                    onClick={() => downloadReport('csv', true)} 
                    disabled={loading}
                    variant="outline" 
                    className="flex-1 border-white/10 hover:bg-white/5"
                >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Download className="w-4 h-4 mr-2" />}
                    CSV İndir
                </Button>
                <Button 
                    onClick={() => downloadReport('json', true)} 
                    disabled={loading}
                    variant="outline" 
                    className="flex-1 border-white/10 hover:bg-white/5"
                >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Download className="w-4 h-4 mr-2" />}
                    JSON İndir
                </Button>
            </div>
         </div>
      </div>
    </div>
  );
}
