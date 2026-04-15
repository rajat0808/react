import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import heroAccent from "../assets/hero-accent.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const activeState = inView ? "visible" : "hidden";

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero__backdrop" />
      <div className="hero__orb hero__orb--one" />
      <div className="hero__orb hero__orb--two" />

      <motion.div
        className="hero__grid"
        variants={container}
        initial="hidden"
        animate={activeState}
      >
        <div className="hero__copy">
          <motion.h1 className="hero__headline" variants={fadeUp}>
            Transform Your Vision Into <span className="hero__headline-accent">Stunning Reality</span>
          </motion.h1>

          <motion.p className="hero__lede" variants={fadeUp}>
            We craft exceptional editorial experiences that elevate brands, drive growth, and create 
            lasting impact in the modern styling landscape.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <a href="#collection" className="hero__button hero__button--primary">
              Explore Collection
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginLeft: '8px'}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual-stage"
          variants={fadeUp}
          transition={{ duration: reduceMotion ? 0.01 : 0.7 }}
        >
          <article className="hero__portrait-card hero__float-card">
            <div className="hero__portrait-media hero__maroon-gradient">
              <div className="hero__gradient-content">
                <span className="hero__gradient-text">Elevate</span>
                <span className="hero__gradient-text">Your Style</span>
              </div>
            </div>
            <div className="hero__portrait-caption">
              <div>
                <span className="hero__caption-label">Featured collection</span>
                <h2 className="hero__caption-title">Luxury gowns & lehengas</h2>
              </div>
              <span className="hero__portrait-badge">New Season</span>
            </div>
          </article>

          <div className="hero__aside-stack">
            <article className="hero__mini-card hero__float-card hero__float-card--delay">
              <div className="hero__mini-media">
                <img src={heroAccent} alt="Detailed gown embellishment" className="hero__image" />
              </div>
              <div className="hero__mini-copy">
                <span className="hero__caption-label">Texture study</span>
                <p>Fabric, embellishment, fit, and movement chosen to read well on camera.</p>
              </div>
            </article>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
