import React from "react";

export default function About() {
    return(
      <section id = "about" className="scroll-mt-15 max-w-5xl mx-auto py-12 grid md:grid-cols-2 gap-5 items-center">
        {/* Left: Picture */}
        <div className="flex justify-center">
          <div className = "overflow-hidden shadow-md rounded-xl"
          style={{
            boxShadow: "0 8px 60px rgba(122, 0, 25, 0.3)"
          }}
          >
            <img
              src="/jehoon_image.png"
              alt="Jehoon Park"
              className="w-80 h-100 object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right: Introduction Text */}
        <div>
          <div className="text-[#7A0019]">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          </div>
          <p className="mb-4">
            Hello, my name is Jehoon Park — a Computer Science student at the University of Minnesota Twin Cities.
          </p>
          <p className="mb-4">
            I'm passionate about software engineering. Not just building beautiful user interfaces, but also understanding backend systems, software architecture, and overall product design.
          </p>
          <p>
            Whether it's designing responsive UIs with React or implementing logic-heavy algorithms in Java, I enjoy solving problems and learning across the full spectrum of development.
          </p>
        </div>
      </section>
    );
}