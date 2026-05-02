import { AssetTable } from "@/components/AssetTable";
import { Activity, BarChart3, LineChart, TrendingUp } from "lucide-react";

export default function Home() {
  const summaryCards = [
    { title: "Total Market Cap", value: "$2.4T", change: "+4.2%", isPositive: true, icon: BarChart3 },
    { title: "24h Volume", value: "$84.5B", change: "-1.5%", isPositive: false, icon: Activity },
    { title: "BTC Dominance", value: "52.4%", change: "+0.1%", isPositive: true, icon: TrendingUp },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Market Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome back. Here's what's happening in the market today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryCards.map((card, idx) => (
          <div key={idx} className="bg-card border border-border p-6 rounded-2xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
              <card.icon className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <p className="text-sm font-medium text-muted-foreground mb-2">{card.title}</p>
              <h3 className="text-3xl font-bold mb-4">{card.value}</h3>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${card.isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                  {card.change}
                </span>
                <span className="text-xs text-muted-foreground">vs last 24h</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AssetTable />
    </div>
  );
}
