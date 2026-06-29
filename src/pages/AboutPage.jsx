import Button from "../components/ui/Button.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import PageMeta from "../components/ui/PageMeta.jsx";

const specialtyItems = [
  {
    title: "Product Guidance",
    text: "Helping clients understand system options, operation styles, manufacturer considerations, and project fit.",
  },
  {
    title: "Opening Review",
    text: "Reviewing rough openings, floor conditions, access, clearances, and site constraints before installation.",
  },
  {
    title: "Installation Planning",
    text: "Thinking through staging, panel handling, thresholds, hardware, sequencing, and coordination before install day.",
  },
  {
    title: "Specialty Installation",
    text: "Installing complex door systems with attention to alignment, operation, field conditions, and final adjustment.",
  },
];

const trustItems = [
  "Licensed and insured",
  "Chicago & Chicagoland service area",
  "High-end residential focus",
  "Boutique commercial support",
  "Door, window, and glazing background",
  "Large-opening field experience",
];

function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Pinto Developments"
        description="Pinto Developments is led by Joshua Pinto and focuses on premium specialty door systems for high-end residential and boutique commercial projects."
      />
      <section className="service-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-content">
            <p className="eyebrow">About Pinto Developments</p>
            <h1 className="display-heading">Specialty door system support led by Joshua Pinto</h1>
            <p className="lede">
              Pinto Developments focuses on premium door systems for high-end residential and
              boutique commercial projects throughout Chicago and Chicagoland.
            </p>

            <div className="button-row">
              <Button to="/contact">Schedule a Consultation</Button>
              <Button to="/portfolio" variant="secondary">
                View Selected Work
              </Button>
            </div>
          </div>

          <div className="service-hero-image image-placeholder" aria-hidden="true">
            <span>Pinto Developments</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container about-story-grid">
          <div className="image-placeholder" aria-hidden="true">
            <span>Joshua Pinto</span>
          </div>

          <div>
            <p className="eyebrow">Company Background</p>
            <h2>Built around the technical side of premium door systems</h2>

            <div className="rich-text">
              <p>
                Pinto Developments is led by Joshua Pinto, bringing a third-generation carpentry
                background and specialized experience with doors, windows, glazing, large openings,
                and field installation.
              </p>
              <p>
                The company is focused on the details that make premium door systems successful:
                product guidance, opening review, installation planning, field coordination, and
                specialty installation.
              </p>
              <p>
                Pinto Developments is
                positioned as a specialty door systems partner for homeowners, designers,
                architects, builders, and general contractors working on high-end projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section surface-section">
        <div className="container">
          <SectionHeader
            eyebrow="Specialized Support"
            title="What Pinto Developments does differently"
            text="Premium door systems require more than basic installation. The opening, product, access, hardware, sequencing, and final adjustment all matter."
          />

          <div className="card-grid card-grid-4">
            {specialtyItems.map((item) => (
              <article className="info-card" key={item.title}>
                <span className="card-label">{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section planning-section">
        <div className="container planning-grid">
          <div>
            <p className="eyebrow">Trust + Focus</p>
            <h2>A focused partner for specialty door projects</h2>
            <p>
              Pinto Developments supports clients and project teams with technical door system
              experience, practical field coordination, and a clear focus on premium residential and
              boutique commercial applications.
            </p>
          </div>

          <ul className="check-list">
            {trustItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Project Fit</p>
            <h2>Best suited for premium systems and complex openings</h2>
          </div>

          <div className="rich-text">
            <p>
              Pinto Developments is a good fit for clients who are planning large openings,
              specialty systems, custom doors, or architectural door features that need careful
              coordination before installation.
            </p>
            <p>
              That includes bi-fold door systems, multi-slide systems, pocketing systems, pivot
              doors, solid steel door systems, aluminum systems, and hidden Murphy Doors.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="About Your Project"
        title="Have a specialty door system in mind?"
        text="Send project photos, opening size, location, timeline, and the door system you are considering."
        primaryLabel="Schedule a Consultation"
        primaryTo="/contact"
        secondaryLabel="View the Process"
        secondaryTo="/process"
      />
    </>
  );
}

export default AboutPage;