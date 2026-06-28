"use client";

import { useEffect, useRef, useState } from "react";

interface BlogPostRecord {
  id: number;
  title: string;
  h1: string | null;
  slug: string;
  body: string;
  excerpt: string | null;
  featured_image: string | null;
  author: string | null;
  status: "draft" | "published";
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  notes: string | null;
  language: "en" | "de" | "it" | "da";
  tags: string[] | null;
}

const languages = ["en", "de", "it", "da"] as const;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPostRecord[]>([]);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [draft, setDraft] = useState<Partial<BlogPostRecord>>({
    title: "",
    h1: "",
    slug: "",
    body: "",
    excerpt: "",
    featured_image: "",
    author: "",
    status: "draft",
    published_at: null,
    meta_title: "",
    meta_description: "",
    focus_keyword: "",
    notes: "",
    language: "en",
    tags: [],
  });
  const [message, setMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  const validateBlogPost = () => {
    const nextErrors: Record<string, string> = {};
    if (!draft.title?.trim()) nextErrors.title = "Title is required.";
    if (!draft.h1?.trim()) nextErrors.h1 = "H1 heading is required.";
    const slug = draft.slug?.trim() || slugify(draft.title || "");
    if (!slug) nextErrors.slug = "Slug is required.";
    if (!draft.body?.trim()) nextErrors.body = "Body is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const bodyRef = useRef<HTMLTextAreaElement | null>(null);

  const insertMarkdown = (prefix: string, suffix = "", placeholder = "", multiline = false) => {
    const textarea = bodyRef.current;
    if (!textarea) return;

    const value = textarea.value;
    const selectionStart = textarea.selectionStart ?? 0;
    const selectionEnd = textarea.selectionEnd ?? 0;
    const selectedText = value.slice(selectionStart, selectionEnd) || placeholder;

    let nextValue: string;
    let cursorPos = selectionStart + prefix.length + selectedText.length + suffix.length;

    if (multiline) {
      const startOfLine = value.lastIndexOf("\n", selectionStart - 1) + 1;
      const line = value.slice(startOfLine, selectionEnd || startOfLine);
      const updated = line
        .split("\n")
        .map((lineText) => (lineText.trim() ? `${prefix}${lineText}` : lineText))
        .join("\n");
      nextValue = `${value.slice(0, startOfLine)}${updated}${value.slice(selectionEnd)}`;
      cursorPos = startOfLine + updated.length;
    } else {
      nextValue = `${value.slice(0, selectionStart)}${prefix}${selectedText}${suffix}${value.slice(selectionEnd)}`;
    }

    setDraft((current) => ({ ...current, body: nextValue }));
    window.setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(cursorPos, cursorPos);
    }, 0);
  };

  useEffect(() => {
    fetch("/api/admin/resource?resource=blog_posts")
  .then((res) => res.json())
  .then((data) => setPosts(Array.isArray(data) ? data : data?.data || []));
  }, []);

  const loadPost = (post: BlogPostRecord) => {
    setActiveId(post.id);
    setDraft({ ...post, tags: post.tags ?? [] });
  };

  const createNewPost = () => {
    setActiveId(null);
    setDraft({
      title: "",
      h1: "",
      slug: "",
      body: "",
      excerpt: "",
      featured_image: "",
      author: "",
      status: "draft",
      published_at: null,
      meta_title: "",
      meta_description: "",
      focus_keyword: "",
      notes: "",
      language: "en",
      tags: [],
    });
  };

  const handleSave = async () => {
    if (!validateBlogPost()) {
      return;
    }

    setLoading(true);
    setMessage(null);

    const payload = {
      ...draft,
      tags: Array.isArray(draft.tags) ? draft.tags : [],
      published_at: draft.status === "published" ? draft.published_at || new Date().toISOString() : null,
      id: activeId,
      slug: draft.slug || slugify(draft.title || ""),
    };

    // Optimistic UI: capture snapshot and update immediately
    const previous = posts.slice();
    let tempId: number | null = null;
    if (!activeId) {
      tempId = -Date.now();
      const optimistic = { ...(payload as any), id: tempId } as BlogPostRecord;
      setPosts((current) => [optimistic, ...current]);
      setActiveId(tempId);
    } else {
      setPosts((current) => current.map((p) => (p.id === activeId ? ({ ...(p as any), ...(payload as any) } as BlogPostRecord) : p)));
    }

    try {
      const response = await fetch("/api/admin/resource?resource=blog_posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const record = await response.json().catch(() => null);
      if (response.ok && record?.id) {
        setMessage("Post saved.");
        // Replace temp id if created
        if (tempId) {
          setPosts((current) => current.map((p) => (p.id === tempId ? record : p)));
          setActiveId(record.id);
        } else {
          setPosts((current) => current.map((p) => (p.id === record.id ? record : p)));
        }
      } else {
        setPosts(previous);
        setMessage(record?.message || "Unable to save post.");
      }
    } catch (e) {
      setPosts(previous);
      setMessage("Unable to save post.");
    } finally {
      setLoading(false);
    }
  };

  const generateFromAi = async () => {
    const keyword = draft.focus_keyword || draft.title || "";
    if (!keyword.trim()) {
      setMessage("Enter a keyword or title first.");
      return;
    }

    setAiLoading(true);
    setMessage(null);

    const response = await fetch("/api/admin/ai/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword,
        focus_keyword: draft.focus_keyword,
        title: draft.title,
        notes: draft.notes,
      }),
    });

    const body = await response.json().catch(() => null);
    setAiLoading(false);

    if (response.ok && body?.post) {
      setDraft((current) => ({
        ...current,
        title: body.post.title,
        h1: body.post.h1,
        body: body.post.body,
        excerpt: body.post.excerpt,
        meta_title: body.post.meta_title,
        meta_description: body.post.meta_description,
        tags: body.post.tags,
      }));
      setMessage("AI draft generated.");
    } else {
      setMessage(body?.message || "AI generation failed.");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Blog</span>
        <h1>Posts &amp; SEO</h1>
        <p>Manage blog posts, publish content, and generate SEO-optimised copy with AI assistance.</p>
      </div>

      <div className="admin-actions admin-actions-inline">
        <button className="btn btn--filled" type="button" onClick={createNewPost}>
          Create new post
        </button>
      </div>

      <div className="admin-grid admin-two-column-grid">
        <section className="admin-panel admin-section-panel">
          <h2>Post list</h2>
          <div className="admin-table admin-table--striped">
            <div className="admin-table-row admin-table-header">
              <span>Title</span>
              <span>Status</span>
              <span>Lang</span>
            </div>
            {posts.map((post) => (
              <button key={post.id} className="admin-table-row admin-table-row-button" onClick={() => loadPost(post)}>
                <span>{post.title || "Untitled"}</span>
                <span className={`admin-badge admin-badge--${post.status}`}>{post.status}</span>
                <span>{post.language}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="admin-panel admin-section-panel">
          <h2>{activeId ? "Edit post" : "New post"}</h2>
          <div className="admin-form-grid">
            <label className="admin-field">
              <span>Title</span>
              <input
                type="text"
                value={draft.title ?? ""}
                onChange={(event) => {
                  const title = event.target.value;
                  setDraft((current) => ({ ...current, title, slug: current.slug || slugify(title) }));
                }}
              />
              {errors.title && <p className="admin-error">{errors.title}</p>}
            </label>
            <label className="admin-field">
              <span>H1 Heading</span>
              <input
                type="text"
                value={draft.h1 ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, h1: event.target.value }))}
              />
              <p className="admin-note">This is the main heading readers see on the page.</p>
              {errors.h1 && <p className="admin-error">{errors.h1}</p>}
            </label>
            <label className="admin-field">
              <span>Slug</span>
              <input
                type="text"
                value={draft.slug ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, slug: slugify(event.target.value) }))}
              />
              {errors.slug && <p className="admin-error">{errors.slug}</p>}
            </label>
            <label className="admin-field">
              <span>Focus keyword</span>
              <input
                type="text"
                value={draft.focus_keyword ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, focus_keyword: event.target.value }))}
              />
            </label>
            <label className="admin-field">
              <span>Notes for AI</span>
              <textarea
                rows={3}
                value={draft.notes ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, notes: event.target.value }))}
              />
              <p className="admin-note">Add direction, tone, or detail to guide the AI output.</p>
            </label>
            <label className="admin-field">
              <span>Tags</span>
              <input
                type="text"
                value={(draft.tags ?? []).join(", ")}
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    tags: event.target.value
                      .split(/[,;]/)
                      .map((tag) => tag.trim())
                      .filter(Boolean),
                  }))
                }
              />
              <p className="admin-note">Comma-separated tags are used for categorisation and AI suggestions.</p>
            </label>
            <label className="admin-field">
              <span>Excerpt</span>
              <textarea
                rows={3}
                value={draft.excerpt ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, excerpt: event.target.value }))}
              />
            </label>
            <label className="admin-field">
              <span>Featured image URL</span>
              <input
                type="text"
                value={draft.featured_image ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, featured_image: event.target.value }))}
              />
            </label>
            <label className="admin-field">
              <span>Author</span>
              <input
                type="text"
                value={draft.author ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, author: event.target.value }))}
              />
            </label>
            <label className="admin-field">
              <span>Language</span>
              <select
                value={draft.language}
                onChange={(event) => setDraft((current) => ({ ...current, language: event.target.value as BlogPostRecord["language"] }))}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang.toUpperCase()}
                  </option>
                ))}
              </select>
            </label>
            <label className="admin-field">
              <span>Meta title</span>
              <input
                type="text"
                value={draft.meta_title ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, meta_title: event.target.value }))}
              />
            </label>
            <label className="admin-field">
              <span>Meta description</span>
              <textarea
                rows={2}
                value={draft.meta_description ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, meta_description: event.target.value }))}
              />
            </label>
            <div className="admin-seo-preview admin-field admin-field-full">
              <span className="admin-note">Search result preview</span>
              <p className="admin-seo-preview__url">woodoo.dk/blog/{draft.slug?.trim() || slugify(draft.title || "draft")}</p>
              <h3 className="admin-seo-preview__title">{draft.meta_title?.trim() || draft.title || "Draft title"}</h3>
              <p className="admin-seo-preview__description">{draft.meta_description?.trim() || draft.excerpt || "Write a short, descriptive meta description to preview here."}</p>
            </div>
            <label className="admin-field admin-field-full">
              <span>Body</span>
              <div className="admin-toolbar">
                <button type="button" className="btn btn--quiet" onClick={() => insertMarkdown("## ", "", "Heading text")}>H2</button>
                <button type="button" className="btn btn--quiet" onClick={() => insertMarkdown("### ", "", "Heading text")}>H3</button>
                <button type="button" className="btn btn--quiet" onClick={() => insertMarkdown("**", "**", "bold text")}>Bold</button>
                <button type="button" className="btn btn--quiet" onClick={() => insertMarkdown("*", "*", "italic text")}>Italic</button>
                <button type="button" className="btn btn--quiet" onClick={() => insertMarkdown("[", "](https://)", "link text")}>Link</button>
                <button type="button" className="btn btn--quiet" onClick={() => insertMarkdown("- ", "", "", true)}>Bullet list</button>
              </div>
              <textarea
                ref={bodyRef}
                rows={10}
                value={draft.body ?? ""}
                onChange={(event) => setDraft((current) => ({ ...current, body: event.target.value }))}
              />
              {errors.body && <p className="admin-error">{errors.body}</p>}
            </label>
            <label className="admin-field admin-field-inline">
              <span>Status</span>
              <select
                value={draft.status}
                onChange={(event) => setDraft((current) => ({ ...current, status: event.target.value as BlogPostRecord["status"] }))}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </label>
          </div>
          <div className="admin-actions admin-actions-inline">
            <button className="btn btn--filled" type="button" onClick={handleSave} disabled={loading}>
              {loading ? "Saving…" : "Save post"}
            </button>
            <button className="btn btn--filled" type="button" onClick={generateFromAi} disabled={loading || aiLoading}>
              {aiLoading ? "Generating…" : "Generate with AI"}
            </button>
            {message && <span className="admin-note">{message}</span>}
          </div>
        </section>
      </div>
    </div>
  );
}
