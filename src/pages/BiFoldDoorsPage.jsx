import Button from "../components/ui/Button.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import ProcessStep from "../components/cards/ProcessStep.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { biFoldBenefits, biFoldPlanningItems, biFoldUses } from "../data/biFoldPage.js";
import PageMeta from "../components/ui/PageMeta.jsx";

const miniProcess = [
  {
    number: "01",
    title: "Review",
    description: "Discuss goals, opening location, photos, size, timeline, and project conditions.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Evaluate product options, opening prep, threshold conditions, and installation needs.",
  },
  {
    number: "03",
    title: "Coordinate",
    description: "Align ordering, access, staging, GC/carpenter prep, and panel handling before install.",
  },
  {
    number: "04",
    title: "Install",
    description: "Set the system, align panels, coordinate hardware, and complete final operation checks.",
  },
];

function BiFoldDoorsPage() {
  return (
    <>
      <PageMeta
        title="Bi-fold Door Systems in Chicago | Pinto Developments"
        description="Premium bi-fold door system guidance, opening review, coordination, and installation support for high-end residential projects in Chicago and Chicagoland."
      />
      <section className="service-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-content">
            <p className="eyebrow">Flagship Service</p>
            <h1 className="display-heading">Bi-Fold Door Systems</h1>
            <p className="lede">
              Premium folding door systems for wide indoor-outdoor openings, patios, kitchens,
              living rooms, decks, pool areas, and entertainment spaces.
            </p>

            <div className="button-row">
              <Button to="/contact">Start Your Bi-Fold Project</Button>
              <Button to="/portfolio" variant="secondary">
                View Selected Work
              </Button>
            </div>
          </div>

          <div className="service-hero-image image-placeholder" aria-hidden="true">
            <span>Bi-Fold Door Systems</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">What They Do</p>
            <h2>Open the wall between living spaces</h2>
          </div>

          <div className="rich-text">
            <p>
              Bi-fold doors create large, open transitions between indoor and outdoor areas. They
              are ideal when the goal is to expand a kitchen, living room, pool area, patio, deck,
              or entertainment space into one continuous experience.
            </p>
            <p>
              These systems require planning before installation. The rough opening, floor level,
              track, threshold, drainage, panel sequencing, and handling requirements all affect the
              final result.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section surface-section">
        <div className="container">
          <SectionHeader
            eyebrow="Best Uses"
            title="Designed for wide, premium openings"
            text="Bi-fold systems work best when the door is part of the architecture, not an afterthought."
          />

          <div className="pill-grid">
            {biFoldUses.map((use) => (
              <span key={use}>{use}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Benefits"
            title="Why clients choose bi-fold systems"
            text="The appeal is visual, functional, and architectural: wider openings, more light, and a stronger indoor-outdoor connection."
          />

          <div className="card-grid card-grid-4">
            {biFoldBenefits.map((benefit) => (
              <article className="info-card" key={benefit.title}>
                <span className="card-label">{benefit.title}</span>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section planning-section">
        <div className="container planning-grid">
          <div>
            <p className="eyebrow">Planning Requirements</p>
            <h2>Precision before installation</h2>
            <p>
              Large folding systems depend on the opening being ready for the product. Pinto
              Developments helps review the conditions that can affect performance, alignment, and
              final operation.
            </p>
          </div>

          <ul className="check-list">
            {biFoldPlanningItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section surface-section">
        <div className="container">
          <SectionHeader
            eyebrow="Typical Flow"
            title="From concept to function check"
            text="A simple view of the coordination path before, during, and after installation."
          />

          <div className="process-grid process-grid-4">
            {miniProcess.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container related-work">
          <div className="related-work-content">
            <p className="eyebrow">Related Work</p>
            <h2>Large glass openings and specialty installation</h2>
            <p>
              Bi-fold systems share many coordination needs with other large-format door systems:
              opening review, threshold planning, safe panel handling, careful alignment, and final
              operation testing.
            </p>
            <Button to="/portfolio" variant="secondary">
              View Selected Work
            </Button>
          </div>

          <div className="related-work-grid">
            <div className="image-placeholder" aria-hidden="true">
              <span>Large Openings</span>
            </div>
            <div className="image-placeholder" aria-hidden="true">
              <span>Panel Alignment</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Bi-Fold Door Consultation"
        title="Planning a wide opening project?"
        text="Send photos, opening size, location, timeline, and the type of indoor-outdoor transition you want to create."
        primaryLabel="Start Your Bi-Fold Project"
        primaryTo="/contact"
        secondaryLabel="View Selected Work"
        secondaryTo="/portfolio"
      />
    </>
  );
}

export default BiFoldDoorsPage;