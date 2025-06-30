'use client';

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // 햄버거 아이콘, 닫기 아이콘

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      <div className="px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* logo and name */}
        <div className="flex items-center gap-2">
          <img
            src="/logo/umn_logo.png"
            alt="UMN Logo"
            className="h-6 sm:h-8 object-contain"
          />
          <span className="text-[#FFCC33] text-base sm:text-lg font-semibold tracking-tight font-[var(--font-poppins)]">
            Jehoon Park
          </span>
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-[#FFCC33]">
          <a href="#top" className="hover:text-white transition">
            Top
          </a>
          <a href="#experiences" className="hover:text-white transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* hamburger button - only visible on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#FFCC33]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 bg-black text-[#FFCC33] space-y-3">
          <a href="#top" onClick={() => setIsOpen(false)} className="hover:text-white">
            Top
          </a>
          <a href="#experiences" onClick={() => setIsOpen(false)} className="hover:text-white">
            Experience
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white">
            Projects
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-white">
            Skills
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
