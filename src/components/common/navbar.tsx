import { navMenu } from "@/lib/constants";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full left-0 flex justify-between items-center py-4 px-7 glass">
      <div className="flex items-center gap-[5px]">
        <Image
          height={500}
          width={500}
          src="/eoion.png"
          alt="Logo"
          className="h-[40px] w-[40px] object-cover"
        />
        <p className="font-heading font-semibold">Eoion</p>
      </div>
      <div className="flex items-center gap-6 glass2 py-3 px-4  rounded-full">
        {navMenu.map(({ title }, i) => (
          <div className="text-[15px] font-normal opacity-90" key={i}>{title}</div>
        ))}
      </div>
      <div className="flex items-center gap-4 text-[14px]">
        <div className="py-2 px-4">Login</div>
        <div className="py-2 px-7 rounded-full bg-gradient-to-r from-gradient-start to-blue-950 border border-border-color">Sign Up</div>
      </div>
    </div>
  );
}
