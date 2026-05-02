"use client";

import { Bell, Search, Sun, Moon, Menu, X, LayoutDashboard, Wallet, ArrowRightLeft, Settings as SettingsIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Wallet, label: "Watchlist", href: "/portfolio" },
    { icon: ArrowRightLeft, label: "Market Activity", href: "/transactions" },
    { icon: SettingsIcon, label: "Preferences", href: "/settings" },
  ];

  return (
    <>
      <header className="h-16 flex items-center justify-between px-4 md:px-6 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-30 sticky top-0">
        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="font-bold text-lg text-primary tracking-tight">
            Nexus<span className="text-foreground">Data</span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl items-center relative">
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden flex flex-col">
          <div className="h-16 flex items-center justify-between px-4 border-b border-border">
            <div className="font-bold text-xl text-primary tracking-tight">
              Nexus<span className="text-foreground">Data</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-lg">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
