import ResponsiveImage from "../ui/ResponsiveImage.jsx";

function PortfolioCard({ item }) {
  return (
    <article className="portfolio-card">
      <ResponsiveImage
        src={item.images?.feature}
        alt={`${item.title} project example`}
        label={item.category}
        className="portfolio-image-placeholder"
      />

      <div className="portfolio-card-content">
        <span className="card-label">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;