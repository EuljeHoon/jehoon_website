import React from "react";

export default function About() {
    return (
      <section id = "skills" className="scroll-mt-10 max-w-4xl mx-auto py-12">
        <div className="text-[#7A0019]">
          <h2 className="text-2xl font-semibold mb-6 text-left">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Programming Languages</h3>
            <p className="text-sm text-gray-800">
              Python, Java, C, Assembly, Ocaml, TypeScript, JavaScript
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Frameworks & Libraries</h3>
            <p className="text-sm text-gray-800">
              Spring Boot, FastAPI, Node.js, GCP, React
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
              Algorithms and Data Structures, Formal Languages and Automata, Data Structures and Algorithms, Object-Oriented Programming, Machine Architecture and Organization, Advanced Programming Principles
            </p>
          </div>
        </div>
      </section>
    )
}