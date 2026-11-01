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
    image: "/images/projects/sitilap.webp",
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
    image: "/images/projects/inventory filament.webp",
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
    image: "/images/projects/api.webp",
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
    image: "/images/projects/api.webp",
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
    image: "/images/projects/api.webp",
    githubUrl: "https://github.com/Rizaldy653",
  },
  {
    id: "notes",
    title: "Notes App",
    priority: 2,
    category: "Frontend Development",
    description:
      "A project using Vite React JS, browser storage, and local storage to create, read, update, and delete notes.",
    technologies: ["Vite", "React", "JavaScript"],
    image: "/images/projects/notes.webp",
    demoUrl: "https://notes.rizlabs.my.id",
    githubUrl: "https://github.com/Rizaldy653",
  },
  {
    id: "to-do-app",
    title: "To-Do and Pomodoro App",
    priority: 2,
    category: "Frontend Development",
    description:
      "A lightweight productivity dashboard built with HTML, CSS, and Vanilla JavaScript, developed with **Kiro AI** assistance. Features include task management, a Pomodoro timer, real-time clock, dynamic greetings, and quick links, with data stored in browser localStorage.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/task.webp",
    demoUrl: "https://to-do.rizlabs.my.id",
    githubUrl: "https://github.com/Rizaldy653",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker App",
    priority: 2,
    category: "Website Development",
    description:
      "A beginner-friendly expense tracker application built with HTML, CSS, and Vanilla JavaScript as part of a Front-End Web Development program. Features expense management and transaction tracking, with JavaScript handling the application's core functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/expense.webp",
    demoUrl: "https://expense-tracker.rizlabs.my.id",
    githubUrl: "https://github.com/Rizaldy653",
  },
];
