"use client";

import { useEffect, useState } from "react";

type SettingRecord = {
  id: number;
  key: string;
  value: string | null;
  description: string | null;
};

const defaultKeys = [
  { key: "site_name", label: "Site name" },
  { key: "site_description", label: "Site description" },
  { key: "contact_email", label: "Contact email" },
  { key: "contact_phone", label: "Contact phone" },
  { key: "social_instagram", label: "Instagram URL" },
  { key: "social_tiktok", label: "TikTok URL" },
  { key: "analytics_id", label: "Analytics ID" },
  { key: "cookie_notice_text", label: "Cookie notice text" },
];

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SettingRecord[]>([]);
  const [settingErrors, setSettingErrors] = useState<Record<number, string>>({});
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/resource?resource=site_settings").then((res) => res.json()).then((data) => setSettings(data || []));
  }, []);

  const updateSetting = async (setting: SettingRecord) => {
    if (!setting.value?.trim()) {
      setSettingErrors((current) => ({ ...current, [setting.id]: "Value is required." }));
      return;
    }

    setSettingErrors((current) => {
      const next = { ...current };
      delete next[setting.id];
      return next;
    });

    setMessage(null);
    const previous = settings.slice();
    setSettings((current) => current.map((item) => (item.id === setting.id ? setting : item)));
    try {
      const response = await fetch("/api/admin/resource?resource=site_settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(setting),
      });
      const record = await response.json().catch(() => null);
      if (response.ok && record?.id) {
        setSettings((current) => current.map((item) => (item.id === record.id ? record : item)));
        setMessage("Settings saved.");
      } else {
        setSettings(previous);
        setMessage(record?.message || "Unable to save setting.");
      }
    } catch (e) {
      setSettings(previous);
      setMessage("Unable to save setting.");
    }
  };

  const createMissing = async () => {
    setMessage(null);
    const missingKeys = defaultKeys.filter((entry) => !settings.some((item) => item.key === entry.key));
    const tempItems = missingKeys.map((entry) => ({ id: -Date.now() - Math.random() * 1000, key: entry.key, value: "", description: entry.label } as SettingRecord));
    setSettings((current) => [...current, ...tempItems]);
    try {
      const addedItems = await Promise.all(
        missingKeys.map(async (entry) => {
          const response = await fetch("/api/admin/resource?resource=site_settings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ key: entry.key, value: "", description: entry.label }),
          });
          return response.ok ? response.json().catch(() => null) : null;
        })
      );
      const newItems = addedItems.filter(Boolean) as SettingRecord[];
      // replace temp items with created records where possible
      setSettings((current) => {
        const withoutTemps = current.filter((s) => !tempItems.some((t) => t.key === s.key && t.id < 0));
        return [...withoutTemps, ...newItems];
      });
      setMessage("Missing default settings created.");
    } catch (e) {
      // rollback temps
      setSettings((current) => current.filter((s) => !tempItems.some((t) => t.id === s.id)));
      setMessage("Unable to create default settings.");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Settings</span>
        <h1>Site configuration</h1>
        <p>Manage global website settings like company details, social links, analytics, and cookie copy.</p>
      </div>

      <section className="admin-panel admin-section-panel">
        <div className="admin-actions admin-actions-inline">
          <button className="btn btn--ghost" type="button" onClick={createMissing}>
            Create missing defaults
          </button>
          {message && <span className="admin-note">{message}</span>}
        </div>
        <div className="admin-form-grid">
          {settings
            .sort((a, b) => a.key.localeCompare(b.key))
            .map((setting) => (
              <label className="admin-field" key={setting.id}>
                <span>{setting.description ?? setting.key}</span>
                <input
                  type="text"
                  value={setting.value ?? ""}
                  onChange={(event) => {
                    setSettings((current) => current.map((item) => (item.id === setting.id ? { ...item, value: event.target.value } : item)));
                    setSettingErrors((current) => {
                      const next = { ...current };
                      delete next[setting.id];
                      return next;
                    });
                  }}
                />
                {settingErrors[setting.id] && <p className="admin-error">{settingErrors[setting.id]}</p>}
                <button className="btn btn--filled" type="button" onClick={() => updateSetting(setting)}>
                  Save
                </button>
              </label>
            ))}
        </div>
      </section>
    </div>
  );
}
