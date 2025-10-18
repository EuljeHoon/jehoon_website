import React from "react";

interface ProjectItemProps {
  project: {
    id: number;
    title: string;
    role: string;
    description: string;
    achievements: string[];
    link?: string;
    backendLink?: string;
    frontendLink?: string;
    projectImage: string;
  };
}

const ProjectItems: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="relative bg-gray-50 p-6 rounded-2xl shadow-lg h-full">
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
      <div className="mt-4 space-y-2">
        {project.link && (
          <div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors duration-200 font-medium"
            >
              Go to Github Repository
            </a>
          </div>
        )}
        {project.backendLink && (
          <div>
            <a 
              href={project.backendLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors duration-200 font-medium"
            >
              Backend: Go to Github Repository
            </a>
          </div>
        )}
        {project.frontendLink && (
          <div>
            <a 
              href={project.frontendLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors duration-200 font-medium"
            >
              Frontend: Go to Github Repository
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItems;
