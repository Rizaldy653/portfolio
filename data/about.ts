// data/about.ts

export const aboutProfile = {
  name: "Rizaldy Harris Kusuma",
  headline: "Software Engineer",
  introduction:
    "I'm an Information Technology graduate interested in building practical, maintainable, and user-friendly software applications.",

  description:
    "My primary interests are backend development, REST API design, database management, and full-stack web development. I enjoy turning requirements into structured applications while continuously improving my technical skills.",

  focus: [
    "Backend Development",
    "REST API Design",
    "Full-Stack Development",
    "Database Design",
  ],

  values: [
    "Clean and maintainable code",
    "Practical problem-solving",
    "Continuous learning",
    "Thoughtful software design",
  ],

  facts: [
    {
      label: "Education",
      value: "B.Sc. in Information Technology",
    },
    {
      label: "University",
      value: "Universitas Negeri Yogyakarta",
    },
    {
      label: "Graduation",
      value: "2025",
    },
    {
      label: "Primary Stack",
      value: "PHP, Laravel, JavaScript, SQL",
    },
  ],

  github: "https://github.com/Rizaldy653",
};

export const education = {
  institution: "Universitas Negeri Yogyakarta",
  degree: "Bachelor of Information Technology",
  abbreviation: "S1 Teknologi Informasi",
  period: "2021 – 2025",
  gpa: "3.62 / 4.00",

  description:
    "Developed a foundation in programming, database management, web development, and software engineering.",

  focusAreas: [
    "Web Development",
    "Database Management",
    "Software Engineering",
    "System Analysis",
  ],

  thesis: {
    name: "SITILAP",
    title:
      "Pengembangan Sistem Manajemen Dokumen Tindak Lanjut Hasil Pemeriksaan Berbasis Website di Inspektorat DIY",

    description:
      "A web-based document management system developed to support the management of follow-up inspection documents and records at Inspektorat DIY.",

    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],

    url: "https://sitilap.cloud",
  },
};

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  credentialUrl?: string;
  category: "certification" | "course";
}

// Add only certifications and courses you have actually completed.
export const certifications: Certification[] = [];

export const experience = [
  {
    position: "Fullstack Developer Intern",
    organization: "Inspektorat Daerah DIY",
    period: "October 2024 – December 2024",
    type: "Internship",

    description:
      "Contributed to internal document management and digital archiving activities while supporting the organization's day-to-day IT needs.",

    responsibilities: [
      "Contributed to the development of an internal web-based document storage and archive management system.",
      "Assisted staff with application usage, IT troubleshooting, and technical support.",
      "Supported organizational events through technical operation and documentation.",
    ],

    technologies: [
      "Laravel",
      "MySQL",
      "Tailwind CSS",
      "Git",
      "Microsoft Office",
    ],
  },
];

export const selectedProjects = [
  {
    name: "Inventory Management System",
    category: "Web Application",

    description:
      "An asset and equipment inventory application for managing inventory records, categories, locations, and item conditions.",

    technologies: ["Laravel", "Filament", "MySQL"],

    // Add the actual project URL when available.
    url: "",
  },

  {
    name: "Inventory REST API",
    category: "Backend Development",

    description:
      "A backend inventory API project focused on structured Express.js architecture, PostgreSQL integration, and RESTful endpoints.",

    technologies: ["Node.js", "Express.js", "PostgreSQL"],

    // Add the actual repository URL when available.
    url: "",
  },

  {
    name: "SITILAP",
    category: "Academic Project",

    description:
      "A web-based document management system for follow-up inspection records, developed as an undergraduate thesis project.",

    technologies: ["Laravel", "MySQL", "Tailwind CSS"],

    url: "https://sitilap.cloud",
  },
];
