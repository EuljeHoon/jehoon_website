import React from "react";

export default function Projects() {
    return (
      <section id = "projects" className="scroll-mt-10 max-w-4xl mx-auto py-12">
        <div className="text-[#7A0019]">
          <h2 className="text-2xl font-semibold mb-8">Projects & Experiences</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">

          {/* dotori Startup */}
          <a href = "https://dotori-intro-website.vercel.app/" download target = "_blank" rel = "noopener noreferrer">
            <div className="relative bg-white p-6 rounded-2xl shadow transition duration-300 hover:bg-[#FFCC33] hover:shadow-lg">

              {/*background blur image*/}
              <img
                src="/logo/Main_logo_invisible _back.png"
                alt="dotori Logo"
                className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 opacity-13 blur-[1px] pointer-events-none"
              />

              {/*main content*/}
              <div className = "relative z-10">
                <h3 className="text-xl font-bold mb-2">dotori</h3>
                  <p className="mb-2 text-sm text-gray-700">Software Engineer</p>
                  <p>
                    An AI-powered platform for essay feedback and personalized school recommendations for study abroad applicants.
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
                    <li>Led a 4-person Agile team in the full-stack development of an AI-powered college admissions assistant</li>
                    <li>Developed both frontend interface and backend API for uploading resumes to Google Cloud Storage, using React and FastAPI.</li>
                    <li>Built a backend API to safely deliver student information as encrypted or access-controlled JSON payloads.</li>
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
                <h3 className="text-xl font-bold mb-2">Poky Lab (CU Denver research intern)</h3>
                <p className="mb-2 text-sm text-gray-700">Plug-in Developer</p>
                <p>
                  Contributing to OneShotNMR for NMR analysis and GUI development.
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-gray-800">
                  <li>Built an automated NMR pipeline integrating ESMFold, BOLTZ-1, CHAI-1, and peak matching on the Poky platform.</li>
                  <li>Implemented CSPred/SHIFTX2 server integration with caching to reuse existing shift predictions.</li>
                  <li>Developed a scoring system to rank predicted structures by similarity to BMRB chemical shifts.</li>
                </ul>
              </div>
            </div>
          </a>

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
                  <li>Developed the front-end of an e-commerce platform for selling artworks and hosting online exhibitions.</li>
                  <li>Built cart functionality using Redux to manage art item pricing and connected it to the payment checkout interface.</li>
                  <li>Built artist and gallery introduction pages with clean UI and responsive layout for enhanced user experience.</li>
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
        </div>
      </section>
    );
}