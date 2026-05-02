"use client";

import { Bell, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-10 sticky top-0">
      <div className="flex-1 max-w-xl flex items-center relative">
        <Search className="w-4 h-4 text-muted-foreground absolute left-3" />
        <input 
          type="text" 
          placeholder="Search assets, categories..." 
          className="w-full bg-muted/50 border border-transparent focus:border-border focus:bg-background rounded-full pl-10 pr-4 py-2 text-sm outline-none transition-all"
        />
      </div>
      
      <div className="flex items-center gap-4 ml-4">
        {mounted && (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background" />
        </button>
      </div>
    </header>
  );
}
