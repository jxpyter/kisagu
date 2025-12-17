"use client";

interface RiskGaugeProps {
  score: number; // 0-100
}

export function RiskGauge({ score }: RiskGaugeProps) {
  // Calculate stroke dash based on score (half circle)
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * (circumference / 2);
  
  // Color based on risk (Low score = High Risk = Red, High Score = Low Risk = Green)
  const getColor = () => {
    if (score < 50) return "#ef4444"; // Red
    if (score < 80) return "#eab308"; // Yellow
    return "#22c55e"; // Green
  };

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="relative w-48 h-24 overflow-hidden mb-4">
        <svg className="w-full h-full transform scale-[1.3] origin-bottom" viewBox="0 0 200 100">
          {/* Background Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="15"
            strokeLinecap="round"
          />
          {/* Active Arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={getColor()}
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray={circumference / 2} // Only show half circle
            strokeDashoffset={circumference / 2 - ((score / 100) * (circumference / 2))}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-4xl font-bold text-white">{score}</span>
            <span className="text-xs text-gray-500 font-mono">GÜVENLİK SKORU</span>
        </div>
      </div>
      
      <div className="text-center">
        <p className={`text-lg font-medium`} style={{ color: getColor() }}>
            {score < 50 ? "Yüksek Risk" : score < 80 ? "Orta Risk" : "Güvenli"}
        </p>
        <p className="text-gray-400 text-xs">Son tarama: 2 dk önce</p>
      </div>
    </div>
  );
}
