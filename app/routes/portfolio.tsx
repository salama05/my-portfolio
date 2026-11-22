import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router";
import { profile, type ProjectCategory } from "../profile";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";

export function meta() {
  return [
    { title: `Portfolio — ${profile.name} | Full-Stack Developer & GenAI Engineer` },
    {
      name: "description",
      content:
        "A curated collection of full-stack web applications, SaaS products, and production AI agent systems built by Abdessalam Benkorichi.",
    },
    { property: "og:title", content: `Portfolio — ${profile.name}` },
    {
      property: "og:description",
      content:
        "A curated collection of full-stack web applications, SaaS products, and production AI agent systems built by Abdessalam Benkorichi.",
    },
  ];
}

type FilterOption = "All" | ProjectCategory;

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("All");

  const filterOptions: FilterOption[] = ["All", "AI & Agents", "SaaS & Full-Stack"];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return profile.projects;
    return profile.projects.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  // Counts for filter pills
  const counts = useMemo(() => {
    const allCount = profile.projects.length;
    const aiCount = profile.projects.filter((p) => p.category === "AI & Agents").length;
    const saasCount = profile.projects.filter((p) => p.category === "SaaS & Full-Stack").length;
    return {
      All: allCount,
      "AI & Agents": aiCount,
      "SaaS & Full-Stack": saasCount,
    };
  }, []);

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
        aria-label="Portfolio header"
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
                Engineering Showcase
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              My Portfolio
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              A curated collection of full-stack web applications, SaaS products, and production AI agent systems I've built.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Projects Section & Filter ──────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="projects-list-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h2 id="projects-list-heading" className="text-3xl font-bold text-gray-900">
                All Projects
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Showing {filteredProjects.length} of {profile.projects.length} systems
              </p>
            </div>

            {/* Filter Pills */}
            <div
              className="flex flex-wrap items-center justify-center gap-2"
              role="group"
              aria-label="Filter projects by category"
            >
              {filterOptions.map((filter) => {
                const isActive = selectedFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedFilter(filter)}
                    className={`filter-pill ${isActive ? "filter-pill-active" : ""}`}
                    aria-pressed={isActive}
                  >
                    <span>{filter}</span>
                    <span className="filter-pill-count">{counts[filter]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="project-card group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Card Header with Emoji and Status Badges */}
                <div className="project-card-header relative">
                  <span
                    className="text-5xl group-hover:scale-110 transition-transform duration-300"
                    role="img"
                    aria-label={project.title}
                  >
                    {project.image}
                  </span>

                  {/* Top-right Badges */}
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
                    {project.featured && (
                      <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-xs">
                        ★ Featured
                      </span>
                    )}
                    <span
                      className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${
                        project.status === "Completed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-yellow-50 text-yellow-700 border-yellow-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Top-left Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase rounded-full bg-white/80 backdrop-blur-xs text-gray-600 border border-gray-200">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
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

                  {/* Action Links */}
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
        </div>
      </section>

      {/* ─── CTA Section ────────────────────────────────── */}
      <section
        className="py-20 gradient-primary relative overflow-hidden"
        aria-label="Contact call to action"
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
              Like what you see?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Let's collaborate on your next web application, SaaS product, or AI agent system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/contact" color="white" size="lg" ariaLabel="Contact Abdessalam">
                Contact Me Now
              </Button>
              <Button
                to="/services"
                variant="outline"
                color="outline-white"
                size="lg"
                ariaLabel="Explore engineering services"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
