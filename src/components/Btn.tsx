type BaseProps = {
  variant?: "outline" | "filled";
  tone?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  href?: never;
};

type AnchorProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type BtnProps = ButtonProps | AnchorProps;

export default function Btn({
  variant = "outline",
  tone = "light",
  className,
  children,
  ...props
}: BtnProps) {
  const classes = [
    "btn",
    variant === "filled" ? "btn--filled" : "btn--outline",
    tone === "dark" ? "btn--on-dark" : "btn--light",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && typeof props.href === "string") {
    return (
      <a className={classes} {...props}>
        {children}
        <span className="btn__arrow">→</span>
      </a>
    );
  }

  return (
    <button className={classes} type={props.type ?? "button"} {...props}>
      {children}
      <span className="btn__arrow">→</span>
    </button>
  );
}
