import HeroSection from "../components/HeroSection.jsx";
import CategorySection from "../components/CategorySection.jsx";
import ShootsSection from "../components/ShootsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import { services, outfitRentals } from "../content/siteContent.js";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ── Services Overview ── */}
      <section className="services-overview fade-in-section" id="services">
        <div className="section-heading">
          <span className="section-kicker">What we do</span>
          <h2 className="section-title">Shoots & Styling Services</h2>
          <p className="section-copy">
            Professional photoshoot services designed around each life milestone — from maternity
            to pre-wedding — with wardrobe, glam, and coordination handled as one system.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Outfit Rentals ── */}
      <section className="services-overview fade-in-section" id="rentals">
        <div className="section-heading">
          <span className="section-kicker">Outfit Rentals</span>
          <h2 className="section-title">Premium Wardrobe, One Session at a Time</h2>
          <p className="section-copy">
            Curated rental outfits — gowns, sarees, lehengas, blazers, and tuxedos — fitted and
            styled so the wardrobe works for the camera, not against it.
          </p>
        </div>
        <div className="services-grid">
          {outfitRentals.map((o) => (
            <article key={o.title} className="service-card">
              <h3 className="service-card__title">{o.title}</h3>
              <p className="service-card__desc">{o.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CategorySection />
      <ShootsSection />

      <ContactSection />
    </>
  );
}
