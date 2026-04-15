import { processSteps, shootCards } from "../content/siteContent.js";

export default function ShootsSection() {
  return (
    <section className="shoots fade-in-section" id="shoots">
      <div className="section-heading">
        <span className="section-kicker">Production flow</span>
        <div className="section-heading__row">
          <h2 className="section-title">Built like an editorial set, run with practical calm.</h2>
          <p className="section-copy">
            The work is not just styling. It is the sequence: concept, fit, glam, wardrobe change,
            posing, and pace. That logic is what keeps the images polished instead of improvised.
          </p>
        </div>
      </div>

      <div className="shoots__layout">
        <div className="shoots__process">
          <span className="shoots__process-label">Session path</span>
          <div className="shoots__steps">
            {processSteps.map((item) => (
              <article key={item.step} className="shoots__step">
                <span className="shoots__step-number">{item.step}</span>
                <div className="shoots__step-copy">
                  <h3 className="shoots__step-title">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="shoots__cards">
          {shootCards.map((card) => (
            <article key={card.title} className="shoots__card">
              <span className="shoots__card-accent">{card.accent}</span>
              <h3 className="shoots__card-title">{card.title}</h3>
              <p className="shoots__card-copy">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
