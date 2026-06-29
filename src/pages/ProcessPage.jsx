import Button from "../components/ui/Button.jsx";
import CTASection from "../components/sections/CTASection.jsx";
import ProcessStep from "../components/cards/ProcessStep.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { processSteps } from "../data/processSteps.js";
import PageMeta from "../components/ui/PageMeta.jsx";

const clientPrepItems = [
  "Project location",
  "Photos of the opening or planned area",
  "Approximate opening width and height",
  "Door system type being considered",
  "New construction or remodel status",
  "Desired timeline",
  "GC, architect, designer, or builder involvement",
  "Any known structural or access limitations",
];

const coordinationItems = [
  {
    title: "General contractors",
    text: "Coordinate opening preparation, framing readiness, site access, and finish scope.",
  },
  {
    title: "Architects and designers",
    text: "Review design intent, operation goals, sightlines, finishes, thresholds, and system compatibility.",
  },
  {
    title: "Carpenters and finish trades",
    text: "Clarify casing, trim, surrounding finish work, drywall repair, staining, painting, and final transitions.",
  },
];

function ProcessPage() {
  return (
    <>
      <PageMeta
        title="Process | Pinto Developments"
        description="Learn the Pinto Developments process for specialty door systems, from system selection and opening review to installation and final function checks."
      />
      <section className="service-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-content">
            <p className="eyebrow">Process</p>
            <h1 className="display-heading">The structured approach to complex door systems</h1>
            <p className="lede">
              From system selection and opening review to logistics planning, installation, and
              final function checks, Pinto Developments helps guide the technical path before the
              door system is installed.
            </p>

            <div className="button-row">
              <Button to="/contact">Send Project Photos</Button>
              <Button to="/portfolio" variant="secondary">
                View Selected Work
              </Button>
            </div>
          </div>

          <div className="service-hero-image image-placeholder" aria-hidden="true">
            <span>Planning + Installation</span>
          </div>
        </div>
      </section>

      <section className="page-section surface-section">
        <div className="container">
          <SectionHeader
            eyebrow="Six-Step Workflow"
            title="From selection to function check"
            text="A clean project path helps reduce surprises before the system arrives on site."
          />

          <div className="process-grid">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">What to Send</p>
            <h2>Start with the right project details</h2>
          </div>

          <div>
            <p className="section-intro process-intro">
              A few early details can help determine the right conversation: photos, opening size,
              location, system type, timeline, and whether a GC, architect, designer, or builder is
              already involved.
            </p>

            <ul className="prep-list">
              {clientPrepItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section planning-section">
        <div className="container planning-grid">
          <div>
            <p className="eyebrow">Opening Review</p>
            <h2>The opening matters as much as the door</h2>
            <p>
              Specialty door systems depend on the surrounding conditions. Floor level, framing,
              wall conditions, track layout, threshold transitions, access, staging, and panel
              handling can all affect installation and final operation.
            </p>
          </div>

          <ul className="check-list">
            <li>Rough opening review</li>
            <li>Floor and threshold conditions</li>
            <li>Plumb, level, and clearances</li>
            <li>Track and drainage planning</li>
            <li>Wall and finish conditions</li>
            <li>Access and staging constraints</li>
            <li>Panel handling requirements</li>
            <li>Final operation readiness</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Coordination"
            title="Working with the project team"
            text="Some scopes require coordination beyond installation. Pinto Developments can work with the client’s existing team or help identify what trades may need to be involved."
          />

          <div className="card-grid card-grid-3">
            {coordinationItems.map((item) => (
              <article className="info-card" key={item.title}>
                <span className="card-label">{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section surface-section">
        <div className="container process-note-grid">
          <div className="image-placeholder" aria-hidden="true">
            <span>Custom Order + Lead Time</span>
          </div>

          <div>
            <p className="eyebrow">Custom Systems</p>
            <h2>Planning before the product arrives</h2>
            <div className="rich-text">
              <p>
                Many premium door systems involve custom ordering, manufacturer specifications, lead
                times, and site preparation before installation day.
              </p>
              <p>
                The exact timeline depends on the system, manufacturer, project conditions, and
                finish requirements. A typical lead-time example can be discussed during the
                consultation, but the final timeline should always be confirmed for the specific
                product and scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Final Check</p>
            <h2>Installation is not finished until the system operates correctly</h2>
          </div>

          <div className="rich-text">
            <p>
              The final step is confirming movement, alignment, hardware function, thresholds, and
              operation. For large-format systems, this final check is essential to making sure the
              installation performs as intended.
            </p>
            <p>
              Pinto Developments focuses on the technical side of specialty door systems: preparing
              for the conditions, coordinating the installation path, and testing the result.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Start the Process"
        title="Ready to review a specialty door project?"
        text="Send project photos, opening size, location, timeline, and the door system you are considering."
        primaryLabel="Send Project Photos"
        primaryTo="/contact"
        secondaryLabel="View Selected Work"
        secondaryTo="/portfolio"
      />
    </>
  );
}

export default ProcessPage;