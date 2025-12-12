"use client";

import { ReactNode } from "react";
import { useLazyReveal } from "../custom_hooks/useLazyReveal";

interface LazyRevealProps {
  children: ReactNode;
  className?: string;
}

export default function LazyReveal({ children, className = "" }: LazyRevealProps) {
  const ref = useLazyReveal();

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-6 transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
}
