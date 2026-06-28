"use client";

import { useEffect, useMemo, useState } from "react";
import ImagePicker from "@/components/ImagePicker";

interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  visible: boolean;
  sort_order: number;
}

interface Option {
  id: number;
  category_id: number;
  name: string;
  description: string | null;
  price_modifier: number;
  image_url: string | null;
  visible: boolean;
  sort_order: number;
  color_hex: string | null;
}

export default function AdminConfiguratorPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategorySlug, setNewCategorySlug] = useState("");
  const [newCategoryErrors, setNewCategoryErrors] = useState<Record<string, string>>({});
  const [categoryErrors, setCategoryErrors] = useState<Record<number, Record<string, string>>>({});
  const [optionErrors, setOptionErrors] = useState<Record<number, Record<string, string>>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/resource?resource=configurator_categories").then((res) => res.json()).then((data) => setCategories(data || []));
    fetch("/api/admin/resource?resource=configurator_options").then((res) => res.json()).then((data) => setOptions(data || []));
  }, []);

  const activeOptions = useMemo(
    () => options.filter((option) => option.category_id === activeCategory),
    [options, activeCategory]
  );

  const saveCategory = async (category: Category) => {
    const nextErrors: Record<string, string> = {};
    if (!category.name.trim()) nextErrors.name = "Category name is required.";
    if (Object.keys(nextErrors).length) {
      setCategoryErrors((current) => ({ ...current, [category.id]: nextErrors }));
      return;
    }

    setCategoryErrors((current) => {
      const next = { ...current };
      delete next[category.id];
      return next;
    });

    setSaving(true);
    setMessage(null);
    const previous = categories.slice();
    setCategories((current) => current.map((item) => (item.id === category.id ? category : item)));
    try {
      const response = await fetch(`/api/admin/resource?resource=configurator_categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(category),
      });
      const record = await response.json().catch(() => null);
      if (response.ok && record?.id) {
        setCategories((current) => current.map((item) => (item.id === record.id ? record : item)));
        setMessage("Category updated.");
      } else {
        setCategories(previous);
        setMessage(record?.message || "Unable to update category.");
      }
    } catch (e) {
      setCategories(previous);
      setMessage("Unable to update category.");
    } finally {
      setSaving(false);
    }
  };

  const saveOption = async (option: Option) => {
    const nextErrors: Record<string, string> = {};
    if (!option.name.trim()) nextErrors.name = "Option name is required.";
    if (Object.keys(nextErrors).length) {
      setOptionErrors((current) => ({ ...current, [option.id]: nextErrors }));
      return;
    }

    setOptionErrors((current) => {
      const next = { ...current };
      delete next[option.id];
      return next;
    });

    setSaving(true);
    setMessage(null);
    const previous = options.slice();
    setOptions((current) => current.map((item) => (item.id === option.id ? option : item)));
    try {
      const response = await fetch(`/api/admin/resource?resource=configurator_options`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(option),
      });
      const record = await response.json().catch(() => null);
      if (response.ok && record?.id) {
        setOptions((current) => current.map((item) => (item.id === record.id ? record : item)));
        setMessage("Option updated.");
      } else {
        setOptions(previous);
        setMessage(record?.message || "Unable to update option.");
      }
    } catch (e) {
      setOptions(previous);
      setMessage("Unable to update option.");
    } finally {
      setSaving(false);
    }
  };

  const addCategory = async () => {
    const nextErrors: Record<string, string> = {};
    if (!newCategoryName.trim()) nextErrors.name = "Category name is required.";
    if (!newCategorySlug.trim()) nextErrors.slug = "Category slug is required.";
    setNewCategoryErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setNewCategoryErrors({});
    setSaving(true);
    setMessage(null);
    const temp = { id: -Date.now(), name: newCategoryName, slug: newCategorySlug, description: "", visible: true, sort_order: categories.length } as Category;
    setCategories((current) => [...current, temp]);
    try {
      const response = await fetch(`/api/admin/resource?resource=configurator_categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName, slug: newCategorySlug, description: "", visible: true, sort_order: categories.length }),
      });
      const record = await response.json().catch(() => null);
      if (response.ok && record?.id) {
        setCategories((current) => current.map((c) => (c.id === temp.id ? record : c)));
        setNewCategoryName("");
        setNewCategorySlug("");
        setMessage("Category created.");
      } else {
        setCategories((current) => current.filter((c) => c.id !== temp.id));
        setMessage(record?.message || "Unable to create category.");
      }
    } catch (e) {
      setCategories((current) => current.filter((c) => c.id !== temp.id));
      setMessage("Unable to create category.");
    } finally {
      setSaving(false);
    }
  };

  const deleteCategory = async (id: number) => {
    setMessage(null);
    const previousCats = categories.slice();
    const previousOptions = options.slice();
    setCategories((current) => current.filter((item) => item.id !== id));
    setOptions((current) => current.filter((option) => option.category_id !== id));
    if (activeCategory === id) setActiveCategory(null);
    try {
      const response = await fetch(`/api/admin/resource?resource=configurator_categories`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setMessage("Category deleted.");
      } else {
        setCategories(previousCats);
        setOptions(previousOptions);
        const body = await response.json().catch(() => null);
        setMessage(body?.message || "Unable to delete category.");
      }
    } catch (e) {
      setCategories(previousCats);
      setOptions(previousOptions);
      setMessage("Unable to delete category.");
    }
  };

  const deleteOption = async (id: number) => {
    setMessage(null);
    const previous = options.slice();
    setOptions((current) => current.filter((item) => item.id !== id));
    try {
      const response = await fetch(`/api/admin/resource?resource=configurator_options`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        setMessage("Option deleted.");
      } else {
        setOptions(previous);
        const body = await response.json().catch(() => null);
        setMessage(body?.message || "Unable to delete option.");
      }
    } catch (e) {
      setOptions(previous);
      setMessage("Unable to delete option.");
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Configurator</span>
        <h1>Categories and options</h1>
        <p>Manage product categories and option variants. Reorder categories in the list.</p>
      </div>

      <div className="admin-grid admin-two-column-grid">
        <section className="admin-panel admin-section-panel">
          <h2>Categories</h2>
          <div className="admin-cards-stack">
            {categories.map((category) => (
              <div key={category.id} className="admin-card admin-card-panel">
                <div className="admin-card-title">
                  <strong>{category.name}</strong>
                  <span>{category.slug}</span>
                </div>
                <label className="admin-field">
                  <span>Name</span>
                  <input
                    type="text"
                    value={category.name}
                    onChange={(event) => setCategories((current) => current.map((item) => (item.id === category.id ? { ...item, name: event.target.value } : item)))}
                  />
                  {categoryErrors[category.id]?.name && <p className="admin-error">{categoryErrors[category.id].name}</p>}
                </label>
                <label className="admin-field">
                  <span>Description</span>
                  <textarea
                    rows={2}
                    value={category.description ?? ""}
                    onChange={(event) => setCategories((current) => current.map((item) => (item.id === category.id ? { ...item, description: event.target.value } : item)))}
                  />
                </label>
                <label className="admin-field admin-field-inline">
                  <span>Visible</span>
                  <input
                    type="checkbox"
                    checked={category.visible}
                    onChange={(event) => setCategories((current) => current.map((item) => (item.id === category.id ? { ...item, visible: event.target.checked } : item)))}
                  />
                </label>
                <div className="admin-actions admin-actions-inline">
                  <button className="btn btn--filled" type="button" onClick={() => saveCategory(category)}>
                    Save
                  </button>
                  <button className="btn btn--ghost" type="button" onClick={() => deleteCategory(category.id)}>
                    Delete
                  </button>
                  <button className="btn btn--quiet" type="button" onClick={() => setActiveCategory(category.id)}>
                    View options
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="admin-card admin-card-panel">
            <h3>Add category</h3>
            <label className="admin-field">
              <span>Name</span>
              <input
                value={newCategoryName}
                onChange={(event) => {
                  setNewCategoryName(event.target.value);
                  setNewCategoryErrors((current) => {
                    const next = { ...current };
                    delete next.name;
                    return next;
                  });
                }}
              />
              {newCategoryErrors.name && <p className="admin-error">{newCategoryErrors.name}</p>}
            </label>
            <label className="admin-field">
              <span>Slug</span>
              <input
                value={newCategorySlug}
                onChange={(event) => {
                  setNewCategorySlug(event.target.value);
                  setNewCategoryErrors((current) => {
                    const next = { ...current };
                    delete next.slug;
                    return next;
                  });
                }}
              />
              {newCategoryErrors.slug && <p className="admin-error">{newCategoryErrors.slug}</p>}
            </label>
            <button className="btn btn--filled" type="button" onClick={addCategory} disabled={!newCategoryName || !newCategorySlug}>
              Create category
            </button>
          </div>
        </section>

        <section className="admin-panel admin-section-panel">
          <h2>Options</h2>
          {activeCategory ? (
            <>
              {activeOptions.length === 0 ? (
                <p className="admin-note">No options found for this category.</p>
              ) : (
                activeOptions.map((option) => (
                  <div key={option.id} className="admin-card admin-card-panel">
                    <div className="admin-card-title">
                      <strong>{option.name}</strong>
                      <span>Option #{option.id}</span>
                    </div>
                    <label className="admin-field">
                      <span>Name</span>
                      <input
                        type="text"
                        value={option.name}
                        onChange={(event) => setOptions((current) => current.map((item) => (item.id === option.id ? { ...item, name: event.target.value } : item)))}
                      />
                      {optionErrors[option.id]?.name && <p className="admin-error">{optionErrors[option.id].name}</p>}
                    </label>
                    <label className="admin-field">
                      <span>Description</span>
                      <textarea
                        rows={2}
                        value={option.description ?? ""}
                        onChange={(event) => setOptions((current) => current.map((item) => (item.id === option.id ? { ...item, description: event.target.value } : item)))}
                      />
                    </label>
                    <div className="admin-field">
                      <span>Image</span>
                      <ImagePicker
                        value={option.image_url}
                        onChange={(url) => setOptions((current) => current.map((item) => (item.id === option.id ? { ...item, image_url: url || null } : item)))}
                      />
                    </div>
                    <div className="admin-field-inline-grid">
                      <label className="admin-field admin-field-inline">
                        <span>Price modifier</span>
                        <input
                          type="number"
                          value={option.price_modifier}
                          onChange={(event) => setOptions((current) => current.map((item) => (item.id === option.id ? { ...item, price_modifier: Number(event.target.value) } : item)))}
                        />
                      </label>
                      <label className="admin-field admin-field-inline">
                        <span>Color</span>
                        <input
                          type="color"
                          value={option.color_hex ?? "#000000"}
                          onChange={(event) => setOptions((current) => current.map((item) => (item.id === option.id ? { ...item, color_hex: event.target.value } : item)))}
                        />
                      </label>
                    </div>
                    <label className="admin-field admin-field-inline">
                      <span>Visible</span>
                      <input
                        type="checkbox"
                        checked={option.visible}
                        onChange={(event) => setOptions((current) => current.map((item) => (item.id === option.id ? { ...item, visible: event.target.checked } : item)))}
                      />
                    </label>
                    <div className="admin-actions admin-actions-inline">
                      <button className="btn btn--filled" type="button" onClick={() => saveOption(option)}>
                        Save
                      </button>
                      <button className="btn btn--ghost" type="button" onClick={() => deleteOption(option.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </>
          ) : (
            <p className="admin-note">Select a category and click "View options" to edit its items.</p>
          )}
        </section>
      </div>

      <div className="admin-actions">
        <button className="btn btn--filled" type="button" disabled>
          Reorder drag & drop coming soon
        </button>
        {message && <p className="admin-note">{message}</p>}
      </div>
    </div>
  );
}
