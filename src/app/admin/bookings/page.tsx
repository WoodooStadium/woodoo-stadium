"use client";

import { useEffect, useState } from "react";

interface BookingRecord {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  event_type: string | null;
  booking_date: string | null;
  guests: number | null;
  notes: string | null;
  status: string;
  created_at: string;
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);

  useEffect(() => {
    fetch("/api/admin/resource?resource=bookings").then((res) => res.json()).then((data) => setBookings(data || []));
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Bookings</span>
        <h1>Venue reservations</h1>
        <p>Monitor incoming booking requests and guest details with a quick review panel.</p>
      </div>

      <section className="admin-panel admin-section-panel">
        <div className="admin-table admin-table--striped">
          <div className="admin-table-row admin-table-header">
            <span>Name</span>
            <span>Email</span>
            <span>Status</span>
            <span>Date</span>
          </div>
          {bookings.map((booking) => (
            <details key={booking.id} className="admin-table-row admin-table-row-details">
              <summary>
                <span>{booking.name}</span>
                <span>{booking.email}</span>
                <span>{booking.status}</span>
                <span>{booking.booking_date ? new Date(booking.booking_date).toLocaleDateString() : "—"}</span>
              </summary>
              <div className="admin-details-grid">
                <div>
                  <strong>Phone:</strong> {booking.phone || "—"}
                </div>
                <div>
                  <strong>Event:</strong> {booking.event_type || "—"}
                </div>
                <div>
                  <strong>Guests:</strong> {booking.guests ?? "—"}
                </div>
                <div className="admin-details-message">
                  <strong>Notes</strong>
                  <p>{booking.notes || "No notes."}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
