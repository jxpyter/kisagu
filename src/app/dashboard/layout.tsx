import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <DashboardSidebar />
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
