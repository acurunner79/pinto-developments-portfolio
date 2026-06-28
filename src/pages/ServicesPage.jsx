import Button from "../components/ui/Button.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { services } from "../data/services.js";

const serviceDetails = services.filter((service) => !service.featured);

function ServicesPage() {
  return (
    <>
      <section className="service-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-content">
            <p className="eyebrow">Specialty Door Systems</p>
            <h1 className="display-heading">Premium systems for complex openings</h1>
            <p className="lede">
              Pinto Developments works with high-end door systems that require product guidance,
              opening review, installation planning, field coordination, and careful final
              adjustment.
            </p>

            <div className="button-row">
              <Button to="/contact">Request a Consultation</Button>
              <Button to="/bi-fold-doors" variant="secondary">
                Explore Bi-fold Systems
              </Button>
            </div>
          </div>

          <div className="service-hero-image image-placeholder" aria-hidden="true">
            <span>Specialty Door Systems</span>
          </div>
        </div>
      </section>

      <section className="page-section surface-section">
        <div className="container">
          <SectionHeader
            eyebrow="Services"
            title="Door systems Pinto Developments works with"
            text="Each system has its own planning requirements, field conditions, and installation details."
          />

          <div className="service-overview-grid">
            {serviceDetails.map((service) => (
              <article className="overview-card" key={service.title}>
                <span className="card-label">{service.title}</span>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="System Details"
            title="Specialized support from planning to installation"
            text="The goal is to help clients understand what each system does and why the opening conditions matter before the product arrives."
          />

          <div className="service-detail-stack">
            {serviceDetails.map((service, index) => (
              <article
                className={`service-detail-row ${
                  index % 2 === 1 ? "service-detail-row-reverse" : ""
                }`}
                key={service.title}
              >
                <div className="service-detail-image image-placeholder" aria-hidden="true">
                  <span>{service.title}</span>
                </div>

                <div className="service-detail-content">
                  <p className="eyebrow">{service.title}</p>
                  <h2>{service.title}</h2>
                  <p>{service.detail}</p>

                  <div className="planning-note">
                    <span>Planning focus</span>
                    <p>{service.planning}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section planning-section">
        <div className="container planning-grid">
          <div>
            <p className="eyebrow">Coordination Note</p>
            <h2>Some openings require more than installation</h2>
            <p>
              Specialty door systems often involve coordination with a general contractor,
              carpenter, architect, designer, manufacturer requirements, or other trades. Pinto
              Developments helps identify those needs early so the final installation has a better
              path to success.
            </p>
          </div>

          <ul className="check-list">
            <li>Manufacturer specification review</li>
            <li>Opening preparation guidance</li>
            <li>Track and threshold planning</li>
            <li>Access and staging coordination</li>
            <li>Panel handling and protection</li>
            <li>Hardware adjustment</li>
            <li>Final operation testing</li>
            <li>GC / carpenter coordination</li>
          </ul>
        </div>
      </section>

      <CTASection
        eyebrow="Specialty Door Consultation"
        title="Have a door system in mind?"
        text="Send photos, opening size, project location, and the type of door system you are considering. Pinto Developments can help review the next step."
        primaryLabel="Request a Consultation"
        primaryTo="/contact"
        secondaryLabel="View Selected Work"
        secondaryTo="/portfolio"
      />
    </>
  );
}

export default ServicesPage;