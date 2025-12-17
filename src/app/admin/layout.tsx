import { AdminSidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      <AdminSidebar />
      <main className="flex-1 lg:pl-64 transition-all duration-300">
        <div className="w-full max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
