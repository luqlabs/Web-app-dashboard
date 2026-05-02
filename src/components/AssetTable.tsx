"use client";

import { useState } from "react";
import { formatCurrency, formatCompactNumber, cn } from "@/lib/utils";
import { mockAssets } from "@/lib/mockData";
import { ArrowUpRight, ArrowDownRight, MoreHorizontal, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function AssetTable() {
  const [filter, setFilter] = useState("All");
  
  const filteredAssets = filter === "All" 
    ? mockAssets 
    : mockAssets.filter(a => a.category === filter);

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Market Watch
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Live market data updates every 5 mins.</p>
        </div>
        <div className="flex gap-2">
          {["All", "Layer 1", "DeFi", "Oracle"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-full transition-all",
                filter === cat 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/20 text-xs uppercase tracking-wider text-muted-foreground">
              <th className="p-4 font-medium">Asset</th>
              <th className="p-4 font-medium text-right">Price</th>
              <th className="p-4 font-medium text-right">24h Change</th>
              <th className="p-4 font-medium text-right hidden md:table-cell">Market Cap</th>
              <th className="p-4 font-medium text-center hidden sm:table-cell">Status/Insight</th>
              <th className="p-4 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset, idx) => (
              <motion.tr 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={asset.id} 
                className="border-b border-border/50 hover:bg-muted/30 transition-colors group"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-muted to-muted-foreground/20 flex items-center justify-center font-bold text-sm">
                      {asset.symbol[0]}
                    </div>
                    <div>
                      <div className="font-semibold">{asset.name}</div>
                      <div className="text-xs text-muted-foreground">{asset.symbol} • {asset.category}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-right font-medium">
                  {formatCurrency(asset.price)}
                </td>
                <td className="p-4 text-right">
                  <div className={cn(
                    "inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium",
                    asset.change24h >= 0 
                      ? "bg-emerald-500/10 text-emerald-500" 
                      : "bg-rose-500/10 text-rose-500"
                  )}>
                    {asset.change24h >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {Math.abs(asset.change24h)}%
                  </div>
                </td>
                <td className="p-4 text-right hidden md:table-cell text-muted-foreground">
                  ${formatCompactNumber(asset.marketCap)}
                </td>
                <td className="p-4 text-center hidden sm:table-cell">
                  <span className={cn(
                    "px-2.5 py-1 text-xs font-medium rounded-full border",
                    asset.insight === 'Bullish' && "border-emerald-500/30 text-emerald-500 bg-emerald-500/5",
                    asset.insight === 'Bearish' && "border-rose-500/30 text-rose-500 bg-rose-500/5",
                    asset.insight === 'Overbought' && "border-amber-500/30 text-amber-500 bg-amber-500/5",
                    asset.insight === 'Oversold' && "border-blue-500/30 text-blue-500 bg-blue-500/5",
                    asset.insight === 'Neutral' && "border-border text-muted-foreground bg-muted/50"
                  )}>
                    {asset.insight}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Link 
                    href={`/asset/${asset.symbol.toLowerCase()}`}
                    className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </Link>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
