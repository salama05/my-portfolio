import { tool } from "@langchain/core/tools";
import * as z from "zod";
import { KNOWLEDGE, TOPICS } from "./knowledge";
import { deliverLead, leadSchema } from "./leads";

export const getPortfolioInfo = tool(
  async ({ topic }) => KNOWLEDGE[topic],
  {
    name: "get_portfolio_info",
    description:
      "Get factual information about Salama Web: its background, services, projects, working process, or contact details.",
    schema: z.object({
      topic: z.enum(TOPICS).describe("Which section of information is needed"),
    }),
  }
);

export const saveLead = tool(
  async (lead) => {
    try {
      await deliverLead(lead);
      return "Lead saved successfully. Tell the visitor that Salama Web will contact them by email.";
    } catch (err) {
      console.error("deliverLead failed:", err);
      // Backup so the lead is not lost: it will appear in the server logs.
      console.error("LEAD NOT SENT:", lead);
      return "FAILED to send the details. Do not say they were sent. Apologize briefly and ask the visitor to use the Contact page or email contact@salamaweb.me instead.";
    }
  },
  {
    name: "save_lead",
    description:
      "Send a potential client's details to Salama Web. Call it only once, after the visitor explicitly agreed to share their details.",
    schema: leadSchema,
  }
);