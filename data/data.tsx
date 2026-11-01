export const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1.",
    image: "/images/project1.png",
    demo: "https://example.com/project1",
    github: "",
    priority: 1,
  },
];

export type Experience = {
  id: number;
  position: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  featured: boolean;
};

export const experiences: Experience[] = [
  {
    id: 1,
    position: "Fullstack Developer Intern",
    organization: "Inspektorat DIY",
    period: "Oct 28 – Dec 27, 2024",
    location: "Yogyakarta, Indonesia",
    description:
      "Developed an internal document management system and supported daily IT operations.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS"],
    featured: true,
  },
];

export const skills = [];

export const socials = [];

export const what = [
  {
    title: "Backend Development",
    items: ["REST API", "Auth", "Bussiness Logic"],
  },
  {
    title: "Full-stack Development",
    items: ["Frontend", "Backend", "Web App", "Integration", "Deployment"],
  },
  {
    title: "Database Engineering",
    items: ["MySQL", "PostgreSQL", "NoSQL"],
  },
  {
    title: "System & Deployment",
    items: ["Linux", "Docker", "Kubernetes", "CI/CD"],
  },
];
