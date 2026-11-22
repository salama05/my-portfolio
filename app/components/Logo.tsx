import { Link } from "react-router";
import { profile } from "../profile";

export interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
  withMark?: boolean;
}

/**
 * Geometric Squircle Mark with Code Brackets `< >`,
 * Central Yellow/Amber Neural Node, and Vertical Connector Line
 */
function BrandMark({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const isDark = variant === "dark";

  const markDimensions = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-9 h-9",
  };

  return (
    <svg
      className={`${markDimensions[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Violet/Indigo Gradient for Brackets */}
        <linearGradient id={`mark-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        {/* Amber / Gold Accent Gradient for Central Node */}
        <linearGradient id={`mark-accent-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Soft Contrast Background */}
        <linearGradient id={`mark-bg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#1E1B4B" : "#EEF2FF"} />
          <stop offset="100%" stopColor={isDark ? "#0F172A" : "#F5F3FF"} />
        </linearGradient>
      </defs>

      {/* Squircle Badge Container */}
      <rect
        x="1"
        y="1"
        width="34"
        height="34"
        rx="10"
        fill={`url(#mark-bg-${variant})`}
        stroke={isDark ? "rgba(139, 92, 246, 0.45)" : "rgba(99, 102, 241, 0.25)"}
        strokeWidth="1.5"
      />

      {/* Left Code Bracket `<` */}
      <path
        d="M 13 11 L 8.5 18 L 13 25"
        stroke={`url(#mark-grad-${variant})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Code Bracket `>` */}
      <path
        d="M 23 11 L 27.5 18 L 23 25"
        stroke={`url(#mark-grad-${variant})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Vertical Connector Line (top ray) */}
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

      {/* Vertical Connector Line (bottom ray) */}
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

      {/* Central Yellow/Amber Circle Node */}
      <circle cx="18" cy="18" r="3.2" fill={`url(#mark-accent-${variant})`} />
      <circle cx="18" cy="18" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * Unified Bold Violet/Indigo Wordmark for "Salama Web":
 * - Both "Salama" and "Web" share the exact vibrant violet/indigo gradient
 * - "Web" is bold and heavy matching "Salama"
 * - Clean, pure wordmark with NO traces, underlines, or top circles
 */
function UnifiedWordmark({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const isDark = variant === "dark";

  const heights = {
    sm: "h-6",
    md: "h-7",
    lg: "h-8 sm:h-9",
  };

  return (
    <svg
      className={`${heights[size]} w-auto shrink-0 transition-opacity duration-200`}
      viewBox="0 0 152 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Exact Shared Violet/Indigo Gradient for both "Salama" and "Web" */}
        <linearGradient id={`wordmark-indigo-grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isDark ? "#818CF8" : "#4F46E5"} />
          <stop offset="50%" stopColor={isDark ? "#A78BFA" : "#7C3AED"} />
          <stop offset="100%" stopColor={isDark ? "#C084FC" : "#9333EA"} />
        </linearGradient>
      </defs>

      {/* "Salama" - Bold, heavy violet/indigo */}
      <text
        x="0"
        y="22"
        fill={`url(#wordmark-indigo-grad-${variant})`}
        fontSize="21"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif"
        letterSpacing="-0.035em"
      >
        Salama
      </text>

      {/* "Web" - Equally bold and heavy (fontWeight 800) in the exact same violet/indigo color */}
      <text
        x="80"
        y="22"
        fill={`url(#wordmark-indigo-grad-${variant})`}
        fontSize="21"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif"
        letterSpacing="-0.03em"
      >
        Web
      </text>
    </svg>
  );
}

/**
 * Main Logo component used across Navbar and Footer
 */
export function Logo({
  variant = "light",
  className = "",
  size = "md",
  withMark = true,
}: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group transition-all duration-200 select-none ${className}`}
      aria-label="Salama Web"
    >
      {withMark && <BrandMark variant={variant} size={size} />}
      <UnifiedWordmark variant={variant} size={size} />
    </Link>
  );
}
