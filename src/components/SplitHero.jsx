import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import logoUrl from "../assets/rental-dresses-logo.png";
import dressPhoto from "../assets/hero-photo.png";

const imageUrl = dressPhoto;
const DEFAULT_CATEGORY_GROUPS = [
  {
    title: "Rentals",
    description: "Curated premium outfits available on rent.",
    items: [
      {
        id: "maternity-gowns",
        name: "Maternity Gowns",
        description:
          "Elegant flowing gowns for maternity portraits with comfort-first fit.",
      },
      {
        id: "pre-wedding-gowns",
        name: "Pre-Wedding Gowns",
        description:
          "Romantic and editorial gown styles crafted for cinematic pre-wedding frames.",
      },
      {
        id: "lehengas",
        name: "Lehengas",
        description:
          "Statement lehengas in modern and traditional palettes for standout photos.",
      },
      {
        id: "mens-blazer-suit",
        name: "Men's Blazer/Suit",
        description:
          "Tailored blazer and suit options for sharp, polished couple shoots.",
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
          "Soft storytelling setups focused on motherhood, comfort, and emotion.",
      },
      {
        id: "pre-wedding-shoot",
        name: "Pre-Wedding Shoot",
        description:
          "Signature pre-wedding concepts with styling, location, and direction.",
      },
      {
        id: "new-born-shoot",
        name: "New-Born Shoot",
        description:
          "Gentle newborn sessions designed with safe posing and minimal-stress flow.",
      },
      {
        id: "toddler-shoot",
        name: "Toddler Shoot",
        description:
          "Playful, energy-led sessions that capture natural toddler expressions.",
      },
    ],
  },
];
const firstFallbackCategoryId = DEFAULT_CATEGORY_GROUPS[0].items[0].id;

