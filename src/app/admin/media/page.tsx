"use client";

import { useEffect, useState } from "react";

interface MediaItem {
  id: number;
  url: string;
  alt_text: string | null;
  caption: string | null;
  created_at: string;
}

export default function AdminMediaPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [altText, setAltText] = useState("");
  const [fileError, setFileError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/resource?resource=media").then((res) => res.json()).then((data) => setItems(data || []));
  }, []);

  const upload = async () => {
    if (!file) {
      setFileError("File upload is required.");
      return;
    }
    setFileError(null);
    setMessage(null);
    const tempId = -Date.now();
    const tempUrl = URL.createObjectURL(file);
    const tempItem = { id: tempId, url: tempUrl, alt_text: altText, caption: null, created_at: new Date().toISOString() } as MediaItem;
    setItems((current) => [tempItem, ...current]);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt_text", altText);
    try {
      const response = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      });
      const record = await response.json().catch(() => null);
      if (response.ok && record?.id) {
        setItems((current) => current.map((it) => (it.id === tempId ? record : it)));
        setFile(null);
        setAltText("");
        setMessage("Media uploaded.");
      } else {
        setItems((current) => current.filter((it) => it.id !== tempId));
        setMessage(record?.message || "Upload failed.");
      }
    } catch (e) {
      setItems((current) => current.filter((it) => it.id !== tempId));
      setMessage("Upload failed.");
    }
  };

  const deleteItem = async (id: number) => {
    setMessage(null);
    const previous = items.slice();
    setItems((current) => current.filter((item) => item.id !== id));
    try {
      const response = await fetch(`/api/admin/resource?resource=media`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setMessage("Media deleted.");
      } else {
        setItems(previous);
        const body = await response.json().catch(() => null);
        setMessage(body?.message || "Unable to delete media.");
      }
    } catch (e) {
      setItems(previous);
      setMessage("Unable to delete media.");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Media</span>
        <h1>Media library</h1>
        <p>Upload and manage image assets for pages, blog posts, and gallery sections.</p>
      </div>

      <section className="admin-panel admin-section-panel">
        <h2>Upload new media</h2>
        <div className="admin-form-grid">
          <label className="admin-field">
            <span>File</span>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                setFile(event.target.files?.[0] ?? null);
                setFileError(null);
              }}
            />
            {fileError && <p className="admin-error">{fileError}</p>}
          </label>
          <label className="admin-field">
            <span>Alt text</span>
            <input value={altText} onChange={(event) => setAltText(event.target.value)} />
          </label>
          <button className="btn btn--filled" type="button" onClick={upload}>
            Upload media
          </button>
          {message && <p className="admin-note">{message}</p>}
        </div>
      </section>

      <section className="admin-panel admin-section-panel">
        <h2>Gallery</h2>
        <div className="admin-grid admin-media-grid">
          {items.map((item) => (
            <div className="admin-media-card" key={item.id}>
              <img src={item.url} alt={item.alt_text ?? "Media asset"} />
              <div className="admin-media-details">
                <p>{item.caption || item.alt_text || "No caption"}</p>
                <button className="btn btn--ghost" type="button" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
