import Button from "../ui/Button.jsx";

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="image-placeholder" aria-hidden="true">
        <span>{service.title}</span>
      </div>

      <div className="service-card-content">
        {service.featured && <span className="card-label">Featured Service</span>}
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <Button to={service.slug} variant="secondary">
          Learn More
        </Button>
      </div>
    </article>
  );
}

export default ServiceCard;