export default function SplitHero() {
  const [revealed, setRevealed] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(
    firstFallbackCategoryId
  );
  const reduceMotion = useReducedMotion();

  const categoryGroups = DEFAULT_CATEGORY_GROUPS;

  const transition = {
    duration: reduceMotion ? 0.01 : 1.35,
    ease: [0.22, 0.61, 0.36, 1],
  };

  const toggleReveal = () => setRevealed((prev) => !prev);
  const allCategories = useMemo(
    () =>
      categoryGroups.flatMap((group) =>
        group.items.map((item) => ({ ...item, groupTitle: group.title }))
      ),
    [categoryGroups]
  );
  const activeCategory =
    allCategories.find((item) => item.id === activeCategoryId) ??
    allCategories[0];

  return (
    <div className="w-full bg-white">
      <motion.section
        className="relative flex min-h-screen w-full cursor-pointer items-center justify-center overflow-hidden bg-white px-6"
        onClick={toggleReveal}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleReveal();
          }
        }}
        role="button"
        tabIndex={0}
        aria-pressed={revealed}
        aria-label="Toggle cinematic reveal"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,29,51,0.24),transparent_56%),radial-gradient(circle_at_bottom,rgba(91,18,36,0.17),transparent_55%),linear-gradient(180deg,#ffffff_0%,#fbf4f6_100%)]" />

        <img
          src={logoUrl}
          alt="Rental Dresses"
          className="pointer-events-none absolute right-4 top-4 z-40 w-36 md:right-8 md:top-8 md:w-44"
        />

        <motion.img
          src={imageUrl}
          alt="Editorial dress fashion"
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[72vh] w-[76vw] max-h-[760px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] object-contain shadow-[0_35px_120px_rgba(0,0,0,0.28)]"
          initial={false}
          animate={{
            scale: revealed ? 1.4 : 1,
            filter: revealed ? "blur(0px)" : "blur(8px)",
          }}
          transition={transition}
        />

        <motion.div
          className="pointer-events-none absolute inset-0 z-20 bg-[#2a0612]"
          initial={false}
          animate={{ opacity: revealed ? 0.42 : 0 }}
          transition={transition}
        />

        <div
          className="absolute bottom-8 left-6 right-6 z-30 mx-auto w-full max-w-2xl md:left-16 md:right-auto md:bottom-8"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="rounded-2xl border border-[#9e556a]/35 bg-white/95 px-6 py-5 text-left shadow-[0_18px_60px_rgba(62,8,23,0.22)] backdrop-blur-[2px]">
            <div className="mb-3 text-[0.65rem] uppercase tracking-[0.4em] text-[#7a1d33]">
              About Us
            </div>
            <p className="font-playfair text-[clamp(0.95rem,2vw,1.1rem)] leading-relaxed text-[#3e1020]">
              Rental Dresses was founded with a simple belief - every special moment
              deserves to look extraordinary without the stress of buying, storing,
              or over-spending on outfits worn only once. Based in Lucknow and
              serving clients pan-India, we specialize in premium outfit rentals and
              end-to-end photoshoot services for life's most cherished milestones.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[#3e1020]">
              From pre-wedding and maternity shoots to newborn, toddler, and family
              photography, we offer thoughtfully curated gowns, lehengas, blazers,
              tuxedos, and suits paired with professional styling and photography.
              What sets us apart is our one-stop solution approach - outfits, makeup,
              hair, styling, locations, props, photographers, and complete shoot
              coordination, all under one roof.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[#3e1020]">
              With 500+ happy clients and 180+ successfully executed shoots, we
              focus on personalization, quality, and comfort. Every client receives
              individual attention to ensure the outfit, styling, and overall
              experience perfectly reflect their story.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[#3e1020]">
              At Rental Dresses, we don't just rent outfits - we help you create
              timeless memories, beautifully styled and effortlessly captured.
            </p>
          </div>
        </div>

      </motion.section>

      <motion.section
        className="relative flex min-h-screen w-full items-center justify-center bg-[#fff8fa] px-6 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fcecf2,transparent_60%),radial-gradient(circle_at_bottom,#f9e3ea,transparent_55%)]" />

        <img
          src={logoUrl}
          alt="Rental Dresses"
          className="pointer-events-none absolute right-4 top-4 z-10 w-32 md:right-8 md:top-8 md:w-40"
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-4 text-[0.7rem] uppercase tracking-[0.4em] text-[#7a1d33]">
            The Collection
          </div>
          <h2 className="font-playfair text-[clamp(2.5rem,6vw,4.2rem)] text-[#4e1524]">
            Designed for Bridal, Pre-Wedding, and Maternity Stories
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[1rem] leading-relaxed text-[#5f2534]">
            Explore premium gowns, lehengas, tuxedos, and suits curated for
            editorial-style shoots. Each look is styled to feel timeless,
            elevated, and effortless in front of the camera.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="relative w-full bg-[#fff4f7] px-6 py-16 md:py-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fbeaf0,transparent_58%),radial-gradient(circle_at_bottom,#f7dde6,transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="text-center">
            <div className="text-[0.7rem] uppercase tracking-[0.4em] text-[#6f6860]">
              Categories
            </div>
            <h2 className="mt-3 font-playfair text-[clamp(2rem,5vw,3.2rem)] text-[#4e1524]">
              Select a Category
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[320px,1fr]">
            <aside className="rounded-3xl border border-[#b57b8c] bg-white/95 p-4 shadow-[0_16px_45px_rgba(78,21,36,0.16)] backdrop-blur-sm">
              <div className="mb-3 text-[0.65rem] uppercase tracking-[0.28em] text-[#7a1d33]">
                Rentals and Shoots
              </div>
              <div className="space-y-4">
                {categoryGroups.map((group) => (
                  <div key={group.title}>
                    <button
                      type="button"
                      onClick={() => setActiveCategoryId(group.items[0].id)}
                      className="w-full text-left font-playfair text-[1.35rem] text-[#4b1624] transition-opacity hover:opacity-80"
                    >
                      {group.title}
                    </button>
                    <p className="mt-1 text-[0.88rem] text-[#7f5160]">
                      {group.description}
                    </p>
                    <div className="mt-3 space-y-2">
                      {group.items.map((item) => {
                        const isActive = item.id === activeCategoryId;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setActiveCategoryId(item.id)}
                            className={`group flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left text-[0.95rem] transition ${
                              isActive
                                ? "border-[#7a1d33] bg-[#fbeef2] text-[#4b1624] shadow-[0_8px_22px_rgba(76,20,35,0.16)]"
                                : "border-[#e4c7d1] bg-[#fff8fa] text-[#6a3342] hover:border-[#c590a1] hover:bg-[#fceef2]"
                            }`}
                          >
                            <span>{item.name}</span>
                            <span
                              className={`text-[0.7rem] uppercase tracking-[0.18em] ${
                                isActive ? "text-[#7a1d33]" : "text-[#a06b7b]"
                              }`}
                            >
                              Open
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            <motion.article
              key={activeCategory.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.45 }}
              className="rounded-3xl border border-[#c596a5] bg-[linear-gradient(140deg,#ffffff_0%,#f7e7ed_100%)] p-7 shadow-[0_24px_58px_rgba(78,21,36,0.2)] md:p-10"
            >
              <div className="text-[0.7rem] uppercase tracking-[0.3em] text-[#7a1d33]">
                {activeCategory.groupTitle}
              </div>
              <h3 className="mt-3 font-playfair text-[clamp(2rem,4vw,2.9rem)] text-[#4e1524]">
                {activeCategory.name}
              </h3>
              <p className="mt-4 max-w-2xl text-[1.04rem] leading-relaxed text-[#5b2a37]">
                {activeCategory.description}
              </p>

              <div className="mt-8 inline-flex rounded-full border border-[#b98595] bg-white px-4 py-2 text-[0.75rem] uppercase tracking-[0.24em] text-[#7a1d33]">
                Click another item from the sidebar to open
              </div>
            </motion.article>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
