import { useState } from "react";
import { Link } from "react-router";

export type LogoVariation = "connected-node" | "fluid-stroke" | "architectural-contrast";

export interface StylizedLogoProps {
  variation?: LogoVariation;
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
  withMark?: boolean;
}

/**
 * Common Icon Mark: Squircle badge with code brackets + GenAI neural node
 */
function IconMark({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const isDark = variant === "dark";
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <svg
      className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`mark-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id={`mark-accent-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id={`mark-bg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#1E1B4B" : "#EEF2FF"} />
          <stop offset="100%" stopColor={isDark ? "#0F172A" : "#F5F3FF"} />
        </linearGradient>
      </defs>

      <rect
        x="1"
        y="1"
        width="34"
        height="34"
        rx="10"
        fill={`url(#mark-bg-${variant})`}
        stroke={isDark ? "rgba(139, 92, 246, 0.4)" : "rgba(99, 102, 241, 0.22)"}
        strokeWidth="1.5"
      />

      <path
        d="M13 11L8.5 18L13 25"
        stroke={`url(#mark-grad-${variant})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M23 11L27.5 18L23 25"
        stroke={`url(#mark-grad-${variant})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <line
        x1="18"
        y1="11"
        x2="18"
        y2="15"
        stroke={isDark ? "#A78BFA" : "#818CF8"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1 2"
      />
      <line
        x1="18"
        y1="21"
        x2="18"
        y2="25"
        stroke={isDark ? "#A78BFA" : "#818CF8"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="1 2"
      />

      <circle cx="18" cy="18" r="3.2" fill={`url(#mark-accent-${variant})`} />
      <circle cx="18" cy="18" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * VARIATION 1: "Connected Node"
 * Clean modern typography with circuit line routes and glowing nodes connecting letters
 */
export function WordmarkConnectedNode({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const isDark = variant === "dark";
  const heights = { sm: "h-6", md: "h-7", lg: "h-9" };

  return (
    <svg
      className={`${heights[size]} w-auto shrink-0`}
      viewBox="0 0 168 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`v1-indigo-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
        <linearGradient id={`v1-circuit-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* Primary Wordmark "Salama" */}
      <text
        x="0"
        y="23"
        fill={isDark ? "#F8FAFC" : "#0F172A"}
        fontSize="21"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
        letterSpacing="-0.035em"
      >
        Salama
      </text>

      {/* Suffix "Web" with high-tech gradient */}
      <text
        x="82"
        y="23"
        fill={`url(#v1-indigo-grad-${variant})`}
        fontSize="21"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
        letterSpacing="-0.02em"
      >
        Web
      </text>

      {/* Circuit Trace from letter 'm' bridging toward 'Web' */}
      <path
        d="M 68 28 L 76 28 L 81 31 L 132 31"
        stroke={`url(#v1-circuit-${variant})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Floating Node above 'W' apex */}
      <circle cx="94" cy="7" r="1.8" fill="#F59E0B" />
      <circle cx="94" cy="7" r="0.8" fill="#FFFFFF" />

      {/* Connecting Terminal Node on bottom trace */}
      <circle cx="136" cy="31" r="2.4" fill="#F59E0B" />
      <circle cx="136" cy="31" r="1.1" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * VARIATION 2: "Fluid Stroke"
 * Clean wordmark with an elegant, swooping typographic tail accent that provides dynamic energy
 */
export function WordmarkFluidStroke({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const isDark = variant === "dark";
  const heights = { sm: "h-6", md: "h-7", lg: "h-9" };

  return (
    <svg
      className={`${heights[size]} w-auto shrink-0`}
      viewBox="0 0 168 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`v2-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="45%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id={`v2-swoop-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      {/* Main Brand Name */}
      <text
        x="0"
        y="22"
        fill={isDark ? "#FFFFFF" : "#0F172A"}
        fontSize="21"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
        letterSpacing="-0.03em"
      >
        Salama
      </text>

      {/* "Web" in smooth italic gradient font */}
      <text
        x="80"
        y="22"
        fill={`url(#v2-grad-${variant})`}
        fontSize="21"
        fontWeight="700"
        fontStyle="italic"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
        letterSpacing="-0.02em"
      >
        Web
      </text>

      {/* Fluid dynamic curve flowing gracefully under 'Web' with tapering width */}
      <path
        d="M 12 28 C 45 28, 70 31, 95 31 C 115 31, 130 26, 142 22"
        stroke={`url(#v2-swoop-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Warm Gold Accent Dot at curve terminal */}
      <circle cx="146" cy="21" r="2.2" fill="#FBBF24" />
      <circle cx="146" cy="21" r="1" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * VARIATION 3: "Architectural Contrast"
 * Bold/Light geometric font contrast with a sharp two-tone architectural underline cut
 */
export function WordmarkArchitecturalContrast({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const isDark = variant === "dark";
  const heights = { sm: "h-6", md: "h-7", lg: "h-9" };

  return (
    <svg
      className={`${heights[size]} w-auto shrink-0`}
      viewBox="0 0 170 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`v3-accent-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      {/* "SALAMA" - Heavy modern sans tracking */}
      <text
        x="0"
        y="22"
        fill={isDark ? "#F8FAFC" : "#0F172A"}
        fontSize="20"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
        letterSpacing="-0.04em"
      >
        SALAMA
      </text>

      {/* "WEB" - Light architectural contrast with wider letterspacing */}
      <text
        x="98"
        y="22"
        fill={isDark ? "#A78BFA" : "#6366F1"}
        fontSize="19"
        fontWeight="400"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
        letterSpacing="0.08em"
      >
        WEB
      </text>

      {/* Sharp Architectural Primary Underline (Indigo/Purple) */}
      <rect
        x="2"
        y="28"
        width="90"
        height="2.5"
        rx="1.25"
        fill={`url(#v3-accent-${variant})`}
      />

      {/* Contrasting Golden Segmented Accent Line */}
      <rect
        x="98"
        y="28"
        width="44"
        height="2.5"
        rx="1.25"
        fill="#F59E0B"
      />

      {/* Precision Corner Dot */}
      <circle cx="149" cy="29.25" r="1.5" fill={isDark ? "#E2E8F0" : "#64748B"} />
    </svg>
  );
}

/**
 * Main Dynamic Logo component supporting all 3 variations
 */
export function StylizedLogo({
  variation = "connected-node",
  variant = "light",
  className = "",
  size = "md",
  withMark = true,
}: StylizedLogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-95 select-none ${className}`}
      aria-label="Salama Web — Home"
    >
      {withMark && <IconMark variant={variant} size={size} />}

      {variation === "connected-node" && <WordmarkConnectedNode variant={variant} size={size} />}
      {variation === "fluid-stroke" && <WordmarkFluidStroke variant={variant} size={size} />}
      {variation === "architectural-contrast" && (
        <WordmarkArchitecturalContrast variant={variant} size={size} />
      )}
    </Link>
  );
}

/**
 * Interactive Preview Component to test and compare all three variations
 * side-by-side on both Light (Navbar) and Dark (Footer) backdrops.
 */
export function LogoVariationsPreview() {
  const [selected, setSelected] = useState<LogoVariation>("connected-node");

  const variations: {
    id: LogoVariation;
    title: string;
    subtitle: string;
    description: string;
  }[] = [
    {
      id: "connected-node",
      title: "Variation 1: Connected Node",
      subtitle: "Geometric Circuit & Intelligence Embellishments",
      description:
        "Clean modern sans-serif with subtle micro-circuit traces and illuminated AI nodes connecting smoothly between the letterforms.",
    },
    {
      id: "fluid-stroke",
      title: "Variation 2: Fluid Stroke",
      subtitle: "Dynamic Curve & Personal Motion Accent",
      description:
        "Balanced bold lettering paired with an italic gradient and an expressive, smooth bezier swoop that brings energy and human flow.",
    },
    {
      id: "architectural-contrast",
      title: "Variation 3: Architectural Contrast",
      subtitle: "Typographic Weight Contrast & Two-Tone Cut",
      description:
        "Bold/Light weight hierarchy with high-contrast letter spacing and a crisp two-tone segmented underline cut (Indigo + Amber).",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
          Logo System Preview
        </span>
        <h2 className="text-3xl font-bold gradient-text mt-1 mb-3">
          Salama Web — Wordmark Variations
        </h2>
        <p className="text-gray-600 text-sm">
          Compare the three bespoke variations across both Light (Navbar) and Dark (Footer) backgrounds.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {variations.map((v) => {
          const isSelected = selected === v.id;
          return (
            <div
              key={v.id}
              onClick={() => setSelected(v.id)}
              className={`cursor-pointer rounded-2xl border-2 transition-all p-5 flex flex-col justify-between ${
                isSelected
                  ? "border-indigo-600 shadow-xl bg-white ring-2 ring-indigo-200"
                  : "border-gray-200 bg-white/70 hover:border-indigo-300 hover:shadow-md"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {v.title}
                  </span>
                  {isSelected && (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Active
                    </span>
                  )}
                </div>

                {/* Light preview card */}
                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-xs mb-3 flex items-center justify-center min-h-[70px]">
                  <StylizedLogo variation={v.id} variant="light" size="md" />
                </div>

                {/* Dark preview card */}
                <div className="p-4 rounded-xl bg-gray-900 border border-gray-800 shadow-xs mb-4 flex items-center justify-center min-h-[70px]">
                  <StylizedLogo variation={v.id} variant="dark" size="md" />
                </div>

                <h4 className="font-bold text-gray-900 text-sm mb-1">{v.subtitle}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{v.description}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelected(v.id)}
                className={`mt-5 w-full py-2 rounded-lg text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {isSelected ? "Selected" : "Select Variation"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
