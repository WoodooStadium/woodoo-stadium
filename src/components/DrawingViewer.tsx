"use client";

import { useState } from "react";
import Image from "next/image";

const views = [
  { key: "front", label: "Front Elevation", src: "/uploads/woodoo_drawing_front.jpg", alt: "Stadium 11-11 front elevation technical drawing" },
  { key: "top", label: "Top Plan", src: "/uploads/woodoo_drawing_top.jpg", alt: "Stadium 11-11 top plan technical drawing" },
] as const;

export default function DrawingViewer() {
  const [active, setActive] = useState<(typeof views)[number]["key"]>("front");
  const current = views.find((v) => v.key === active)!;

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        {views.map((v) => (
          <button
            key={v.key}
            type="button"
            onClick={() => setActive(v.key)}
            style={{
              fontFamily: "Inter Tight, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "10px 20px",
              background: active === v.key ? "#F2EEE5" : "transparent",
              color: active === v.key ? "#0B0A08" : "rgba(242,238,229,0.6)",
              border: "1px solid rgba(242,238,229,0.25)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div
        style={{
          border: "1px solid rgba(242,238,229,0.15)",
          background: "#0B0A08",
          padding: "32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          key={current.key}
          src={current.src}
          alt={current.alt}
          width={1900}
          height={1200}
          style={{ display: "block", width: "100%", height: "auto", maxWidth: "1100px", objectFit: "contain" }}
          priority={current.key === "front"}
        />
      </div>
    </div>
  );
}