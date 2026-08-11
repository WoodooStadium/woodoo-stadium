import React, { type ReactNode } from "react";

type Variant = "dark" | "light";

interface InjectedProps {
  index?: number;
  cols?: number;
  variant?: Variant;
  isLastRow?: boolean;
}

export function Card({
  num,
  index = 0,
  cols = 4,
  title,
  body,
  variant = "light",
  isLastRow = true,
}: {
  num: string;
  index?: number;
  cols?: number;
  title: ReactNode;
  body: string;
  variant?: Variant;
  isLastRow?: boolean;
}) {
  const isDark = variant === "dark";
  const borderColor     = isDark ? "var(--rule-light)" : "var(--rule)";
  const showRightBorder = index % cols !== cols - 1;
  const showBottomBorder = !isLastRow;
  const indexColor  = isDark ? "rgba(242,238,229,0.3)" : "rgba(26,24,20,0.3)";
  const titleColor  = isDark ? "var(--ink-on-dark)" : "var(--ink)";
  const bodyColor   = isDark ? "var(--mid-on-dark)" : "var(--mid)";

  return (
    <div
      style={{
        padding: "40px 32px",
        borderRight:  showRightBorder  ? `1px solid ${borderColor}` : undefined,
        borderBottom: showBottomBorder ? `1px solid ${borderColor}` : undefined,
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: "11px",
          letterSpacing: "0.1em",
          color: indexColor,
          display: "block",
        }}
      >
        {num}
      </span>
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: "24px",
          lineHeight: 1.2,
          letterSpacing: "-0.008em",
          color: titleColor,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--sans)",
          fontWeight: 300,
          fontSize: "13px",
          lineHeight: 1.7,
          color: bodyColor,
        }}
      >
        {body}
      </p>
    </div>
  );
}

export function CardGrid({
  cols = 4,
  variant = "light",
  children,
}: {
  cols?: 3 | 4;
  variant?: Variant;
  children: ReactNode;
}) {
  const isDark = variant === "dark";
  const borderColor = isDark ? "var(--rule-light)" : "var(--rule)";
  const totalCount = React.Children.count(children);
  const totalRows  = Math.ceil(totalCount / cols);

  return (
    <div
      className={cols === 4 ? "grid-4-responsive" : "grid-3-responsive"}
      style={{ borderTop: `1px solid ${borderColor}` }}
    >
      {React.Children.map(children, (child, i) => {
        if (!React.isValidElement(child)) return child;
        const row = Math.floor(i / cols);
        return React.cloneElement(child as React.ReactElement<InjectedProps>, {
          index: i,
          cols,
          variant,
          isLastRow: row === totalRows - 1,
        });
      })}
    </div>
  );
}
