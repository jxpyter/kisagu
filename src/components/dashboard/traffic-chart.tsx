"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', normal: 4000, threat: 240 },
  { time: '04:00', normal: 3000, threat: 139 },
  { time: '08:00', normal: 2000, threat: 980 },
  { time: '12:00', normal: 2780, threat: 390 },
  { time: '16:00', normal: 1890, threat: 480 },
  { time: '20:00', normal: 2390, threat: 380 },
  { time: '23:59', normal: 3490, threat: 430 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0a0a0a] border border-white/10 p-3 rounded-lg shadow-xl">
        <p className="text-gray-400 text-xs mb-2 font-mono">{label}</p>
        <div className="space-y-1">
          <p className="text-[#1718fe] text-sm font-medium">
            Normal: {payload[0].value} req
          </p>
          <p className="text-red-400 text-sm font-medium">
            Tehdit: {payload[1].value} req
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function TrafficChart() {
  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 h-[400px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-medium text-white mb-1">Trafik Analizi</h3>
          <p className="text-sm text-gray-400">Normal ve Anormal İstek Dağılımı</p>
        </div>
        <div className="flex bg-white/5 rounded-lg p-1">
          {['24S', '7G', '30G'].map((period, i) => (
            <button 
              key={period}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                i === 0 
                  ? 'bg-[#1718fe] text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorNormal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1718fe" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#1718fe" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorThreat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
          <XAxis 
            dataKey="time" 
            stroke="#666" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
          />
          <YAxis 
            stroke="#666" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="normal" 
            stroke="#1718fe" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorNormal)" 
          />
          <Area 
            type="monotone" 
            dataKey="threat" 
            stroke="#ef4444" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorThreat)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
