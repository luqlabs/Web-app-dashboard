import { Bell, Shield, User, Globe, Moon } from "lucide-react";

export default function Settings() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account preferences and configurations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
        <div className="md:col-span-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium text-sm text-left">
            <User className="w-5 h-5" />
            Profile
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors">
            <Shield className="w-5 h-5" />
            Security
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors">
            <Bell className="w-5 h-5" />
            Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground font-medium text-sm text-left transition-colors">
            <Globe className="w-5 h-5" />
            Preferences
          </button>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-6">Profile Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">First Name</label>
                  <input type="text" defaultValue="John" className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2 outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2 outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                <input type="email" defaultValue="john.doe@example.com" className="w-full bg-muted/50 border border-border rounded-lg px-4 py-2 outline-none focus:border-primary transition-colors" />
              </div>
              <div className="pt-4 flex justify-end">
                <button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <Moon className="w-5 h-5 text-primary" />
              Appearance
            </h3>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-muted-foreground">Currently using the default dark theme.</p>
              </div>
              <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-primary-foreground rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
