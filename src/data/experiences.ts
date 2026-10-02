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
            "Built an AI troubleshooting assistant for Bobcat technicians to diagnose equipment failures from reported symptoms",
            "Developed an automated evaluation pipeline with 5 evaluators across 17 scenarios, catching 7 prompt regressions",
            "Eliminated session races with cached turn serialization, achieving 99.3% single container routing across 6.7K sessions",
            "Fixed diagnostic guide ingestion failures by reducing chunk metadata from 13 fields to 5 under a 1024 byte limit",
            "Built a configuration-sweep evaluation pipeline for Service AI clusters across Snowflake-to-S3 workflows",
            "Improved retrieval relevance by organizing 900K+ embeddings into topic-aligned clusters using HDBSCAN",
            "Enabled hierarchical cluster evaluation by designing a GPT-Luna, medoid-based cluster labeling pipeline for 1K+ clusters",
            "Reduced cluster noise from 50% to 30% by reassigning noise embeddings through LLM-based cluster-fit evaluation"
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
            "Enabled forecast and agent reasoning through a knowledge graph linking counties, industries, and economic shocks"
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
        techStack: ["Python", "GUI", "Tkinter", "AI Models(ESMFold, BOLTZ, CHAI)"],
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
            "Led a 4-person Agile team to build an AI-powered platform that delivers personalized college essay feedback.",
            "Implemented a RAG pipeline that embeds user essays and retrieves similar admitted essays from Pinecone.",
            "Reduced token overhead by 35% by implementing JIT fetching via MCP, bypassing context limits for large-scale Databricks datasets.",
            "Designed a multi-agent pipeline separating similarity search, essay analysis, and feedback generation, reducing LLM’s context size by up to 50% and improving feedback relevance."
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
            "Operated tactical communication networks (TICN) across LAN/WAN supporting multiple military units.",
            "Configured iptables firewall rules on a Linux server to restrict unauthorized access.",
            "Configured IP addressing and subnet masks to support communication between networked systems within TICN.",
            "Installed and maintained optical cable connections to support high-speed network communication."
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
            "Managed global state using Redux to optimize data flow and reduce redundant logic by 30%.",
            "Implemented RestAPI requests in JavaScript to fetch artworks, events, and artist data.",
            "Implemented JWT authentication with HttpOnly cookies, mitigating XSS risks and improving session persistence.",
            "Delivered images through AWS CloudFront CDN, improving load performance and reducing latency."
        ]
    }
]; 