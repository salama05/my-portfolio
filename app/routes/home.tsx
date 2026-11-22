import { useEffect } from "react";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { profile } from "../profile";

export function meta() {
  return [
    { title: "Abdessalam Benkorichi | Full-Stack Developer & GenAI Engineer" },
    {
      name: "description",
      content:
        "Full-Stack Developer & GenAI Engineer building scalable web apps and production AI agent systems with Next.js, TypeScript, LangGraph, and MCP.",
    },
  ];
}

// Skill category color map
const categoryColorMap: Record<string, { pill: string; header: string; dot: string }> = {
  indigo: {
    pill: "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100 hover:border-indigo-400",
    header: "text-indigo-600",
    dot: "bg-indigo-500",
  },
  violet: {
    pill: "bg-violet-50 text-violet-700 border border-violet-200 hover:bg-violet-100 hover:border-violet-400",
    header: "text-violet-600",
    dot: "bg-violet-500",
  },
  purple: {
    pill: "bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 hover:border-purple-400",
    header: "text-purple-600",
    dot: "bg-purple-500",
  },
  fuchsia: {
    pill: "bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200 hover:bg-fuchsia-100 hover:border-fuchsia-400",
    header: "text-fuchsia-600",
    dot: "bg-fuchsia-500",
  },
};

export default function Home() {
  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll reveal
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

    // Parallax
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

      {/* ─── Hero Section ─────────────────────────────────── */}
      <section className="pt-32 pb-24 gradient-primary relative overflow-hidden" aria-label="Introduction">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div
            data-parallax="0.06"
            className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse-slow"
          />
          <div
            data-parallax="0.1"
            className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
          <div
            data-parallax="0.08"
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            data-parallax="0.05"
            className="absolute top-1/2 right-1/3 w-8 h-8 bg-white rounded-full animate-pulse-slow"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="reveal-init">
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="text-white/90 text-sm font-medium">Available for new projects</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight">
                Hello, I'm{" "}
                <span className="text-yellow-300">{profile.name}</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-7 font-light tracking-wide">
                {profile.role}
              </h2>
              <p className="text-lg text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                {profile.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 reveal-init">
              <Button to="/portfolio" color="white" size="lg" ariaLabel="View my portfolio">
                View My Work
              </Button>
              <Button to="/contact" variant="outline" color="outline-white" size="lg" ariaLabel="Contact Abdessalam">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Technical Skills Section ─────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50" aria-labelledby="skills-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-init">
            <h2 id="skills-heading" className="text-4xl font-bold gradient-text mb-4">
              Technical Expertise
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A curated toolkit across the full modern stack — from pixel to production AI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.skills.categories.map((category, catIdx) => {
              const colors = categoryColorMap[category.color] ?? categoryColorMap["indigo"];
              return (
                <div
                  key={category.label}
                  className="skill-category-card reveal-init"
                  style={{ transitionDelay: `${catIdx * 80}ms` }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} aria-hidden="true" />
                    <span className="text-lg" aria-hidden="true">{category.icon}</span>
                    <h3 className={`font-bold text-sm uppercase tracking-wider ${colors.header}`}>
                      {category.label}
                    </h3>
                  </div>
                  {/* Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`skill-pill ${colors.pill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects Section ────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-init">
            <h2 id="projects-heading" className="text-4xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Flagship systems I've architected and shipped — from SaaS platforms to production AI pipelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {profile.featuredProjects.map((project, idx) => (
              <article
                key={project.id}
                className="project-card reveal-init group"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Card header */}
                <div className="project-card-header">
                  <span className="text-5xl" role="img" aria-label={project.title}>
                    {project.emoji}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {project.impact}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-xs font-medium border border-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  {(project.liveUrl || project.sourceUrl) && (
                    <div className="flex gap-3 pt-3 border-t border-gray-100 mt-auto">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex-1 w-full text-sm py-2.5 text-center hover-glow inline-flex items-center justify-center gap-1.5"
                          aria-label={`Live demo of ${project.title}`}
                        >
                          <span>Live Demo</span>
                          <span aria-hidden="true" className="text-xs">↗</span>
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline flex-1 w-full text-sm py-2.5 text-center inline-flex items-center justify-center gap-1.5"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span>GitHub Repo</span>
                          <span aria-hidden="true" className="text-xs">↗</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 reveal-init">
            <Button to="/portfolio" color="primary" variant="filled" size="md">
              View All Projects →
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ──────────────────────────────────── */}
      <section className="py-24 gradient-secondary relative overflow-hidden" aria-label="Call to action">
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
          <div className="reveal-init max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Got a project in mind?
            </h2>
            <p className="text-xl text-pink-100 mb-10 leading-relaxed">
              Whether it's a web app, an AI agent system, or a complex SaaS platform — let's build something remarkable together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" color="white" size="lg" ariaLabel="Start a project">
                Start Your Project
              </Button>
              <Button to="/services" variant="outline" color="outline-white" size="lg" ariaLabel="View services">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
