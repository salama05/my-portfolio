import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type Message = { role: "user" | "assistant"; content: string };

const GREETING =
  "Hi! I'm Abdessalam's assistant. Ask me about his projects and services, or tell me about your project.\nمرحباً! اسألني عن مشاريع عبد السلام وخدماته، أو أخبرني عن مشروعك.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      // The server accepts at most 20 messages, and the first must be from the user.
      const history = next.slice(-20);
      while (history.length > 0 && history[0].role !== "user") history.shift();

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = (await res.json()) as { reply?: string };
      if (!data.reply) throw new Error("Empty reply");

      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      // Roll back so the history never has two user messages in a row.
      setMessages(messages);
      setInput(text);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 flex h-[32rem] max-h-[calc(100vh-7rem)] w-88 max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          <div className="bg-indigo-600 px-4 py-3 text-white">
            <p className="text-sm font-semibold">Salama Web Assistant</p>
            <p className="text-xs opacity-80">Ask about projects, services, or start a project</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-3">
            <Bubble role="assistant" text={GREETING} />
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} text={m.content} />
            ))}
            {loading && <Bubble role="assistant" text="…" />}
            {error && <p className="text-center text-xs text-red-600">{error}</p>}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-gray-200 p-3">
            <input
              dir="auto"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={2000}
              placeholder="Type your message… / اكتب رسالتك"
              className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-lg hover:bg-indigo-700"
      >
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}

function Bubble({ role, text }: Message extends never ? never : { role: "user" | "assistant"; text: string }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        dir="auto"
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm ${
          isUser ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {text}
      </div>
    </div>
  );
}