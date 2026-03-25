import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import logoUrl from "../assets/rental-dresses-logo.png";

const NAV_ITEMS = ["Home", "Collection", "Shoots", "About Us", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const d = reduceMotion ? 0 : 1;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`header ${scrolled ? "header--scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 * d, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="header__inner">
        {/* Logo */}
        <motion.a
          href="#"
          className="header__logo-link"
          aria-label="Rental Dresses Home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 * d, delay: 0.3 * d, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.img
            src={logoUrl}
            alt="Rental Dresses"
            className="header__logo-img"
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }}
          />
          <span className="header__logo-text">Rental Dresses</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main Navigation">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="header__nav-link"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 * d, delay: (0.5 + i * 0.08) * d }}
              whileHover={{ y: -2 }}
            >
              {item}
              <span className="header__nav-underline" />
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="#book"
          className="header__cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 * d, delay: 1 * d, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 28px rgba(91,3,30,0.35)" }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.a>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="header__mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="header__mobile-link"
                initial={{ x: -24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <a href="#book" className="header__cta header__cta--mobile" onClick={() => setMobileOpen(false)}>
              Book Now
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
