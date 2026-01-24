export type ProjectStatus = "Completed" | "In Progress";

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string; // emoji or URL
  status: ProjectStatus;
  liveUrl?: string; // optional live demo URL
  sourceUrl?: string; // optional source code repository URL
}

export interface ServiceItem {
  icon: string; // emoji or URL
  title: string;
  description: string;
  price: string; // display text like "$500+"
}

export const profile = {
  name: "Abdessalam Benkorichi",
  brand: "My Portfolio",
  role: "Software Developer",
  tagline:
    "I build modern, high‑quality web apps and websites using the latest technologies.",
  location: "Algeria",
  email: "salama.benkorichi@gmail.com",
  phone: "00213777087207",
  website: "https://salamaweb.onrender.com/",
  social: {
    twitter: "https://x.com/SALAMABENKORICH",
    linkedin: "https://www.linkedin.com/in/salamabenkorichi",
    github: "https://github.com/salama05",
  },
  skills: {
    primary: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Next.js",
      "Express",
      "MongoDB",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "JavaScript (ES6+)",
      "Git / GitHub",
    ],
    frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    backend: ["Node.js", "Express", "JWT", "API Development"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  about: {
    welcomeHeading: "Welcome!",
    paragraphs: [
      "I'm a passionate MERN Stack Developer dedicated to building modern, fast, and scalable web applications. I focus on creating practical, user-friendly solutions that combine clean design with efficient performance.",
      "I continuously learn new technologies, refine my skills, and enjoy sharing knowledge with the developer community. To me, web development transcends writing code—it's about solving real problems, delivering tangible value, and creating experiences that genuinely improve people's lives.",
      "I believe in the power of collaboration and maintainable code to bring innovative ideas to life.",
    ],
  },
  services: [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Modern, responsive websites using the latest technologies",
      price: "Starting from $300",
    },
    {
      icon: "📱",
      title: "Web Applications",
      description: "Interactive web apps with advanced user interfaces",
      price: "Starting from $600",
    },
    {
      icon: "🛒",
      title: "E‑commerce Platforms",
      description: "End‑to‑end e‑commerce solutions with payment integration",
      price: "Starting from $900",
    },
    {
      icon: "⚙️",
      title: "API Development",
      description: "Robust and secure application programming interfaces",
      price: "Starting from $250",
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      description: "Regular maintenance and ongoing technical support",
      price: "$50/mo",
    },
    {
      icon: "🔍",
      title: "Code Review & Refactoring",
      description: "Improve your code quality with detailed reviews and refactoring suggestions",
      price: "$20/hr",
    },
  ] as ServiceItem[],
  projects: [
    {
      id: 1,
      title: "Full E‑commerce Store",
      description:
        "Comprehensive e‑commerce platform with product and order management",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "🛒",
      status: "Completed" as ProjectStatus,
      sourceUrl: "https://github.com/salama05/E-Commerce_MERN",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "A professional, modern weather dashboard built with Next.js 14, TypeScript, and Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      image: "🌦️",
      status: "Completed" as ProjectStatus,
      sourceUrl: "https://github.com/salama05/salama-weather-dashboard",
    },
    {
      id: 3,
      title: "Salama VET - Veterinary Dashboard",
      description:
        "A comprehensive management system for veterinary clinics, managing sales, inventory, and treatment records.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
      image: "🐾",
      status: "Completed" as ProjectStatus,
      sourceUrl: "https://github.com/salama05/veterinary-dashboard",
    },
  ] as ProjectItem[],
  footer: {
    brand: "Software Developer",
  },
};

export type Profile = typeof profile;
