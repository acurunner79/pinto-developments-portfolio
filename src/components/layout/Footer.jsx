import { Link } from "react-router-dom";
import { siteInfo } from "../../data/siteInfo.js";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{siteInfo.companyName}</p>
          <p>{siteInfo.tagline}</p>
          <p>{siteInfo.serviceLine}</p>
        </div>

        <div>
          <p className="footer-heading">Service Area</p>
          <p>{siteInfo.serviceArea}</p>
        </div>

        <div>
          <p className="footer-heading">Contact</p>
          <p>
            <a href={`tel:${siteInfo.phone.replaceAll("-", "")}`}>{siteInfo.phone}</a>
          </p>
          <p>
            <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
          </p>
        </div>

        <div>
          <p className="footer-heading">Next Step</p>
          <Link className="footer-link" to="/contact">
            Start Your Door Project
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteInfo.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;