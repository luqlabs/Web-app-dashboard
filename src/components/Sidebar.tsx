import Link from "next/link";
import { LayoutDashboard, Wallet, ArrowRightLeft, Settings, PieChart } from "lucide-react";

export function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/" },
    { icon: PieChart, label: "Market", href: "#" },
    { icon: Wallet, label: "Portfolio", href: "#" },
    { icon: ArrowRightLeft, label: "Transactions", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  return (
    <aside className="w-64 border-r border-border bg-card/50 backdrop-blur-sm hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="flex items-center gap-2 font-bold text-xl text-primary tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm bg-primary" />
          </div>
          Nexus<span className="text-foreground">Data</span>
        </div>
      </div>
      
      <nav className="flex-1 py-6 px-4 space-y-1">
        {menuItems.map((item, index) => {
          const isActive = item.href === "/";
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

      <div className="p-4 border-t border-border">
        <div className="p-4 bg-muted/50 rounded-xl border border-border/50">
          <p className="text-sm font-medium">Pro Plan Trial</p>
          <p className="text-xs text-muted-foreground mt-1 mb-3">12 days left on your trial</p>
          <button className="w-full text-xs bg-primary text-primary-foreground font-medium py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
