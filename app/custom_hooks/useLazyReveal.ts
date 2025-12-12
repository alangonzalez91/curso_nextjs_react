"use client";

import { useEffect, useRef } from "react";

export const useLazyReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-6");
          el.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(el);
        }
      });
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
};