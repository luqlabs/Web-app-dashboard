import { ArrowDownLeft, ArrowUpRight, Search } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function MarketActivity() {
  const transactions = [
    { id: "tx-1", type: "Whale Buy", asset: "BTC", amount: 150.5, price: 64230.5, date: "2026-05-01 14:30", status: "Verified" },
    { id: "tx-2", type: "Large Sell", asset: "ETH", amount: 2000.0, price: 3450.2, date: "2026-04-28 09:15", status: "Verified" },
    { id: "tx-3", type: "Whale Buy", asset: "SOL", amount: 50000, price: 140.0, date: "2026-04-25 18:45", status: "Verified" },
    { id: "tx-4", type: "Exchange Inflow", asset: "USDT", amount: 5000000, price: 1, date: "2026-04-20 10:00", status: "Verified" },
    { id: "tx-5", type: "Whale Buy", asset: "LINK", amount: 100000, price: 17.5, date: "2026-04-18 11:20", status: "Pending" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Market Activity</h1>
        <p className="text-muted-foreground mt-2">Monitor global large-scale trades and market movements.</p>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
        <div className="p-5 border-b border-border flex justify-between items-center">
          <div className="relative w-72">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by asset or type..." 
              className="w-full bg-muted/50 border border-transparent focus:border-border rounded-lg pl-10 pr-4 py-2 text-sm outline-none transition-all"
            />
          </div>
          <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-muted/20 text-xs uppercase text-muted-foreground">
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium text-right">Amount</th>
                <th className="p-4 font-medium text-right">Price</th>
                <th className="p-4 font-medium text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        tx.type.includes('Buy') || tx.type.includes('Inflow') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                      }`}>
                        {tx.type.includes('Buy') || tx.type.includes('Inflow') ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      </div>
                      <div className="font-medium">{tx.type} {tx.asset}</div>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground text-sm">
                    {tx.date}
                  </td>
                  <td className="p-4 text-right font-medium">
                    {tx.amount} {tx.asset}
                  </td>
                  <td className="p-4 text-right text-muted-foreground">
                    {tx.asset === 'USD' ? '-' : formatCurrency(tx.price)}
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      tx.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {tx.status}
                    </span>
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
