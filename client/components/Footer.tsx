import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t, isRTL, language } = useLanguage();

  return (
    <footer className="relative bg-navy-900/95 backdrop-blur-sm border-t border-gold-500/20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <div className="text-gold-500 text-3xl font-fantasy font-bold glow-text mb-2">
              {t("brand.name")}
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
          </div>

          {/* Links */}
          <div className="flex justify-center items-center mb-6 flex-wrap">
            <Link
              to="/privacy"
              className={`text-gold-300 hover:text-gold-500 transition-colors text-sm px-4 py-2 ${isRTL ? "font-arabic" : ""}`}
            >
              {t("footer.privacy")}
            </Link>

            <Link
              to="/terms"
              className={`text-gold-300 hover:text-gold-500 transition-colors text-sm px-4 py-2 ${
                isRTL ? "font-arabic" : ""
              }`}
            >
              {t("footer.terms")}
            </Link>
            <Link
              to="/support"
              className={`text-gold-300 hover:text-gold-500 transition-colors text-sm px-4 py-2 ${isRTL ? "font-arabic" : ""}`}
            >
              {t("footer.support")}
            </Link>

            <a
              href="https://discord.gg/8wnwnA5XgP"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gold-300 hover:text-gold-500 transition-colors text-sm px-4 py-2 ${isRTL ? "font-arabic" : ""}`}
            >
              {t("footer.discord")}
            </a>
          </div>

          {/* Social Icons */}
          <div
            className={`flex justify-center items-center mb-6 ${
              isRTL ? "space-x-reverse space-x-6" : "space-x-6"
            }`}
          >
            <a
              href="https://discord.gg/8wnwnA5XgP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-500 transition-colors hover:shadow-glow-gold rounded-full p-2"
              aria-label="Discord"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gold-400 hover:text-gold-500 transition-colors hover:shadow-glow-gold rounded-full p-2"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@eralegend-r2l?si=Z8WBP5jg-9YLolUm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-500 transition-colors hover:shadow-glow-gold rounded-full p-2"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div
            className={`text-gold-400/70 text-sm ${isRTL ? "font-arabic" : ""}`}
          >
            {t("footer.copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
}
