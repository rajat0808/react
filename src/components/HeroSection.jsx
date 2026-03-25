import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import heroPhoto from "../assets/hero-photo.png";

/* Stagger container */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = (y = 40) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 0.61, 0.36, 1] } },
});

const fadeScale = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, delay, ease: [0.22, 0.61, 0.36, 1] },
  },
});

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (reduceMotion) {
    return (
      <section className="hero" id="home" ref={ref}>
        <div className="hero__gradient" />
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="hero__eyebrow">The Digital Atelier</span>
            <h1 className="hero__headline">
              Curated Luxury for Your Most <em className="hero__headline-accent">Cherished</em> Moments.
            </h1>
            <p className="hero__sub">
              Step into an editorial dream with our hand-selected archive of haute couture gowns and
              professional photoshoot experiences tailored to your vision.
            </p>
            <div className="hero__actions">
              <a href="#collection" className="hero__btn hero__btn--primary">Explore Collection</a>
              <a href="#shoots" className="hero__btn hero__btn--outline">Book a Shoot</a>
            </div>
          </div>
          <div className="hero__imagery">
            <div className="hero__image-grid">
              <div className="hero__image-card hero__image-card--main">
                <img src={heroPhoto} alt="Editorial luxury dress" className="hero__img" />
              </div>
              <div className="hero__image-card hero__image-card--accent">
                <img src={heroPhoto} alt="Luxury gown close-up" className="hero__img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero" id="home" ref={ref}>
      {/* Animated gradient blobs */}
      <div className="hero__gradient" />
      <motion.div
        className="hero__blob hero__blob--1"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero__blob hero__blob--2"
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 25, -10, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero__inner"
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {/* Left — copy with staggered reveals */}
        <div className="hero__copy">
          <motion.span className="hero__eyebrow" variants={fadeUp(20)}>
            <motion.span
              className="hero__eyebrow-shimmer"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            />
            The Digital Atelier
          </motion.span>

          <motion.h1 className="hero__headline" variants={fadeUp(50)}>
            Curated Luxury for Your Most{" "}
            <motion.em
              className="hero__headline-accent"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Cherished
            </motion.em>{" "}
            Moments.
          </motion.h1>

          <motion.p className="hero__sub" variants={fadeUp(30)}>
            Step into an editorial dream with our hand-selected archive of haute
            couture gowns and professional photoshoot experiences tailored to
            your vision.
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp(30)}>
            <motion.a
              href="#collection"
              className="hero__btn hero__btn--primary"
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 16px 40px rgba(91,3,30,0.35)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="hero__btn-shimmer" />
              Explore Collection
            </motion.a>
            <motion.a
              href="#shoots"
              className="hero__btn hero__btn--outline"
              whileHover={{
                scale: 1.05,
                y: -3,
                borderColor: "#7a1d33",
                backgroundColor: "rgba(255,217,221,0.3)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              Book a Shoot
            </motion.a>
          </motion.div>
        </div>

        {/* Right — imagery with parallax float */}
        <motion.div className="hero__imagery" variants={fadeScale(0.2)}>
          <div className="hero__image-grid">
            <motion.div
              className="hero__image-card hero__image-card--main"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03, rotate: -1 }}
            >
              <img src={heroPhoto} alt="Editorial luxury dress" className="hero__img" />
              <div className="hero__image-overlay" />
            </motion.div>
            <motion.div
              className="hero__image-card hero__image-card--accent"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <img src={heroPhoto} alt="Luxury gown close-up" className="hero__img" />
              <div className="hero__image-overlay" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.div
          className="hero__scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
