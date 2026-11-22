import { useEffect } from "react";
import { Link } from "react-router";
import { profile } from "../profile";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

export function meta() {
  return [
    { title: `Services — ${profile.name} | Full-Stack Developer & GenAI Engineer` },
    {
      name: "description",
      content:
        "End-to-end engineering services spanning full-stack web apps, SaaS platforms, and production AI agent systems.",
    },
    { property: "og:title", content: `Services — ${profile.name}` },
    {
      property: "og:description",
      content:
        "End-to-end engineering services spanning full-stack web apps, SaaS platforms, and production AI agent systems.",
    },
  ];
}

const workflowSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description:
      "Clarifying functional requirements, user journeys, data modeling, API contracts, security boundaries, and choosing the optimal tech stack for scalability.",
    icon: "📋",
  },
  {
    step: "02",
    title: "Iterative Build & Integration",
    description:
      "Rapid sprint delivery with clean TypeScript code, modular components, reactive state management, and continuous progress demonstrations.",
    icon: "⚡",
  },
  {
    step: "03",
    title: "Testing & Reliability",
    description:
      "Rigorous end-to-end validation, edge-case hardening, authentication flow testing, mobile responsiveness checks, and AI prompt/workflow evaluation.",
    icon: "🛡️",
  },
  {
    step: "04",
    title: "Launch & Handover",
    description:
      "Smooth production deployment with health checks, error monitoring setup, clean technical documentation, code handover, and ongoing support.",
    icon: "🚀",
  },
];

export default function Services() {
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
        aria-label="Services header"
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
                Engineering Capabilities
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Engineering Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              End-to-end engineering services spanning full-stack web apps, SaaS platforms, and production AI agent systems.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3 Core Service Pillars ─────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="services-pillars-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-init">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              What I Deliver
            </span>
            <h2 id="services-pillars-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-4">
              Core Engineering Pillars
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Production-focused technical services tailored for founders, startups, and growing enterprises.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {profile.services.map((pillar, idx) => (
              <article
                key={pillar.id}
                className="glass-card hover-scale flex flex-col justify-between border border-gray-200/60 shadow-md reveal-init overflow-hidden group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="p-7 pb-5 border-b border-gray-100 bg-gradient-to-r from-gray-50/50 to-indigo-50/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-200/60 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                        {pillar.icon}
                      </div>
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:gradient-text transition-all duration-300">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                        Key Deliverables:
                      </h4>
                      <ul className="space-y-2.5">
                        {pillar.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-gray-600 leading-normal">
                            <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-50/80 text-indigo-700 border border-indigo-100/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-7 pt-0">
                  <Link
                    to="/contact"
                    className="btn-primary w-full text-sm py-3 text-center hover-glow block"
                    aria-label={`Inquire about ${pillar.title}`}
                  >
                    Start a Project →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How I Work (Process Section) ───────────────── */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-init">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Methodology
            </span>
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold gradient-text mt-1 mb-4">
              How I Work
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A transparent, reliable 4-step workflow turning complex requirements into production reality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.step}
                className="glass-card p-6 hover-scale flex flex-col justify-between reveal-init relative border border-gray-200/60 shadow-xs"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-indigo-600/40">
                      {step.step}
                    </span>
                    <span className="text-2xl" role="img" aria-hidden="true">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing Call to Action ─────────────────────── */}
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
              Ready to Build Your Next Product?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Whether you need a full-stack platform, an MVP SaaS, or an autonomous AI agent workflow, let's turn your vision into production-ready software.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" color="white" size="lg" ariaLabel="Start a conversation">
                Start a Conversation
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                color="outline-white"
                size="lg"
                ariaLabel="Inspect real builds"
              >
                Inspect Real Builds
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
