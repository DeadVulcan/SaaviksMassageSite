import React, { useEffect, useState } from "react";
import BookingInstructions from "./BookingInstructions";

// Primary navigation links – adjust hrefs to match section IDs/routes
const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  {
    href: "https://app.squareup.com/gift/MLPGP4TBKC3V1/order",
    label: "Gift Cards",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header site-header" data-aos="zoom-in">
      <div className="header__inner">
        <a
          className="brand"
          href="/#home"
          aria-label="Maryville Massage Works home"
        >
          <img
            className="brand__logo"
            src="/logo192.png"
            alt="Maryville Massage Works logo"
            width="40"
            height="40"
          />
          <div className="brand__text">
            <span className="brand__title">Maryville Massage Works</span>
            <span className="brand__subtitle">Massage & Wellness</span>
          </div>
        </a>

        <button
          className="nav-toggle"
          aria-controls="primary-nav"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            aria-hidden="true"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav ${open ? "is-open" : ""}`}
        >
          <ul className="nav__list" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="nav__item">
                <a
                  className="nav__link"
                  href={link.href}
                  onClick={() => setOpen(false)}
                  {
                    // If the label is "Gift Cards", open in a new tab.
                    ...(link.label === "Gift Cards"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="btn btn--primary book-now-button"
            href="https://maryvillemassageworks.setmore.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </nav>
      </div>

      {/* Backdrop for mobile menu */}
      <div
        className={`nav-backdrop ${open ? "is-visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
