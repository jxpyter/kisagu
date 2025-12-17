"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Activity, 
  Settings, 
  FileText,
  LogOut,
  Menu,
  Server
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const adminMenuItems = [
  { icon: LayoutDashboard, label: "Genel Bakış", href: "/admin" },
  { icon: Users, label: "Kullanıcı Yönetimi", href: "/admin/tenants" },
  { icon: Activity, label: "Sistem Durumu", href: "/admin/health" },
  { icon: FileText, label: "Sistem Logları", href: "/admin/logs" },
  { icon: Settings, label: "Genel Ayarlar", href: "/admin/settings" },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
          "fixed top-0 left-0 h-full w-64 bg-[#050505] border-r border-white/10 z-40 flex flex-col transition-transform duration-300 lg:translate-x-0 pt-20 lg:pt-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo Area */}
        <div className="h-20 flex items-center px-8 border-b border-white/10 bg-gradient-to-r from-[#1718fe]/10 to-transparent">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              <Server className="w-5 h-5" />
            </div>
            <div>
                <span className="font-bold text-white tracking-tight block leading-none">Kisagu</span>
                <span className="text-[10px] text-red-500 font-mono tracking-widest uppercase">Admin</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {adminMenuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                  isActive 
                    ? "bg-red-500/10 text-red-500 border border-red-500/20" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-red-500" : "text-gray-500 group-hover:text-white")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User Profile / Logout */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 border border-white/5 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-orange-600 flex items-center justify-center text-xs font-bold text-white">
              SA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Kisagu</p>
              <p className="text-xs text-gray-500 truncate">admin@kisagu.com</p>
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
