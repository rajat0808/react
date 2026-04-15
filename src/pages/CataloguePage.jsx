import { useState } from "react";
import { catalogueSections, WHATSAPP_URL } from "../content/siteContent.js";

export default function CataloguePage() {
  const [activeSlug, setActiveSlug] = useState(catalogueSections[0].slug);
  const [brokenImages, setBrokenImages] = useState({});
  const activeSection = catalogueSections.find((s) => s.slug === activeSlug) ?? catalogueSections[0];

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero fade-in-section">
        <div className="page-hero__inner">
          <span className="section-kicker">Catalogue</span>
          <h1 className="page-hero__title">
            Browse the collection — outfits, shoots, and themes.
          </h1>
          <p className="page-hero__copy">
            Each section is organized by use-case. Pick a category to explore what's available for
            your milestone session.
          </p>
        </div>
      </section>

      {/* ── Catalogue Browser ── */}
      <section className="catalogue fade-in-section">
        <div className="catalogue__layout">
          {/* Tab navigation */}
          <nav className="catalogue__tabs" aria-label="Catalogue sections">
            {catalogueSections.map((section) => (
              <button
                key={section.slug}
                type="button"
                className={`catalogue__tab ${section.slug === activeSlug ? "catalogue__tab--active" : ""}`}
                onClick={() => setActiveSlug(section.slug)}
              >
                {section.title}
              </button>
            ))}
          </nav>

          {/* Active section content */}
          <div className="catalogue__content">
            <div className="catalogue__section-header">
              <h2 className="catalogue__section-title">{activeSection.title}</h2>
              <p className="catalogue__section-desc">{activeSection.description}</p>
            </div>

            <div className="catalogue__grid">
              {activeSection.items.map((item) => (
                <article key={item.id} className="catalogue__card">
                  <a 
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi! I'm interested in the "${item.name}" from your catalogue.\n\nImage reference: ${window.location.origin}${item.image}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="catalogue__card-visual-link"
                    title={`Enquire about ${item.name}`}
                  >
                    <div className="catalogue__card-placeholder">
                      {item.image && !brokenImages[item.id] ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="catalogue__card-image"
                          loading="lazy"
                          decoding="async"
                          onError={() =>
                            setBrokenImages((current) => ({ ...current, [item.id]: true }))
                          }
                        />
                      ) : (
                        <span className="catalogue__card-icon">📷</span>
                      )}
                      <div className="catalogue__card-overlay">
                        <span className="catalogue__card-overlay-text">Send Enquiry</span>
                      </div>
                    </div>
                  </a>
                  <div className="catalogue__card-body">
                    <h3 className="catalogue__card-title">{item.name}</h3>
                    <p className="catalogue__card-desc">{item.description}</p>
                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi! I'm interested in: ${item.name}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="catalogue__card-cta"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
