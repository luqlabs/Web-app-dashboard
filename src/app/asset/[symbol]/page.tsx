"use client";

import { use } from "react";
import { mockAssets, getAssetHistory } from "@/lib/mockData";
import { formatCurrency, formatCompactNumber } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";

export default function AssetDetail({ params }: { params: Promise<{ symbol: string }> }) {
  const resolvedParams = use(params);
  const asset = mockAssets.find(a => a.symbol.toLowerCase() === resolvedParams.symbol.toLowerCase());
  
  if (!asset) {
    return <div className="p-10 text-center">Asset not found</div>;
  }

  const historyData = getAssetHistory(asset.symbol);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border p-6 rounded-2xl shadow-sm"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary/20 to-purple-500/20 flex items-center justify-center font-bold text-xl border border-primary/20">
                  {asset.symbol[0]}
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{asset.name}</h1>
                  <p className="text-muted-foreground">{asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{formatCurrency(asset.price)}</div>
                <div className={`flex items-center justify-end gap-1 font-medium mt-1 ${asset.change24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {asset.change24h >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {Math.abs(asset.change24h)}% (24h)
                </div>
              </div>
            </div>

            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historyData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10}
                    minTickGap={30}
                  />
                  <YAxis 
                    domain={['auto', 'auto']} 
                    stroke="hsl(var(--muted-foreground))" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(val: number) => `$${val.toLocaleString()}`}
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                    labelStyle={{ color: 'hsl(var(--muted-foreground))', marginBottom: '4px' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, strokeWidth: 0, fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-primary" />
              Market Statistics
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-muted-foreground">Market Cap</span>
                <span className="font-medium">${formatCompactNumber(asset.marketCap)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-muted-foreground">Volume (24h)</span>
                <span className="font-medium">${formatCompactNumber(asset.volume24h)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/50">
                <span className="text-muted-foreground">Category</span>
                <span className="font-medium bg-muted px-2 py-1 rounded-md text-xs">{asset.category}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">Market Sentiment</span>
                <span className="font-medium text-emerald-500">{asset.insight}</span>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all active:scale-[0.98]">
              Trade {asset.symbol}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
