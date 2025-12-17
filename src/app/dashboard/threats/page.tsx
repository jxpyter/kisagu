"use client";

import { Button } from "@/components/ui/button";
import { Search, Filter, AlertTriangle, ShieldAlert, Globe, Server, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

interface Log {
  _id: string;
  ip: string;
  method: string;
  path: string;
  statusCode: number;
  responseTime: number;
  riskScore: number;
  timestamp: string;
}

export default function ThreatsPage() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLog, setSelectedLog] = useState<Log | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    // Mock Data Loading
    const loadLogs = async () => {
        setLoading(true);
        setTimeout(() => {
            setLogs([
                { _id: '1', method: 'POST', path: '/api/login', ip: '192.168.1.105', statusCode: 401, responseTime: 45, riskScore: 20, timestamp: new Date().toISOString() },
                { _id: '2', method: 'GET', path: '/api/admin/users', ip: '10.0.0.5', statusCode: 200, responseTime: 120, riskScore: 10, timestamp: new Date().toISOString() },
                { _id: '3', method: 'POST', path: '/api/sql-injection-test', ip: '45.2.1.99', statusCode: 403, responseTime: 15, riskScore: 90, timestamp: new Date().toISOString() },
                { _id: '4', method: 'GET', path: '/dashboard', ip: '192.168.1.105', statusCode: 200, responseTime: 230, riskScore: 5, timestamp: new Date().toISOString() },
                { _id: '5', method: 'GET', path: '/wp-admin', ip: '192.168.1.25', statusCode: 404, responseTime: 20, riskScore: 65, timestamp: new Date().toISOString() },
            ]);
            setLoading(false);
        }, 600);
    };
    loadLogs();
  }, []);

  const fetchLogs = async () => {}; // Deactivated

  const handleCreateReport = () => {
    router.push("/dashboard/reports");
  };

  const highRiskCount = logs.filter(l => l.riskScore > 50).length;

  return (
    <div className="p-6 lg:p-8 pt-24 lg:pt-8 max-w-[1600px] mx-auto space-y-8">
      
      {/* Detail Modal */}
      <Dialog 
         isOpen={!!selectedLog} 
         onClose={() => setSelectedLog(null)}
         title="Log Detayı"
         description={`ID: ${selectedLog?._id}`}
      >
         {selectedLog && (
          <div className="space-y-4 my-6 font-mono text-sm">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded border border-white/10">
                   <p className="text-gray-500 text-xs mb-1">METOD</p>
                   <p className="text-white font-bold">{selectedLog.method}</p>
                </div>
                 <div className="p-3 bg-white/5 rounded border border-white/10">
                   <p className="text-gray-500 text-xs mb-1">DURUM KODU</p>
                   <p className={cn("font-bold", selectedLog.statusCode >= 400 ? "text-red-500" : "text-green-500")}>
                     {selectedLog.statusCode}
                   </p>
                </div>
             </div>
             
             <div className="space-y-2">
                <div className="p-3 bg-white/5 rounded border border-white/10 flex justify-between">
                   <span className="text-gray-500">Kaynak IP:</span>
                   <span className="text-white">{selectedLog.ip}</span>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10 flex justify-between">
                   <span className="text-gray-500">Yol:</span>
                   <span className="text-white break-all">{selectedLog.path}</span>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10 flex justify-between">
                   <span className="text-gray-500">Yanıt Süresi:</span>
                   <span className="text-white">{selectedLog.responseTime} ms</span>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10 flex justify-between">
                   <span className="text-gray-500">Risk Skoru:</span>
                   <span className={cn(selectedLog.riskScore > 50 ? "text-red-500" : "text-green-500")}>{selectedLog.riskScore}</span>
                </div>
                 <div className="p-3 bg-white/5 rounded border border-white/10 flex justify-between">
                   <span className="text-gray-500">Zaman:</span>
                   <span className="text-white">{new Date(selectedLog.timestamp).toLocaleString()}</span>
                </div>
             </div>
          </div>
         )}
         <DialogFooter>
             <Button variant="ghost" onClick={() => setSelectedLog(null)} className="text-gray-400">Kapat</Button>
         </DialogFooter>
      </Dialog>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Tehdit & Trafik İzleme</h1>
          <p className="text-gray-400 mt-1">Sadece API saldırıları ve path scanning trafikleri.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleCreateReport}
            className="bg-[#1718fe] hover:bg-[#1718fe]/90 text-white font-mono text-xs uppercase tracking-wide h-10"
          >
            RAPORLARA GİT
          </Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4">
            <p className="text-gray-500 text-xs font-mono mb-1">TOPLAM İSTEK</p>
            <p className="text-2xl font-bold text-white">{logs.length}</p>
        </div>
         <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4">
            <p className="text-gray-500 text-xs font-mono mb-1">YÜKSEK RİSK</p>
            <p className="text-2xl font-bold text-red-500">{highRiskCount}</p>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h3 className="font-semibold text-white flex items-center gap-2">
            <Server className="w-4 h-4 text-gray-400" />
            Son Trafik Kayıtları
            </h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/5 text-gray-200 font-mono text-xs uppercase">
                <tr>
                <th className="p-4">Zaman</th>
                <th className="p-4">IP</th>
                <th className="p-4">Method</th>
                <th className="p-4">Target</th>
                <th className="p-4">Status</th>
                <th className="p-4">Latency</th>
                <th className="p-4">Risk</th>
                <th className="p-4">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
                {logs.map((log) => (
                <tr key={log._id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4 font-mono text-xs">{new Date(log.timestamp).toLocaleTimeString()}</td>
                    <td className="p-4 font-mono text-white">{log.ip}</td>
                    <td className="p-4">
                        <span className={cn("px-2 py-1 rounded text-xs font-bold", 
                            log.method === 'GET' ? 'bg-blue-500/10 text-blue-500' : 
                            log.method === 'POST' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'
                        )}>{log.method}</span>
                    </td>
                    <td className="p-4 font-mono text-xs truncate max-w-[200px]">{log.path}</td>
                    <td className="p-4">
                         <span className={cn("px-2 py-1 rounded text-xs font-bold", 
                            log.statusCode >= 500 ? 'text-red-500' : 
                            log.statusCode >= 400 ? 'text-orange-500' : 'text-green-500'
                        )}>{log.statusCode}</span>
                    </td>
                    <td className="p-4 font-mono text-xs">{log.responseTime}ms</td>
                    <td className="p-4">
                        <span className={cn("font-bold", log.riskScore > 50 ? "text-red-500" : "text-green-500")}>
                            {log.riskScore}
                        </span>
                    </td>
                    <td className="p-4">
                        <Button variant="ghost" size="sm" onClick={() => setSelectedLog(log)} className="text-xs h-7">Detay</Button>
                    </td>
                </tr>
                ))}
                {logs.length === 0 && !loading && (
                 <tr>
                    <td colSpan={8} className="p-8 text-center text-gray-500">Henüz kayıt yok.</td>
                 </tr>
                )}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
