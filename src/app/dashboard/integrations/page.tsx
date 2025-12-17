"use client";

import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Save, Users, Bell } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/toast";
import { Input } from "@/components/ui/input";

export default function IntegrationsPage() {
  const { toast } = useToast();
  const [emails, setEmails] = useState("admin@kisagu.com, security@kisagu.com");
  const [slackWebhook, setSlackWebhook] = useState("https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX");

  const saveConfig = () => {
    toast({
        type: "success",
        title: "Ayarlar Kaydedildi",
        message: "Bildirim tercihleri güncellendi.",
    });
  };

  return (
    <div className="p-6 lg:p-8 pt-24 lg:pt-8 max-w-[1000px] mx-auto space-y-8">
      
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Entegrasyonlar & Bildirimler</h1>
        <p className="text-gray-400">Ekibinizi anlık olarak bilgilendirin. Kritik alarmlar için kanallar oluşturun.</p>
      </div>

      <div className="space-y-6">
         {/* Email Config */}
         <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
             <div className="flex items-start gap-4 mb-4">
                 <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                     <Mail className="w-6 h-6" />
                 </div>
                 <div>
                     <h3 className="text-lg font-bold text-white">E-posta Bildirimleri</h3>
                     <p className="text-sm text-gray-400">Kritik güvenlik olaylarında bu adreslere e-posta gönderilir.</p>
                 </div>
             </div>
             <div className="ml-16 space-y-4">
                 <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-400">Alıcı Listesi (Virgül ile ayırın)</label>
                     <Input 
                        value={emails} 
                        onChange={(e) => setEmails(e.target.value)}
                        className="bg-white/5 border-white/10 text-white font-mono"
                     />
                 </div>
                 <Button onClick={saveConfig} variant="outline" className="text-xs border-white/10 hover:bg-white/5">
                    <Save className="w-3 h-3 mr-2" /> Kaydet
                 </Button>
             </div>
         </div>

         {/* Slack Config */}
         <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6">
             <div className="flex items-start gap-4 mb-4">
                 <div className="p-3 bg-[#4A154B]/20 rounded-lg text-[#4A154B] border border-[#4A154B]/50">
                     <MessageSquare className="w-6 h-6 text-white" />
                 </div>
                 <div>
                     <h3 className="text-lg font-bold text-white">Slack Webhook</h3>
                     <p className="text-sm text-gray-400">Slack kanalınıza anlık uyarı mesajları gönderin.</p>
                 </div>
             </div>
             <div className="ml-16 space-y-4">
                 <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-400">Webhook URL</label>
                     <Input 
                        value={slackWebhook} 
                        onChange={(e) => setSlackWebhook(e.target.value)}
                        type="password"
                        className="bg-white/5 border-white/10 text-white font-mono"
                     />
                 </div>
                 <Button onClick={saveConfig} variant="outline" className="text-xs border-white/10 hover:bg-white/5">
                    <Save className="w-3 h-3 mr-2" /> Kaydet
                 </Button>
             </div>
         </div>

         {/* Team (Mock) */}
         <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 opacity-60 pointer-events-none grayscale">
             <div className="flex items-start gap-4 mb-4">
                 <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                     <Users className="w-6 h-6" />
                 </div>
                 <div>
                     <h3 className="text-lg font-bold text-white">Takım Yönetimi (Yakında)</h3>
                     <p className="text-sm text-gray-400">Güvenlik ekibinizi davet edin ve rol atayın.</p>
                 </div>
             </div>
         </div>
      </div>

    </div>
  );
}
