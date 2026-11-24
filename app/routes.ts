import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/portfolio", "routes/portfolio.tsx"),
  route("/services", "routes/services.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/api/chat", "routes/api.chat.ts"),
] satisfies RouteConfig;
