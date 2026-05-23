"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

interface MorphingButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function MorphingButton({
  href,
  children,
  className = "btn-glow rounded-full px-8 py-3 text-base",
}: MorphingButtonProps) {
  const [state, setState] = useState<"idle" | "success">("idle");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (state === "success") return;
    e.preventDefault();
    setState("success");
    setTimeout(() => {
      window.location.href = href;
    }, 1200);
  };

  return (
    <MagneticButton>
      <motion.a
        href={href}
        onClick={handleClick}
        layout
        className={`${className} inline-flex items-center justify-center min-w-[180px] relative overflow-hidden`}
        whileTap={{ scale: 0.96 }}
        animate={
          state === "success"
            ? {
                background: "linear-gradient(135deg, #34d399, #10b981)",
                boxShadow: "0 0 30px rgba(52, 211, 153, 0.5)",
              }
            : undefined
        }
        transition={{ duration: 0.4 }}
      >
        <AnimatePresence mode="wait">
          {state === "idle" ? (
            <motion.span
              key="label"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.span>
          ) : (
            <motion.span
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 12,
              }}
              className="flex items-center gap-2 font-semibold text-white"
            >
              <motion.span
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]"
              >
                <Check className="h-4 w-4 text-[#050508]" strokeWidth={3} />
              </motion.span>
              Ready!
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </MagneticButton>
  );
}
