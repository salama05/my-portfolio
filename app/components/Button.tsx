import { Link } from "react-router";

type ButtonProps = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline";
  color?: "amber" | "white" | "outline-white" | "primary";
  ariaLabel?: string;
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  to,
  href,
  children,
  className,
  size = "lg",
  variant = "filled",
  color = "amber",
  ariaLabel,
  onClick,
  disabled,
  target,
  rel,
}: ButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "text-base px-8 py-3.5 rounded-full"
      : size === "md"
      ? "text-sm px-6 py-3 rounded-full"
      : "text-sm px-4 py-2 rounded-full";

  const base = cx(
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95",
    sizeClasses,
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  );

  let palette = "";
  if (variant === "filled") {
    if (color === "white") {
      palette = cx(
        "bg-white text-indigo-700 hover:bg-indigo-50 shadow-lg hover:shadow-indigo-200/50",
        "border border-white/20",
        "focus-visible:ring-white hover:-translate-y-0.5"
      );
    } else if (color === "amber") {
      palette = cx(
        "bg-amber-400 text-gray-950 hover:bg-amber-300 shadow-lg hover:shadow-amber-300/50",
        "focus-visible:ring-amber-400 hover:-translate-y-0.5"
      );
    } else if (color === "primary") {
      palette = cx(
        "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500",
        "shadow-lg hover:shadow-indigo-300/40",
        "focus-visible:ring-indigo-500 hover:-translate-y-0.5"
      );
    }
  } else if (variant === "outline") {
    if (color === "outline-white") {
      palette = cx(
        "bg-transparent text-white border-2 border-white/70 hover:bg-white/10 hover:border-white",
        "focus-visible:ring-white hover:-translate-y-0.5"
      );
    } else {
      palette = cx(
        "bg-transparent text-indigo-600 border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white",
        "focus-visible:ring-indigo-500 hover:-translate-y-0.5"
      );
    }
  }

  const classes = cx(base, palette, className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
