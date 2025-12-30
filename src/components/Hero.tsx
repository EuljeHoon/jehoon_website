import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
    return(
      <section id = "top" className="scroll-mt-10 text-center py-16">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-4xl font-bold">Jehoon Park</h1>
          <img src = "/logo/umn_logo.png" alt = "University of Minnesota logo" className = "h-8 md:h-10 object-contain"/>
        </div>
        <p className="mt-4 text-xl">
          CS Student @ U of M Twin Cities
        </p>
        <p className="mt-2 text-lg max-w-xl mx-auto">
        A Computer Science student with broad interests across the stack — from frontend design to backend logic and everything in between.
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
          <a href = "https://drive.google.com/file/d/1YFMMyLzwq5EhFrzFetv_Y1SWpLQ6XvRj/view?usp=sharing" download target = "_blank" rel = "noopener noreferrer" className="group relative">
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