import React from "react";
import Navigation from "../molecules/navigation";
import { ThemeModeToggle } from "../molecules/theme-mode-toggle";

function TopBar() {
  return (
    <nav className="w-full h-[55px] flex justify-between align-middle items-center px-4 max-w-[90vw] mx-auto">
      <p className="text-2xl uppercase text-foreground font-bold font-brand">
        Lingualoomm
      </p>
      <Navigation />
      <div className="md:hidden">
        <ThemeModeToggle />
      </div>
    </nav>
  );
}

export default TopBar;
