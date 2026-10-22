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
        role: "Software Engineering Intern",
        startDate: "2026-06-15",
        endDate: "Present",
        description: "Designing, developing, and evaluating a Service AI assistant for technicians at Bobcat dealerships.",
        link: "https://www.bobcat.com/na/en",
        logo: "/logo/bobcat_logo.png",
        techStack: ["AI", "ML", "Embeddings", "AWS", "Bedrock", "Sagemaker", "RAG"],
        achievements: [
            "Collaborated with service engineers to build an AI diagnostic assistant for reported equipment failures",
            "Developed an automated evaluation pipeline with 5 evaluators across 17 scenarios, catching 7 prompt regressions",
            "Reduced exposure of sensitive runtime data by automating CloudWatch log retention across AgentCore deployments",
            "Resolved silent ingestion drops by redesigning metadata from 13 to 5 retrieval-critical fields under a 1,024-byte limit",
            "Eliminated overlapping request execution within chat sessions through per-session request serialization, achieving 99.3% session affinity across 6.7K sessions"
        ]
    },
    {
        id: 0,
        title: "Knowledge Computing Lab, University of Minnesota - Twin Cities",
        role: "Research Assistant",
        startDate: "2026-09-01",
        endDate: "Present",
        description: "Researching spatial time-series forecasting for regional unemployment using graph-based deep learning.",
        link: "https://knowledge-computing.github.io/index.html",
        logo: "/logo/umn_logo.png",
        techStack: ["Time Series Forecasting", "Graph Neural Networks", "Python", "Deep Learning"],
        achievements: [
            "Enabled explainable county level unemployment forecasting with a graph enhanced reasoning agent",
            "Improved forecasting accuracy through a PyTorch graph fusion module that propagates signals across spatial graphs",
            "Built a knowledge graph linking counties and industries to provide additional context for agent reasoning"
        ]
    },
    {
        id: 2,
        title: "University of Colorado Denver",
        role: "Software Engineering Intern",
        startDate: "2025-06-01",
        endDate: "2026-03-16",
        description: "Developed Poky plug-in application.",
        link: "https://sites.google.com/view/pokynmr",
        logo: "/logo/cuDenver.png",
        techStack: ["Python", "GUI", "Tkinter", "AWS", "AI", "RAG"],
        achievements: [
            "Built an S3-based vector memory layer for AI-generated protein structures, replacing local file retrieval",
            "Reduced memory usage by 40% by optimizing AWS Cohere embedding dimensions for similarity retrieval",
            "Reduced system latency by 60% (20m → 8m) using multiprocessing to parallelize ML model inference pipelines",
            "Built embedding-space visualizations using Matplotlib and PaCMAP (512D → 2D) for model monitoring"
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
            "Led a 4-person Agile team to build an AI-powered platform that delivers personalized college essay feedback",
            "Implemented a RAG pipeline that embeds user essays and retrieves similar admitted essays from Pinecone",
            "Reduced token overhead by 35% by implementing JIT fetching via MCP, bypassing context limits for large-scale Databricks datasets",
            "Designed a multi-agent pipeline separating similarity search, essay analysis, and feedback generation, reducing LLM’s context size by up to 50% and improving feedback relevance"
        ]
    },
    {
        id: 4,
        title: "Republic of Korea Army",
        role: "Network Technician",
        startDate: "2023-06-20",
        endDate: "2024-12-19",
        description: "Serving as a network technician in the Republic of Korea Army.",
        link: "https://www.army.mil.kr/army/5/subview.do",
        logo: "roka.png",
        techStack: ["TICN", "VoIP", "Network Equipment"],
        achievements: [
            "Operated tactical communication networks (TICN) across LAN/WAN supporting multiple military units",
            "Configured iptables firewall rules on a Linux server to restrict unauthorized access",
            "Configured IP addressing and subnet masks to support communication between networked systems within TICN",
            "Installed and maintained optical cable connections to support high-speed network communication"
        ]
    },
    {
        id: 5,
        title: "Gallery Soma",
        role: "Software Engineering Intern",
        startDate: "2022-05-31",
        endDate: "2022-07-31",
        description: "Created a website for art gallery in Goyang, South Korea.",
        link: "https://www.gallerysoma.co.kr/",
        logo: "/logo/soma.png",
        techStack: ["React", "Redux", "Tailwind", "Figma", "RESTful API", "AWS"],
        achievements: [
            "Built a React/Redux web application for browsing artworks, artists, and gallery events with centralized application state",
            "Developed Express.js REST APIs and integrated them with React to serve and render dynamic gallery content",
            "Implemented JWT authentication in Spring Boot with HttpOnly cookies, mitigating XSS risks"
        ]
    }
]; 