"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { usePathname } from "next/navigation";

const initialForm = {
  name: "",
  email: "",
  company: "",
  message: "",
  type: "general",
};

const copy = {
  en: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    company: "Company (optional)",
    companyPlaceholder: "Brand or studio",
    type: "Enquiry type",
    typeGeneral: "General enquiry",
    typeQuote: "Request a quote",
    typeShowroom: "Book a private viewing",
    message: "Message",
    messagePlaceholder: "Tell us about your project",
    submit: "Send enquiry →",
    submitting: "Sending…",
    genericError: "Something went wrong. Please try again.",
    submitted: "Thank you. Your enquiry has been received. We will be in touch within two working days.",
  },
  da: {
    name: "Navn",
    namePlaceholder: "Dit navn",
    email: "E-mail",
    emailPlaceholder: "dig@virksomhed.dk",
    company: "Virksomhed (valgfrit)",
    companyPlaceholder: "Brand eller studie",
    type: "Type forespørgsel",
    typeGeneral: "Generel forespørgsel",
    typeQuote: "Anmod om et tilbud",
    typeShowroom: "Book en fremvisning",
    message: "Besked",
    messagePlaceholder: "Fortæl os om dit projekt",
    submit: "Send forespørgsel →",
    submitting: "Sender…",
    genericError: "Der opstod en fejl. Prøv venligst igen.",
    submitted: "Tak. Din forespørgsel er modtaget. Vi vender tilbage inden for to arbejdsdage.",
  },
};

export default function ContactForm() {
  const pathname = usePathname();
  const isDanish = pathname?.startsWith("/da") ?? false;
  const t = isDanish ? copy.da : copy.en;

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
        setError(data?.message || t.genericError);
        return;
      }
      setForm(initialForm);
      setSubmitted(true);
    } catch {
      setError(t.genericError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__cols">
          <div className="form__row">
            <label htmlFor="name">{t.name}</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              required
            />
          </div>
          <div className="form__row">
            <label htmlFor="email">{t.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              required
            />
          </div>
        </div>

        <div className="form__row">
          <label htmlFor="company">{t.company}</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder={t.companyPlaceholder}
          />
        </div>

        <div className="form__row">
          <label htmlFor="type">{t.type}</label>
          <select id="type" name="type" value={form.type} onChange={handleChange}>
            <option value="general">{t.typeGeneral}</option>
            <option value="quote">{t.typeQuote}</option>
            <option value="showroom">{t.typeShowroom}</option>
          </select>
        </div>

        <div className="form__row">
          <label htmlFor="message">{t.message}</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={t.messagePlaceholder}
            required
          />
        </div>

        <button className="btn btn--filled" type="submit" disabled={loading}>
          {loading ? t.submitting : t.submit}
        </button>
      </form>

      {error && (
        <p className="caption" style={{ marginTop: "32px", color: "red" }}>
          {error}
        </p>
      )}

      {submitted && (
        <p className="caption" style={{ marginTop: "32px" }}>
          {t.submitted}
        </p>
      )}
    </div>
  );
}
