import { contactPromises, WHATSAPP_URL, CALL_URL } from "../content/siteContent.js";

export default function ContactSection() {
  return (
    <section className="contact fade-in-section" id="contact">
      <div className="contact__grid">
        <div className="contact__panel">
          <span className="section-kicker">
            Book a Session
          </span>
          <h2 className="section-title">
            Share the milestone. We&apos;ll shape the wardrobe, styling, and shoot flow around it.
          </h2>
          <p className="section-copy">
            Reach out for outfit availability, fittings, styling guidance, or a complete shoot
            package. WhatsApp works best for quick planning and reference sharing.
          </p>

          <div className="contact__actions">
            <a className="contact__button contact__button--primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <a className="contact__button contact__button--secondary" href={CALL_URL}>
              Call Us
            </a>
          </div>
        </div>

        <div className="contact__details">
          {contactPromises.map((item) => (
            <article key={item.title} className="contact__card">
              <h3 className="contact__card-title">{item.title}</h3>
              <p className="contact__card-copy">{item.description}</p>
            </article>
          ))}

          <a
            className="contact__map"
            href="https://www.google.com/maps/dir//Rental+Dresses,+A-1345%2F21,+Lekh+Raj+Marg"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__map-label">Visit the studio</span>
            <strong>Indira Nagar, Lucknow</strong>
            <p>A-1345/21, Lekh Raj Marg, near Meena Market Road.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
