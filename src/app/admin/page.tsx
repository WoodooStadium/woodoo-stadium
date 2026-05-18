"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (response.ok) {
      router.push("/admin/dashboard");
    } else {
      const body = await response.json().catch(() => null);
      setError(body?.message || "Invalid password.");
    }
  };

  return (
    <div className="admin-card admin-login-card">
      <div className="admin-card-header">
        <span className="admin-label">Admin</span>
        <h1>WooDoo Control</h1>
        <p>Enter the admin password to manage content, leads, bookings, media, and settings.</p>
      </div>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label className="admin-field">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter admin password"
            required
          />
        </label>
        {error && <p className="admin-error">{error}</p>}
        <button className="btn btn--filled" type="submit" disabled={loading}>
          {loading ? "Checking…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
