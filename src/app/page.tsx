import React from "react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <main className="pt-24 min-h-screen bg-cover bg-center bg-repeat text-[#1B1F3B] p-8"
    style={{
      backgroundImage: "url('/umn_background_light.png')"
      }}
    >
      {/* header */}
      <header className="fixed top-0 left-0 w-full bg-[#7A0019] shadow-md z-50">
        <div className="px-6 py-3 flex justify-between items-center">
          
          {/* left: logo and name */}
          <div className="flex items-center gap-2">
            <img src="/logo/umn_logo.png" alt="UMN Logo" className="h-6 md:h-8 object-contain" />
            <span className="text-[#FFCC33] text-lg md:text-xl font-bold tracking-tight font-[var(--font-poppins)]">
              Jehoon Park
            </span>
          </div>

          {/* right: navigate */}
          <nav className="flex gap-6 text-sm font-medium text-[#FFCC33]">
            <a href="#top" className="hover:text-white transition">Go to Top</a>
            <a href="#about" className="hover:text-white transition">About Jehoon</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
          </nav>
        </div>
      </header>



      {/* Hero Section */}
      <section id = "top" className="text-center py-16">
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
          <a href = "/Jehoon_s_Resume.pdf" download target = "_blank" rel = "noopener noreferrer">
            <Button className="bg-[#7A0019] hover:bg-[#FFCC33] text-white">Download Resume</Button>
          </a>
          <a href = "https://github.com/EuljeHoon" download target = "_blank" rel = "noopener noreferrer">
            <Button className="bg-[#FFCC33] hover:bg-[#7A0019] text-black">GitHub</Button>
          </a>
          <a href = "https://www.linkedin.com/in/jehoon0213/" download target = "_blank" rel = "noopener noreferrer">
            <Button className="bg-[#7A0019] hover:bg-[#FFCC33] text-white">LinkedIn</Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id = "about" className="scroll-mt-10 max-w-5xl mx-auto py-12 grid md:grid-cols-2 gap-2 items-center">
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

      {/* Projects Section */}
      <section id = "projects" className="scroll-mt-5 max-w-4xl mx-auto py-12">
        <div className="text-[#7A0019]">
          <h2 className="text-2xl font-semibold mb-8">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Gallery Soma Project */}
          <a href = "https://github.com/EuljeHoon/gallerysoma-frontend" target = "_blank" rel = "noopener noreferrer">
            <div className="relative bg-white p-6 rounded-2xl shadow transition duration-300 hover:bg-[#FFCC33] hover:shadow-lg">

              {/*background blur image*/}
              <img
                src="/logo/soma.png"
                alt="Gallery Soma Logo"
                className="absolute top-1/2 left-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[1px] pointer-events-none"
              />

              {/*main content*/}
              <div className = "relative z-10">
                <h3 className="text-xl font-bold mb-2">Gallery Soma (Next.js)</h3>
                <p className="mb-2 text-sm text-gray-700">Frontend Developer</p>
                <p>
                  Create a website to promote your gallery and sell your art online
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
                  <li>Built the frontend of an e-commerce platform for artwork sales and virtual exhibitions</li>
                  <li>Implemented the payment page to support secure online transactions</li>
                  <li>Worked closely with the backend team to ensure seamless integration across the stack</li>
                </ul>
              </div>
            </div>
          </a>

          {/* Poky Project */}
          <a href = "https://sites.google.com/view/wlee-group/people?authuser=0#h.dolxuabfkzks" target = "_blank" rel = "noopener noreferrer">
            <div className="relative bg-white p-6 rounded-2xl shadow transition duration-300 hover:bg-[#FFCC33] hover:shadow-lg">

              {/*background blur image*/}
              <img
                src="/logo/cuDenver.png"
                alt="CU Denver Logo"
                className="absolute top-1/2 left-1/2 w-70 h-40 -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[1px] pointer-events-none"
              />

              {/*main content*/}
              <div className = "relative z-10">
                <h3 className="text-xl font-bold mb-2">Lee's group (CU Denver research intern)</h3>
                <p className="mb-2 text-sm text-gray-700">Plug-in Developer</p>
                <p>
                  Contributing to OneShotNMR for NMR analysis and GUI development.
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
                  <li>Develop modules to automate chemical shift and structure prediction for N-HSQC spectra</li>
                  <li>Contribute to experimental vs. simulated peak comparison algorithm for accurate NMR assignment</li>
                  <li>Build GUI components to improve user interaction and streamline analysis workflow</li>
                </ul>
              </div>
            </div>
          </a>

          {/* CODOC Project */}
          <a href = "https://www.linkedin.com/company/codocjob/" download target = "_blank" rel = "noopener noreferrer">
            <div className="relative bg-white p-6 rounded-2xl shadow transition duration-300 hover:bg-[#FFCC33] hover:shadow-lg">

              {/*background blur image*/}
              <img
                src="/logo/codocSmall.png"
                alt="Codoc Logo"
                className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 opacity-13 blur-[1px] pointer-events-none"
              />

              {/*main content*/}
              <div className = "relative z-10">
                <h3 className="text-xl font-bold mb-2">CODOC</h3>
                  <p className="mb-2 text-sm text-gray-700">Frontend Developer</p>
                  <p>
                    AI-based coding test practice platform that evaluates user performance and provides feedback.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
                    <li>Built the core UI using React, Redux, and CSS module</li>
                    <li>Implemented interactive code editor and performance visualization</li>
                    <li>Collaborated in a full-stack team to align frontend with AI-based backend diagnostics</li>
                  </ul>
              </div>
            </div>
          </a>

          {/* Block Project */}
          <a href = "https://github.com/EuljeHoon/COMS-227/tree/main/Homework3" download target = "_blank" rel = "noopener noreferrer">
            <div className="relative bg-white p-6 rounded-2xl shadow transition duration-300 hover:bg-[#FFCC33] hover:shadow-lg">

              {/*background blur image*/}
              <img
                src="/logo/ISU_logo.png"
                alt="ISU Logo"
                className="absolute top-1/2 left-1/2 w-60 h-6- -translate-x-1/2 -translate-y-1/2 opacity-16 blur-[1px] pointer-events-none"
              />

              {/*main content*/}
              <div className = "relative z-10">
                <h3 className="text-xl font-bold mb-2">Block Game (Java)</h3>
                <p className="mb-2 text-sm text-gray-700">Java-swing based Project</p>
                <p>
                  A java swing.Jpanel-based block game built using Java and object-oriented programming principles.
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
                  <li>Designed and developed a block-based puzzle game using Java</li>
                  <li>Implemented game mechanics and UI components using Java Swing</li>
                  <li>Collaborated with a team to enhance user experience and optimize performance</li>
                </ul>
              </div>
            </div>
          </a>

          {/* Chess Project */}
          <a href = "https://github.com/EuljeHoon/CSCI1933/tree/main/project2" download target = "_blank" rel = "noopener noreferrer">
            <div className="relative bg-white p-6 rounded-2xl shadow transition duration-300 hover:bg-[#FFCC33] hover:shadow-lg">

              {/*background blur image*/}
              <img
                src="/logo/umn_logo.png"
                alt="UMN Logo"
                className="absolute top-1/2 left-1/2 w-60 h-6- -translate-x-1/2 -translate-y-1/2 opacity-16 blur-[1px] pointer-events-none"
              />

              {/*main content*/}
              <div className = "relative z-10">
                <h3 className="text-xl font-bold mb-2">Chess Game (Java)</h3>
                <p className="mb-2 text-sm text-gray-700">Terminal-based Java Project</p>
                <p>
                  A terminal-based chess game built using Java and object-oriented programming principles.
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
                  <li>Implemented full chess rules (check, checkmate, castling, etc.)</li>
                  <li>Used clean class hierarchy and modular design</li>
                  <li>Designed for two-player local play through terminal interaction</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </section>
      
      {/* Skills section */}
      <section id = "skills" className="scroll-mt-10 max-w-4xl mx-auto py-12">
        <div className="text-[#7A0019]">
          <h2 className="text-2xl font-semibold mb-6 text-left">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Programming Languages</h3>
            <p className="text-sm text-gray-800">
              C, Python, Java, Ocaml, Assembly, JavaScript, TypeScript, HTML/CSS
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Frameworks & Libraries</h3>
            <p className="text-sm text-gray-800">
              React, JUnit
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Developer Tools</h3>
            <p className="text-sm text-gray-800">
              Visual Studio, IntelliJ IDEA, PyCharm, Eclipse
            </p>
          </div>

          {/* 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Relevant Coursework</h3>
            <p className="text-sm text-gray-800">
              Data Structures and Algorithms, Object-Oriented Programming, Machine Architecture and Organization, Advanced Programming Principles
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
