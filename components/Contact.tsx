"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    problem: "",
    timeline: "2-4 weeks",
    budget: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Message received. We'll assess your situation and respond within 24 hours.");
        setFormData({
          name: "",
          email: "",
          organization: "",
          problem: "",
          timeline: "2-4 weeks",
          budget: ""
        });
      } else {
        setStatus("error");
        setMessage("Something went wrong. Try emailing us directly.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="engage" className="py-24 tactical-gradient border-t border-tactical-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm text-earth-500 font-semibold tracking-wider uppercase">Ready to Deploy</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-stone-100 mb-6">
              Let's Solve Your Problem
            </h2>
            <p className="text-xl text-stone-400">
              Describe your technical challenge. We'll assess it and get back to you within 24 hours
              with next steps—or a straight answer if we're not the right fit.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-stone-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-950/50 border border-tactical-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-earth-600 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-950/50 border border-tactical-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-earth-600 transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-semibold text-stone-300 mb-2">
                Organization *
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-stone-950/50 border border-tactical-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-earth-600 transition-colors"
                placeholder="Company or agency name"
              />
            </div>

            <div>
              <label htmlFor="problem" className="block text-sm font-semibold text-stone-300 mb-2">
                Technical Challenge *
              </label>
              <textarea
                id="problem"
                name="problem"
                required
                value={formData.problem}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-stone-950/50 border border-tactical-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-earth-600 transition-colors resize-none"
                placeholder="Describe the technical problem you need solved. Be specific about what's broken, what you've tried, and what success looks like."
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-stone-300 mb-2">
                  Desired Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-950/50 border border-tactical-800 rounded-lg text-stone-100 focus:outline-none focus:border-earth-600 transition-colors"
                >
                  <option value="ASAP">ASAP</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-stone-300 mb-2">
                  Budget Range (Optional)
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-950/50 border border-tactical-800 rounded-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-earth-600 transition-colors"
                  placeholder="$50k-100k or 'Open'"
                />
              </div>
            </div>

            {status === "success" && (
              <div className="p-4 bg-earth-900/30 border border-earth-700 rounded-lg text-earth-300">
                {message}
              </div>
            )}

            {status === "error" && (
              <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-300">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto px-8 py-4 bg-earth-600 hover:bg-earth-500 disabled:bg-tactical-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-earth-900/50"
            >
              {status === "submitting" ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Deploy an ATLAS Team
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="mt-16 pt-8 border-t border-tactical-800">
            <p className="text-center text-stone-400 mb-4">Prefer email?</p>
            <p className="text-center">
              <a href="mailto:deploy@projectatlas.io" className="text-earth-400 hover:text-earth-300 font-semibold transition-colors">
                deploy@projectatlas.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
