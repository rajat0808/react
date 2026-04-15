import { WHATSAPP_URL, CALL_URL } from "../content/siteContent.js";

const socialItems = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
  },
  {
    label: "Google Maps",
    href: "https://www.google.com/maps/dir//Rental+Dresses,+A-1345%2F21,+Lekh+Raj+Marg,+near+Meena+Market+Road",
  },
  {
    label: "Call",
    href: CALL_URL,
    isCall: true,
  },
];

const Icons = {
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm10 2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z"
        fill="currentColor"
      />
      <path
        d="M12 8.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM16.8 7.2a1 1 0 11-2 0 1 1 0 012 0z"
        fill="currentColor"
      />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3a8.5 8.5 0 00-7.4 12.7L4 21l5.4-1.6A8.5 8.5 0 1012 3zm0 2a6.5 6.5 0 015.6 9.8l-.3.6.9 2.6-2.7-.8-.6.3A6.5 6.5 0 1112 5z"
        fill="currentColor"
      />
      <path
        d="M9.4 8.9c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .6.4.2.5.7 1.7.7 1.8 0 .2 0 .3-.1.5-.1.2-.2.3-.4.5-.2.2-.3.3-.1.6.2.3.9 1.5 2.3 2 .6.2.9.2 1.2-.1.3-.3.5-.6.7-.9.2-.3.4-.3.7-.2.3.1 1.7.8 2 .9.2.1.3.2.3.4 0 .2 0 .8-.5 1.5-.4.6-1.2 1-2.1 1-.5 0-1.6-.1-3.1-.9-1.9-1-3.1-2.9-3.3-3.2-.1-.3-.8-1.1-.8-2.1 0-1 .5-1.5.7-1.7z"
        fill="currentColor"
      />
    </svg>
  ),
  "Google Maps": (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3a7 7 0 00-7 7c0 4.7 5.2 10 6.4 11.2a.9.9 0 001.2 0C13.8 20 19 14.7 19 10a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        fill="currentColor"
      />
    </svg>
  ),
  Call: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.6 3.5c.4-.4 1-.5 1.5-.2l2.3 1.3c.6.3.8 1 .6 1.6l-.7 2c-.2.5 0 1 .4 1.4l2.2 2.2c.4.4.9.5 1.4.4l2-.7c.6-.2 1.2 0 1.6.6l1.3 2.3c.3.5.2 1.2-.2 1.5l-1.2 1.2c-.9.9-2.2 1.2-3.4.8-2.5-.8-4.8-2.3-6.8-4.3-2-2-3.5-4.3-4.3-6.8-.4-1.2-.1-2.5.8-3.4l1.2-1.2z"
        fill="currentColor"
      />
    </svg>
  ),
};

export default function SocialContactCard() {
  return (
    <div
      className="social-contact-card"
      onClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
    >
      {socialItems.map((item) => {
        const isExternal = !item.isCall;
        return (
          <a
            key={item.label}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            aria-label={item.label}
            className="social-contact-btn"
          >
            <span className="social-icon">
              <span className="icon-layer icon-primary">{Icons[item.label]}</span>
              <span className="icon-layer icon-secondary">{Icons[item.label]}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
