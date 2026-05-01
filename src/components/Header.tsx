'use client';

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-lg">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        {/* name */}
        <div className="flex items-center">
          <span className="bg-gradient-to-r from-[#111827] to-[#1B1F3B] bg-clip-text text-base font-bold tracking-wide text-transparent sm:text-xl font-[var(--font-sora)]">
            Jehoon Park
          </span>
        </div>

        {/* desktop nav */}
        <nav className="hidden gap-4 text-xs font-medium text-[#1B1F3B] md:flex sm:gap-6 sm:text-sm">
          <a href="#top" className="transition-colors duration-200 hover:text-amber-500">
            Top
          </a>
          <a href="#experiences" className="transition-colors duration-200 hover:text-amber-500">
            Experience
          </a>
          <a href="#projects" className="transition-colors duration-200 hover:text-amber-500">
            Projects
          </a>
          <a href="#skills" className="transition-colors duration-200 hover:text-amber-500">
            Skills
          </a>
          <a href="#contact" className="transition-colors duration-200 hover:text-amber-500">
            Contact
          </a>
        </nav>

        {/* hamburger button - only visible on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#1B1F3B] md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile nav */}
      {isOpen && (
        <div className="flex flex-col items-start space-y-3 bg-white px-6 pb-4 text-[#1B1F3B] md:hidden">
          <a href="#top" onClick={() => setIsOpen(false)} className="transition-colors duration-200 hover:text-amber-500">
            Top
          </a>
          <a href="#experiences" onClick={() => setIsOpen(false)} className="transition-colors duration-200 hover:text-amber-500">
            Experience
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="transition-colors duration-200 hover:text-amber-500">
            Projects
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="transition-colors duration-200 hover:text-amber-500">
            Skills
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="transition-colors duration-200 hover:text-amber-500">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
