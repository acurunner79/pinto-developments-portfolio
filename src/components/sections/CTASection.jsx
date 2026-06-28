import Button from "../ui/Button.jsx";

function CTASection({
  eyebrow = "Start the Conversation",
  title = "Planning a specialty door system?",
  text = "Send photos, opening size, project location, and the door type you are considering. Pinto Developments can help review the path from product selection to opening preparation and installation.",
  primaryLabel = "Schedule a Door Consultation",
  primaryTo = "/contact",
  secondaryLabel = "View Portfolio",
  secondaryTo = "/portfolio",
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <div className="cta-actions">
            <Button to={primaryTo}>{primaryLabel}</Button>
            <Button to={secondaryTo} variant="secondary">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;