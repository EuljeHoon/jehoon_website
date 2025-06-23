import React from "react";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "dotori",
            role: "Software Engineer",
            startDate: "2025-04-01",
            endDate: "Present",
            description: "An AI-powered platform for essay feedback and personalized school recommendations for study abroad applicants.",
            achievements: [
                "Led a 4-person Agile team in the full-stack development of an AI-powered college admissions assistant",
                "Developed both frontend interface and backend API for uploading resumes to Google Cloud Storage, using React and FastAPI.",
                "Built a backend API to safely deliver student information as encrypted or access-controlled JSON payloads."
            ],
            link: "https://dotori-intro-website.vercel.app/",
            logo: "/logo/Main_logo_invisible _back.png"
        },
        {
            id: 2,
            title: "Poky Lab",
            role: "Plug-in Developer",
            startDate: "2025-06-01",
            endDate: "2025-07-31",
            description: "Contributing to OneShotNMR for NMR analysis and GUI development.",
            achievements: [
                "Built an automated NMR pipeline integrating ESMFold, BOLTZ-1, CHAI-1, and peak matching on the Poky platform.",
                "Implemented CSPred/SHIFTX2 server integration with caching to reuse existing shift predictions.",
                "Developed a scoring system to rank predicted structures by similarity to BMRB chemical shifts."
            ],
            link: "https://sites.google.com/view/wlee-group/people?authuser=0#h.dolxuabfkzks",
            logo: "/logo/cuDenver.png"
        },
        {
            id: 3,
            title: "Gallery Soma (Next.js)",
            role: "Frontend Developer",
            startDate: "2022-05-31",
            endDate: "2022-07-31",
            description: "Create a website to promote your gallery and sell your art online",
            achievements: [
                "Developed the front-end of an e-commerce platform for selling artworks and hosting online exhibitions.",
                "Built cart functionality using Redux to manage art item pricing and connected it to the payment checkout interface.",
                "Built artist and gallery introduction pages with clean UI and responsive layout for enhanced user experience."
            ],
            link: "https://github.com/EuljeHoon/gallerysoma-frontend",
            logo: "/logo/soma.png"
        },
        {
            id: 4,
            title: "CODOC",
            role: "Frontend Developer",
            startDate: "2024-12-01",
            endDate: "2025-04-01",
            description: "AI-based coding test practice platform that evaluates user performance and provides feedback.",
            achievements: [
                "Built the core UI using React, Redux, and CSS module",
                "Implemented interactive code editor and performance visualization",
                "Collaborated in a full-stack team to align frontend with AI-based backend diagnostics"
            ],
            link: "https://www.linkedin.com/company/codocjob/",
            logo: "/logo/codocSmall.png"
        },
        {
            id: 5,
            title: "Chess Game (Java)",
            role: "Terminal-based Java Project",
            startDate: "2022-09-01",
            endDate: "2022-10-31",
            description: "A terminal-based chess game built using Java and object-oriented programming principles.",
            achievements: [
                "Implemented full chess rules (check, checkmate, castling, etc.)",
                "Used clean class hierarchy and modular design",
                "Designed for two-player local play through terminal interaction"
            ],
            link: "https://github.com/EuljeHoon/CSCI1933/tree/main/project2",
            logo: "/logo/umn_logo.png"
        },
        {
            id: 6,
            title: "Block Game (Java)",
            role: "Java-swing based Project",
            startDate: "2022-03-01",
            endDate: "2022-04-30",
            description: "A java swing.Jpanel-based block game built using Java and object-oriented programming principles.",
            achievements: [
                "Designed and developed a block-based puzzle game using Java",
                "Implemented game mechanics and UI components using Java Swing",
                "Collaborated with a team to enhance user experience and optimize performance"
            ],
            link: "https://github.com/EuljeHoon/COMS-227/tree/main/Homework3",
            logo: "/logo/ISU_logo.png"
        }
    ];

    const formatDate = (dateString: string) => {
        if (dateString === "Present") return "Present";
        try {
            const [year, month, day] = dateString.split('-').map(Number);
            const date = new Date(Date.UTC(year, month - 1, day));

            if (isNaN(date.getTime())) return dateString;

            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                timeZone: 'UTC'
            });
        } catch (error) {
            return dateString;
        }
    };

    const calculateDuration = (startDateStr: string, endDateStr: string) => {
        if (endDateStr === "Present") {
            const start = new Date(startDateStr);
            const now = new Date();
            let months = (now.getFullYear() - start.getFullYear()) * 12;
            months -= start.getMonth();
            months += now.getMonth();
            if (now.getDate() < start.getDate()) {
                months--;
            }
            return months <= 0 ? "Ongoing" : `${months} month${months > 1 ? 's' : ''}`;
        }
        
        const [s_year, s_month, s_day] = startDateStr.split('-').map(Number);
        const start = new Date(Date.UTC(s_year, s_month - 1, s_day));
        
        const [e_year, e_month, e_day] = endDateStr.split('-').map(Number);
        const end = new Date(Date.UTC(e_year, e_month, e_day, 23, 59, 59));
        
        const now = new Date();
        if (start > now) {
            return "Planned";
        }
        
        let months = (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
        months -= start.getUTCMonth();
        months += end.getUTCMonth();

        if(end.getUTCDate() < start.getUTCDate() -1 ){
            months--;
        }
        
        months = months <= 0 ? 1 : months;

        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        if (years > 0) {
            if (remainingMonths > 0) {
                return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
            }
            return `${years} year${years > 1 ? 's' : ''}`;
        }
        return `${months} month${months > 1 ? 's' : ''}`;
    };

    return (
        <section id="projects" className="scroll-mt-10 max-w-6xl mx-auto py-12 px-4">
            <div className="text-[#7A0019]">
                <h2 className="text-2xl font-semibold mb-12 text-center">Projects & Experiences</h2>
            </div>
            
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#7A0019] transform md:-translate-x-1/2"></div>
                
                {projects.map((project, index) => (
                    <div key={project.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Timeline dot */}
                        <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#7A0019] rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                        
                        {/* Content */}
                        <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="relative bg-white p-6 rounded-2xl shadow-lg transition duration-300 hover:bg-[#FFCC33] hover:shadow-xl hover:scale-105">
                                    
                                    {/* Background blur image */}
                                    <img
                                        src={project.logo}
                                        alt={`${project.title} Logo`}
                                        className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[1px] pointer-events-none"
                                    />
                                    
                                    {/* Main content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-xl font-bold text-[#7A0019]">{project.title}</h3>
                                            <div className="text-right">
                                                <div className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                                                    {calculateDuration(project.startDate, project.endDate)}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-2 text-sm font-medium text-gray-700">{project.role}</p>
                                        <div className="mb-3 text-xs text-gray-500">
                                            {formatDate(project.startDate)} - {formatDate(project.endDate)}
                                        </div>
                                        <p className="mb-3 text-gray-800">{project.description}</p>
                                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                            {project.achievements.map((achievement, idx) => (
                                                <li key={idx}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}