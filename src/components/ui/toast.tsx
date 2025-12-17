"use client";

import * as React from "react";
import { CheckCircle2, AlertCircle, X, Info, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "error" | "info" | "loading" | "warning";

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  toast: (props: Omit<Toast, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback(({ type, title, message, duration = 3000 }: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message, duration }]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className="fixed bottom-0 right-0 p-6 z-[60] flex flex-col gap-2 w-full max-w-sm pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "pointer-events-auto flex items-start gap-4 p-4 rounded-lg border shadow-lg transition-all animate-in slide-in-from-right-full duration-300",
              t.type === "success" && "bg-[#0a0a0a] border-green-500/20 text-white",
              t.type === "error" && "bg-[#0a0a0a] border-red-500/20 text-white",
              t.type === "info" && "bg-[#0a0a0a] border-blue-500/20 text-white",
              t.type === "loading" && "bg-[#0a0a0a] border-[#1718fe]/20 text-white",
              t.type === "warning" && "bg-[#0a0a0a] border-yellow-500/20 text-white"
            )}
          >
            <div className="shrink-0 mt-0.5">
              {t.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-500" />}
              {t.type === "error" && <AlertCircle className="w-5 h-5 text-red-500" />}
              {t.type === "info" && <Info className="w-5 h-5 text-blue-500" />}
              {t.type === "loading" && <Loader2 className="w-5 h-5 text-[#1718fe] animate-spin" />}
              {t.type === "warning" && <AlertCircle className="w-5 h-5 text-yellow-500" />}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold">{t.title}</h3>
              {t.message && <p className="text-xs text-gray-400 mt-1">{t.message}</p>}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="shrink-0 text-gray-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
