import type { ReactNode } from "react";

type Variant = "dark" | "light";
type Size = "display" | "editorial" | "section";

const sizes: Record<Size, string> = {
  display:   "clamp(40px, 5.6vw, 84px)",
  editorial: "clamp(32px, 3.5vw, 56px)",
  section:   "clamp(26px, 2.8vw, 40px)",
};

const lineHeights: Record<Size, number> = {
  display:   0.98,
  editorial: 1.1,
  section:   1.15,
};

const letterSpacings: Record<Size, string> = {
  display:   "-0.018em",
  editorial: "-0.015em",
  section:   "-0.012em",
};

export default function SectionHeading({
  kicker,
  kickerIndex,
  heading,
  body,
  variant = "light",
  size = "editorial",
  align = "left",
}: {
  kicker?: string;
  kickerIndex?: string;
  heading: ReactNode;
  body?: ReactNode;
  variant?: Variant;
  size?: Size;
  align?: "left" | "center";
}) {
  const isDark = variant === "dark";

  return (
    <div className={isDark ? "sh-dark" : "sh-light"} style={{ textAlign: align }}>
      {kicker && (
        <span className="kicker kicker--block" data-index={kickerIndex}>
          {kicker}
        </span>
      )}
      <h2
        className="sh-heading"
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 300,
          fontSize: sizes[size],
          lineHeight: lineHeights[size],
          letterSpacing: letterSpacings[size],
          color: isDark ? "var(--ink-on-dark)" : "var(--ink)",
        }}
      >
        {heading}
      </h2>
      {body !== undefined && (
        <p
          className="body"
          style={{
            marginTop: "24px",
            color: isDark ? "var(--mid-on-dark)" : "var(--mid)",
          }}
        >
          {body}
        </p>
      )}
    </div>
  );
}
