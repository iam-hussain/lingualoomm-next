"use client";
import { Moon, Sun, SunMoon } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "next-themes";

import { Button } from "@/components/atoms/button";

export function ThemeModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  // Define the theme cycle: system (auto) → dark → light → system (auto)
  const themes = ["system", "dark", "light"];
  const current = theme || "system";
  const currentIndex = themes.indexOf(current);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  return (
    <Button
      variant="outline"
      size="icon"
      className={clsx(className)}
      onClick={() => setTheme(nextTheme)}
    >
      {current === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : current === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <SunMoon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
