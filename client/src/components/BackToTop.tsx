import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-8 right-8 z-50 size-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
