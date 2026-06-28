"use client";

import { useEffect, useState } from "react";

interface Subscriber {
  id: number;
  email: string;
  language: string;
  created_at: string;
}

export default function AdminNewsletterPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/resource?resource=newsletter_subscribers")
      .then((res) => res.json())
      .then((data) => setSubscribers(data || []));
  }, []);

  const copyEmails = () => {
    const emails = subscribers.map((s) => s.email).join(", ");
    navigator.clipboard.writeText(emails).then(() => {
      setMessage("Email addresses copied to clipboard.");
      setTimeout(() => setMessage(null), 3000);
    });
  };

  const exportCsv = () => {
    const rows = [
      ["email", "language", "subscribed"],
      ...subscribers.map((s) => [
        s.email,
        s.language,
        new Date(s.created_at).toISOString().slice(0, 10),
      ]),
    ];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const remove = async (id: number) => {
    const previous = subscribers.slice();
    setSubscribers((current) => current.filter((s) => s.id !== id));
    const response = await fetch("/api/admin/resource?resource=newsletter_subscribers", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      setSubscribers(previous);
      setMessage("Could not remove subscriber.");
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Newsletter</span>
        <h1>Subscriber list</h1>
        <p>View and manage newsletter subscribers. Export the list for use in your mailing tool.</p>
      </div>

      <section className="admin-panel admin-section-panel">
        <div className="admin-actions admin-actions-inline" style={{ marginBottom: "1.5rem" }}>
          <div>
            <div className="admin-subscriber-count">{subscribers.length}</div>
            <div className="admin-subscriber-label">active subscriber{subscribers.length !== 1 ? "s" : ""}</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button className="btn btn--ghost" type="button" onClick={copyEmails} disabled={subscribers.length === 0}>
              Copy all emails
            </button>
            <button className="btn btn--ghost" type="button" onClick={exportCsv} disabled={subscribers.length === 0}>
              Export CSV
            </button>
          </div>
          {message && <span className="admin-note">{message}</span>}
        </div>

        {subscribers.length === 0 ? (
          <p className="admin-note">No subscribers yet. Signups from the website will appear here.</p>
        ) : (
          <div className="admin-table admin-table--striped">
            <div className="admin-table-row admin-table-header" style={{ gridTemplateColumns: "2fr 1fr 1fr auto" }}>
              <span>Email</span>
              <span>Language</span>
              <span>Subscribed</span>
              <span />
            </div>
            {subscribers.map((subscriber) => (
              <div key={subscriber.id} className="admin-table-row" style={{ gridTemplateColumns: "2fr 1fr 1fr auto" }}>
                <span>{subscriber.email}</span>
                <span>{subscriber.language.toUpperCase()}</span>
                <span>{new Date(subscriber.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                <button
                  className="btn btn--quiet"
                  type="button"
                  style={{ fontSize: "0.8rem", padding: "0.4rem 0.75rem" }}
                  onClick={() => remove(subscriber.id)}
                  title="Remove subscriber"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
