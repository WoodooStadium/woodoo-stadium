type KickerProps = {
  label: string;
  index: string;
  dark?: boolean;
};

export default function Kicker({ label, index, dark = false }: KickerProps) {
  return (
    <div className={`kicker ${dark ? "kicker--dark" : ""}`}>
      <span className="kicker__square">■</span>
      <span className="kicker__text">{label}</span>
      <span className="kicker__index">N° {index}</span>
    </div>
  );
}
