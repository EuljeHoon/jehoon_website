import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return(
      <section id = "top" className="scroll-mt-10 text-center py-16">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-4xl font-bold">Jehoon Park</h1>
          <img src = "/logo/umn_logo.png" alt = "University of Minnesota logo" className = "h-8 md:h-10 object-contain"/>
        </div>
        <p className="mt-4 text-xl">
          CS Student at U of M Twin Cities
        </p>
        <p className="mt-2 text-lg max-w-xl mx-auto">
        A Computer Science student with broad interests across the stack — from frontend design to backend logic and everything in between.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href = "https://github.com/EuljeHoon" download target = "_blank" rel = "noopener noreferrer">
            <Button className="bg-[#7A0019] hover:bg-[#FFCC33] text-white">GitHub</Button>
          </a>
          <a href = "/Jehoon_s_Resume_new.pdf" download target = "_blank" rel = "noopener noreferrer">
            <Button className="bg-[#7A0019] hover:bg-[#FFCC33] text-white">Download Resume</Button>
          </a>
          <a href = "https://www.linkedin.com/in/jehoon0213/" download target = "_blank" rel = "noopener noreferrer">
            <Button className="bg-[#7A0019] hover:bg-[#FFCC33] text-white">LinkedIn</Button>
          </a>
        </div>
      </section>
    );
}