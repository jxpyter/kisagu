"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  ShieldAlert, 
  ScanLine, 
  FileText, 
  Activity, 
  Plug, 
  Settings,
  LogOut,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: Home, label: "Genel Bakış", href: "/dashboard" },
  { icon: ShieldAlert, label: "Tehdit Algılama", href: "/dashboard/threats" },
  { icon: ScanLine, label: "API Performans", href: "/dashboard/scans" },
  { icon: FileText, label: "Raporlar", href: "/dashboard/reports" },
  { icon: Activity, label: "Anomali & Olaylar", href: "/dashboard/incidents" },
  { icon: Plug, label: "Entegrasyonlar", href: "/dashboard/integrations" },
  { icon: Settings, label: "Ayarlar", href: "/dashboard/settings" },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    // Mock Data from LocalStorage
    const stored = localStorage.getItem("mock_user");
    if (stored) {
        setUser(JSON.parse(stored));
    } else {
        // Fallback for visual testing if no storage
        setUser({ name: "Demo User", email: "demo@kisagu.com" });
    }
  }, []);

  return (
    <>
      {/* Mobile Toggle */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="lg:hidden fixed top-4 left-4 z-50 text-white"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Sidebar Overlay for Mobile */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-[#0a0a0a] border-r border-white/10 z-40 flex flex-col transition-transform duration-300 lg:translate-x-0 pt-20 lg:pt-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo Area */}
        <div className="h-20 flex items-center px-8 border-b border-white/10">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1718fe] flex items-center justify-center text-white shadow-[0_0_15px_rgba(23,24,254,0.4)]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="font-bold text-white tracking-tight">Kisagu</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                  isActive 
                    ? "bg-[#1718fe]/10 text-[#1718fe] border border-[#1718fe]/20" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-[#1718fe]" : "text-gray-500 group-hover:text-white")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User Profile / Logout */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/5 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1718fe] to-purple-500 flex items-center justify-center text-xs font-bold text-white">
              {user?.name ? user.name.substring(0, 2).toUpperCase() : 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user?.name || 'Loading...'}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email || '...'}</p>
            </div>
          </div>
          
          <Link 
            href="/login"
            className="flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Çıkış Yap
          </Link>
        </div>
      </aside>
    </>
  );
}
