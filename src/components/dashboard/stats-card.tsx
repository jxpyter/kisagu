import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  highlightColor?: string; // Hex color for icon/trend
}

export function StatsCard({ title, value, description, icon: Icon, trend, highlightColor = "#1718fe" }: StatsCardProps) {
  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-[#1718fe]/30 transition-colors group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
        <div 
          className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 transition-transform"
          style={{ color: highlightColor }}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      {(description || trend) && (
        <div className="flex items-center gap-2 text-xs">
          {trend && (
            <span className={`font-medium ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {trend.isPositive ? '+' : ''}{trend.value}%
            </span>
          )}
          {description && <span className="text-gray-500">{description}</span>}
        </div>
      )}
    </div>
  );
}
