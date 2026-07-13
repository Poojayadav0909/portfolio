import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AnimatedSection({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
