import maternityMain from "../assets/maternity-main.png";
import preWeddingMain from "../assets/pre-wedding-main.png";
import lehengaMain from "../assets/lehenga-main.png";
import menswearMain from "../assets/menswear-main.png";

export const PHONE = "9305177142";
export const WHATSAPP_URL = `https://wa.me/91${PHONE}`;
export const CALL_URL = `tel:+91${PHONE}`;


export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Contact", href: "/contact" },
];

export const heroStats = [
  { value: "500+", label: "happy clients" },
  { value: "180+", label: "styled shoots" },
  { value: "Pan-India", label: "delivery & service" },
];

export const services = [
  {
    title: "Maternity Shoots",
    description: "Soft storytelling setups focused on motherhood, comfort, and emotion with styling decisions that keep the frame refined.",
  },
  {
    title: "Newborn Shoots",
    description: "Gentle sessions designed around safe pacing, wardrobe softness, and minimal-stress movement for families.",
  },
  {
    title: "Pre-Wedding Shoots",
    description: "Signature concepts with wardrobe, location, posing, and glam support aligned to one cohesive visual mood.",
  },
  {
    title: "Toddler Shoots",
    description: "Playful, energy-led sessions built to capture natural expression while keeping the set calm and visually elevated.",
  },
];

export const outfitRentals = [
  {
    title: "Gowns",
    description: "Elegant flowing gowns for maternity and pre-wedding portraits. Soft textures, camera-friendly movement, and comfort-first fit.",
  },
  {
    title: "Sarees",
    description: "Curated saree collection for traditional and fusion shoots with drape options styled for the frame.",
  },
  {
    title: "Lehengas",
    description: "Statement lehengas that balance heritage detail with modern proportion — rich, clean, and photogenic.",
  },
  {
    title: "Blazers & Tuxedos",
    description: "Tailored blazer and suit options for polished couple frames, styled to feel sharp without becoming stiff on camera.",
  },
];

export const shootCards = [
  {
    title: "Pre-Wedding Editorials",
    description: "Dramatic silhouettes, location styling, and cinematic posing for couples who want a polished story instead of standard frames.",
    accent: "Golden hour direction",
  },
  {
    title: "Maternity Portraits",
    description: "Soft, flattering drapes and comfort-first styling designed to feel elegant on camera and effortless throughout the session.",
    accent: "Comfort-led fittings",
  },
  {
    title: "Newborn & Family Sets",
    description: "Gentle pacing, safe posing flow, and coordinated wardrobe planning so every image feels calm, warm, and elevated.",
    accent: "Low-stress planning",
  },
  {
    title: "Studio Styling Days",
    description: "Hair, makeup, accessories, and wardrobe curation handled in one place for a smooth shoot-day rhythm from start to finish.",
    accent: "One-team execution",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Choose the story",
    description: "We lock the milestone, mood, outfit direction, and styling references around the frames you want to create.",
  },
  {
    step: "02",
    title: "Fit and prep",
    description: "Your session is shaped around fittings, hair and makeup timing, accessories, props, and a practical shoot schedule.",
  },
  {
    step: "03",
    title: "Shoot with ease",
    description: "On the day, our team coordinates wardrobe changes, posing guidance, and production details so you stay camera-ready.",
  },
];

export const aboutHighlights = [
  {
    title: "Editorial eye",
    description: "Every rental and shoot is curated for texture, silhouette, and how the look reads in photographs.",
  },
  {
    title: "One-stop service",
    description: "Wardrobe, styling, hair, makeup, props, and photographer coordination are planned together instead of separately.",
  },
  {
    title: "Comfort-first execution",
    description: "We build around timing, fit, and personal confidence so the session feels organized without becoming rigid.",
  },
];

export const whyChooseUs = [
  {
    title: "500+ Happy Clients",
    description: "Trusted by hundreds of families across Lucknow and pan-India for their most important milestones.",
  },
  {
    title: "180+ Styled Shoots",
    description: "From maternity to pre-wedding, every shoot is planned with editorial-grade attention to detail.",
  },
  {
    title: "Pan-India Delivery",
    description: "We deliver outfits across India with careful packaging and flexible timelines.",
  },
  {
    title: "One-Team Coordination",
    description: "Wardrobe, styling, makeup, photography, and direction handled under one roof for a seamless experience.",
  },
];

export const contactPromises = [
  {
    title: "Fast replies",
    description: "WhatsApp-first coordination with quick availability checks and booking guidance.",
  },
  {
    title: "Tailored styling",
    description: "Recommendations shaped around your shoot type, timeline, and preferred visual mood.",
  },
  {
    title: "Shoot-day support",
    description: "A coordinated setup from outfit handling to styling touch-ups and final transitions.",
  },
];

