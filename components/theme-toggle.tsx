"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();
  const handleClick = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <Button
      onClick={handleClick}
      className={cn(className)}
      variant="ghost"
      size="icon"
    >
      <Sun className="rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export { ThemeToggle };
