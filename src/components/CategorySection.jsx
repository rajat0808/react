import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import velvetImg from "../assets/feature-velvet.png";
import embroideryImg from "../assets/feature-embroidery.png";
import atelierImg from "../assets/feature-atelier.png";

const DEFAULT_CATEGORY_GROUPS = [
  {
    title: "Rentals",
    description: "Curated premium outfits available on rent.",
    items: [
      {
        id: "maternity-gowns",
        name: "Maternity Gowns",
        description:
          "Elegant flowing gowns for maternity portraits. Soft textures, camera-friendly movement, and comfort-first structure built for longer sessions.",
      },
      {
        id: "pre-wedding-gowns",
        name: "Pre-Wedding Gowns",
        description:
          "Romantic and editorial gown styles for cinematic couple portraits, with silhouette choices that hold shape beautifully in natural light.",
      },
      {
        id: "lehengas",
        name: "Lehengas",
        description:
          "Statement lehengas that balance heritage detail with modern proportion so the final look feels rich, clean, and photogenic.",
      },
      {
        id: "mens-blazer-suit",
        name: "Men's Blazer / Suit",
        description:
          "Tailored blazer and suit options for polished couple frames, styled to feel sharp without becoming stiff on camera.",
      },
    ],
  },
  {
    title: "Shoots",
    description: "Professional shoots designed around each life milestone.",
    items: [
      {
        id: "maternity-shoot",
        name: "Maternity Shoot",
        description:
          "Soft storytelling setups focused on motherhood, comfort, and emotion with styling decisions that keep the frame refined from start to finish.",
      },
      {
        id: "pre-wedding-shoot",
        name: "Pre-Wedding Shoot",
        description:
          "Signature pre-wedding concepts with wardrobe, location logic, posing, and glam support aligned to one cohesive visual mood.",
      },
      {
        id: "new-born-shoot",
        name: "New-Born Shoot",
        description:
          "Gentle newborn sessions designed around safe pacing, wardrobe softness, and minimal-stress movement for families.",
      },
      {
        id: "toddler-shoot",
        name: "Toddler Shoot",
        description:
          "Playful, energy-led sessions built to capture natural expression while keeping the set calm and visually elevated.",
      },
    ],
  },
];

const CATEGORY_PROFILES = {
  Rentals: {
    pills: ["Fit guidance", "Accessory pairing", "Camera-led silhouettes"],
    cards: [
      { label: "Best for", value: "Portraits, pre-wedding, maternity, family styling" },
      { label: "What changes", value: "The outfit, the fit notes, and the styling shortlist" },
      { label: "Why it works", value: "You start from the garment and build the rest cleanly around it" },
    ],
    note: "Choose a rental lane when the wardrobe is the starting point and you want help narrowing the right silhouette fast.",
  },
  Shoots: {
    pills: ["Shoot planning", "Styling support", "Day-of coordination"],
    cards: [
      { label: "Best for", value: "Clients who want the production handled end to end" },
      { label: "What changes", value: "Moodboard, schedule, glam, wardrobe flow, and direction" },
      { label: "Why it works", value: "The session feels more coherent because every decision talks to the next one" },
    ],
    note: "Choose a shoot lane when you want styling, wardrobe, and on-set direction to feel like one controlled system.",
  },
};

const FEATURE_CARDS = [
  {
    title: "The velvet finish",
    text: "Fabric weight and drape selected to photograph with depth rather than flatten in the frame.",
    image: velvetImg,
  },
  {
    title: "Detail that reads",
    text: "Embroidery and trims chosen for controlled shine, texture, and close-up clarity.",
    image: embroideryImg,
  },
  {
    title: "Atelier workflow",
    text: "A one-team setup that keeps fittings, styling, and the final frame moving in sync.",
    image: atelierImg,
  },
];

const firstFallbackCategoryId = DEFAULT_CATEGORY_GROUPS[0].items[0].id;

