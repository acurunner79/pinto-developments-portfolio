import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import PageMeta from "../components/ui/PageMeta.jsx";
import { siteInfo } from "../data/siteInfo.js";

const doorTypes = [
  "Bi-fold door systems",
  "Multi-slide door systems",
  "Pocketing door systems",
  "Pivot doors",
  "Solid steel door systems",
  "Aluminum door systems",
  "Hidden Murphy Doors",
  "Not sure yet",
];

const whatToSend = [
  "Photos of the opening or project area",
  "Approximate opening width and height",
  "Project location",
  "Door system type being considered",
  "Timeline or target installation window",
  "Whether this is new construction or remodel",
];

function ContactPage() {

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  setIsSubmitting(true);
  setFormError("");

  try {
    const response = await fetch("/", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Form submission failed.");
    }

    navigate("/thank-you");
  } catch {
    setFormError(
      "Something went wrong while sending the inquiry. Please call or email Pinto Developments directly."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <>
      <PageMeta
        title="Contact Pinto Developments"
        description="Contact Pinto Developments to start a specialty door system project in Chicago or Chicagoland."
      />
      <section className="service-hero contact-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-content">
            <p className="eyebrow">Contact</p>
            <h1 className="display-heading">Start your specialty door project</h1>
            <p className="lede">
              Send project details, photos, opening size, project location, and the door system you
              are considering. Pinto Developments can help review the next step.
            </p>

            <div className="button-row">
              <Button href={`tel:${siteInfo.phone.replaceAll("-", "")}`}>Call Joshua</Button>
              <Button href={`mailto:${siteInfo.email}`} variant="secondary">
                Email Pinto Developments
              </Button>
            </div>
          </div>

          <div className="service-hero-image image-placeholder" aria-hidden="true">
            <span>Project Inquiry</span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container contact-grid">
          <aside className="contact-card" aria-label="Direct contact information">
            <p className="eyebrow">Direct Contact</p>
            <h2>Pinto Developments</h2>

            <div className="contact-detail-list">
              <div>
                <span>Contact</span>
                <p>{siteInfo.contactName}</p>
              </div>

              <div>
                <span>Phone</span>
                <p>
                  <a href={`tel:${siteInfo.phone.replaceAll("-", "")}`}>{siteInfo.phone}</a>
                </p>
              </div>

              <div>
                <span>Email</span>
                <p>
                  <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
                </p>
              </div>

              <div>
                <span>Service Area</span>
                <p>{siteInfo.serviceArea}</p>
              </div>
            </div>

            <div className="contact-card-actions">
              <Button href={`tel:${siteInfo.phone.replaceAll("-", "")}`}>Call Joshua</Button>
              <Button href={`mailto:${siteInfo.email}`} variant="secondary">
                Send Email
              </Button>
            </div>
          </aside>

          <div className="contact-form-panel">
            <p className="eyebrow">Project Inquiry</p>
            <h2>Tell us about the opening</h2>

            <form
              className="contact-form"
              name="project-inquiry"
              method="POST"
              data-netlify="true"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="project-inquiry" />
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" autoComplete="name" required />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </div>

                <div className="form-field">
                  <label htmlFor="location">Project location</label>
                  <input id="location" name="location" type="text" autoComplete="address-level2" />
                </div>

                <div className="form-field">
                  <label htmlFor="doorType">Door type interested in</label>
                  <select id="doorType" name="doorType" defaultValue="">
                    <option value="" disabled>
                      Select a door system
                    </option>
                    {doorTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="openingSize">Approximate opening size</label>
                  <input
                    id="openingSize"
                    name="openingSize"
                    type="text"
                    placeholder="Example: 12 ft wide x 8 ft tall"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="projectType">New construction or remodel?</label>
                  <select id="projectType" name="projectType" defaultValue="">
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="New construction">New construction</option>
                    <option value="Remodel">Remodel</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="teamStatus">GC / architect / designer involved?</label>
                  <select id="teamStatus" name="teamStatus" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not yet">Not yet</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="timeline">Desired timeline</label>
                  <input id="timeline" name="timeline" type="text" placeholder="Example: Spring 2026" />
                </div>

                <div className="form-field">
                  <label htmlFor="budget">Budget range optional</label>
                  <input id="budget" name="budget" type="text" placeholder="Optional" />
                </div>

                <div className="form-field form-field-full">
                  <label htmlFor="photos">Upload photos optional</label>
                  <input id="photos" name="photos" type="file" multiple accept="image/*,.pdf" />
                  <p className="field-help">
                    Photos are optional for now. Final form handling will determine upload support.
                  </p>
                </div>

                <div className="form-field form-field-full">
                  <label htmlFor="message">Message / project description</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us about the opening, project goals, and the door system you are considering."
                  ></textarea>
                </div>
              </div>

              {formError && <p className="form-error">{formError}</p>}

              <button className="button button-primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="page-section surface-section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">What to Send</p>
            <h2>Helpful details for a better first review</h2>
          </div>

          <ul className="prep-list">
            {whatToSend.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ContactPage;