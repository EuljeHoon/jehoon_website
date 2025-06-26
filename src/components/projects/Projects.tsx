import React from "react";
import ProjectItems from "./ProjectItems";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-10 max-w-6xl mx-auto py-20 px-4">
            <div className="text-black">
                <h2 className="text-2xl font-semibold mb-12 text-center">Projects</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectItems key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
