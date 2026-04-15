import { aboutHighlights } from "../content/siteContent.js";

const studioMetrics = [
  { value: "500+", label: "clients styled" },
  { value: "180+", label: "shoots executed" },
  { value: "One team", label: "wardrobe to final frame" },
];

export default function AboutSection() {
  return (
    <section className="about fade-in-section" id="about-us">
      <div className="section-heading">
        <span className="section-kicker">Studio point of view</span>
        <div className="section-heading__row">
          <h2 className="section-title">Luxury is the system, not just the outfit.</h2>
          <p className="section-copy">
            The brand was built around a simple problem: special moments deserve better than
            fragmented planning. The solution is a tighter visual and operational workflow.
          </p>
        </div>
      </div>

      <div className="about__layout">
        <article className="about__story about__story--maroon">
          <p className="about__eyebrow">What makes the studio different</p>
          <h3 className="about__title about__title--light">
            Rental Dresses removes the usual vendor-juggling and turns the whole experience into a
            cleaner production flow.
          </h3>
          <p className="about__copy about__copy--light">
            Based in Lucknow and serving clients across India, the studio was shaped for people who
            want one strong visual result without managing five separate moving parts. Wardrobe,
            fittings, styling, glam, accessories, props, and direction are treated as connected
            decisions rather than isolated add-ons.
          </p>
          <p className="about__copy about__copy--light">
            That approach changes the experience on both sides of the camera: calmer prep, clearer
            decisions, better pacing, and images that feel more intentional.
          </p>

          <div className="about__quote about__quote--light">
            <span className="about__quote-mark">"</span>
            <p>
              The goal is simple: make the process feel composed behind the scenes so the final
              frame feels elevated without trying too hard.
            </p>
          </div>

          <div className="about__metrics">
            {studioMetrics.map((item) => (
              <article key={item.label} className="about__metric about__metric--light">
                <strong className="about__metric-value">{item.value}</strong>
                <span className="about__metric-label">{item.label}</span>
              </article>
            ))}
          </div>
        </article>

        <div className="about__highlights">
          {aboutHighlights.map((item, index) => (
            <article key={item.title} className="about__card about__card--accent">
              <span className="about__card-index">0{index + 1}</span>
              <h3 className="about__card-title">{item.title}</h3>
              <p className="about__card-copy">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}