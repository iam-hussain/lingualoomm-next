import React from "react";
import { Button } from "../atoms/button";

function TopBar() {
  return (
    <nav className="w-full h-[55px] flex justify-between align-middle items-center px-4 max-w-[90vw] mx-auto">
      <p className="text-2xl uppercase text-foreground font-bold font-brand">
        Lingualoomm
      </p>
      <div className="flex gap-20 justify-center align-middle items-center">
        <ul className="flex gap-6 text-foreground font-light max-w-[90vw] justify-start font-sans">
          <li>Home</li>
          <li>About</li>
          <li>CEFR & Certificates</li>
          <li>Languages</li>
          <li>Contact</li>
        </ul>
        <Button>Registration</Button>
      </div>
    </nav>
  );
}

export default TopBar;
