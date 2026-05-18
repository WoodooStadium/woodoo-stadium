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

  useEffect(() => {
    fetch("/api/admin/resource?resource=newsletter_subscribers").then((res) => res.json()).then((data) => setSubscribers(data || []));
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Newsletter</span>
        <h1>Subscriber list</h1>
        <p>View active newsletter subscribers and export mailing data for outreach.</p>
      </div>

      <section className="admin-panel admin-section-panel">
        <div className="admin-table admin-table--striped">
          <div className="admin-table-row admin-table-header">
            <span>Email</span>
            <span>Language</span>
            <span>Subscribed</span>
          </div>
          {subscribers.map((subscriber) => (
            <div key={subscriber.id} className="admin-table-row">
              <span>{subscriber.email}</span>
              <span>{subscriber.language.toUpperCase()}</span>
              <span>{new Date(subscriber.created_at).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
