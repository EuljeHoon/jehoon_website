export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  achievements: string[];
  link?: string;
  backendLink?: string;
  frontendLink?: string;
  projectImage: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Dotori College Essay Assistant (In Progress)",
    role: "As a Founder & Software Engineer, leaded motivated group of 4 people to innovate education.",
    description: "Next.js, Spring Boot, PostgreSQL",
    achievements: [
        "Developed a full-stack AI-powered college admissions assistant using Next.js frontend and Spring Boot backend with PostgreSQL database.",
        "Implemented JWT authentication system with access/refresh tokens, Google OAuth integration, and secure file upload to Google Cloud Storage.",
        "Built AI-powered college recommendation system with personalized matching scores and resume-driven essay prompts using Redux state management.",
        "Created comprehensive application flow management with step-based navigation, shopping cart system, and dashboard progress tracking."
    ],
    backendLink: "https://github.com/EuljeHoon/dotori-backend.git",
    frontendLink: "https://github.com/EuljeHoon/dotori-web.git",
    projectImage: "/projects/dotori.png"
   },
   {
    id: 2,
    title: "GPU Image Editor",
    role: "Image Editor project using OpenGL(GPU Acceleration)",
    description: "C++, GLSL, Object-oriented Programming",
    achievements: [
        "Developed a GPU-accelerated image editor that allows draw and erase on images with customizable RGB colors.",
        "Implemented the copy constructor, assignment operator, and destructor for 7+ classes for memory management.",
        "Developed an OpenGL-based graphics application leveraging GPU s, implementing custom shaders and optimized texture handling for real-time rendering.",
        "Used OpenGL VAO, VBO, and EBO buffers to optimize GPU rendering speed by 90%."
    ],
    link: "https://github.com/EuljeHoon/GPU_Image_Editor.git",
    projectImage: "/projects/GPUImage.png"
   },
   {
    id: 3,
    title: "Jehoon Portfolio",
    role: "Jehoon's Portfolio webste by Next.js and Tailwind CSS",
    description: "Next.js, Tailwind CSS",
    achievements: [
        "Developed a portfolio website using Next.js and Tailwind CSS with modern UI/UX design principles.",
        "Implemented dynamic sliding animations for the Experience section using Intersection Observer API and CSS keyframes.",
        "Created modular component architecture with TypeScript interfaces for maintainable and scalable code structure.",
        "Integrated EmailJS for contact form functionality and deployed the website on Vercel with automatic GitHub integration."
    ],
    link: "https://github.com/EuljeHoon/jehoon_website.git",
    projectImage: "/projects/jehoon_website.png"
   },
   {
    id: 4,
    title: "Assembly-Level Bit Manipulation",
    role: "Assembly-Level Bit Manipulation project",
    description: "Assembly, C, MakeFile",
    achievements: [
        "Rewrote faster and more compact versions of basic computational operations in x86-64 Assembly.",
        "Optimized memory usage by directly manage CPU registers and avoiding unnecessary memory operations.",
        "Implemented float operations without float instructions, ensuring accuracy and efficiency.",
        "Ensured correctness across 20+ edge cases through automated testing infrastructure like Makefile, and validators."
    ],
    link: "https://github.com/EuljeHoon/CSCI2021-SP25/tree/main/Projects/proj3-code",
    projectImage: "/projects/Assembly.png"
  },
  {
    id: 5,
    title: "Chess Game",
    role: "Terminal-based Java Project",
    description: "Java",
    achievements: [
      "Developed a terminal-based chess game using a 2D array to represent the board and handle piece movements.",
      "Developed rule-checking functions to validate piece movements (horizontal, vertical, diagonal).",
      "Encapsulated 6+ piece movement rules into dedicated classes using object-oriented design.",
      "Loaded each chess piece from a text-based code and placed it on the board accordingly."
    ],
    link: "https://github.com/EuljeHoon/Chess-Game",
    projectImage: "/projects/Chess.png"
  },
  {
    id: 6,
    title: "Block Maze Game",
    role: "Java-swing based Project",
    description: "Java, Swing, OOP",
    achievements: [
      "Developed a Java-Swing based block game using object-oriented programming principles.",
      "Parsed string grids to generate dynamic layouts and extract blocks using ArrayList, enabling scalable level setup.",
      "Implemented smooth block movement by detecting mouse drag direction and updating block position accordingly within grid constraints.",
      "Implemented interactive block selection by translating mouse input into grid coordinates to enable user-controlled block manipulation."
    ],
    link: "https://github.com/EuljeHoon/Block_Maze",
    projectImage: "/projects/Block.png"
  }
]; 