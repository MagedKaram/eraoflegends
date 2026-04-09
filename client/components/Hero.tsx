import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import DownloadModal from "./DownloadModal";

export default function Hero() {
  const { t, isRTL, language } = useLanguage();

  const logoSrc = `${import.meta.env.BASE_URL}${
    language === "ar" ? "LOGO-ar.png" : "LOGO-en.png"
  }`;

  const [isDownloadOpen, setDownloadOpen] = useState(false);

  const goToDiscord = () => {
    window.location.href = "https://discord.gg/8wnwnA5XgP";
  };

  return (
    <section
      data-hero-section
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-navy-800/40"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(var(--gold-500) / 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, hsl(var(--gold-500) / 0.05) 0%, transparent 50%)
            `,
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-gold-500/30 rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-gold-500/20 rotate-45"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-32 w-1 h-1 bg-gold-400 rounded-full animate-ping"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10 mt-10">
        {/* Game Title */}
        <div className="mb-8 relative z-20 flex flex-col items-center justify-center">
          <img
            src={logoSrc}
            className="h-auto w-96 object-contain flex items-center"
            alt={t("brand.name")}
          />

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
        </div>

        {/* Hero Text */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6 drop-shadow-lg ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("hero.welcome")}
          </h2>
          <p
            className={`text-lg md:text-xl text-gold-100 max-w-3xl mx-auto drop-shadow-md leading-relaxed mb-4 ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("hero.description1")}
          </p>
          <p
            className={`text-md md:text-lg text-gold-200 max-w-2xl mx-auto drop-shadow-md ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("hero.description2")}
          </p>
        </div>

        {/* <CountdownTimer /> */}

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 ${
            isRTL ? "sm:flex-row-reverse" : ""
          }`}
        >
          <Link
            to="/register"
            className="btn-gold text-xl px-8 py-4 min-w-[200px] group"
          >
            <span
              className={`flex items-center justify-center gap-3 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              {t("hero.registerNow")}
            </span>
          </Link>

          <button
            className="btn-gold-outline text-xl px-8 py-4 min-w-[200px] group"
            onClick={goToDiscord}
          >
            <span
              className={`flex items-center justify-center gap-3 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" />
              </svg>
              {t("hero.joinDiscord")}
            </span>
          </button>

          {/* فتح المودال */}
          <button
            className="btn-gold-outline text-xl px-8 py-4 min-w-[200px] group"
            onClick={() => setDownloadOpen(true)}
          >
            <span
              className={`flex items-center justify-center gap-3 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
              {t("hero.downloadGame")}
            </span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setDownloadOpen(false)}
      />
    </section>
  );
}
