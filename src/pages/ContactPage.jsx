import { useState } from "react";
import { contactPromises, WHATSAPP_URL, CALL_URL, PHONE, socialLinks } from "../content/siteContent.js";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.name}.\nPhone: ${form.phone}\n\n${form.message}`;
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero fade-in-section">
        <div className="page-hero__inner">
          <span className="section-kicker">Get in Touch</span>
          <h1 className="page-hero__title">
            Share the milestone. We'll shape the wardrobe and shoot flow around it.
          </h1>
          <p className="page-hero__copy">
            Reach out for outfit availability, fittings, styling guidance, or a complete shoot
            package. WhatsApp works best for quick planning.
          </p>
        </div>
      </section>

      <section className="contact-page fade-in-section">
        <div className="contact-page__layout">
          {/* ── Contact Form ── */}
          <div className="contact-form-card">
            <h2 className="contact-form-card__title">Send us a message</h2>
            {submitted ? (
              <div className="contact-form-card__success">
                <p>✅ Redirected to WhatsApp — we'll reply shortly!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <label className="contact-form__label">
                  Your Name
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="contact-form__input"
                    placeholder="E.g. Priya Sharma"
                  />
                </label>
                <label className="contact-form__label">
                  Phone Number
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="contact-form__input"
                    placeholder="E.g. 9305177142"
                  />
                </label>
                <label className="contact-form__label">
                  Tell us about your milestone
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="contact-form__textarea"
                    placeholder="E.g. Looking for a maternity shoot with gown rental in June..."
                  />
                </label>
                <button type="submit" className="contact-form__submit">
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* ── Quick Contact ── */}
          <div className="contact-info">
            <div className="contact-info__section">
              <h3 className="contact-info__title">Quick Contact</h3>
              <div className="contact-info__buttons">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="contact-info__btn contact-info__btn--wa">
                  WhatsApp: {PHONE}
                </a>
                <a href={CALL_URL} className="contact-info__btn contact-info__btn--call">
                  Call: {PHONE}
                </a>
              </div>
            </div>

            <div className="contact-info__section">
              <h3 className="contact-info__title">Visit the Studio</h3>
              <p className="contact-info__text">
                A-1345/21, Lekh Raj Marg<br />
                near Meena Market Road, Indira Nagar<br />
                Lucknow, Uttar Pradesh 226016
              </p>
              <a href={socialLinks.googleMaps} target="_blank" rel="noreferrer" className="contact-info__map-link">
                Get Directions →
              </a>
            </div>

            {/* Placeholder sections for future content */}
            <div className="contact-info__section">
              <h3 className="contact-info__title">Follow Us</h3>
              <div className="contact-info__social-links">
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="contact-info__social">
                  Instagram
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="contact-info__social">
                  YouTube
                </a>
              </div>
            </div>

            {contactPromises.map((item) => (
              <div key={item.title} className="contact-info__promise">
                <h4 className="contact-info__promise-title">{item.title}</h4>
                <p className="contact-info__promise-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
