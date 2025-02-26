import React from "react";
import { BookText } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";

function TopBar() {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-row p-6 gap-2 relative">
        <BookText className="text-primary" size={60} />
        <div className="flex flex-col gap-0">
          <p className="text-2xl uppercase text-foreground font-bold">
            Lingualoomm
          </p>
          <p className="text-base text-foreground/70 font-light">
            Your language ladder!
          </p>
        </div>
        <div className="flex gap-2 text-foreground absolute right-6 bottom-6">
          <Linkedin size={18} />
          <Facebook size={18} />
          <Twitter size={18} />
          <Instagram size={18} />
          <Youtube size={18} />
        </div>
      </div>
      <nav className="w-full h-[55px] bg-primary flex justify-center align-middle items-center">
        <ul className="flex gap-10 text-primary-foreground font-light max-w-[90vw] justify-between">
          <li>Home</li>
          <li>Free E-Books</li>
          <li>Get a Quote</li>
          <li>About</li>
          <li>CEFR & Certificates</li>
          <li>Languages</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default TopBar;
