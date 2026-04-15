import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logoUrl from "../assets/rental-dresses-logo.png";
import { navItems, WHATSAPP_URL } from "../content/siteContent.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        <Link to="/" className="header__brand" aria-label="Rental Dresses Home">
          <span className="header__brand-mark">
            <img src={logoUrl} alt="Rental Dresses" className="header__logo-img" />
          </span>
        </Link>

        <nav className="header__nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`header__nav-link ${location.pathname === item.href ? "header__nav-link--active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="header__cta">
          Book Now
        </a>

        <button
          className="header__hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`header__hamburger-bar ${mobileOpen ? "open" : ""}`} />
          <span className={`header__hamburger-bar ${mobileOpen ? "open" : ""}`} />
          <span className={`header__hamburger-bar ${mobileOpen ? "open" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="header__mobile-shell"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              className="header__mobile-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="header__mobile-nav-inner">
                <Link to="/" className="header__mobile-brand" aria-label="Rental Dresses Home">
                  <span className="header__mobile-brand-mark">
                    <img src={logoUrl} alt="Rental Dresses" className="header__mobile-brand-logo" />
                  </span>
                </Link>

                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="header__mobile-link"
                  >
                    {item.label}
                  </Link>
                ))}
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="header__cta header__cta--mobile">
                  Book Now
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
