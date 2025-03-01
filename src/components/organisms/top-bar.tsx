import React from "react";
import Navigation from "../molecules/navigation";

function TopBar() {
  return (
    <nav className="w-full h-[55px] flex justify-between align-middle items-center px-4 max-w-[90vw] mx-auto">
      <p className="text-2xl uppercase text-foreground font-bold font-brand">
        Lingualoomm
      </p>
      <Navigation />
    </nav>
  );
}

export default TopBar;
