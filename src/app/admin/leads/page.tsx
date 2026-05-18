"use client";

import { useEffect, useState } from "react";

interface LeadRecord {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string | null;
  page_url: string | null;
  source: string | null;
  status: string;
  created_at: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);

  useEffect(() => {
    fetch("/api/admin/resource?resource=leads").then((res) => res.json()).then((data) => setLeads(data || []));
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Leads</span>
        <h1>Customer inquiries</h1>
        <p>Review inbound lead submissions and contact details in one place.</p>
      </div>

      <section className="admin-panel admin-section-panel">
        <div className="admin-table admin-table--striped">
          <div className="admin-table-row admin-table-header">
            <span>Name</span>
            <span>Email</span>
            <span>Status</span>
            <span>Date</span>
          </div>
          {leads.map((lead) => (
            <details key={lead.id} className="admin-table-row admin-table-row-details">
              <summary>
                <span>{lead.name}</span>
                <span>{lead.email}</span>
                <span>{lead.status}</span>
                <span>{new Date(lead.created_at).toLocaleDateString()}</span>
              </summary>
              <div className="admin-details-grid">
                <div>
                  <strong>Phone:</strong> {lead.phone || "—"}
                </div>
                <div>
                  <strong>Company:</strong> {lead.company || "—"}
                </div>
                <div>
                  <strong>Source:</strong> {lead.source || "—"}
                </div>
                <div>
                  <strong>Page URL:</strong> {lead.page_url || "—"}
                </div>
                <div className="admin-details-message">
                  <strong>Message</strong>
                  <p>{lead.message || "No message provided."}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