export const serviceLinks = [
  { label: "WhatsApp", href: WHATSAPP_URL },
  { label: "Call Us", href: CALL_URL },
  {
    label: "Studio Directions",
    href: "https://www.google.com/maps/dir//Rental+Dresses,+A-1345%2F21,+Lekh+Raj+Marg,+near+Meena+Market+Road,+A+Block,+Liberty+Colony+Park,+Sarvodaya+Nagar,+Indira+Nagar,+Lucknow,+Uttar+Pradesh+226016/@26.814603,80.8882669,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfd50ee82ec59:0x42fdc2e362ddf028!2m2!1d80.9746637!2d26.8772864?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D",
  },
];

const sortImageEntries = (entries) =>
  entries.sort(([leftPath], [rightPath]) =>
    leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: "base" })
  );

const lehengaImages = sortImageEntries(
  Object.entries(
    import.meta.glob("../../Lehenge/*.{jpg,JPG,jpeg,JPEG,png,PNG,mp4,MP4}", {
      eager: true,
      import: "default",
    })
  )
).map(([, image]) => image);

const menswearImages = sortImageEntries(
  Object.entries(
    import.meta.glob("../../Blazers - Suits/*.{jpg,JPG,jpeg,JPEG,png,PNG,mp4,MP4}", {
      eager: true,
      import: "default",
    })
  )
).map(([, image]) => image);

const lehengaGalleryItems = lehengaImages.map((image, index) => ({
  id: `lehenga-look-${index + 1}`,
  name: `Lehenga Look ${String(index + 1).padStart(2, "0")}`,
  description: "Lehenga styling reference from your latest collection.",
  image,
}));

const menswearGalleryItems = menswearImages.map((image, index) => ({
  id: `menswear-look-${index + 1}`,
  name: `Blazer / Suit Look ${String(index + 1).padStart(2, "0")}`,
  description: "Blazer and suit styling reference from your latest collection.",
  image,
}));

/* Catalogue gallery sections */
export const catalogueSections = [
  {
    slug: "maternity-shoots",
    title: "Maternity Shoot Gallery",
    description: "Gown, Saree, Temple, and Ram–Sita themed shoots",
    items: [
      { id: "maternity-gown", name: "Gown Shoots", description: "Elegant maternity gown setups with draping and soft backdrops.", image: maternityMain },
      { id: "maternity-saree", name: "Saree Shoots", description: "Classic saree styling for timeless maternity portraits.", image: maternityMain },
      { id: "maternity-temple", name: "Temple Theme", description: "Heritage-inspired temple backdrop with traditional wardrobe.", image: maternityMain },
      { id: "maternity-ramsita", name: "Ram–Sita Theme", description: "Mythological couple-theme maternity shoots with full costume and set design.", image: maternityMain },
    ],
  },
  {
    slug: "pre-wedding",
    title: "Pre-Wedding Shoot Gallery",
    description: "Cinematic couple portraits with editorial styling and location direction.",
    items: [
      { id: "prewed-editorial", name: "Editorial Style", description: "High-fashion editorial couple shoots with curated wardrobe.", image: preWeddingMain },
      { id: "prewed-outdoor", name: "Outdoor / Location", description: "Destination and outdoor couple shoots with location-specific styling.", image: preWeddingMain },
    ],
  },
  {
    slug: "gowns",
    title: "Gowns Collection",
    description: "Premium gown rentals for maternity, pre-wedding, and editorial use.",
    items: [
      { id: "gown-flowing", name: "Flowing Gowns", description: "Ethereal gowns with movement and drape for portrait photography." },
      { id: "gown-structured", name: "Structured Gowns", description: "Fitted silhouettes with detail work for more editorial frames." },
    ],
  },
  {
    slug: "lehengas",
    title: "Lehenga Collection",
    description: "Heritage lehengas with modern proportion for standout photos.",
    items: lehengaGalleryItems.length
      ? lehengaGalleryItems
      : [
          { id: "lehenga-bridal", name: "Bridal Lehengas", description: "Statement bridal lehengas in reds, maroons, and golds.", image: lehengaMain },
          { id: "lehenga-pastel", name: "Pastel Lehengas", description: "Soft-tone lehengas for pre-wedding and reception looks.", image: lehengaMain },
        ],
  },
  {
    slug: "menswear",
    title: "Men's Wear — Blazers & Tuxedos",
    description: "Tailored menswear for couple shoots and formal occasions.",
    items: menswearGalleryItems.length
      ? menswearGalleryItems
      : [
          { id: "men-blazer", name: "Blazers", description: "Semi-formal blazer options in neutral and navy tones.", image: menswearMain },
          { id: "men-tuxedo", name: "Tuxedos", description: "Classic black and charcoal tuxedos for formal shoot settings.", image: menswearMain },
        ],
  },
];

/* Placeholder social links (to be updated later) */
export const socialLinks = {
  instagram: "#", // To be added
  youtube: "#",   // To be added
  email: "",      // To be added
  googleMaps: serviceLinks[2].href,
};
