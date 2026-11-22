export type ProjectStatus = "Completed" | "In Progress";
export type ProjectCategory = "AI & Agents" | "SaaS & Full-Stack";

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string; // emoji or URL
  status: ProjectStatus;
  category: ProjectCategory;
  featured?: boolean;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface ServicePillar {
  id: string;
  icon: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface FeaturedProject {
  id: number;
  title: string;
  impact: string;
  technologies: string[];
  emoji: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export const profile = {
  name: "Abdessalam Benkorichi",
  brand: "Salama Web",
  role: "Full-Stack Developer & GenAI Engineer",
  tagline:
    "I architect and build scalable full-stack web applications and production-grade AI agent systems using Next.js, TypeScript, and modern LLM frameworks.",
  location: "Algeria",
  email: "contact@salamaweb.me",
  whatsapp: "@GenAI_Engineer1",
  whatsappUrl: "https://wa.me/GenAI_Engineer1",
  website: "https://salamaweb.me/",
  social: {
    twitter: "https://x.com/SALAMABENKORICH",
    linkedin: "https://www.linkedin.com/in/salamabenkorichi",
    github: "https://github.com/salama05",
  },
  skills: {
    primary: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5/CSS3",
      "JavaScript (ES6+)",
      "Node.js",
      "Express.js",
      "Python",
      "MongoDB",
      "Convex",
      "PostgreSQL (pgvector)",
      "REST APIs",
      "LangGraph",
      "RAG & Agentic RAG",
      "Model Context Protocol (MCP)",
      "Gemini & OpenAI APIs",
      "Pinecone",
      "Ollama",
      "Git / GitHub",
      "Electron",
      "Capacitor",
      "Stripe",
      "Clerk",
    ],
    categories: [
      {
        label: "Frontend",
        icon: "🎨",
        color: "indigo",
        skills: [
          "React 19",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "HTML5/CSS3",
          "JavaScript (ES6+)",
        ],
      },
      {
        label: "Backend & Databases",
        icon: "🗄️",
        color: "violet",
        skills: [
          "Node.js",
          "Express.js",
          "Python",
          "MongoDB",
          "Convex",
          "PostgreSQL (pgvector)",
          "REST APIs",
        ],
      },
      {
        label: "AI & Agentic Engineering",
        icon: "🤖",
        color: "purple",
        skills: [
          "LangGraph",
          "RAG & Agentic RAG",
          "Model Context Protocol (MCP)",
          "Gemini & OpenAI APIs",
          "Pinecone",
          "Ollama",
        ],
      },
      {
        label: "Tools & Deployment",
        icon: "⚙️",
        color: "fuchsia",
        skills: ["Git / GitHub", "Electron", "Capacitor", "Stripe", "Clerk"],
      },
    ],
    frontend: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5/CSS3",
      "JavaScript (ES6+)",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "LangGraph",
      "Agentic RAG",
    ],
    databases: [
      "MongoDB",
      "Convex",
      "PostgreSQL (pgvector)",
      "Pinecone",
      "Firebase",
    ],
  },
  about: {
    welcomeHeading: "Welcome!",
    paragraphs: [
      "I'm a Full-Stack Developer & GenAI Engineer who architects and ships production-grade systems — from scalable web applications to multi-agent AI pipelines. I specialise in Next.js, TypeScript, and modern LLM frameworks including LangGraph, MCP, and Agentic RAG.",
      "I build real things that run in production: a multi-tenant SaaS voice-booking platform powered by Gemini 2.0, a full-stack ERP for the construction industry with offline-capable mobile support, and custom AI agent systems with tool-calling, retrieval, and orchestration layers.",
      "I believe clean architecture, maintainable code, and genuine problem-solving are what separate great engineers from the rest. I'm always learning at the edge of AI-native development.",
    ],
  },
  services: [
    {
      id: "fullstack-erp",
      icon: "🌐",
      badge: "Core Engineering",
      title: "Full-Stack Web & ERP Systems",
      description:
        "Custom web applications, dashboards, and internal tools/ERPs with role-based access control (RBAC), clean APIs, database design, and optional desktop/mobile wrappers.",
      deliverables: [
        "Custom web applications & interactive operational dashboards",
        "RESTful APIs, relational/document database schemas & scalable data flows",
        "Role-Based Access Control (RBAC) & secure permission boundaries",
        "Desktop & offline-capable mobile builds when workflows require them",
      ],
      technologies: [
        "React 19",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Tailwind CSS",
      ],
    },
    {
      id: "saas-engineering",
      icon: "⚡",
      badge: "Scale & Revenue",
      title: "SaaS Product Engineering",
      description:
        "End-to-end SaaS architecture including multi-tenant workflows, authentication, billing/subscriptions, and responsive UIs designed for real users.",
      deliverables: [
        "Multi-tenant workspace architecture & organization isolation",
        "Authentication flows, user roles & subscription billing integration",
        "Real-time data updates & responsive interfaces built for active users",
        "Onboarding flows, core analytics & administrative controls",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Convex",
        "Clerk",
        "Stripe",
        "Tailwind CSS",
      ],
    },
    {
      id: "ai-agents-rag",
      icon: "🤖",
      badge: "AI-Native Systems",
      title: "AI Agents, RAG & Workflow Automation",
      description:
        "Custom AI assistants, Retrieval-Augmented Generation (RAG & Agentic RAG), Model Context Protocol (MCP) tool servers, and multi-agent orchestration workflows—including local LLM options where needed.",
      deliverables: [
        "Stateful multi-agent workflows & structured task execution pipelines",
        "Knowledge retrieval systems (RAG & Agentic RAG) with semantic search & grounding",
        "Custom tool servers (MCP) connecting AI agents to external systems and data",
        "Flexible cloud or local model deployment tailored to privacy and latency needs",
      ],
      technologies: [
        "LangGraph",
        "RAG & Agentic RAG",
        "MCP",
        "Pinecone",
        "pgvector",
        "Ollama",
        "Gemini & OpenAI APIs",
        "Python",
      ],
    },
  ] as ServicePillar[],
  projects: [
    {
      id: 1,
      title: "AI Voice Agent",
      description:
        "Multi-tenant AI voice appointment-booking platform powered by Gemini 2.0 Flash, Next.js 16, TypeScript, Tailwind CSS v4, Convex, Clerk, and Stripe.",
      technologies: [
        "Next.js 16",
        "TypeScript",
        "Gemini 2.0 Flash",
        "Tailwind CSS v4",
        "Convex",
        "Clerk",
        "Stripe",
      ],
      image: "🎙️",
      status: "Completed" as ProjectStatus,
      category: "AI & Agents" as ProjectCategory,
      featured: true,
      sourceUrl: "https://github.com/salama05/AI-Voice-Agent",
    },
    {
      id: 2,
      title: "Salama Public Works ERP",
      description:
        "Full-stack construction & public works ERP system featuring offline-capable mobile support, role-based access control (RBAC), worker attendance/payroll, and supplier tracking (MERN Stack, TypeScript, Capacitor).",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Capacitor",
        "TypeScript",
      ],
      image: "🏗️",
      status: "Completed" as ProjectStatus,
      category: "SaaS & Full-Stack" as ProjectCategory,
      featured: true,
      liveUrl: "https://salama-erp-mu.vercel.app/",
    },
    {
      id: 3,
      title: "Salama-AI-Travel",
      description:
        "AI-powered travel planning and booking assistant designed to generate personalized itineraries and streamline trip discovery with modern web architecture.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "LLM / AI"],
      image: "✈️",
      status: "Completed" as ProjectStatus,
      category: "AI & Agents" as ProjectCategory,
      featured: true,
      sourceUrl: "https://github.com/salama05/Salama-AI-Travel",
    },
    {
      id: 4,
      title: "Salama VET – Desktop & Web Management System",
      description:
        "Comprehensive veterinary clinic management system for inventory, sales, and medical treatment records built with full-stack web tech and packaged for desktop with Electron.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Electron",
      ],
      image: "🐾",
      status: "Completed" as ProjectStatus,
      category: "SaaS & Full-Stack" as ProjectCategory,
      sourceUrl: "https://github.com/salama05/veterinary-dashboard",
    },
  ] as ProjectItem[],
  featuredProjects: [
    {
      id: 1,
      title: "AI Voice Agent",
      impact:
        "Multi-tenant AI voice appointment-booking platform with real-time Gemini 2.0 Flash conversations, Clerk multi-tenancy, and Stripe billing — built to production scale.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Gemini 2.0 Flash",
        "Convex",
        "Clerk",
        "Stripe",
      ],
      emoji: "🎙️",
      sourceUrl: "https://github.com/salama05/AI-Voice-Agent",
    },
    {
      id: 2,
      title: "Salama Public Works ERP",
      impact:
        "Full-stack construction & public works ERP with RBAC, payroll tracking, and offline-capable mobile app via Capacitor — deployed for a real Algerian enterprise.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Capacitor",
        "TypeScript",
      ],
      emoji: "🏗️",
      liveUrl: "https://salama-erp-mu.vercel.app/",
    },
    {
      id: 3,
      title: "Salama-AI-Travel",
      impact:
        "AI-powered travel planning and booking assistant designed to generate personalized itineraries and streamline trip discovery with modern web architecture.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "LLM / AI"],
      emoji: "✈️",
      sourceUrl: "https://github.com/salama05/Salama-AI-Travel",
    },
    {
      id: 4,
      title: "Salama VET – Desktop & Web Management System",
      impact:
        "Comprehensive veterinary clinic management system for inventory, sales, and treatment records with offline-ready desktop support via Electron.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Electron",
      ],
      emoji: "🐾",
      sourceUrl: "https://github.com/salama05/veterinary-dashboard",
    },
  ] as FeaturedProject[],
  footer: {
    brand: "Salama Web",
  },
};

export type Profile = typeof profile;
