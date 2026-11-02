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
    position: "Full-Stack Developer Intern",
    organization: "Inspektorat DIY",
    period: "Oct 28 – Dec 27, 2024",
    location: "Yogyakarta, Indonesia",
    description:
      "Developed an internal document management system and supported daily IT operations.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS"],
    featured: true,
  },
];

export const what = [
  {
    title: "Backend Development",
    items: [
      "RESTful API Development",
      "Authentication & Authorization",
      "Business Logic",
      "API Integration",
    ],
  },
  {
    title: "Full-Stack Development",
    items: [
      "Responsive Web Applications",
      "Frontend & Backend Integration",
      "MVC Architecture",
      "Application Deployment",
    ],
  },
  {
    title: "Database Engineering",
    items: [
      "Relational Database Design",
      "SQL & Query Optimization",
      "Database Relationships",
      "MySQL & PostgreSQL",
    ],
  },
  {
    title: "System & Deployment",
    items: [
      "Linux Server Administration",
      "Web Server Configuration",
      "Cloudflare Tunnel",
      "Git & Version Control",
    ],
  },
];

export const techStack = [
  {
    title: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Backend Development",
    items: ["Laravel", "Node.js", "Express.js", "REST API", "JWT", "Sanctum"],
  },
  {
    title: "Frontend Development",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Databases & Caching",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & Development",
    items: ["Git", "GitHub", "Postman", "VS Code", "Filament"],
  },
  {
    title: "Infrastructure & Deployment",
    items: ["Linux", "Docker", "Cloudflare Tunnel", "aaPanel", "CI/CD"],
  },
];
