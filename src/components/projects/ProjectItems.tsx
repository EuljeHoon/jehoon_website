import React from "react";

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    role: string;
    description: string;
    achievements: string[];
    link: string;
    projectImage: string;
  };
}

const ProjectItems: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div className="relative bg-gray-50 p-6 rounded-2xl shadow-lg transition duration-300 hover:bg-[#FFCC33] hover:shadow-xl hover:scale-105 h-full">
        {/* Main content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-black">{project.title}</h3>
          </div>
          <p className="mb-2 text-sm font-medium text-gray-700">{project.role}</p>
          <p className="mb-3 text-gray-800">{project.description}</p>
          <img
            src={project.projectImage}
            alt={`${project.title} Screenshot`}
            className="w-full h-80 object-cover rounded-lg mb-3"
          />
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {project.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ProjectItems;
