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
        title: "Bobcat Company",
        role: "AI Engineering Intern",
        startDate: "2026-06-15",
        endDate: "2026-08-28",
        description: "Designing, developing, and deploying an AI service agent.",
        link: "https://www.bobcat.com/na/en",
        logo: "/logo/bobcat_logo.png",
        techStack: ["AI", "RAG", "AWS"],
        achievements: [
            "Contributed to the development of an AI agent that enables service technicians to quickly access equipment information and receive troubleshooting and repair guidance.",
            "Developed a Taskfile-based automation workflow to validate AWS Bedrock Guardrails through LLM invocations, testing prompt-injection,  data-leakage, and information exposure scenarios before deployment."
        ]
    },
    {
        id: 2,
        title: "University of Colorado Denver, Lee Group",
        role: "Research Assistant Developer",
        startDate: "2025-06-01",
        endDate: "2026-03-16",
        description: "Developed Poky plug-in application.",
        link: "https://sites.google.com/view/pokynmr",
        logo: "/logo/cuDenver.png",
        techStack: ["Python", "GUI", "Tkinter", "AI Models(ESMFold, BOLTZ, CHAI)"],
        achievements: [
            "Developed POKY, an AI-driven platform for automated protein structure prediction and analysis.",
            "Engineered an automated AI pipeline integrating multiple structure prediction models (ESMFold, Boltz-1, Chai-1) as modular tools, enabling seamless end-to-end processing of protein sequences.",
            "Developed a Python-based scoring algorithm to match predicted spectra with BMRB data and rank optimal structures based on experimental reference data.",
            "Reduced system latency by 60%(5m → 2m) by Python multiprocessing to parallelize high-compute analysis tools, improving throughput for large-scale data processing."
        ]
    },
    {
        id: 3,
        title: "dotori",
        role: "Software Engineer",
        startDate: "2025-04-01",
        endDate: "2025-12-31",
        description: "Making AI-powered college admissions assistant",
        link: "https://dotori-intro-website.vercel.app/",
        logo: "/logo/Main_logo_invisible _back.png",
        techStack: ["Java", "Spring Boot", "React", "RESTful API", "JWT", "PostgreSQL"],
        achievements: [
            "Led a 4-person Agile team to build an AI-powered platform that delivers personalized college essay feedback.",
            "Implemented a RAG pipeline that embeds user essays and retrieves similar admitted essays from Pinecone.",
            "Reduced token overhead by 35% by implementing JIT fetching via MCP, bypassing context limits for large-scale Databricks datasets.",
            "Designed a multi-agent pipeline separating similarity search, essay analysis, and feedback generation, reducing LLM’s context size by up to 50% and improving feedback relevance."
        ]
    },
    {
        id: 4,
        title: "Republic of Korea Army",
        role: "Communication Specialist",
        startDate: "2023-06-20",
        endDate: "2024-12-19",
        description: "Serving as a communication specialist in the Republic of Korea Army.",
        link: "https://www.army.mil.kr/army/5/subview.do",
        logo: "roka.png",
        techStack: ["TICN", "VoIP", "Network Equipment"],
        achievements: [
            "Operated tactical communication networks (TICN) across LAN/WAN supporting multiple military units.",
            "Configured iptables firewall rules on a Linux server to restrict unauthorized access.",
            "Configured IP addressing and subnet masks to support communication between networked systems within TICN.",
            "Installed and maintained optical cable connections to support high-speed network communication."
        ]
    },
    {
        id: 5,
        title: "Gallery Soma",
        role: "Software Engineer Intern",
        startDate: "2022-05-31",
        endDate: "2022-07-31",
        description: "Created a website for gallery.",
        link: "https://www.gallerysoma.co.kr/",
        logo: "/logo/soma.png",
        techStack: ["React", "Redux", "Tailwind", "Figma", "RESTful API", "AWS"],
        achievements: [
            "Managed global state using Redux to optimize data flow and reduce redundant logic by 30%.",
            "Implemented RestAPI requests in JavaScript to fetch artworks, events, and artist data.",
            "Implemented JWT authentication with HttpOnly cookies, mitigating XSS risks and improving session persistence.",
            "Delivered images through AWS CloudFront CDN, improving load performance and reducing latency."
        ]
    }
]; 