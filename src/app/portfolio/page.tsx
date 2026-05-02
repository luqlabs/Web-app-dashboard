import { Wallet, TrendingUp } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function Watchlist() {
  const holdings = [
    { symbol: "BTC", name: "Bitcoin", amount: 0.45, value: 28903.72, change: 5.2 },
    { symbol: "ETH", name: "Ethereum", amount: 4.2, value: 14490.84, change: -1.2 },
    { symbol: "SOL", name: "Solana", amount: 150, value: 21870.00, change: 12.5 },
  ];

  const totalValue = holdings.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Watchlist</h1>
        <p className="text-muted-foreground mt-2">Track the performance of your favorite assets.</p>
      </div>

      <div className="bg-card border border-border p-8 rounded-2xl shadow-sm bg-linear-to-br from-card to-primary/5 relative overflow-hidden">
        <Wallet className="absolute -bottom-4 -right-4 w-48 h-48 text-primary/10" />
        <div className="relative z-10">
          <p className="text-muted-foreground font-medium mb-2">Tracked Market Value</p>
          <h2 className="text-5xl font-bold">{formatCurrency(totalValue)}</h2>
          <div className="flex items-center gap-2 mt-4 text-emerald-500 font-medium">
            <TrendingUp className="w-5 h-5" />
            + $2,450.00 (3.2%) Today
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
        <div className="p-5 border-b border-border">
          <h3 className="font-semibold text-lg">Saved Assets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/20 text-xs uppercase text-muted-foreground">
                <th className="p-4 font-medium">Asset</th>
                <th className="p-4 font-medium text-right">Balance</th>
                <th className="p-4 font-medium text-right">Value (USD)</th>
                <th className="p-4 font-medium text-right">24h Return</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((item, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-sm">
                        {item.symbol[0]}
                      </div>
                      <div>
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right font-medium">
                    {item.amount} {item.symbol}
                  </td>
                  <td className="p-4 text-right font-medium">
                    {formatCurrency(item.value)}
                  </td>
                  <td className={`p-4 text-right font-medium ${item.change >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {item.change >= 0 ? '+' : ''}{item.change}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
