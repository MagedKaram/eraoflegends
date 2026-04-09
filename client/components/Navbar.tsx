// components/Navbar.tsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, isRTL, language } = useLanguage();

  const logoSrc = `${import.meta.env.BASE_URL}${
    language === "ar" ? "LOGO-ar.png" : "LOGO-en.png"
  }`;

  const location = useLocation();

  const openDownloadModal = () => {
    // يفتح المودال العالمي الموجود داخل AppShell
    window.dispatchEvent(new Event("open-download-modal"));
    setMobileOpen(false);
  };

  // منطق تغيير شفافّية/وضعية الناف عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const hero = document.querySelector(
        "[data-hero-section]",
      ) as HTMLElement | null;
      if (hero) {
        const h = hero.offsetHeight;
        setIsScrolled(y > h - 100);
      } else {
        setIsScrolled(y > 20);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50"
          : "absolute top-0 left-0 right-0 z-50"
      } bg-navy-900/90 backdrop-blur-sm border-b border-gold-500/20 transition-all duration-300`}
      role="navigation"
      aria-label="Main"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt={t("brand.name")}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
            />
            <span className="text-gold-500 text-2xl font-fantasy font-bold glow-text">
              {t("brand.name")}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex items-center ${
              isRTL ? "space-x-reverse space-x-6" : "space-x-6"
            }`}
          >
            <Link
              to="/"
              className={`text-gold-200 hover:text-gold-500 transition-all duration-300 ${
                isRTL ? "font-arabic" : ""
              } text-lg relative group px-2 py-1`}
            >
              {t("nav.home")}
              <span
                className={`pointer-events-none absolute bottom-0 ${
                  isRTL ? "right-0" : "left-0"
                } w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full`}
              />
            </Link>

            <button
              type="button"
              onClick={openDownloadModal}
              className={`text-gold-200 hover:text-gold-500 transition-all duration-300 ${
                isRTL ? "font-arabic" : ""
              } text-lg relative group px-2 py-1`}
            >
              {t("nav.download")}
              <span
                className={`pointer-events-none absolute bottom-0 ${
                  isRTL ? "right-0" : "left-0"
                } w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full`}
              />
            </button>

            <Link
              to="/login"
              className={`text-gold-200 hover:text-gold-500 transition-all duration-300 ${
                isRTL ? "font-arabic" : ""
              } text-lg relative group px-2 py-1`}
            >
              {t("nav.register")}
              <span
                className={`pointer-events-none absolute bottom-0 ${
                  isRTL ? "right-0" : "left-0"
                } w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full`}
              />
            </Link>

            <a
              href="https://discord.gg/8wnwnA5XgP"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gold-200 hover:text-gold-500 transition-all duration-300 ${
                isRTL ? "font-arabic" : ""
              } text-lg relative group px-2 py-1`}
            >
              {t("nav.discord")}
              <span
                className={`pointer-events-none absolute bottom-0 ${
                  isRTL ? "right-0" : "left-0"
                } w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full`}
              />
            </a>

            <LanguageToggle />
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              className="text-gold-500 hover:text-gold-400 transition-colors"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {!mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 border-t border-gold-500/20 bg-navy-900/95 backdrop-blur-sm">
          <ul
            className={`flex flex-col ${isRTL ? "items-end" : "items-start"} gap-2 py-3`}
          >
            <li>
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg hover:bg-navy-800/60 text-gold-100 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={openDownloadModal}
                className={`w-full text-left px-3 py-2 rounded-lg hover:bg-navy-800/60 text-gold-100 ${
                  isRTL ? "font-arabic" : ""
                } ${isRTL ? "text-right" : "text-left"}`}
              >
                {t("nav.download")}
              </button>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg hover:bg-navy-800/60 text-gold-100 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("nav.register")}
              </Link>
            </li>
            <li>
              <a
                href="https://discord.gg/8wnwnA5XgP"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg hover:bg-navy-800/60 text-gold-100 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("nav.discord")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
