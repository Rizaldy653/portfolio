// src/app/components/projects/project-data.ts

export type Project = {
  id: string;
  title: string;
  priority: number;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "sitilap",
    title: "SITILAP",
    priority: 1,
    category: "Document Management System",
    description:
      "A web-based document management system for organizing inspection follow-up documents and improving archival workflows at Inspektorat DIY.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
    image: "/images/projects/sitilap.png",
    demoUrl: "https://sitilap.cloud",
    githubUrl: "https://github.com/Rizaldy653",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    priority: 1,
    category: "Full-Stack Web Application",
    description:
      "An inventory management application for organizing equipment, categories, locations, and item conditions.",
    technologies: ["Laravel", "Filament", "MySQL"],
    image: "/images/projects/inventory.png",
    demoUrl: "https://palasmega.rizaldy.cloud",
    githubUrl: "https://github.com/Rizaldy653",
  },
  {
    id: "inventory-api",
    title: "Inventory REST API",
    priority: 1,
    category: "Backend Development",
    description:
      "A REST API built with Express and PostgreSQL, using a layered architecture to organize routes, controllers, services, and database operations.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    image: "/images/projects/inventory-api.png",
    githubUrl: "https://github.com/Rizaldy653",
  },
  {
    id: "todo-api",
    title: "Todo REST API",
    priority: 2,
    category: "Backend Development",
    description:
      "A Laravel API project demonstrating RESTful resource management and token-based authentication.",
    technologies: ["Laravel", "PHP", "Sanctum"],
    image: "/images/projects/todo-api.png",
    demoUrl: "https://todo.rizaldy.cloud/api",
    githubUrl: "https://github.com/Rizaldy653",
  },
  {
    id: "note-api",
    title: "Note REST API",
    priority: 2,
    category: "Backend Development",
    description:
      "A backend project using Express, MongoDB, Redis, and JWT to explore API development, caching, and authentication.",
    technologies: ["Express", "MongoDB", "Redis", "JWT"],
    image: "/images/projects/note-api.png",
    githubUrl: "https://github.com/Rizaldy653",
  },
];
