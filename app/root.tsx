import ChatWidget from "~/components/ChatWidget";

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "alternate icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/favicon.svg" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Fira+Code:wght@400;500&display=swap",
  },
];

export function meta() {
  const title = "Abdessalam Benkorichi | Full-Stack Developer & GenAI Engineer";
  const description =
    "Full-Stack Developer & GenAI Engineer specializing in Next.js, TypeScript, LangGraph, MCP, and Agentic RAG systems. Building scalable web apps and production AI agents.";
  const url = "https://salamaweb.me";
  const ogImage = `${url}/og-image.png`;

  return [
    { title },
    { name: "description", content: description },
    { name: "author", content: "Abdessalam Benkorichi" },
    { name: "keywords", content: "Full-Stack Developer, GenAI Engineer, Next.js, TypeScript, LangGraph, MCP, Agentic RAG, React, Node.js, AI, Algeria" },
    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:site_name", content: "Salama Web" },
    { property: "og:locale", content: "en_US" },
    // Twitter / X Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@SALAMABENKORICH" },
    { name: "twitter:creator", content: "@SALAMABENKORICH" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    // Canonical
    { tagName: "link", rel: "canonical", href: url },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Outlet />
      <ChatWidget />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
