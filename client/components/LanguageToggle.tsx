import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-gold-200 hover:text-gold-500 transition-all duration-300 border border-gold-500/30 rounded-lg hover:border-gold-500/60 hover:bg-gold-500/10"
      aria-label={`Switch to ${language === "ar" ? "English" : "Arabic"}`}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {language === "ar" ? (
          <span className="text-sm font-bold">EN</span>
        ) : (
          <span className="text-sm font-bold">عر</span>
        )}
      </div>
      <svg
        className={`w-4 h-4 transition-transform duration-300 ${
          language === "ar" ? "rotate-0" : "rotate-180"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 8a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </button>
  );
}
