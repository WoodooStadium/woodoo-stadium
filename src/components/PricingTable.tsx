type PricingRow = {
  label: string;
  price: string;
  note?: string;
};

export default function PricingTable({
  rows,
  included,
  footnote,
  variant = "dark",
}: {
  rows: PricingRow[];
  included?: string[];
  footnote?: string;
  variant?: "dark" | "light";
}) {
  const isDark = variant === "dark";
  const borderColor   = isDark ? "var(--rule-light)" : "var(--rule)";
  const labelColor    = isDark ? "rgba(242,238,229,0.45)" : "rgba(26,24,20,0.45)";
  const priceColor    = isDark ? "var(--ink-on-dark)"     : "var(--ink)";
  const noteColor     = isDark ? "var(--faint-on-dark)"   : "var(--faint)";
  const includedColor = isDark ? "var(--mid-on-dark)"     : "var(--mid)";
  const checkColor    = isDark ? "var(--pine-on-dark)"    : "var(--pine)";

  return (
    <div>
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: "20px 0",
            borderBottom: `1px solid ${borderColor}`,
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: labelColor,
              }}
            >
              {row.label}
            </span>
            {row.note && (
              <span
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 300,
                  fontSize: "11px",
                  color: noteColor,
                }}
              >
                {row.note}
              </span>
            )}
          </div>
          <span
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 300,
              fontSize: "clamp(20px, 2vw, 28px)",
              color: priceColor,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {row.price}
          </span>
        </div>
      ))}

      {included && included.length > 0 && (
        <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {included.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontFamily: "var(--sans)",
                fontWeight: 300,
                fontSize: "13px",
                lineHeight: 1.6,
                color: includedColor,
              }}
            >
              <span style={{ color: checkColor, flexShrink: 0, marginTop: "1px" }}>—</span>
              {item}
            </div>
          ))}
        </div>
      )}

      {footnote && (
        <p
          style={{
            marginTop: "24px",
            fontFamily: "var(--sans)",
            fontWeight: 300,
            fontSize: "11px",
            lineHeight: 1.7,
            color: noteColor,
          }}
        >
          {footnote}
        </p>
      )}
    </div>
  );
}
