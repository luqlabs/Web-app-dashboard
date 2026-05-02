"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Wallet, ArrowRightLeft, Settings, PieChart } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Wallet, label: "Watchlist", href: "/portfolio" },
    { icon: ArrowRightLeft, label: "Market Activity", href: "/transactions" },
    { icon: Settings, label: "Preferences", href: "/settings" },
  ];

  return (
    <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-sm hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm bg-primary" />
          </div>
          Nexus<span className="text-foreground">Data</span>
        </Link>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-1">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}
