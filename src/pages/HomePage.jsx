import Button from "../components/ui/Button.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import ServicePreviewGrid from "../components/sections/ServicePreviewGrid.jsx";
import PortfolioPreview from "../components/sections/PortfolioPreview.jsx";
import ProcessPreview from "../components/sections/ProcessPreview.jsx";

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-image" aria-hidden="true"></div>

        <div className="container home-hero-content">
          <div className="hero-card">
            <p className="eyebrow">Pinto Developments</p>
            <h1 className="display-heading">Specialty Door Systems for High-End Homes</h1>
            <p>
              Bi-fold, multi-slide, pocketing, pivot, solid steel, aluminum, and hidden Murphy Door
              systems for residential and boutique commercial projects throughout Chicago and
              Chicagoland.
            </p>

            <div className="button-row">
              <Button to="/contact">Schedule a Door Consultation</Button>
              <Button to="/portfolio" variant="secondary">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="positioning-strip" aria-label="Pinto Developments service focus">
        <div className="container positioning-strip-inner">
          <span>Sales Support</span>
          <span>Opening Prep</span>
          <span>Installation</span>
          <span>Chicago &amp; Chicagoland</span>
        </div>
      </section>

      <section className="page-section">
        <div className="container featured-service">
          <div className="featured-service-image image-placeholder" aria-hidden="true">
            <span>Bi-Fold / Accordion Doors</span>
          </div>

          <div className="featured-service-content">
            <p className="eyebrow">Featured Service</p>
            <h2>Bi-Fold / Accordion Door Systems</h2>
            <p>
              Bi-fold doors create large, open transitions between indoor and outdoor spaces. They
              are ideal for kitchens, living rooms, patios, pool areas, decks, and entertainment
              spaces where the goal is to open an entire wall.
            </p>
            <p>
              These systems require careful planning, opening review, track and threshold
              coordination, panel sequencing, and accurate installation.
            </p>

            <Button to="/bi-fold-doors">Explore Bi-Fold Doors</Button>
          </div>
        </div>
      </section>

      <ServicePreviewGrid />
      <PortfolioPreview />
      <ProcessPreview />

      <CTASection />
    </>
  );
}

export default HomePage;