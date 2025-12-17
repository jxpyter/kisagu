"use client";

import { Search, Filter, Shield, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
  apiKey: string;
  createdAt: string;
}

const MOCK_USERS: User[] = [
    { _id: "1", name: "Ahmet Yilmaz", email: "ahmet@gmail.com", role: "admin", apiKey: "ks_live_384729384", createdAt: "2024-12-01" },
    { _id: "2", name: "Mehmet Demir", email: "mehmet@test.com", role: "member", apiKey: "ks_live_837482734", createdAt: "2024-12-05" },
    { _id: "3", name: "Ayse Kaya", email: "ayse@acme.com", role: "member", apiKey: "ks_live_928374923", createdAt: "2024-12-10" },
    { _id: "4", name: "Fatma Celik", email: "fatma@corp.net", role: "member", apiKey: "ks_live_192837465", createdAt: "2024-12-12" },
    { _id: "5", name: "Ali Veli", email: "ali@veli.com", role: "member", apiKey: "ks_live_564738291", createdAt: "2024-12-14" },
];

export default function TenantsPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock API Call
        setTimeout(() => {
            setUsers(MOCK_USERS);
            setLoading(false);
        }, 500);
    }, []);

    const filteredUsers = users.filter(u => 
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 lg:p-8 pt-24 lg:pt-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Kullanıcı Yönetimi</h1>
                    <p className="text-gray-400 mt-1">Platforma kayıtlı tüm kullanıcıları görüntüleyin.</p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4 bg-[#0a0a0a] border border-white/10 p-4 rounded-xl">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                        type="text" 
                        placeholder="İsim veya e-posta ara..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-white/20"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="bg-white/5 text-gray-400 font-mono text-xs uppercase tracking-wider">
                            <th className="px-6 py-4">Kullanıcı</th>
                            <th className="px-6 py-4">Rol</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">API Key</th>
                            <th className="px-6 py-4">Kayıt Tarihi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {loading && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-500">Yükleniyor...</td>
                            </tr>
                        )}
                        {!loading && filteredUsers.map((user) => (
                            <tr key={user._id} className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <UserIcon className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <span className="font-bold text-white">{user.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={cn(
                                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border",
                                        user.role === 'admin' 
                                            ? "bg-red-500/10 border-red-500/20 text-red-500" 
                                            : "bg-blue-500/10 border-blue-500/20 text-blue-500"
                                    )}>
                                        {user.role === 'admin' ? <Shield className="w-3 h-3" /> : null}
                                        <span className="uppercase">{user.role}</span>
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-300">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 text-gray-500 font-mono text-xs">
                                    {user.apiKey.substring(0, 16)}...
                                </td>
                                <td className="px-6 py-4 text-gray-400 font-mono">
                                    {user.createdAt}
                                </td>
                            </tr>
                        ))}
                         {!loading && filteredUsers.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-500">Kullanıcı bulunamadı.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
