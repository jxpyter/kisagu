import { AlertTriangle, Wifi, ShieldCheck, Activity } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "threat",
    title: "SQL Injection Engellendi",
    desc: "IP: 192.168.1.104 - /api/users endpoint hedeflendi.",
    time: "2 dk önce",
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20"
  },
  {
    id: 2,
    type: "anomaly",
    title: "Anormal Trafik Tespiti",
    desc: "Bot trafiği şüphesiyle 45.2.x.x bloğu karantinaya alındı.",
    time: "15 dk önce",
    icon: Activity,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    id: 3,
    type: "system",
    title: "Sistem Taraması Tamamlandı",
    desc: "Tüm servisler aktif ve güncel.",
    time: "1 saat önce",
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20"
  },
];

export function RecentActivity() {
  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-white">Kritik Olaylar</h3>
        <button className="text-xs text-[#1718fe] hover:text-white transition-colors">Tümünü Gör</button>
      </div>
      
      <div className="space-y-4">
        {activities.map((item) => (
          <div key={item.id} className={`flex items-start gap-4 p-4 rounded-lg border ${item.border} ${item.bg}`}>
            <div className={`p-2 rounded-md bg-black/20 ${item.color}`}>
              <item.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className={`text-sm font-medium ${item.color}`}>{item.title}</p>
                <span className="text-xs text-white/50">{item.time}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
