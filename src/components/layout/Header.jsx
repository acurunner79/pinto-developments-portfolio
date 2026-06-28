import { useState } from "react";
import { NavLink } from "react-router-dom";
import { siteInfo } from "../../data/siteInfo.js";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Bi-Fold Doors", path: "/bi-fold-doors" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Process", path: "/process" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="container header-inner">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <span className="brand-name">{siteInfo.companyName}</span>
          <span className="brand-tagline">{siteInfo.tagline}</span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink className="nav-cta" to="/contact" onClick={closeMenu}>
            Schedule a Consultation
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;