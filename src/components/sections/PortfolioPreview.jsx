import { portfolioGroups } from "../../data/portfolio.js";
import PortfolioCard from "../cards/PortfolioCard.jsx";
import Button from "../ui/Button.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

function PortfolioPreview() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeader
          eyebrow="Selected Work"
          title="Curated specialty door system work"
          text="A clean portfolio preview focused on solid steel systems, large glass openings, opening prep, and installation coordination."
        />

        <div className="portfolio-preview-grid">
          {portfolioGroups.slice(0, 3).map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </div>

        <div className="section-action">
          <Button to="/portfolio" variant="secondary">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioPreview;