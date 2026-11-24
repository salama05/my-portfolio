import { tool } from "@langchain/core/tools";
import * as z from "zod";
import { KNOWLEDGE, TOPICS } from "./knowledge";
import { deliverLead, leadSchema } from "./leads";

export const getPortfolioInfo = tool(
  async ({ topic }) => KNOWLEDGE[topic],
  {
    name: "get_portfolio_info",
    description:
      "Get factual information about Abdessalam: his background, services, projects, working process, or contact details.",
    schema: z.object({
      topic: z.enum(TOPICS).describe("Which section of information is needed"),
    }),
  }
);

export const saveLead = tool(
  async (lead) => {
    await deliverLead(lead);
    return "Lead saved successfully. Tell the visitor that Abdessalam will contact them by email.";
  },
  {
    name: "save_lead",
    description:
      "Send a potential client's details to Abdessalam. Call it only once, after the visitor explicitly agreed to share their details.",
    schema: leadSchema,
  }
);