export default function CategorySection() {
  const [activeGroupId, setActiveGroupId] = useState(DEFAULT_CATEGORY_GROUPS[0].title);
  const [activeCategoryId, setActiveCategoryId] = useState(firstFallbackCategoryId);
  const reduceMotion = useReducedMotion();

  const allCategories = useMemo(
    () =>
      DEFAULT_CATEGORY_GROUPS.flatMap((group) =>
        group.items.map((item) => ({ ...item, groupTitle: group.title }))
      ),
    []
  );

  const activeCategory =
    allCategories.find((item) => item.id === activeCategoryId) ?? allCategories[0];
  const activeProfile = CATEGORY_PROFILES[activeCategory.groupTitle];

  return (
    <section className="categories fade-in-section" id="collection">
      <div className="section-heading">
        <span className="section-kicker">Collection architecture</span>
        <div className="section-heading__row">
          <h2 className="section-title">Pick the lane. The experience reshapes around it.</h2>
          <p className="section-copy">
            Instead of a flat category list, the collection is organized like a working system:
            wardrobe-led when the outfit is the starting point, production-led when the full shoot
            needs planning around you.
          </p>
        </div>
      </div>

      <div className="categories__layout">
        <aside className="categories__sidebar">
          <div className="categories__sidebar-top">
            <span className="categories__sidebar-label">Modes</span>
            <p className="categories__sidebar-copy">
              Browse by outfit type or by shoot type depending on where your planning starts.
            </p>
          </div>

          <div className="categories__groups">
            {DEFAULT_CATEGORY_GROUPS.map((group) => {
              const isOpen = group.title === activeGroupId;

              return (
                <section
                  key={group.title}
                  className={`categories__group ${isOpen ? "categories__group--open" : ""}`}
                >
                  <button
                    type="button"
                    className="categories__group-button"
                    onClick={() => {
                      setActiveGroupId(group.title);
                      setActiveCategoryId(group.items[0].id);
                    }}
                  >
                    <span>{group.title}</span>
                    <span className="categories__group-toggle">{isOpen ? "−" : "+"}</span>
                  </button>
                  <p className="categories__group-desc">{group.description}</p>

                  <div className="categories__items">
                    {group.items.map((item) => {
                      const isActive = item.id === activeCategoryId;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`categories__item ${isActive ? "categories__item--active" : ""}`}
                          onClick={() => {
                            setActiveGroupId(group.title);
                            setActiveCategoryId(item.id);
                          }}
                        >
                          <span className="categories__item-name">{item.name}</span>
                          <span className="categories__item-meta">{isActive ? "Live" : "Open"}</span>
                        </button>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </aside>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeCategory.id}
            className="categories__detail"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="categories__detail-top">
              <span className="categories__detail-kicker">{activeCategory.groupTitle}</span>
              <span className="categories__detail-code">{activeCategory.id.replaceAll("-", " / ")}</span>
            </div>

            <h3 className="categories__detail-title">{activeCategory.name}</h3>
            <p className="categories__detail-copy">{activeCategory.description}</p>

            <div className="categories__detail-pills">
              {activeProfile.pills.map((item) => (
                <span key={item} className="categories__detail-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="categories__detail-grid">
              {activeProfile.cards.map((item) => (
                <article key={item.label} className="categories__insight-card">
                  <span className="categories__insight-label">{item.label}</span>
                  <p className="categories__insight-value">{item.value}</p>
                </article>
              ))}
            </div>

            <div className="categories__gallery">
              {FEATURE_CARDS.map((item) => (
                <article key={item.title} className="categories__gallery-card">
                  <div className="categories__gallery-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="categories__gallery-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="categories__gallery-copy">
                    <h4 className="categories__gallery-title">{item.title}</h4>
                    <p className="categories__gallery-text">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="categories__detail-footer">
              <p className="categories__detail-note">{activeProfile.note}</p>
              <a href="#contact" className="categories__detail-cta">
                Plan your session
              </a>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
