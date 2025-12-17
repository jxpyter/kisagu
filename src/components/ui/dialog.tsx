"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function Dialog({ isOpen, onClose, children, title, description }: DialogProps) {
  const [show, setShow] = React.useState(isOpen);

  React.useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setShow(false), 300); // Wait for anim
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show && !isOpen) return null;

  return (
    <div className={cn(
      "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
      "transition-all duration-300",
      isOpen ? "visible" : "invisible"
    )}>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Content */}
      <div 
        className={cn(
          "relative w-full max-w-lg transform rounded-xl bg-[#0a0a0a] border border-white/10 p-6 shadow-2xl transition-all duration-300",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            {title && <h2 className="text-lg font-bold text-white leading-none tracking-tight">{title}</h2>}
            {description && <p className="text-sm text-gray-400 mt-1.5">{description}</p>}
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        
        {children}
      </div>
    </div>
  );
}

export function DialogFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6", className)}>
      {children}
    </div>
  );
}
