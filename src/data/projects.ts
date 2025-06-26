export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  achievements: string[];
  link: string;
  projectImage: string;
}

export const projects: Project[] = [
   {
    id: 1,
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
    id: 2,
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
    id: 3,
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