import * as z from "zod";
import { Resend } from "resend";

export const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z
    .enum(["web-app", "saas", "ai-agent", "erp-dashboard", "other"])
    .describe(
      "web-app: website or custom web application; saas: subscription/multi-user product; ai-agent: chatbot, RAG or automation with AI; erp-dashboard: business management system (inventory, sales, HR, pharmacy, clinic, construction, etc.); other: anything else"
    ),
  description: z.string().min(10).describe("Short summary of what the client needs"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

export type Lead = z.infer<typeof leadSchema>;

// Strip line breaks from text that goes into the email subject.
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function deliverLead(lead: Lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_TO_EMAIL;
  const from = process.env.LEADS_FROM_EMAIL ?? "Salama Web <onboarding@resend.dev>";

  if (!apiKey || !to) {
    throw new Error("Email is not configured: set RESEND_API_KEY and LEADS_TO_EMAIL");
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject: `New lead: ${oneLine(lead.name)} (${lead.projectType})`,
    text: [
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Project type: ${lead.projectType}`,
      `Description: ${lead.description}`,
      `Budget: ${lead.budget ?? "-"}`,
      `Timeline: ${lead.timeline ?? "-"}`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
