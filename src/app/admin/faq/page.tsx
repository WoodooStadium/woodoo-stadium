"use client";

import { useEffect, useState } from "react";

interface FaqItemRecord {
  id: number;
  question: string;
  answer: string;
  category: string | null;
  language: string;
  visible: boolean;
  sort_order: number;
}

export default function AdminFaqPage() {
  const [items, setItems] = useState<FaqItemRecord[]>([]);
  const [newItem, setNewItem] = useState<Partial<FaqItemRecord>>({ question: "", answer: "", category: "", language: "en", visible: true, sort_order: 0 });
  const [newItemErrors, setNewItemErrors] = useState<Record<string, string>>({});
  const [itemErrors, setItemErrors] = useState<Record<number, Record<string, string>>>({});
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/resource?resource=faq_items").then((res) => res.json()).then((data) => setItems(data || []));
  }, []);

  const saveFaq = async (item: FaqItemRecord) => {
    const nextErrors: Record<string, string> = {};
    if (!item.question.trim()) nextErrors.question = "Question is required.";
    if (!item.answer.trim()) nextErrors.answer = "Answer is required.";
    if (Object.keys(nextErrors).length) {
      setItemErrors((current) => ({ ...current, [item.id]: nextErrors }));
      return;
    }

    setItemErrors((current) => {
      const next = { ...current };
      delete next[item.id];
      return next;
    });

    setMessage(null);
    const previous = items.slice();
    setItems((current) => current.map((value) => (value.id === item.id ? item : value)));
    try {
      const response = await fetch("/api/admin/resource?resource=faq_items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      });
      const record = await response.json().catch(() => null);
      if (response.ok && record?.id) {
        setItems((current) => current.map((value) => (value.id === record.id ? record : value)));
        setMessage("FAQ item saved.");
      } else {
        setItems(previous);
        setMessage(record?.message || "Unable to save FAQ item.");
      }
    } catch (e) {
      setItems(previous);
      setMessage("Unable to save FAQ item.");
    }
  };

  const createItem = async () => {
    const nextErrors: Record<string, string> = {};
    if (!newItem.question?.trim()) nextErrors.question = "Question is required.";
    if (!newItem.answer?.trim()) nextErrors.answer = "Answer is required.";
    setNewItemErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      return;
    }

    setNewItemErrors({});
    setMessage(null);
    const payload = { ...newItem, question: newItem.question ?? "", answer: newItem.answer ?? "", language: newItem.language ?? "en", visible: true, sort_order: items.length };
    const temp = { ...(payload as any), id: -Date.now() } as FaqItemRecord;
    setItems((current) => [temp, ...current]);
    setNewItem({ question: "", answer: "", category: "", language: "en", visible: true, sort_order: items.length });
    try {
      const response = await fetch("/api/admin/resource?resource=faq_items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const record = await response.json().catch(() => null);
      if (response.ok && record?.id) {
        setItems((current) => current.map((it) => (it.id === temp.id ? record : it)));
        setMessage("FAQ item added.");
      } else {
        setItems((current) => current.filter((it) => it.id !== temp.id));
        setMessage(record?.message || "Unable to add FAQ item.");
      }
    } catch (e) {
      setItems((current) => current.filter((it) => it.id !== temp.id));
      setMessage("Unable to add FAQ item.");
    }
  };

  const deleteItem = async (id: number) => {
    setMessage(null);
    const previous = items.slice();
    setItems((current) => current.filter((item) => item.id !== id));
    try {
      const response = await fetch("/api/admin/resource?resource=faq_items", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setMessage("FAQ item deleted.");
      } else {
        setItems(previous);
        const body = await response.json().catch(() => null);
        setMessage(body?.message || "Unable to delete FAQ item.");
      }
    } catch (e) {
      setItems(previous);
      setMessage("Unable to delete FAQ item.");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">FAQ</span>
        <h1>Frequently Asked Questions</h1>
        <p>Add, edit and remove FAQ items for website content.</p>
      </div>

      <section className="admin-panel admin-section-panel">
        <h2>Add FAQ item</h2>
        <div className="admin-form-grid">
          <label className="admin-field">
            <span>Question</span>
            <input
              value={newItem.question ?? ""}
              onChange={(event) => {
                setNewItem((current) => ({ ...current, question: event.target.value }));
                setNewItemErrors((current) => {
                  const next = { ...current };
                  delete next.question;
                  return next;
                });
              }}
            />
            {newItemErrors.question && <p className="admin-error">{newItemErrors.question}</p>}
          </label>
          <label className="admin-field">
            <span>Answer</span>
            <textarea
              rows={3}
              value={newItem.answer ?? ""}
              onChange={(event) => {
                setNewItem((current) => ({ ...current, answer: event.target.value }));
                setNewItemErrors((current) => {
                  const next = { ...current };
                  delete next.answer;
                  return next;
                });
              }}
            />
            {newItemErrors.answer && <p className="admin-error">{newItemErrors.answer}</p>}
          </label>
          <label className="admin-field">
            <span>Category</span>
            <input value={newItem.category ?? ""} onChange={(event) => setNewItem((current) => ({ ...current, category: event.target.value }))} />
          </label>
          <label className="admin-field admin-field-inline">
            <span>Language</span>
            <select value={newItem.language ?? "en"} onChange={(event) => setNewItem((current) => ({ ...current, language: event.target.value }))}>
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="it">IT</option>
              <option value="da">DA</option>
            </select>
          </label>
          <button className="btn btn--filled" type="button" onClick={createItem}>
            Add FAQ item
          </button>
          {message && <p className="admin-note">{message}</p>}
        </div>
      </section>

      <section className="admin-panel admin-section-panel">
        <h2>FAQ items</h2>
        <div className="admin-cards-stack">
          {items.map((item) => (
            <div className="admin-card admin-card-panel" key={item.id}>
              <div className="admin-card-title">
                <strong>{item.question}</strong>
                <span>{item.language.toUpperCase()}</span>
              </div>
              <label className="admin-field">
                <span>Question</span>
                <input
                  value={item.question}
                  onChange={(event) => setItems((current) => current.map((value) => (value.id === item.id ? { ...value, question: event.target.value } : value)))}
                />
                {itemErrors[item.id]?.question && <p className="admin-error">{itemErrors[item.id].question}</p>}
              </label>
              <label className="admin-field">
                <span>Answer</span>
                <textarea rows={3} value={item.answer} onChange={(event) => setItems((current) => current.map((value) => (value.id === item.id ? { ...value, answer: event.target.value } : value)))} />
                {itemErrors[item.id]?.answer && <p className="admin-error">{itemErrors[item.id].answer}</p>}
              </label>
              <label className="admin-field">
                <span>Category</span>
                <input value={item.category ?? ""} onChange={(event) => setItems((current) => current.map((value) => (value.id === item.id ? { ...value, category: event.target.value } : value)))} />
              </label>
              <label className="admin-field admin-field-inline">
                <span>Visible</span>
                <input type="checkbox" checked={item.visible} onChange={(event) => setItems((current) => current.map((value) => (value.id === item.id ? { ...value, visible: event.target.checked } : value)))} />
              </label>
              <label className="admin-field">
                <span>Sort order</span>
                <input type="number" value={item.sort_order} onChange={(event) => setItems((current) => current.map((value) => (value.id === item.id ? { ...value, sort_order: Number(event.target.value) } : value)))} />
              </label>
              <div className="admin-actions admin-actions-inline">
                <button className="btn btn--filled" type="button" onClick={() => saveFaq(item)}>
                  Save
                </button>
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
