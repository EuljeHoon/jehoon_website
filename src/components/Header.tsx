import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#7A0019] shadow-md z-50">
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

        {/* navigate function */}
        <nav className="flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-[#FFCC33]">
          <a href="#top" className="hover:text-white transition">
            Top
          </a>
          <a href="#about" className="hover:text-white transition">
            About
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
      </div>
    </header>
  );
}