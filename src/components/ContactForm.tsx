"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
  type: "general",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.message || "Something went wrong. Please try again.");
        return;
      }
      setForm(initialForm);
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__cols">
          <div className="form__row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form__row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
          </div>
        </div>

        <div className="form__row">
          <label htmlFor="company">Company (optional)</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Brand or studio"
          />
        </div>

        <div className="form__row">
          <label htmlFor="type">Enquiry type</label>
          <select id="type" name="type" value={form.type} onChange={handleChange}>
            <option value="general">General enquiry</option>
            <option value="quote">Request a quote</option>
            <option value="showroom">Book showroom visit</option>
          </select>
        </div>

        <div className="form__row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            required
          />
        </div>

        <button className="btn btn--filled" type="submit" disabled={loading}>
          {loading ? "Sending…" : "Send enquiry →"}
        </button>
      </form>

      {error && (
        <p className="caption" style={{ marginTop: "32px", color: "red" }}>
          {error}
        </p>
      )}

      {submitted && (
        <p className="caption" style={{ marginTop: "32px" }}>
          Thank you. Your enquiry has been received. We will be in touch within two working days.
        </p>
      )}
    </div>
  );
}
