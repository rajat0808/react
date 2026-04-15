import { aboutHighlights, whyChooseUs } from "../content/siteContent.js";

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero fade-in-section">
        <div className="page-hero__inner">
          <span className="section-kicker">About Rental Dresses</span>
          <h1 className="page-hero__title">
            Built to simplify occasion styling — from wardrobe to final frame.
          </h1>
          <p className="page-hero__copy">
            Based in Lucknow and serving clients across India, Rental Dresses was founded with a
            simple belief — every special moment deserves to look extraordinary without the stress
            of buying, storing, or over-spending on outfits worn only once.
          </p>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="about-story fade-in-section">
        <div className="about-story__inner">
          <div className="about-story__content">
            <span className="section-kicker">Our Story</span>
            <h2 className="section-title">One-stop solution for milestone moments</h2>
            <p className="section-copy">
              Instead of making clients piece together outfits, fittings, hair, makeup, props,
              and photography across different vendors, the experience is coordinated as one
              visual system. The result is a cleaner process and stronger imagery.
            </p>
            <p className="section-copy">
              From pre-wedding and maternity shoots to newborn, toddler, and family photography, we
              offer thoughtfully curated gowns, lehengas, blazers, tuxedos, and suits paired with
              professional styling and photography — outfits, makeup, hair, styling, locations,
              props, photographers, and complete shoot coordination, all under one roof.
            </p>
            <div className="about-story__quote">
              <span className="about-story__quote-mark">"</span>
              <p>
                The goal is simple: make the experience feel calm behind the scenes and elevated
                in the final frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="services-overview fade-in-section">
        <div className="section-heading">
          <span className="section-kicker">Why choose us</span>
          <h2 className="section-title">What sets Rental Dresses apart</h2>
        </div>
        <div className="services-grid">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="service-card">
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="services-overview fade-in-section">
        <div className="section-heading">
          <span className="section-kicker">Our approach</span>
          <h2 className="section-title">How we work</h2>
        </div>
        <div className="services-grid services-grid--3">
          {aboutHighlights.map((item) => (
            <article key={item.title} className="service-card">
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__desc">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
