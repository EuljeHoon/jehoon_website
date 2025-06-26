import React from "react";

export default function About() {
    return (
      <section id = "skills" className="scroll-mt-10 max-w-4xl mx-auto py-30 px-4">
        <div className="text-black">
          <h2 className="text-2xl font-semibold mb-6 text-left">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Programming Languages</h3>
            <p className="text-sm text-gray-800">
              Python, Java, C, JavaScript, TypeScript, SQL, Ocaml, HTML, CSS
            </p>
          </div>

          {/* 2 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Frameworks & Libraries</h3>
            <p className="text-sm text-gray-800">
              FastAPI, PyTorch, Spring Boot, React, Next.js(SSR), Express.js
            </p>
          </div>

          {/* 3 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Databases, Cloud & DevOps</h3>
            <p className="text-sm text-gray-800">
              MySQL, MongoDB, GCP, AWS, Github Actions, Vercel, Cloudflare
            </p>
          </div>

          {/* 4 */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-[#1B1F3B] mb-2">Developer Tools</h3>
            <p className="text-sm text-gray-800">
              VS Code, IntelliJ, GDB, Git, Linux
            </p>
          </div>
        </div>
      </section>
    )
}