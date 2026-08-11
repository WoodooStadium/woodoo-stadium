export default function StatBlock({
  figure,
  text,
  source,
  variant = "light",
}: {
  figure: string;
  text: string;
  source?: string;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <span
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 300,
          fontSize: "clamp(64px, 7vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
          color: isDark ? "var(--pine-on-dark)" : "var(--pine)",
        }}
      >
        {figure}
      </span>
      <p
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 300,
          fontSize: "15px",
          lineHeight: 1.65,
          color: isDark ? "var(--mid-on-dark)" : "var(--mid)",
        }}
      >
        {text}
      </p>
      {source && (
        <span
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 400,
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: isDark ? "var(--faint-on-dark)" : "var(--faint)",
          }}
        >
          {source}
        </span>
      )}
    </div>
  );
}
