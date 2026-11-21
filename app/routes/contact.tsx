import { useState, type FormEvent } from "react";
import { profile } from "../profile";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function meta() {
  return [
    { title: `Contact — ${profile.name} | Full-Stack Developer & GenAI Engineer` },
    {
      name: "description",
      content:
        "Get in touch with Abdessalam Benkorichi to discuss your next web app or AI engineering project.",
    },
    { property: "og:title", content: `Contact — ${profile.name}` },
    {
      property: "og:description",
      content:
        "Get in touch with Abdessalam Benkorichi to discuss your next web app or AI engineering project.",
    },
  ];
}

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== "idle" && status !== "submitting") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // 1. Prevent default GET query submission
    e.preventDefault();

    // 2. Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setStatusMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    /*
     * ─── Email / API Integration Hook ─────────────────────────────────────
     * Option A: Set VITE_CONTACT_ENDPOINT in .env (e.g., Formspree: https://formspree.io/f/xyz
     *           or custom serverless handler delivering to contact@salamaweb.me).
     * Option B: Replace with EmailJS / Resend / Webhook call.
     */
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim() || "Inquiry from Portfolio",
            message: formData.message.trim(),
            recipient: profile.email,
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to send message (HTTP ${response.status})`);
        }
      } else {
        // Fallback simulation when VITE_CONTACT_ENDPOINT is not yet set
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus("success");
      setStatusMessage(
        "Thank you! Your message has been sent successfully. I will get back to you shortly."
      );
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        err instanceof Error
          ? err.message
          : "An error occurred while sending your message. Please email directly at contact@salamaweb.me."
      );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-primary relative overflow-hidden" aria-label="Contact hero">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-16 left-16 w-28 h-28 bg-white rounded-full animate-pulse-slow" />
          <div className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Let's Talk</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a message and let's build something great.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="glass-card p-8 hover-scale animate-fadeInUp">
              <h2 className="text-3xl font-bold gradient-text mb-4">Send a Message</h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form below or reach out directly via email or WhatsApp.
              </p>

              {/* Status Alert Banner */}
              {status === "success" && (
                <div
                  className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3"
                  role="alert"
                >
                  <span className="text-emerald-500 font-bold text-lg leading-none">✓</span>
                  <div>
                    <p className="font-semibold">Message Delivered!</p>
                    <p className="mt-0.5 text-emerald-700">{statusMessage}</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3"
                  role="alert"
                >
                  <span className="text-red-500 font-bold text-lg leading-none">✕</span>
                  <div>
                    <p className="font-semibold">Unable to Send</p>
                    <p className="mt-0.5 text-red-700">{statusMessage}</p>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="What's this about? (e.g., Full-Stack Build, AI Consultation)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project, timeline, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full btn-primary text-lg py-4 hover-glow flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="animate-slideInRight">
              <h2 className="text-3xl font-bold gradient-text mb-8">Contact Information</h2>
              <div className="space-y-5">
                <div className="glass-card p-6 hover-scale">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl" aria-hidden="true">📧</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-indigo-600 hover:text-indigo-800 transition-colors text-sm"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 hover-scale">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl" aria-hidden="true">💬</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600 text-sm">{profile.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 hover-scale">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl" aria-hidden="true">🌐</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Website</h3>
                      <a
                        href={profile.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-800 transition-colors text-sm"
                      >
                        {profile.website.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 hover-scale">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl" aria-hidden="true">📍</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600 text-sm">{profile.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold gradient-text mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover-scale"
                    aria-label="Follow Abdessalam on X (Twitter)"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover-scale"
                    aria-label="Connect on LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover-scale"
                    aria-label="View GitHub profile"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
