import { Bell, Search } from "lucide-react";

export function Header() {
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
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background" />
        </button>
        <div className="w-9 h-9 rounded-full bg-linear-to-tr from-primary to-purple-500 p-[2px] cursor-pointer hover:opacity-90 transition-opacity">
          <div className="w-full h-full rounded-full bg-card border-2 border-transparent flex items-center justify-center overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}
