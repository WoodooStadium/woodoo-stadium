"use client";

import { useEffect, useState } from "react";

interface SiteSettingRecord {
  id: number;
  key: string;
  value: string;
}

interface SectionRecord {
  id: number;
  page_slug: string;
  section_key: string;
  title: string | null;
  body: string | null;
  image_url: string | null;
  video_url: string | null;
  visible: boolean;
  sort_order: number;
}

export default function AdminContentPage() {
  const [siteSettings, setSiteSettings] = useState<SiteSettingRecord[]>([]);
  const [sections, setSections] = useState<SectionRecord[]>([]);
  const [settingErrors, setSettingErrors] = useState<Record<number, string>>({});
  const [sectionErrors, setSectionErrors] = useState<Record<number, Record<string, string>>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/resource?resource=site_settings").then((res) => res.json()).then((data) => setSiteSettings(data || []));
    fetch("/api/admin/resource?resource=sections").then((res) => res.json()).then((data) => setSections(data || []));
  }, []);

  const updateSetting = (id: number, value: string) => {
    setSiteSettings((current) => current.map((item) => (item.id === id ? { ...item, value } : item)));
  };

  const updateSection = (id: number, field: keyof SectionRecord, value: string | boolean | number | null) => {
    setSections((current) => current.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const validateContent = () => {
    const nextSettingErrors: Record<number, string> = {};
    const nextSectionErrors: Record<number, Record<string, string>> = {};
    const requiredKeys = ["site_name", "site_description", "contact_email", "contact_phone"];

    siteSettings.forEach((setting) => {
      if (requiredKeys.includes(setting.key) && !setting.value?.trim()) {
        nextSettingErrors[setting.id] = `${setting.key.replace(/_/g, " ")} is required.`;
      }
    });

    sections.forEach((section) => {
      const sectionIssues: Record<string, string> = {};
      if (section.visible) {
        if (!section.title?.trim()) sectionIssues.title = "Section title is required.";
        if (!section.body?.trim()) sectionIssues.body = "Section body is required.";
      }
      if (Object.keys(sectionIssues).length) {
        nextSectionErrors[section.id] = sectionIssues;
      }
    });

    setSettingErrors(nextSettingErrors);
    setSectionErrors(nextSectionErrors);
    return Object.keys(nextSettingErrors).length === 0 && Object.keys(nextSectionErrors).length === 0;
  };

  const saveAll = async () => {
    if (!validateContent()) {
      setMessage("Please fix validation errors before saving.");
      return;
    }

    setSaving(true);
    setMessage(null);
    try {
      // Persist site settings
      await Promise.all(
        siteSettings.map(async (setting) => {
          await fetch("/api/admin/resource?resource=site_settings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(setting),
          });
        })
      );

      // Persist sections
      await Promise.all(
        sections.map(async (section) => {
          await fetch("/api/admin/resource?resource=sections", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(section),
          });
        })
      );

      setMessage("Content saved successfully.");
    } catch (err) {
      setMessage("Unable to save content.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Content</span>
        <h1>Site content and sections</h1>
        <p>Edit settings and homepage sections from one place. Updates are saved together.</p>
      </div>

      <section className="admin-panel admin-section-panel">
        <h2>Site Settings</h2>
        <div className="admin-form-grid">
          {siteSettings.map((setting) => (
            <label className="admin-field" key={setting.id}>
              <span>{setting.key}</span>
              <input
                type="text"
                value={setting.value}
                onChange={(event) => {
                  updateSetting(setting.id, event.target.value);
                  setSettingErrors((current) => {
                    const next = { ...current };
                    delete next[setting.id];
                    return next;
                  });
                }}
              />
              {settingErrors[setting.id] && <p className="admin-error">{settingErrors[setting.id]}</p>}
            </label>
          ))}
        </div>
      </section>

      <section className="admin-panel admin-section-panel">
        <h2>Sections</h2>
        <div className="admin-cards-stack">
          {sections.map((section) => (
            <div className="admin-card admin-card-panel" key={section.id}>
              <div className="admin-card-title">
                <strong>{section.section_key}</strong>
                <span>{section.page_slug}</span>
              </div>
              <div className="admin-form-grid">
                <label className="admin-field">
                  <span>Title</span>
                  <input
                    type="text"
                    value={section.title ?? ""}
                    onChange={(event) => {
                      updateSection(section.id, "title", event.target.value);
                      setSectionErrors((current) => {
                        const next = { ...current };
                        if (next[section.id]) {
                          const issues = { ...next[section.id] };
                          delete issues.title;
                          if (Object.keys(issues).length) {
                            next[section.id] = issues;
                          } else {
                            delete next[section.id];
                          }
                        }
                        return next;
                      });
                    }}
                  />
                  {sectionErrors[section.id]?.title && <p className="admin-error">{sectionErrors[section.id].title}</p>}
                </label>
                <label className="admin-field">
                  <span>Body</span>
                  <textarea
                    rows={4}
                    value={section.body ?? ""}
                    onChange={(event) => {
                      updateSection(section.id, "body", event.target.value);
                      setSectionErrors((current) => {
                        const next = { ...current };
                        if (next[section.id]) {
                          const issues = { ...next[section.id] };
                          delete issues.body;
                          if (Object.keys(issues).length) {
                            next[section.id] = issues;
                          } else {
                            delete next[section.id];
                          }
                        }
                        return next;
                      });
                    }}
                  />
                  {sectionErrors[section.id]?.body && <p className="admin-error">{sectionErrors[section.id].body}</p>}
                </label>
                <label className="admin-field">
                  <span>Image URL</span>
                  <input
                    type="text"
                    value={section.image_url ?? ""}
                    onChange={(event) => updateSection(section.id, "image_url", event.target.value)}
                  />
                </label>
                <label className="admin-field">
                  <span>Video URL</span>
                  <input
                    type="text"
                    value={section.video_url ?? ""}
                    onChange={(event) => updateSection(section.id, "video_url", event.target.value)}
                  />
                </label>
                <label className="admin-field admin-field-inline">
                  <span>Visible</span>
                  <input
                    type="checkbox"
                    checked={section.visible}
                    onChange={(event) => updateSection(section.id, "visible", event.target.checked)}
                  />
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="admin-actions">
        <button className="btn btn--filled" onClick={saveAll} disabled={saving}>
          {saving ? "Saving…" : "Save all content"}
        </button>
        {message && <p className="admin-note">{message}</p>}
      </div>
    </div>
  );
}
