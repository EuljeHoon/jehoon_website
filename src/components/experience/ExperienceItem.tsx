"use client";
import React, { useState } from "react";
import ExperienceModal from "@/components/common/modals/ExperienceModal";

interface ExperienceItemProps {
  experience: {
    id: number;
    title: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    link: string;
    logo: string;
    techStack?: string[];
    achievements?: string[];
  };
  index: number;
  visible: boolean;
  formatDate: (dateString: string) => string;
  calculateDuration: (startDateStr: string, endDateStr: string) => string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  index,
  visible,
  formatDate,
  calculateDuration,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`timeline-item relative mb-12 cursor-pointer ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } ${
          visible
            ? `animate-slide-in-${index % 2 === 0 ? "left" : "right"}`
            : "opacity-0"
        }`}
        data-index={index}
        onClick={() => setOpen(true)}
      >
        {/* Timeline dot */}
        <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
        {/* Content */}
        <div
          className={`ml-16 md:ml-0 md:w-5/12 ${
            index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
          }`}
        >
          <div className="relative bg-gray-50 p-6 rounded-2xl shadow-lg transition duration-300 hover:bg-[#FFCC33] hover:shadow-xl hover:scale-105">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={experience.logo}
                    alt={`${experience.title} Logo`}
                    className="w-8 h-8 object-cover"
                  />
                  <h3 className="text-xl font-bold text-black">
                    {experience.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                    {calculateDuration(
                      experience.startDate,
                      experience.endDate
                    )}
                  </div>
                </div>
              </div>
              <p className="mb-2 text-sm font-medium text-gray-700">
                {experience.role}
              </p>
              <div className="mb-3 text-xs text-gray-500">
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </div>
              <p className="text-gray-800 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ExperienceModal
        open={open}
        onClose={() => setOpen(false)}
        experience={experience}
      />
    </>
  );
};

export default ExperienceItem; 