import { Link } from "react-router";
import React, { useEffect, useState } from "react";
import { profile } from "../profile";
import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "Software Developer - Home" },
    { name: "description", content: "Personal website of a professional software developer - portfolio and services" },
  ];
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    // Scroll reveal
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-init"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealElements.forEach((el) => observer.observe(el));

    // Parallax
    const parallaxNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      parallaxNodes.forEach((node) => {
        const speedAttr = node.getAttribute("data-parallax") || "0.1";
        const speed = parseFloat(speedAttr);
        const translateY = scrollY * speed;
        node.style.transform = `translateY(${translateY}px)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold gradient-text animate-pulse-slow">{profile.brand}</Link>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">About</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">Portfolio</Link>
              <Link to="/services" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">Services</Link>
              <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium hover:scale-105">Contact</Link>
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white/70 backdrop-blur border-t border-gray-200">
            <div className="px-4 py-3 space-y-2">
              <Link to="/" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">About</Link>
              <Link to="/portfolio" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">Portfolio</Link>
              <Link to="/services" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">Services</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div data-parallax="0.06" className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse-slow"></div>
          <div data-parallax="0.1" className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div data-parallax="0.08" className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="animate-fadeInUp reveal-init">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Hello, I'm <span className="text-yellow-300">{profile.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-100 mb-8 font-light">
                {profile.role}
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                {profile.tagline}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-slideInRight reveal-init">
              <Link
                to="/portfolio"
                className="btn-primary hover-glow hover-float text-lg px-8 py-4"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="btn-outline hover-float text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-indigo-600"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp reveal-init">
            <h2 className="text-4xl font-bold gradient-text mb-4">My Technical Skills</h2>
            <p className="text-gray-600 text-lg">Technologies and tools I work with</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {profile.skills.primary.map((skill, index) => (
              <div 
                key={skill} 
                className="skill-card text-center hover-scale hover-tilt reveal-init"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-lg font-semibold text-gray-800">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div data-parallax="0.07" className="absolute top-10 right-10 w-24 h-24 bg-white rounded-full animate-pulse-slow"></div>
          <div data-parallax="0.12" className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fadeInUp reveal-init">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Got a project in mind?
            </h2>
            <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to bring your idea to life with stunning digital solutions
            </p>
            <Link
              to="/contact"
              className="btn-primary bg-white text-pink-600 hover:bg-gray-100 text-lg px-10 py-4 hover-glow hover-float"
            >
              Start Your Project Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">{profile.brand}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{profile.tagline}</p>
              <div className="flex space-x-4">
                <a href={profile.social.twitter} className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover-scale">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href={profile.social.linkedin} className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover-scale">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href={profile.social.github} className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-full hover-scale">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <div className="space-y-3">
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Me</Link>
                <Link to="/portfolio" className="block text-gray-400 hover:text-white transition-colors">Portfolio</Link>
                <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact Me</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center">
                  <span className="ml-2">📧</span>
                  {profile.email}
                </p>
                <p className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  {profile.phone}
                </p>
                <p className="flex items-center">
                  <span className="ml-2">📍</span>
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved - {profile.name}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
