"use client";

import { Activity, Server, Database, TrendingUp, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { Button } from "@/components/ui/button";

const dummySparkData = [
  { v: 40 }, { v: 30 }, { v: 45 }, { v: 60 }, { v: 55 }, { v: 70 }, { v: 65 }, { v: 50 }, { v: 45 }, { v: 55 },
  { v: 40 }, { v: 30 }, { v: 45 }, { v: 60 }, { v: 55 }, { v: 70 }, { v: 65 }, { v: 50 }, { v: 45 }, { v: 55 },
];

function Sparkline({ color = "#10b981" }: { color?: string }) {
    return (
        <div className="h-16 w-full mt-2">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dummySparkData}>
                    <defs>
                        <linearGradient id={`color-${color}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                            <stop offset="95%" stopColor={color} stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Area 
                        type="monotone" 
                        dataKey="v" 
                        stroke={color} 
                        strokeWidth={2}
                        fill={`url(#color-${color})`} 
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default function SystemHealthPage() {
    return (
        <div className="p-6 lg:p-8 pt-24 lg:pt-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Sistem Durumu</h1>
                    <p className="text-gray-400 mt-1">Gerçek zamanlı servis ve altyapı izleme.</p>
                </div>
                 <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-500 rounded-full border border-green-500/20 text-sm font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Tüm Sistemler Operasyonel
                 </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* APi Latency */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-[#3b82f6]/30 transition-colors">
                     <div className="flex justify-between items-start">
                        <div>
                             <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                API Yanıt Süresi
                             </p>
                             <h3 className="text-2xl font-bold text-white mt-2">42ms <span className="text-sm font-normal text-gray-500">ort.</span></h3>
                        </div>
                        <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">+12% iyileşme</span>
                     </div>
                     <Sparkline color="#3b82f6" />
                </div>

                {/* Error Rate */}
                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-red-500/30 transition-colors">
                     <div className="flex justify-between items-start">
                        <div>
                             <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                Hata Oranı (5xx)
                             </p>
                             <h3 className="text-2xl font-bold text-white mt-2">0.05% <span className="text-sm font-normal text-gray-500">son 1 saat</span></h3>
                        </div>
                        <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">Stabil</span>
                     </div>
                     <Sparkline color="#ef4444" />
                </div>

                {/* CPU Load */}
                 <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                     <div className="flex justify-between items-start">
                        <div>
                             <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                <Activity className="w-4 h-4" />
                                CPU Yükü
                             </p>
                             <h3 className="text-2xl font-bold text-white mt-2">45% <span className="text-sm font-normal text-gray-500">cluster ort.</span></h3>
                        </div>
                     </div>
                     <Sparkline color="#f97316" />
                </div>
            </div>

            {/* Services Status */}
            <div>
                 <h2 className="text-xl font-bold text-white mb-4">Servis Durumları</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                     {[
                        { name: "Auth Service", status: "operational", uptime: "99.99%" },
                        { name: "Scan Engine (Core)", status: "operational", uptime: "99.95%" },
                        { name: "Report Generator", status: "degraded", uptime: "98.50%" },
                        { name: "Notification Service", status: "operational", uptime: "99.99%" },
                        { name: "Database Primary", status: "operational", uptime: "100%" },
                        { name: "Storage Bucket (S3)", status: "operational", uptime: "100%" },
                     ].map((service) => (
                        <div key={service.name} className="flex items-center justify-between p-4 bg-[#0a0a0a] border border-white/10 rounded-lg">
                            <div className="flex items-center gap-3">
                                {service.status === 'operational' ? (
                                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                         <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                ) : (
                                     <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                                         <AlertTriangle className="w-5 h-5" />
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm font-medium text-white">{service.name}</p>
                                    <p className="text-xs text-gray-500">Uptime: {service.uptime}</p>
                                </div>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded font-bold uppercase ${
                                service.status === 'operational' ? 'text-green-500 bg-green-500/10' : 'text-yellow-500 bg-yellow-500/10'
                            }`}>
                                {service.status}
                            </span>
                        </div>
                     ))}
                 </div>
            </div>

            {/* Logs Preview */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-white/10 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-white">Canlı Sistem Logları</h2>
                    <Button variant="ghost" size="sm" className="text-xs font-mono h-7">Tümünü Gör</Button>
                </div>
                <div className="p-4 space-y-2 font-mono text-xs max-h-[200px] overflow-y-auto">
                    {[1,2,3,4,5].map((i) => (
                        <div key={i} className="flex gap-4 border-b border-white/5 pb-2 last:border-0 last:pb-0">
                            <span className="text-gray-500">2024-12-15 14:30:2{i}</span>
                            <span className={i === 3 ? "text-yellow-500" : "text-blue-400"}>[INFO]</span>
                            <span className="text-gray-300">Service worker initialized for tenant-a{i}2f...</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
