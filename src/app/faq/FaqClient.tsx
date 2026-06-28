"use client";
import { useState, useMemo } from "react";

interface FaqClientProps {
  groups: Record<string, Array<{ question: string; answer: string }>>;
}

export default function FaqClient({ groups }: FaqClientProps) {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const filteredGroups = useMemo(() => {
    if (!search.trim()) return groups;
    const q = search.toLowerCase();
    const result: Record<string, Array<{ question: string; answer: string }>> = {};
    Object.entries(groups).forEach(([category, items]) => {
      const matched = items.filter(
        item =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
      );
      if (matched.length > 0) result[category] = matched;
    });
    return result;
  }, [search, groups]);

  const totalResults = Object.values(filteredGroups).reduce((sum, items) => sum + items.length, 0);

  return (
    <section className="section section--no-top">

      {/* Search bar */}
      <div style={{ maxWidth: "640px", margin: "0 auto 48px" }}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search — foosball, hotels, offices, materials..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              height: "56px",
              padding: "0 48px 0 20px",
              fontFamily: "Inter Tight, sans-serif",
              fontSize: "14px",
              color: "#1A1814",
              background: "#F2EEE5",
              border: "1px solid rgba(26,24,20,0.2)",
              borderRadius: 0,
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <span style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", color: "rgba(26,24,20,0.4)", fontSize: "18px", pointerEvents: "none" }}>
            ↓
          </span>
        </div>
        {search && (
          <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(26,24,20,0.5)", marginTop: "8px", letterSpacing: "0.1em" }}>
            {totalResults} result{totalResults !== 1 ? "s" : ""} for &ldquo;{search}&rdquo;
          </p>
        )}
      </div>

      {/* Category navigation */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "64px" }}>
        {Object.keys(filteredGroups).map(category => (
          
          <a
            key={category}
            href={`#${category.replace(/\s+/g, '-').toLowerCase()}`}
            style={{
              fontFamily: "Inter Tight, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "8px 16px",
              border: "1px solid rgba(26,24,20,0.2)",
              color: "#1A1814",
              textDecoration: "none",
              background: "transparent",
              whiteSpace: "nowrap",
            }}
          >
            {category}
          </a>
        ))}
      </div>

      {/* FAQ groups */}
      <div className="faq-grid fade-up" data-delay="1">
        {Object.entries(filteredGroups).map(([category, items]) => (
          <div
            className="faq-group"
            key={category}
            id={category.replace(/\s+/g, '-').toLowerCase()}
          >
            <h3 className="h3">{category}</h3>
            {items.map((item) => {
              const key = `${category}-${item.question}`;
              const isOpen = openItems.has(key);
              return (
                <div key={key} style={{ borderBottom: "1px solid rgba(26,24,20,0.1)" }}>
                  <button
                    onClick={() => toggleItem(key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "20px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "Inter Tight, sans-serif",
                      fontSize: "15px",
                      color: "#1A1814",
                      gap: "16px",
                    }}
                  >
                    <span>{item.question}</span>
                    <span style={{
                      fontSize: "20px",
                      color: "rgba(26,24,20,0.4)",
                      flexShrink: 0,
                      transition: "transform 0.2s",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      display: "inline-block",
                    }}>+</span>
                  </button>
                  {isOpen && (
                    <div style={{ paddingBottom: "20px" }}>
                      <p
                        style={{
                          fontFamily: "Inter Tight, sans-serif",
                          fontSize: "14px",
                          color: "rgba(26,24,20,0.65)",
                          lineHeight: "1.8",
                          margin: 0,
                        }}
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
        {Object.keys(filteredGroups).length === 0 && (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "64px 0" }}>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.5)" }}>
              No results for &ldquo;{search}&rdquo; — <a href="/atelier#contact" style={{ color: "#1A1814" }}>ask us directly →</a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}