import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerReveal = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const colReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.footer
      className="footer"
      ref={ref}
      variants={footerReveal}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <div className="footer__inner">
        <motion.div variants={colReveal}>
          <motion.div
            className="footer__brand-name"
            whileHover={{ x: 4 }}
          >
            Rental Dresses
          </motion.div>
          <p className="footer__brand-desc">
            Redefining the relationship between luxury fashion and sustainable
            elegance. Your digital atelier for the extraordinary.
          </p>
        </motion.div>

        <motion.div variants={colReveal}>
          <div className="footer__col-title">Explore</div>
          <ul className="footer__links">
            {["Collection", "Showroom", "Gift Cards"].map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <motion.a
                  href={`#${link.toLowerCase()}`}
                  className="footer__link"
                  whileHover={{ x: 6, color: "#7a1d33" }}
                >
                  {link}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={colReveal}>
          <div className="footer__col-title">Service</div>
          <ul className="footer__links">
            {["Shipping", "Returns", "Fitting"].map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <motion.a
                  href="#"
                  className="footer__link"
                  whileHover={{ x: 6, color: "#7a1d33" }}
                >
                  {link}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={colReveal}>
          <div className="footer__col-title">Connect</div>
          <ul className="footer__links">
            {[
              { label: "Instagram", href: "https://www.instagram.com/" },
              { label: "WhatsApp", href: "https://wa.me/919305024641" },
              { label: "Call Us", href: "tel:+919305024641" },
            ].map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.08 }}
              >
                <motion.a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="footer__link"
                  whileHover={{ x: 6, color: "#7a1d33" }}
                >
                  {link.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="footer__bottom"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span>© 2024 Rental Dresses. The Digital Atelier.</span>
        <div className="footer__bottom-links">
          <motion.a href="#" className="footer__bottom-link" whileHover={{ y: -2 }}>Privacy Policy</motion.a>
          <motion.a href="#" className="footer__bottom-link" whileHover={{ y: -2 }}>Terms of Service</motion.a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
