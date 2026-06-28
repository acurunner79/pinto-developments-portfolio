function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-header section-header-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

export default SectionHeader;