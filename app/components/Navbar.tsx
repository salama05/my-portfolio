import { useState } from "react";
import { Link, useLocation } from "react-router";
import { profile } from "../profile";
import { Logo } from "./Logo";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full glass-nav z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Logo variant="light" size="md" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={
                  isActive(to)
                    ? "nav-link-active"
                    : "nav-link"
                }
                aria-current={isActive(to) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden mobile-menu-drawer ${mobileOpen ? "mobile-menu-open" : "mobile-menu-closed"}`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={
                isActive(to)
                  ? "block px-3 py-2 rounded-lg text-indigo-600 font-semibold bg-indigo-50"
                  : "block px-3 py-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-medium transition-colors"
              }
              aria-current={isActive(to) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
