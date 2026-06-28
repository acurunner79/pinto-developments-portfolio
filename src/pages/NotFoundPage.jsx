import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="page-section">
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p className="lede">The requested page could not be found.</p>
        <Link className="button button-primary" to="/">Return Home</Link>
      </div>
    </section>
  );
}

export default NotFoundPage;