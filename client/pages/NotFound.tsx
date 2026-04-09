import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-fantasy font-bold text-gold-500 glow-text mb-8">
          404
        </h1>
        <h2
          className={`text-2xl font-bold text-gold-200 mb-4 ${
            isRTL ? "font-arabic" : ""
          }`}
        >
          {t("404.title")}
        </h2>
        <p className={`text-gold-300 mb-8 ${isRTL ? "font-arabic" : ""}`}>
          {t("404.description")}
        </p>
        <Link
          to="/"
          className={`btn-gold text-lg px-8 py-4 inline-block ${
            isRTL ? "font-arabic" : ""
          }`}
        >
          {t("404.backToHome")}
        </Link>
      </div>
    </div>
  );
}
