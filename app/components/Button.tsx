import React from "react";
import { Link } from "react-router";

type ButtonProps = {
  to?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "filled"; // can be extended later
  color?: "amber" | "white"; // supported presets
  ariaLabel?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  to,
  children,
  className,
  size = "lg",
  variant = "filled",
  color = "amber",
  ariaLabel,
}: ButtonProps) {
  const sizeClasses = size === "lg" ? "text-lg px-8 py-4" : size === "md" ? "text-base px-6 py-3" : "text-sm px-4 py-2";

  const base = cx(
    // base interaction + shared look
    "btn-primary hover-glow hover-float transition-transform duration-150 focus:outline-none active:scale-95",
    sizeClasses
  );

  let palette = "";
  if (variant === "filled") {
    if (color === "white") {
      palette = cx(
        "bg-white text-indigo-600 hover:bg-gray-100",
        "border border-gray-200 shadow-md",
        "focus:ring-2 focus:ring-indigo-200"
      );
    } else if (color === "amber") {
      palette = cx(
        "bg-amber-400 text-gray-950 hover:bg-amber-300",
        "shadow-md",
        "focus:ring-2 focus:ring-amber-200"
      );
    }
  }

  const classes = cx(base, palette, className);

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
