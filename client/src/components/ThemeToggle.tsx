import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Theme } from "@/hooks/useTheme";

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <Button variant="ghost" size="icon" onClick={onToggle} aria-label="Toggle theme">
      {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}
