import type { Project } from "../types";
export const projects: Project[] = [
  {
    id: 1,
    title: "STREAMR — Netflix Clone",
    description:
      "A full-stack video streaming platform with JWT authentication, content browsing, and a responsive UI. Built with a focus on scalable backend architecture.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "Docker",
    ],
    githubUrl: "https://github.com/MayankParkar/netflix-clone",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "WebSocket-powered chat with Google OAuth, JWT sessions, Redis pub/sub for message delivery, and PostgreSQL for persistence.",
    techStack: ["React", "Node.js", "Socket.IO", "PostgreSQL", "Redis", "JWT"],
    githubUrl: "https://github.com/MayankParkar/realtime-chat-app",
  },
  {
    id: 3,
    title: "URL Shortener",
    description:
      "High-performance URL shortener using Base62 encoding, Redis caching for fast redirects, and PostgreSQL for storage. Designed for scale.",
    techStack: ["Node.js", "PostgreSQL", "Redis", "Base62"],
    githubUrl: "https://github.com/MayankParkar/url-shortener",
  },
];
