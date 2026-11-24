import * as z from "zod";

export const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z
  .enum(["web-app", "saas", "ai-agent", "erp-dashboard", "other"])
  .describe("web-app: website or custom web application; saas: subscription/multi-user product; ai-agent: chatbot, RAG or automation with AI; erp-dashboard: business management system (inventory, sales, HR, pharmacy, clinic, construction, etc.); other: anything else"
  ),
  description: z.string().min(10).describe("Short summary of what the client needs"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

export type Lead = z.infer<typeof leadSchema>;

export async function deliverLead(lead: Lead) {
  // For now: just log it. Next step: send it to your email or save it in a database.
  console.log("NEW LEAD:", lead);
}