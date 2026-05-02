"use client";

import { Bell, Globe, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Preferences() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Preferences</h1>
        <p className="text-muted-foreground mt-2">Customize how you view the market data.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        <div className="md:col-span-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium text-sm text-left">
            <Moon className="w-5 h-5" />
            Appearance
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors">
            <Bell className="w-5 h-5" />
            Alerts
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors">
            <Globe className="w-5 h-5" />
            Region
          </button>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <Moon className="w-5 h-5 text-primary" />
              Theme Configuration
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={() => setTheme('light')}
                className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${
                  mounted && theme === 'light' ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted'
                }`}
              >
                <Sun className="w-8 h-8" />
                <span className="font-medium">Light Mode</span>
              </button>
              
              <button 
                onClick={() => setTheme('dark')}
                className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${
                  mounted && theme === 'dark' ? 'border-primary bg-primary/5 text-primary' : 'border-border bg-muted/30 text-muted-foreground hover:bg-muted'
                }`}
              >
                <Moon className="w-8 h-8" />
                <span className="font-medium">Dark Mode</span>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
