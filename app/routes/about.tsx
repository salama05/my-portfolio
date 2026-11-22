import { useEffect } from "react";
import { Link } from "react-router";
import { profile } from "../profile";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

export function meta() {
  return [
    { title: `About — ${profile.name} | Full-Stack Developer & GenAI Engineer` },
    {
      name: "description",
      content:
        "Learn about Abdessalam Benkorichi — Full-Stack Developer & GenAI Engineer with 3+ years of experience building production web platforms, SaaS products, and AI agent systems.",
    },
    { property: "og:title", content: `About — ${profile.name}` },
    {
      property: "og:description",
      content:
        "Learn about Abdessalam Benkorichi — Full-Stack Developer & GenAI Engineer with 3+ years of experience building production web platforms, SaaS products, and AI agent systems.",
    },
  ];
}

export default function About() {
  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll reveal observer
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-init")
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (reduceMotion) {
      revealElements.forEach((el) => el.classList.add("reveal-show"));
    } else {
      revealElements.forEach((el) => observer.observe(el));
    }

    // Parallax background floating decor
    const parallaxNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      parallaxNodes.forEach((node) => {
        const speed = parseFloat(node.getAttribute("data-parallax") || "0.1");
        node.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    if (!reduceMotion) {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      observer.disconnect();
      if (!reduceMotion) window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ─── Hero Section (Unified Purple/Indigo Theme) ─── */}
      <section
        className="pt-32 pb-24 gradient-primary relative overflow-hidden"
        aria-label="About header"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            data-parallax="0.06"
            className="absolute top-16 left-16 w-32 h-32 bg-white rounded-full animate-pulse-slow"
          />
          <div
            data-parallax="0.1"
            className="absolute top-40 right-24 w-20 h-20 bg-white rounded-full animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
          <div
            data-parallax="0.08"
            className="absolute bottom-24 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            data-parallax="0.05"
            className="absolute top-1/2 right-1/4 w-10 h-10 bg-white rounded-full animate-pulse-slow"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto reveal-init">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-white/95 text-xs font-semibold tracking-wider uppercase">
                Engineering Background & Philosophy
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              About Me
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer & GenAI Engineer with 3+ years of experience architecting scalable web platforms, SaaS products, and production AI agent systems.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Core Narrative Section ─────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Visual Avatar & Stats Card */}
            <div className="lg:col-span-5 reveal-init">
              <div className="glass-card p-8 border border-gray-200/60 shadow-lg text-center relative overflow-hidden">
                <div className="w-40 h-40 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 flex items-center justify-center shadow-xl">
                  <div className="w-full h-full bg-white rounded-[22px] flex items-center justify-center">
                    <span className="text-7xl select-none" role="img" aria-label="Engineer working on computer">
                      👨‍💻
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.name}</h2>
                <p className="text-indigo-600 font-semibold text-sm mb-4">
                  Full-Stack Developer & GenAI Engineer
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Based in {profile.location} · Building full-stack systems, multi-agent workflows, and AI-native applications.
                </p>

                {/* Stat Badges */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100 text-left">
                  <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100/80">
                    <div className="text-2xl font-black text-indigo-700">3+</div>
                    <div className="text-xs font-semibold text-gray-600 mt-0.5">Years Experience</div>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100/80">
                    <div className="text-2xl font-black text-purple-700">6+</div>
                    <div className="text-xs font-semibold text-gray-600 mt-0.5">Shipped Systems</div>
                  </div>
                  <div className="p-3 rounded-xl bg-violet-50/60 border border-violet-100/80">
                    <div className="text-2xl font-black text-violet-700">Ship</div>
                    <div className="text-xs font-semibold text-gray-600 mt-0.5">First, Iterate Fast</div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100/80">
                    <div className="text-2xl font-black text-amber-700">MERN+AI</div>
                    <div className="text-xs font-semibold text-gray-600 mt-0.5">Full Stack Breadth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Story */}
            <div className="lg:col-span-7 space-y-6 reveal-init">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                  The Journey
                </span>
                <h2 id="story-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-6">
                  From Full-Stack Foundations to AI Agent Engineering
                </h2>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                I am a self-taught software engineer who has spent the last 3+ years mastering the craft of building scalable web applications. My foundation is built on rigorous computer science principles (<span className="font-semibold text-gray-900">Harvard CS50x</span>), deep fluency with the <span className="font-semibold text-gray-900">MERN stack</span> (MongoDB, Express.js, React, Node.js), and modern frontend architecture using <span className="font-semibold text-gray-900">Next.js</span> and <span className="font-semibold text-gray-900">TypeScript</span>.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                As the software landscape shifted toward AI-native systems, I evolved my skill set to encompass <span className="font-semibold text-gray-900">GenAI and Agentic Engineering</span>. Rather than treating LLMs as mere chat widgets, I build production systems: multi-agent orchestrations with <span className="font-semibold text-gray-900">LangGraph</span>, custom tool servers adhering to the <span className="font-semibold text-gray-900">Model Context Protocol (MCP)</span>, and <span className="font-semibold text-gray-900">Agentic RAG</span> pipelines using vector databases like <span className="font-semibold text-gray-900">Pinecone</span> and <span className="font-semibold text-gray-900">pgvector</span>.
              </p>

              {/* Action Link to Portfolio */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button to="/portfolio" color="primary" variant="filled" size="md">
                  View Flagship Projects →
                </Button>
                <Button to="/contact" variant="outline" size="md">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3 Core Pillars of Engineering ─────────────── */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-init">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Technical Depth
            </span>
            <h2 id="pillars-heading" className="text-3xl sm:text-4xl font-bold gradient-text mt-1 mb-4">
              Core Engineering Capabilities
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              How I architect and deliver production-grade applications from inception to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Frontend Architecture & UX */}
            <div className="glass-card p-8 hover-scale flex flex-col justify-between reveal-init">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-100/80 flex items-center justify-center text-3xl mb-6">
                  🎨
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Frontend Architecture & UX
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Crafting accessible, pixel-perfect user interfaces with modern React paradigms. Focused on server-side rendering, bundle performance, responsive layouts, and fluid micro-interactions.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                {["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 2: Backend, Data & SaaS Scalability */}
            <div className="glass-card p-8 hover-scale flex flex-col justify-between reveal-init">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-violet-100/80 flex items-center justify-center text-3xl mb-6">
                  🗄️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Backend, Data & SaaS Scale
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Building fault-tolerant REST APIs, multi-tenant database models, role-based access control (RBAC), and recurring billing systems. Experienced packaging web apps for desktop with Electron and mobile with Capacitor.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                {["Node.js", "Express.js", "Python", "MongoDB", "Convex", "PostgreSQL", "Clerk", "Stripe", "Electron", "Capacitor"].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-medium rounded-full bg-violet-50 text-violet-700 border border-violet-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 3: AI & Agentic Systems */}
            <div className="glass-card p-8 hover-scale flex flex-col justify-between reveal-init">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-100/80 flex items-center justify-center text-3xl mb-6">
                  🤖
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  AI & Agentic Systems
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Orchestrating stateful multi-agent workflows, tool execution, and contextual retrieval pipelines. Integrating real-time audio and text models with safety, caching, and streaming evaluation.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                {["LangGraph", "MCP Tool Servers", "Agentic RAG", "Pinecone", "Gemini 2.0 Flash", "OpenAI APIs", "Ollama"].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Progression Timeline Section ───────────────── */}
      <section className="py-20 bg-white" aria-labelledby="milestones-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-init">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Milestones
            </span>
            <h2 id="milestones-heading" className="text-3xl sm:text-4xl font-bold gradient-text mt-1 mb-4">
              Progression & Key Milestones
            </h2>
            <p className="text-gray-500 text-lg">
              A deliberate trajectory from fundamental software engineering to production AI agent systems.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:hidden sm:before:block">
            {/* Timeline Item 1 */}
            <div className="glass-card p-8 hover-scale reveal-init relative sm:ml-16">
              <div className="hidden sm:flex absolute -left-16 top-8 w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 items-center justify-center text-white text-xs font-bold shadow-md">
                1
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  CS Foundations & MERN Stack Engineering
                </h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-100 text-indigo-800">
                  2022 – 2023
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Completed rigorous training through <span className="font-semibold text-gray-900">Harvard CS50x</span>, mastering C, Python, algorithms, memory management, and data structures. Transitioned into full-stack web development with the MERN stack (MongoDB, Express.js, React, Node.js), building relational models, REST APIs, and e-commerce stores.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">CS50x</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">MERN Architecture</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">REST API Design</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Authentication & JWT</span>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="glass-card p-8 hover-scale reveal-init relative sm:ml-16">
              <div className="hidden sm:flex absolute -left-16 top-8 w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-violet-600 items-center justify-center text-white text-xs font-bold shadow-md">
                2
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Production Full-Stack, SaaS & Enterprise Systems
                </h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-purple-100 text-purple-800">
                  2023 – 2025
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Architected and shipped commercial systems:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 mb-4 leading-relaxed">
                <li><span className="font-semibold text-gray-900">Salama Public Works ERP:</span> Full-stack ERP for a real public works enterprise with offline-capable mobile deployment via Capacitor, worker attendance, and payroll.</li>
                <li><span className="font-semibold text-gray-900">Salama VET:</span> Veterinary clinic management system for inventory, billing, and treatment records with desktop packaging via Electron.</li>
                <li>Transitioned projects to <span className="font-semibold text-gray-900">Next.js</span>, <span className="font-semibold text-gray-900">TypeScript</span>, and reactive backend services like <span className="font-semibold text-gray-900">Convex</span>.</li>
              </ul>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Next.js App Router</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">TypeScript</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Electron Desktop</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Capacitor Mobile</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">RBAC & Multi-Tenancy</span>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="glass-card p-8 hover-scale reveal-init relative sm:ml-16">
              <div className="hidden sm:flex absolute -left-16 top-8 w-8 h-8 rounded-full bg-gradient-to-tr from-pink-600 to-amber-500 items-center justify-center text-white text-xs font-bold shadow-md">
                3
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  AI Agent Engineering & Production GenAI Systems
                </h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">
                  Early 2025
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Building production GenAI systems that connect state-of-the-art LLMs with real software infrastructure:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1.5 mb-4 leading-relaxed">
                <li><span className="font-semibold text-gray-900">AI Voice Agent:</span> Multi-tenant appointment booking with real-time Gemini 2.0 Flash voice conversations, Clerk auth, and Stripe billing.</li>
                <li><span className="font-semibold text-gray-900">Salama-AI-Travel:</span> Personalized AI travel planning and trip itinerary generation.</li>
              </ul>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">LangGraph</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">MCP Tool Servers</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Agentic RAG</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Gemini 2.0 Flash</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Pinecone</span>
              </div>
            </div>

            {/* Timeline Item 4 — Freelance */}
            <div className="glass-card p-8 hover-scale reveal-init relative sm:ml-16">
              <div className="hidden sm:flex absolute -left-16 top-8 w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 items-center justify-center text-white text-xs font-bold shadow-md">
                4
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Freelance — Full-Stack, Mobile, Desktop & AI Engineering
                </h3>
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-teal-100 text-teal-800">
                  Sep 2025 – Present
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Working independently with clients on full-stack web applications, cross-platform mobile and desktop builds, and AI-integrated systems. Projects span custom SaaS tools, internal dashboards, agentic workflows, and RAG-powered assistants.
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Next.js</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">React Native / Capacitor</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Electron</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">LangGraph</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">Agentic RAG</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md font-medium">MCP Tool Servers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Call to Action ─────────────────────────────── */}
      <section
        className="py-24 gradient-primary relative overflow-hidden"
        aria-label="Collaboration call to action"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            data-parallax="0.07"
            className="absolute top-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse-slow"
          />
          <div
            data-parallax="0.12"
            className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-full animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="reveal-init max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Exceptional
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Available for full-time engineering roles, high-impact contract builds, and AI-native SaaS product architecture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" color="white" size="lg" ariaLabel="Contact Abdessalam">
                Get in Touch
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                color="outline-white"
                size="lg"
                ariaLabel="View portfolio"
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
