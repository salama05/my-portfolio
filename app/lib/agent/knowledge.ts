export const TOPICS = ["about", "services", "projects", "process", "contact"] as const;
export type Topic = (typeof TOPICS)[number];

export const KNOWLEDGE: Record<Topic, string> = {
  about: `Abdessalam Benkorichi is a self-taught Full-Stack Developer & GenAI Engineer based in Algeria.
Background: Harvard CS50x, MERN stack, then Next.js/TypeScript, then AI agent engineering (LangGraph, MCP, Agentic RAG).
Working as a freelancer since Sep 2025.`,

  services: `1) Full-stack web apps & ERP systems: dashboards, REST APIs, RBAC, optional desktop (Electron) and offline mobile (Capacitor) builds.
2) SaaS product engineering: multi-tenant architecture, auth (Clerk), subscription billing (Stripe), real-time updates.
3) AI agents, RAG & workflow automation: LangGraph multi-agent workflows, Agentic RAG, MCP tool servers, cloud or local models (Ollama).
Pricing depends on scope and is discussed after understanding the requirements.`,

  projects: `- AI Voice Agent: multi-tenant AI voice appointment-booking platform (Next.js 16, TypeScript, Gemini 2.0 Flash, Convex, Clerk, Stripe).
- Salama Public Works ERP: construction/public-works ERP with RBAC, worker attendance and payroll, supplier tracking, offline-capable mobile app (MERN, TypeScript, Capacitor).
- Salama-AI-Travel: AI travel planning assistant generating personalized itineraries (Next.js, TypeScript, Tailwind).
- Salama VET: veterinary clinic management system for inventory, sales and treatment records, with Electron desktop packaging.`,

  process: `1) Discovery & architecture. 2) Iterative build with regular demos. 3) Testing & reliability. 4) Launch & handover with documentation.`,

  contact: `Email: contact@salamaweb.me. Visitors can also use the contact form on the Contact page.`,
};
