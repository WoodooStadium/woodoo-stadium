"use client";

import { useEffect, useState } from "react";

interface KeywordRecord {
  id: number;
  keyword: string;
  search_volume: number | null;
  difficulty: number | null;
  competitor_url: string | null;
  notes: string | null;
}

export default function AdminKeywordsPage() {
  const [seed, setSeed] = useState("");
  const [generated, setGenerated] = useState<KeywordRecord[]>([]);
  const [saved, setSaved] = useState<KeywordRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/resource?resource=blog_keywords").then((res) => res.json()).then((data) => setSaved(data || []));
  }, []);

  const generateKeywords = async () => {
    if (!seed.trim()) return;
    setLoading(true);
    const response = await fetch("/api/admin/ai/keywords", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ seed }),
    });
    const body = await response.json().catch(() => null);
    setLoading(false);
    if (response.ok && Array.isArray(body?.keywords)) {
      setGenerated(body.keywords);
      setMessage("Keyword suggestions generated.");
    } else {
      setMessage(body?.message || "Unable to generate keywords.");
    }
  };

  const saveKeyword = async (keyword: string) => {
    setMessage(null);
    setLoading(true);
    const previous = saved.slice();
    const temp = { id: -Date.now(), keyword, search_volume: null, difficulty: null, competitor_url: null, notes: null } as KeywordRecord;
    setSaved((current) => [temp, ...current]);
    try {
      const response = await fetch("/api/admin/resource?resource=blog_keywords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, search_volume: null, difficulty: null, competitor_url: null, notes: null }),
      });
      const record = await response.json().catch(() => null);
      if (response.ok && record?.id) {
        setSaved((current) => current.map((k) => (k.id === temp.id ? record : k)));
        setMessage("Keyword saved.");
      } else {
        setSaved(previous);
        setMessage(record?.message || "Unable to save keyword.");
      }
    } catch (e) {
      setSaved(previous);
      setMessage("Unable to save keyword.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Keywords</span>
        <h1>Keyword research</h1>
        <p>Generate related keywords and save ideas to the blog keyword library.</p>
      </div>

      <section className="admin-panel admin-section-panel">
        <h2>AI keyword generator</h2>
        <div className="admin-form-grid">
          <label className="admin-field">
            <span>Seed keyword</span>
            <input value={seed} onChange={(event) => setSeed(event.target.value)} placeholder="e.g. luxury foosball" />
          </label>
          <button className="btn btn--filled" type="button" onClick={generateKeywords} disabled={loading || !seed.trim()}>
            {loading ? "Generating…" : "Generate 20 keywords"}
          </button>
          {message && <p className="admin-note">{message}</p>}
        </div>
      </section>

      {generated.length > 0 && (
        <section className="admin-panel admin-section-panel">
          <h2>Suggested keywords</h2>
          <div className="admin-table admin-table--striped">
            <div className="admin-table-row admin-table-header">
              <span>Keyword</span>
              <span>Difficulty</span>
              <span />
            </div>
            {generated.map((item, index) => (
              <div key={`${item.keyword}-${index}`} className="admin-table-row">
                <span>{item.keyword}</span>
                <span>{item.difficulty ?? "—"}</span>
                <button className="btn btn--ghost" type="button" onClick={() => saveKeyword(item.keyword)}>
                  Save
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="admin-panel admin-section-panel">
        <h2>Saved keywords</h2>
        <div className="admin-table admin-table--striped">
          <div className="admin-table-row admin-table-header">
            <span>Keyword</span>
            <span>Volume</span>
            <span>Difficulty</span>
          </div>
          {saved.map((item) => (
            <div key={item.id} className="admin-table-row">
              <span>{item.keyword}</span>
              <span>{item.search_volume ?? "—"}</span>
              <span>{item.difficulty ?? "—"}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
