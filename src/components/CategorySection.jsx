import { motion, useReducedMotion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_CATEGORY_GROUPS = [
  {
    title: "Rentals",
    description: "Curated premium outfits available on rent.",
    items: [
      {
        id: "maternity-gowns",
        name: "Maternity Gowns",
        description:
          "Elegant flowing gowns for maternity portraits. Our collection features soft textures, ethereal layers, and silhouettes designed to celebrate the journey of motherhood with high-fashion grace.",
      },
      {
        id: "pre-wedding-gowns",
        name: "Pre-Wedding Gowns",
        description:
          "Romantic and editorial gown styles crafted for cinematic pre-wedding frames. Every gown features hand-stitched lace details that catch the golden hour light perfectly.",
      },
      {
        id: "lehengas",
        name: "Lehengas",
        description:
          "Statement lehengas in modern and traditional palettes for standout photos. Each design blends heritage craftsmanship with contemporary silhouettes.",
      },
      {
        id: "mens-blazer-suit",
        name: "Men's Blazer/Suit",
        description:
          "Tailored blazer and suit options for sharp, polished couple shoots. Premium fabrics with impeccable construction for the modern gentleman.",
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
          "Soft storytelling setups focused on motherhood, comfort, and emotion. Full editorial experiences with world-class fashion photographers.",
      },
      {
        id: "pre-wedding-shoot",
        name: "Pre-Wedding Shoot",
        description:
          "Signature pre-wedding concepts with styling, location, and direction. Our in-house glam team specializes in high-fashion editorial aesthetics.",
      },
      {
        id: "new-born-shoot",
        name: "New-Born Shoot",
        description:
          "Gentle newborn sessions designed with safe posing and minimal-stress flow. Conducted in a private, high-ceilinged atelier designed for comfort.",
      },
      {
        id: "toddler-shoot",
        name: "Toddler Shoot",
        description:
          "Playful, energy-led sessions that capture natural toddler expressions. Every session is a joyful celebration of childhood wonder.",
      },
    ],
  },
];

const firstFallbackCategoryId = DEFAULT_CATEGORY_GROUPS[0].items[0].id;

/* Animation variants */
const sectionReveal = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.12 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } },
};

const itemStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemPop = {
  hidden: { opacity: 0, x: -16, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const featureStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const featureCard = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
};

export default function CategorySection() {
  const [categoryGroups, setCategoryGroups] = useState(DEFAULT_CATEGORY_GROUPS);
  const [activeCategoryId, setActiveCategoryId] = useState(firstFallbackCategoryId);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);
  const [categoryError, setCategoryError] = useState("");
  const reduceMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const allCategories = useMemo(
    () =>
      categoryGroups.flatMap((group) =>
        group.items.map((item) => ({ ...item, groupTitle: group.title }))
      ),
    [categoryGroups]
  );

  const activeCategory =
    allCategories.find((item) => item.id === activeCategoryId) ?? allCategories[0];

  useEffect(() => {
    let ignore = false;

    async function loadCategories() {
      try {
        setIsCategoryLoading(true);
        setCategoryError("");
        const response = await fetch("/api/categories");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0 || ignore) return;

        const normalizedGroups = data
          .map((group) => ({
            title: group.title,
            description: group.description,
            items: Array.isArray(group.items) ? group.items : [],
          }))
          .filter(
            (group) =>
              typeof group.title === "string" &&
              typeof group.description === "string" &&
              group.items.length > 0
          );

        if (normalizedGroups.length > 0) {
          setCategoryGroups(normalizedGroups);
          setActiveCategoryId(normalizedGroups[0].items[0].id);
        }
      } catch (error) {
        if (!ignore) setCategoryError("Showing local collection. Connect API for live data.");
        console.error("Failed to load categories from API:", error);
      } finally {
        if (!ignore) setIsCategoryLoading(false);
      }
    }

    loadCategories();
    return () => { ignore = true; };
  }, []);

  return (
    <motion.section
      className="categories"
      id="collection"
      ref={sectionRef}
      variants={sectionReveal}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <div className="categories__gradient" />

      <div className="categories__inner">
        {/* Section header */}
        <motion.div className="categories__header" variants={slideUp}>
          <motion.span
            className="categories__eyebrow"
            variants={slideUp}
          >
            The Collection
          </motion.span>
          <motion.h2
            className="categories__title"
            variants={slideUp}
          >
            Select a Category
          </motion.h2>
        </motion.div>

        <div className="categories__grid">
          {/* Sidebar with staggered items */}
          <motion.aside className="categories__sidebar" variants={slideRight}>
            <motion.div
              className="categories__sidebar-label"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ overflow: "hidden", whiteSpace: "nowrap" }}
            >
              Curated Collections
            </motion.div>

            <AnimatePresence>
              {isCategoryLoading && (
                <motion.p
                  className="categories__status-msg"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  Loading categories…
                </motion.p>
              )}
              {!isCategoryLoading && categoryError && (
                <motion.p
                  className="categories__status-msg"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {categoryError}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.div className="categories__groups" variants={itemStagger}>
              {categoryGroups.map((group, gi) => (
                <motion.div
                  key={group.title}
                  className="categories__group"
                  variants={slideRight}
                  custom={gi}
                >
                  <motion.button
                    type="button"
                    onClick={() => setActiveCategoryId(group.items[0].id)}
                    className="categories__group-title"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {group.title}
                  </motion.button>
                  <p className="categories__group-desc">{group.description}</p>

                  <motion.div className="categories__items" variants={itemStagger}>
                    {group.items.map((item) => {
                      const isActive = item.id === activeCategoryId;
                      return (
                        <motion.button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveCategoryId(item.id)}
                          className={`categories__item ${isActive ? "categories__item--active" : ""}`}
                          variants={itemPop}
                          whileHover={{
                            x: 6,
                            boxShadow: "0 6px 20px rgba(91,3,30,0.15)",
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{ scale: 0.97 }}
                          layout
                        >
                          <span className="categories__item-name">{item.name}</span>
                          <motion.span
                            className="categories__item-action"
                            animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                            transition={{ duration: 0.4 }}
                          >
                            Open
                          </motion.span>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.aside>

          {/* Detail card with exit/enter animations */}
          <AnimatePresence mode="wait">
            <motion.article
              key={activeCategory.id}
              className="categories__detail"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.55,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <motion.span
                className="categories__detail-eyebrow"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {activeCategory.groupTitle}
              </motion.span>

              <motion.h3
                className="categories__detail-title"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                {activeCategory.name}
              </motion.h3>

              <motion.div
                className="categories__detail-divider"
                initial={{ width: 0 }}
                animate={{ width: "60px" }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              />

              <motion.p
                className="categories__detail-desc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                {activeCategory.description}
              </motion.p>

              <motion.div
                className="categories__detail-features"
                variants={featureStagger}
                initial="hidden"
                animate="show"
              >
                {[
                  { icon: "✦", title: "The Velvet Touch", text: "Sourced from the finest mills, our collection offers unmatched weight and drape for portrait photography." },
                  { icon: "✦", title: "Intricate Embroidery", text: "Hand-stitched lace details that catch the golden hour light perfectly." },
                  { icon: "✦", title: "In-House Atelier", text: "Private, high-ceilinged space designed for comfort and creative expression." },
                ].map((f) => (
                  <motion.div
                    key={f.title}
                    className="categories__feature"
                    variants={featureCard}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 12px 30px rgba(91,3,30,0.12)",
                      transition: { duration: 0.25 },
                    }}
                  >
                    <motion.div
                      className="categories__feature-icon"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {f.icon}
                    </motion.div>
                    <h4 className="categories__feature-title">{f.title}</h4>
                    <p className="categories__feature-text">{f.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                href="#book"
                className="categories__detail-cta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                whileHover={{
                  scale: 1.06,
                  y: -3,
                  boxShadow: "0 16px 40px rgba(91,3,30,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hero__btn-shimmer" />
                View Full Catalog
              </motion.a>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
