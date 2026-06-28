"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

const initialForm = {
  navn: "",
  email: "",
  telefon: "",
  landsdel: "",
  typeLeje: "",
  datoPeriode: "",
  besked: "",
};

export default function RentalForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await fetch("/api/udlejning", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.message || "Der opstod en fejl. Prøv igen.");
        return;
      }
      setForm(initialForm);
      setSubmitted(true);
    } catch {
      setError("Der opstod en fejl. Tjek din forbindelse og prøv igen.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <p
        style={{
          fontFamily: "Inter Tight, sans-serif",
          fontSize: "15px",
          color: "rgba(26,24,20,0.65)",
          lineHeight: "1.8",
        }}
      >
        Tak for din forespørgsel. Vi vender tilbage inden for to hverdage.
      </p>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__cols">
        <div className="form__row">
          <label htmlFor="rf-navn">Navn</label>
          <input
            id="rf-navn"
            name="navn"
            type="text"
            value={form.navn}
            onChange={handleChange}
            placeholder="Dit fulde navn"
            required
          />
        </div>
        <div className="form__row">
          <label htmlFor="rf-email">E-mail</label>
          <input
            id="rf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="din@email.dk"
            required
          />
        </div>
      </div>

      <div className="form__cols">
        <div className="form__row">
          <label htmlFor="rf-telefon">Telefon</label>
          <input
            id="rf-telefon"
            name="telefon"
            type="tel"
            value={form.telefon}
            onChange={handleChange}
            placeholder="+45 00 00 00 00"
          />
        </div>
        <div className="form__row">
          <label htmlFor="rf-landsdel">Landsdel</label>
          <select
            id="rf-landsdel"
            name="landsdel"
            value={form.landsdel}
            onChange={handleChange}
            required
          >
            <option value="">Vælg landsdel</option>
            <option value="Sjælland">Sjælland</option>
            <option value="Lolland & Falster">Lolland &amp; Falster</option>
            <option value="Fyn">Fyn</option>
            <option value="Syd-Jylland">Syd-Jylland</option>
            <option value="Midt-Jylland">Midt-Jylland</option>
            <option value="Nord-Jylland">Nord-Jylland</option>
            <option value="Selvafhentning (Ballerup)">Selvafhentning (Ballerup)</option>
          </select>
        </div>
      </div>

      <div className="form__cols">
        <div className="form__row">
          <label htmlFor="rf-typeLeje">Type leje</label>
          <select
            id="rf-typeLeje"
            name="typeLeje"
            value={form.typeLeje}
            onChange={handleChange}
            required
          >
            <option value="">Vælg type</option>
            <option value="Eventleje">Eventleje</option>
            <option value="Langtidsleje">Langtidsleje</option>
          </select>
        </div>
        <div className="form__row">
          <label htmlFor="rf-datoPeriode">Dato eller periode</label>
          <input
            id="rf-datoPeriode"
            name="datoPeriode"
            type="text"
            value={form.datoPeriode}
            onChange={handleChange}
            placeholder="f.eks. 14. september 2026"
          />
        </div>
      </div>

      <div className="form__row">
        <label htmlFor="rf-besked">Besked</label>
        <textarea
          id="rf-besked"
          name="besked"
          value={form.besked}
          onChange={handleChange}
          placeholder="Fortæl os om dit event eller projekt — lokale, gæstetal, varighed"
        />
      </div>

      {error && (
        <p
          style={{
            fontFamily: "Inter Tight, sans-serif",
            fontSize: "13px",
            color: "#b33a26",
          }}
        >
          {error}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            padding: "0 40px",
            height: "56px",
            border: "1px solid #1A1814",
            background: "#1A1814",
            color: "#F2EEE5",
            fontFamily: "Inter Tight, sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.65 : 1,
            transition: "opacity 0.2s ease",
          }}
        >
          {loading ? "Sender…" : "Send forespørgsel"}
        </button>
      </div>
    </form>
  );
}
