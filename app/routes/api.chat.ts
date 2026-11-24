import type { ActionFunctionArgs } from "react-router";
import * as z from "zod";
import { agent } from "../lib/agent/agent";

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      })
    )
    .min(1)
    .max(20),
});

type Block = string | { type?: string; text?: string };

function textOf(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return (content as Block[])
      .map((b) => (typeof b === "string" ? b : b.type === "text" ? (b.text ?? "") : ""))
      .join("");
  }
  return "";
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const parsed = bodySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const result = await agent.invoke({ messages: parsed.data.messages });
    const last = result.messages[result.messages.length - 1];
    return Response.json({ reply: textOf(last.content) });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Agent failed" }, { status: 500 });
  }
}