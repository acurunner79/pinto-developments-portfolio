import { services } from "../../data/services.js";
import ServiceCard from "../cards/SeviceCard.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";

function ServicePreviewGrid() {
  const previewServices = services.slice(1);

  return (
    <section className="page-section surface-section">
      <div className="container">
        <SectionHeader
          eyebrow="Door Systems"
          title="Specialty systems for premium openings"
          text="Pinto Developments works with complex door systems that require planning, field coordination, and careful installation."
        />

        <div className="service-preview-grid">
          {previewServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePreviewGrid;