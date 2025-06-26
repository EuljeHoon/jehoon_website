export interface Experience {
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
}

export const experiences: Experience[] = [
    {
        id: 1,
        title: "dotori",
        role: "Software Engineer",
        startDate: "2025-04-01",
        endDate: "Present",
        description: "Making AI-powered college admissions assistant",
        link: "https://dotori-intro-website.vercel.app/",
        logo: "/logo/Main_logo_invisible _back.png",
        techStack: ["Java", "Spring Boot", "React", "FastAPI", "Google Cloud Storage"],
        achievements: [
            "Led a 4-person Agile team in the full-stack development of an AI-powered college admissions assistant.",
            "Developed Spring Boot RESTful API to handle users requests and data exchange between client and server.",
            "Engineered a GitHub Actions CI/CD pipeline to automate the build, test, and deployment processes.",
            "Implemented Milvus vector database for Llama 3.0 to power personalized school recommendations."
        ]
    },
    {
        id: 2,
        title: "Poky Lab",
        role: "Student Researcher (Plug-in Developer)",
        startDate: "2025-06-01",
        endDate: "2025-07-31",
        description: "Developed Poky plug-in application.",
        link: "https://sites.google.com/view/pokynmr",
        logo: "/logo/cuDenver.png",
        techStack: ["Python", "GUI", "Tkinter", "AI Models(ESMFold, BOLTZ, CHAI)"],
        achievements: [
            "Developed POKY, an automated protein prediction software, to streamline protein research workflows.",
            "Implemented Python GUI using Tkinter library to make the software more user-friendly and accessible.",
            "Improved application performance and User Experience by running AI model predictions asynchronously.",
            "Achieved 60% faster structure prediction and scoring workflow by integrating 3 AI models(ESMFold, BOLTZ, CHAI) into a unified backend API."
        ]
    },
    {
        id: 3,
        title: "Gallery Soma (Next.js)",
        role: "Software Engineer Intern",
        startDate: "2022-05-31",
        endDate: "2022-07-31",
        description: "Created a website for gallery.",
        link: "https://www.gallerysoma.co.kr/",
        logo: "/logo/soma.png",
        techStack: ["React", "Redux", "RESTful API"],
        achievements: [
            "Redesigned core UI components using Tailwind and Figma specs, improving visual consistency.",
            "Simplified data flow with Redux, accelerating developer onboarding and reducing bugs.",
            "Reused across 6+ pages and features, designed reusable components with prop-driven architecture.",
            "Integrated RESTful APIs into the frontend to process user actions and synchronize data with the backend."
        ]
    }
]; 