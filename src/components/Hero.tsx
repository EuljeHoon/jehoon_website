import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Smile } from "lucide-react";

export default function Hero() {
    return(
      <section id = "top" className="scroll-mt-10 text-center py-16">
        <div className="flex items-center justify-center gap-3">
          <h1 className="bg-gradient-to-r from-[#111827] via-[#1B1F3B] to-[#334155] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Hi! I&apos;m Jehoon Park
          </h1>
          <div className="relative flex h-10 w-10 animate-bounce items-center justify-center [animation-duration:2.2s]">
            <span className="absolute h-10 w-10 rounded-full bg-amber-200/45" />
            <span className="absolute h-8 w-8 rounded-full bg-amber-100/70" />
            <Smile className="relative h-5 w-5 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.55)]" />
          </div>
        </div>
        <p className="mt-4 text-xl">
          CS Student @ U of M Twin Cities
        </p>
        <p className="mt-2 text-lg max-w-xl mx-auto">
        A Computer Science student in the Computer Systems track, passionate about building reliable and impactful software.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href = "https://github.com/EuljeHoon" target = "_blank" rel = "noopener noreferrer" className="group relative">
            <Button className="bg-black hover:bg-[#FFCC33] text-white p-3 rounded-full">
              <Github className="w-5 h-5" />
            </Button>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              GitHub
            </span>
          </a>
          <a href = "https://drive.google.com/file/d/1_Wls9nsmHeh1XcbGPa1Lw_DH_9rGTN9L/view?usp=sharing" download target = "_blank" rel = "noopener noreferrer" className="group relative">
            <Button className="bg-black hover:bg-[#FFCC33] text-white p-3 rounded-full">
              <FileText className="w-5 h-5" />
            </Button>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Jehoon's Resume
            </span>
          </a>
          <a href = "https://www.linkedin.com/in/jehoon0213/" target = "_blank" rel = "noopener noreferrer" className="group relative">
            <Button className="bg-black hover:bg-[#FFCC33] text-white p-3 rounded-full">
              <Linkedin className="w-5 h-5" />
            </Button>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              LinkedIn
            </span>
          </a>
        </div>
      </section>
    );
}