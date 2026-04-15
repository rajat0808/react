import { Link } from "react-router-dom";
import { navItems, WHATSAPP_URL, socialLinks } from "../content/siteContent.js";
import logoUrl from "../assets/rental-dresses-logo.png";

const connectItems = [
  { label: "WhatsApp", href: WHATSAPP_URL, external: true },
  { label: "Instagram", href: socialLinks.instagram, external: true },
  { label: "Location", href: socialLinks.googleMaps, external: true },
  { label: "Call Us", href: "tel:+919305177142", external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer fade-in-section">
      <div className="footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__brand-logo-wrap" aria-label="Rental Dresses Home">
            <img src={logoUrl} alt="Rental Dresses logo" className="footer__brand-logo-large" />
          </Link>
        </div>

        <div>
          <div className="footer__col-title">Navigate</div>
          <ul className="footer__links">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer__col-title">Services</div>
          <ul className="footer__links">
            <li><Link to="/catalogue" className="footer__link">Wardrobe Rentals</Link></li>
            <li><Link to="/catalogue" className="footer__link">Shoot Planning</Link></li>
            <li><Link to="/contact" className="footer__link">Styling Support</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer__col-title">Connect</div>
          <ul className="footer__links">
            {connectItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="footer__link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {year} Rental Dresses. Designed for stronger frames and calmer sessions.</span>
        <div className="footer__bottom-links">
          <Link to="/about" className="footer__bottom-link">About</Link>
          <Link to="/contact" className="footer__bottom-link">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
