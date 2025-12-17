"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', total: 12000, error: 140 },
  { time: '04:00', total: 8000, error: 89 },
  { time: '08:00', total: 22000, error: 280 },
  { time: '12:00', total: 35000, error: 490 },
  { time: '16:00', total: 28000, error: 320 },
  { time: '20:00', total: 31000, error: 250 },
  { time: '23:59', total: 15000, error: 180 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#050505] border border-white/10 p-3 rounded-lg shadow-xl">
        <p className="text-gray-400 text-xs mb-2 font-mono">{label}</p>
        <div className="space-y-1">
          <p className="text-gray-200 text-sm font-medium">
            Toplam: {payload[0].value} req
          </p>
          <p className="text-red-500 text-sm font-medium">
            Hata (5xx): {payload[1].value} req
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function SystemTrafficChart() {
  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 h-[400px]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-medium text-white mb-1">Sistem Genel Trafiği</h3>
          <p className="text-sm text-gray-400">Platform Geneli İstek & Hata Oranları</p>
        </div>
        <div className="flex bg-white/5 rounded-lg p-1">
          {['24S', '7G', '30G'].map((period, i) => (
            <button 
              key={period}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                i === 0 
                  ? 'bg-red-600 text-white shadow-lg' 
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
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorError" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dc2626" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#dc2626" stopOpacity={0}/>
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
            dataKey="total" 
            stroke="#ffffff" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorTotal)" 
          />
          <Area 
            type="monotone" 
            dataKey="error" 
            stroke="#dc2626" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorError)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
