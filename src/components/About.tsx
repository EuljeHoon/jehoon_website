import React from "react";

export default function About() {
    return(
      <section id = "about" className="scroll-mt-10 max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-3 items-center">
        {/* Left: Picture */}
        <div className="flex justify-center">
          <div className = "overflow-hidden shadow-md rounded-xl">
            <img
              src="/jehoon_image.jpeg"
              alt="Jehoon Park"
              className="w-80 h-100 object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right: Introduction Text */}
        <div>
          <div className="text-black">
            <h2 className="text-2xl font-semibold mb-6 text-left">About Me</h2>
          </div>
          <p className="mb-2">
            I'm a Computer Science major at the University of Minnesota – Twin Cities (UMN), dedicated to building meaningful software that improves lives.
          </p>
          <p>
            My focus lies in integrating ML/AI into software to maximize productivity and convenience.
          </p>
        </div>
      </section>
    );
}