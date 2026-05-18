import type { ReactNode } from "react";

function parseInline(text: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^\)]+\))/g);

  return tokens.map((token, index) => {
    if (!token) return null;
    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={index}>{token.slice(2, -2)}</strong>;
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return <em key={index}>{token.slice(1, -1)}</em>;
    }
    const linkMatch = token.match(/\[([^\]]+)\]\(([^\)]+)\)/);
    if (linkMatch) {
      return (
        <a key={index} href={linkMatch[2]}>
          {linkMatch[1]}
        </a>
      );
    }
    return <span key={index}>{token}</span>;
  });
}

function renderBlock(block: string, index: number): ReactNode {
  const trimmed = block.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("### ")) {
    return <h3 key={index}>{trimmed.slice(4)}</h3>;
  }
  if (trimmed.startsWith("## ")) {
    return <h3 key={index}>{trimmed.slice(3)}</h3>;
  }
  if (trimmed.startsWith("# ")) {
    return <h2 key={index}>{trimmed.slice(2)}</h2>;
  }
  if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
    const items = trimmed.split(/\n/).map((line) => line.replace(/^[-*] /, "").trim());
    return (
      <ul key={index}>
        {items.map((item, itemIndex) => (
          <li key={itemIndex}>{parseInline(item)}</li>
        ))}
      </ul>
    );
  }

  return <p key={index}>{parseInline(trimmed)}</p>;
}

export default function MarkdownRenderer({
  content,
}: {
  content: string;
}) {
  const blocks = content
    .replace(/\r/g, "")
    .split(/\n{2,}/g)
    .map((block) => block.trim())
    .filter(Boolean);

  return <div className="markdown">{blocks.map(renderBlock)}</div>;
}
