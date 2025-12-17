"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const validateEmail = (value: string) => {
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail) return;

    // Show feedback
    setShowFeedback(true);

    // Wait 2 seconds then switch to OTP
    setTimeout(() => {
      setShowFeedback(false);
      setStep("otp");
    }, 2000);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp);
    // Add OTP verification logic here later
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#1718fe] selection:text-white flex flex-col">
      <Header />
      
      <section className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
        <div className="w-full max-w-md relative">
          {/* Back Link */}
          <Link 
            href="/login" 
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-[#1718fe] transition-colors mb-8 uppercase tracking-wide group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Giriş Yap
          </Link>

          {/* Feedback Overlay */}
          <div 
            className={cn(
              "absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#050505]/90 backdrop-blur-sm transition-opacity duration-500",
              showFeedback ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
          >
            <CheckCircle2 className="w-16 h-16 text-[#1718fe] mb-4 animate-bounce" />
            <p className="text-xl font-medium text-white">Bağlantı Gönderildi</p>
            <p className="text-sm text-gray-400 mt-2">Lütfen e-postanızı kontrol edin.</p>
          </div>

          {/* Step 1: Email Form */}
          {step === "email" && (
            <div className={cn("transition-all duration-500", showFeedback ? "opacity-0 scale-95" : "opacity-100 scale-100")}>
              <div className="mb-12">
                <h1 className="text-3xl font-semibold mb-2">Şifrenizi mi unuttunuz?</h1>
                <p className="text-gray-400">E-posta adresinizi girin, size sıfırlama bağlantısı gönderelim.</p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => validateEmail(e.target.value)}
                    placeholder="E-posta Adresi"
                    className="w-full h-12 px-4 bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#1718fe] transition-colors rounded-none font-mono"
                  />
                  {!isValidEmail && email.length > 0 && (
                    <p className="text-red-500/80 text-xs mt-2 font-mono ml-1">Geçerli bir e-posta adresi giriniz.</p>
                  )}
                </div>
                
                <Button
                  disabled={!isValidEmail}
                  className="w-full h-12 bg-[#1718fe] hover:bg-[#1718fe]/90 text-white font-mono uppercase tracking-wide rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Sıfırlama Bağlantısı Gönder
                </Button>
              </form>
            </div>
          )}

          {/* Step 2: OTP Form */}
          {step === "otp" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="mb-12">
                <h1 className="text-3xl font-semibold mb-2">Kodu Girin</h1>
                <p className="text-gray-400">
                  <span className="text-white">{email}</span> adresine gönderdiğimiz 6 haneli kodu girin.
                </p>
              </div>

              <form onSubmit={handleOtpSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="000000"
                    className="w-full h-16 px-4 bg-white/5 border border-white/10 text-white text-center text-3xl tracking-[1em] placeholder:tracking-[0.5em] focus:outline-none focus:border-[#1718fe] transition-colors rounded-none font-mono"
                  />
                </div>
                
                <Button
                  disabled={otp.length !== 6}
                  className="w-full h-12 bg-[#1718fe] hover:bg-[#1718fe]/90 text-white font-mono uppercase tracking-wide rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Doğrula
                </Button>

                <button 
                  type="button"
                  onClick={() => setStep("email")}
                  className="w-full text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-wide"
                >
                  E-postayı Değiştir
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
