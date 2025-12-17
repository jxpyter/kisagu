"use client";

import { ScrollText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLogsPage() {
    return (
        <div className="p-6 lg:p-8 pt-24 lg:pt-8 space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                     <h1 className="text-3xl font-bold text-white">Sistem Logları</h1>
                     <p className="text-gray-400 mt-1">Platform olay kayıtları ve denetim izleri.</p>
                </div>
                <Button variant="outline" className="border-white/10 gap-2 text-gray-400 hover:text-white hover:bg-white/5">
                    <Download className="w-4 h-4" />
                    CSV İndir
                </Button>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-sm">
                <div className="flex bg-white/5 p-2 text-xs text-gray-500 border-b border-white/10">
                     <span className="w-48 text-center border-r border-white/10 mr-4">TIMESTAMP</span>
                     <span className="w-24 text-center border-r border-white/10 mr-4">LEVEL</span>
                     <span className="w-32 text-center border-r border-white/10 mr-4">SERVICE</span>
                     <span className="flex-1">MESSAGE</span>
                </div>
                <div className="p-4 space-y-1 text-gray-300 h-[600px] overflow-y-auto">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="flex hover:bg-white/5 p-1 rounded">
                            <span className="w-48 text-gray-500 mr-4 shrink-0">2024-12-15 14:30:{10+i}</span>
                            <span className={`w-24 mr-4 shrink-0 font-bold text-center ${i % 3 === 0 ? 'text-blue-500' : i % 5 === 0 ? 'text-yellow-500' : 'text-green-500'}`}>
                                {i % 3 === 0 ? 'INFO' : i % 5 === 0 ? 'WARN' : 'DEBUG'}
                            </span>
                            <span className="w-32 mr-4 shrink-0 text-gray-400 text-center">
                                {i % 2 === 0 ? 'api-gateway' : 'auth-service'}
                            </span>
                            <span className="truncate">
                                {i % 5 === 0 ? 'High latency detected in upstream connection' : 'Request processed successfully via handler'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
