"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Save, AlertTriangle, Lock, Globe, Mail, Server } from "lucide-react";
import { useToast } from "@/components/ui/toast";

export default function AdminSettingsPage() {
    const { toast } = useToast();
    const [settings, setSettings] = useState({
        maintenanceMode: false,
        registrationOpen: true,
        debugMode: false,
        emailNotifications: true,
        autoBackup: true
    });

    const handleSave = () => {
        toast({
            type: "loading",
            title: "Ayarlar Kaydediliyor...",
            message: "Global konfigürasyon güncelleniyor.",
            duration: 1500
        });
        setTimeout(() => {
            toast({
                type: "success",
                title: "Başarılı",
                message: "Tüm ayarlar veritabanına işlendi."
            });
        }, 1500);
    };

    return (
        <div className="p-6 lg:p-8 pt-24 lg:pt-8 space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Genel Ayarlar</h1>
                    <p className="text-gray-400 mt-1">Platformun global davranışlarını yapılandırın.</p>
                </div>
                <Button onClick={handleSave} className="bg-white text-black hover:bg-gray-200 gap-2 font-medium">
                    <Save className="w-4 h-4" />
                    Değişiklikleri Kaydet
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Critical Settings */}
                <div className="space-y-6">
                    <div className="bg-[#0a0a0a] border border-red-500/20 rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-red-500/10 bg-red-500/5">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                                Kritik Bölge
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                             <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-white font-medium">Bakım Modu (Maintenance)</p>
                                    <p className="text-sm text-gray-500 max-w-xs">Etkinleştirildiğinde sadece adminler giriş yapabilir. Kullanıcılar bakım sayfası görür.</p>
                                </div>
                                <Switch 
                                    checked={settings.maintenanceMode} 
                                    onCheckedChange={(c) => setSettings({...settings, maintenanceMode: c})} 
                                    className="data-[state=checked]:bg-red-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-white/10">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Lock className="w-5 h-5 text-white" />
                                Erişim ve Güvenlik
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                             <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-white font-medium">Yeni Üye Alımı (Registration)</p>
                                    <p className="text-sm text-gray-500">Kapatıldığında dışarıdan yeni üyelik oluşturulamaz.</p>
                                </div>
                                <Switch 
                                    checked={settings.registrationOpen} 
                                    onCheckedChange={(c) => setSettings({...settings, registrationOpen: c})} 
                                />
                            </div>
                            <div className="h-px bg-white/5" />
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-white font-medium">Debug Modu</p>
                                    <p className="text-sm text-gray-500">Frontend tarafında detaylı hata loglarını açar. Prodüksiyon için önerilmez.</p>
                                </div>
                                <Switch 
                                    checked={settings.debugMode} 
                                    onCheckedChange={(c) => setSettings({...settings, debugMode: c})} 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Settings */}
                <div className="space-y-6">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-white/10">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Server className="w-5 h-5 text-white" />
                                Sistem Tercihleri
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-gray-300">Ana Dil (Varsayılan)</label>
                                <select className="w-full h-10 px-3 bg-[#050505] border border-white/10 rounded-md text-white text-sm focus:border-white/20">
                                    <option>Türkçe (TR)</option>
                                    <option>English (EN)</option>
                                </select>
                            </div>
                             <div className="space-y-3">
                                <label className="text-sm font-medium text-gray-300">Zaman Dilimi</label>
                                <select className="w-full h-10 px-3 bg-[#050505] border border-white/10 rounded-md text-white text-sm focus:border-white/20">
                                    <option>Europe/Istanbul (GMT+3)</option>
                                    <option>UTC</option>
                                </select>
                            </div>
                             <div className="flex items-center justify-between pt-2">
                                <div>
                                    <p className="text-white font-medium">Otomatik Yedekleme</p>
                                    <p className="text-sm text-gray-500">Hergün 03:00'da veritabanı yedeği alır.</p>
                                </div>
                                <Switch 
                                    checked={settings.autoBackup} 
                                    onCheckedChange={(c) => setSettings({...settings, autoBackup: c})} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden">
                        <div className="p-4 border-b border-white/10">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Mail className="w-5 h-5 text-white" />
                                Bildirim Servisleri
                            </h3>
                        </div>
                         <div className="p-6 space-y-6">
                             <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-white font-medium">Sistem E-postaları</p>
                                    <p className="text-sm text-gray-500">Kullanıcılara otomatik e-posta gönderimi.</p>
                                </div>
                                <Switch 
                                    checked={settings.emailNotifications} 
                                    onCheckedChange={(c) => setSettings({...settings, emailNotifications: c})} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
