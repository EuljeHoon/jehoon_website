"use client";
import React from "react";

interface ExperienceModalProps {
  open: boolean;
  onClose: () => void;
  experience: {
    logo: string;
    title: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    link: string;
    techStack?: string[];
    achievements?: string[];
  };
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ open, onClose, experience }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-neutral-900 text-white max-w-lg w-full rounded-2xl shadow-2xl p-8 relative animate-fade-in">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-center gap-4 mb-2">
          <img src={experience.logo} alt="logo" className="w-12 h-12 object-contain" />
          <div>
            <div className="text-xl font-bold text-white">{experience.title}</div>
            <div className="text-sm text-gray-300 font-medium">{experience.role}</div>
            <div className="text-xs text-gray-400">{experience.startDate} - {experience.endDate}</div>
          </div>
        </div>
        <div className="mb-4 text-gray-200 text-sm leading-relaxed">
          {experience.description}
        </div>
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline text-sm font-medium mb-4 inline-block"
        >
          Go to Website
        </a>
        {experience.techStack && experience.techStack.length > 0 && (
          <div className="mb-4">
            <div className="font-semibold text-white mb-2">Technologies Used</div>
            <div className="flex flex-wrap gap-2">
              {experience.techStack.map((tech, idx) => (
                <span key={idx} className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-100 font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {experience.achievements && experience.achievements.length > 0 && (
          <div>
            <div className="font-semibold text-white mb-2">Key Achievements</div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
              {experience.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceModal; 