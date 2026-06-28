function PortfolioCard({ item }) {
  return (
    <article className="portfolio-card">
      <div className="image-placeholder portfolio-image-placeholder" aria-hidden="true">
        <span>{item.category}</span>
      </div>

      <div className="portfolio-card-content">
        <span className="card-label">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
    </article>
  );
}

export default PortfolioCard;