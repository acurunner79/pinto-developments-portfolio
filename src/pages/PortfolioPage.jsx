import { useState } from "react";
import Button from "../components/ui/Button.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import ImageLightbox from "../components/ui/ImageLightbox.jsx";
import ResponsiveImage from "../components/ui/ResponsiveImage.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { portfolioGroups } from "../data/portfolio.js";

function PortfolioPage() {
  const [activeImage, setActiveImage] = useState(null);
  const featuredProject = portfolioGroups[0];

  return (
    <>
      <section className="service-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-content">
            <p className="eyebrow">Selected Work</p>
            <h1 className="display-heading">Specialty door systems portfolio</h1>
            <p className="lede">
              Curated examples of premium door systems, large openings, solid steel applications,
              glass systems, opening preparation, and specialty installation coordination.
            </p>

            <div className="button-row">
              <Button to="/contact">Start Your Door Project</Button>
              <Button to="/process" variant="secondary">
                View the Process
              </Button>
            </div>
          </div>

          <ResponsiveImage
            src={featuredProject.images?.feature}
            alt={`${featuredProject.title} featured portfolio example`}
            label="Selected Work"
            className="service-hero-image"
            enableLightbox
            caption={featuredProject.title}
            onOpen={setActiveImage}
          />
        </div>
      </section>

      <section className="page-section surface-section">
        <div className="container">
          <SectionHeader
            eyebrow="Portfolio Focus"
            title="Curated, technical, and image-forward"
            text="The portfolio is organized by system type and coordination focus, making it easier for clients to understand the type of work Pinto Developments supports."
          />

          <div className="portfolio-focus-grid">
            {portfolioGroups.map((group) => (
              <article className="overview-card" key={group.title}>
                <span className="card-label">{group.category}</span>
                <h3>{group.title}</h3>
                <p>{group.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Selected Work"
            title="Project-focused portfolio sections"
            text="Each section is designed to support one large feature image and two detail images when final project photography is ready."
          />

          <div className="portfolio-section-stack">
            {portfolioGroups.map((group, index) => (
              <article
                className={`portfolio-feature-section ${
                  index % 2 === 1 ? "portfolio-feature-section-reverse" : ""
                }`}
                key={group.title}
              >
                <div className="portfolio-feature-media">
                  <ResponsiveImage
                    src={group.images?.feature}
                    alt={`${group.title} feature image`}
                    label={group.category}
                    className="portfolio-feature-image"
                    enableLightbox
                    caption={group.title}
                    onOpen={setActiveImage}
                  />

                  <div className="portfolio-detail-grid">
                    <ResponsiveImage
                      src={group.images?.detailOne}
                      alt={`${group.title} detail image one`}
                      label="Detail"
                      className="portfolio-detail-image"
                      enableLightbox
                      caption={`${group.title} detail`}
                      onOpen={setActiveImage}
                    />
                    <ResponsiveImage
                      src={group.images?.detailTwo}
                      alt={`${group.title} detail image two`}
                      label="Detail"
                      className="portfolio-detail-image"
                      enableLightbox
                      caption={`${group.title} detail`}
                      onOpen={setActiveImage}
                    />
                  </div>
                </div>

                <div className="portfolio-feature-content">
                  <p className="eyebrow">{group.category}</p>
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>

                  <div className="planning-note">
                    <span>Project focus</span>
                    <p>{group.notes}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section planning-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Image Strategy</p>
            <h2>Built for real project photography</h2>
          </div>

          <div className="rich-text">
            <p>
              This portfolio layout is ready for final project images. Each selected work section
              can accept one main feature image and two supporting detail images without changing
              the page structure.
            </p>
            <p>
              Until the final image set is prepared, the placeholders keep the layout stable for
              client review and approval.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Portfolio Consultation"
        title="Have a project like this in mind?"
        text="Send photos, opening size, project location, and the type of door system you are considering."
        primaryLabel="Start Your Door Project"
        primaryTo="/contact"
        secondaryLabel="View the Process"
        secondaryTo="/process"
      />

      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </>
  );
}

export default PortfolioPage;