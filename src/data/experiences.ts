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
        techStack: ["Java", "Spring Boot", "React", "RESTful API", "JWT", "PostgreSQL"],
        achievements: [
            "Led a 4-person Agile team to build an AI-powered college admissions consulting platform that provides personalized essay feedback for students across 2 countries.",
            "Developed Spring Boot RESTful API with JWT authentication and PostgreSQL.",
            "Engineered a GitHub Actions CI/CD pipeline to automate the build, test, and deployment processes.",
            "Integrated Gemini 2.5 with Milvus vector database to reference sample essays, enabling personalized consulting."
        ]
    },
    {
        id: 2,
        title: "University of Colorado Denver, Lee Group",
        role: "Research Assistant Developer",
        startDate: "2025-06-01",
        endDate: "2025-07-31",
        description: "Developed Poky plug-in application.",
        link: "https://sites.google.com/view/pokynmr",
        logo: "/logo/cuDenver.png",
        techStack: ["Python", "GUI", "Tkinter", "AI Models(ESMFold, BOLTZ, CHAI)"],
        achievements: [
            "Developed POKY, an automated protein prediction software that provides faster insights for drug discovery, to streamline protein research workflows.",
            "Implemented Python GUI using Tkinter library to make the software more user-friendly and accessible.",
            "Accelerated protein signal analysis by 5 minutes to 2 minutes with a Python script that parallelized multiple analysis tools.",
            "Integrated 3 AI models (ESMFold, BOLTZ, CHAI) into a unified backend API, maintaining prediction accuracy while significantly improving workflow efficiency."
        ]
    },
    {
        id: 3,
        title: "Republic of Korea Army",
        role: "Communication Specialist",
        startDate: "2023-06-20",
        endDate: "2024-12-19",
        description: "Serving as a communication specialist in the Republic of Korea Army.",
        link: "https://www.army.mil.kr/army/5/subview.do",
        logo: "roka.png",
        techStack: ["TICN", "VoIP", "Network Equipment"],
        achievements: [
            "Served as a communications specialist responsible for communication and data networks across multiple military units.",
            "Configured and linked Tactical Information and Communication Network (TICN) equipment to base stations, enabling stable voice, data, and video communication across field units.",
            "Managed VoIP infrastructure to enable stable real-time voice communication between command and field units.",
            "Troubleshooted network equipment, restoring communication via reboots, cable swaps, and frequency tuning."
        ]
    },
    {
        id: 4,
        title: "Gallery Soma",
        role: "Software Engineer Intern",
        startDate: "2022-05-31",
        endDate: "2022-07-31",
        description: "Created a website for gallery.",
        link: "https://www.gallerysoma.co.kr/",
        logo: "/logo/soma.png",
        techStack: ["React", "Redux", "Tailwind", "Figma", "RESTful API", "AWS"],
        achievements: [
            "Standardized styles and color palette using Tailwind and Figma, enhancing design consistency.",
            "Implemented global state management using Redux to reduce redundant logic by 30%.",
            "Developed reusable components (Header, Footer, Cart Button) with prop-driven design, reused across 6+ pages to simplify maintenance and ensure UI consistency.",
            "Loaded artwork images from AWS S3 using signed URLs, ensuring secure rendering."
        ]
    }
]; 