import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServerInfo() {
  const { t, isRTL } = useLanguage();

  const serverRates = [
    { label: t("serverInfo.xpSp"), value: "x10", icon: "⚡" },
    { label: t("serverInfo.adena"), value: "x25", icon: "💰" },
    { label: t("serverInfo.drop"), value: "x7", icon: "⚔️" },
    { label: t("serverInfo.safeEnchant"), value: "+3", icon: "🛡️" },
    { label: t("serverInfo.maxEnchant"), value: "+16", icon: "⭐" },
    { label: t("serverInfo.charactersLimit"), value: "2", icon: "👥" },
  ];

  const specialFeatures = [
    {
      title: t("serverInfo.subclass"),
      description: t("serverInfo.subclassDesc"),
      icon: "🎯",
    },
    {
      title: t("serverInfo.noblesse"),
      description: t("serverInfo.noblesseDesc"),
      icon: "👑",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 border border-gold-500/20 rotate-12"></div>
        <div className="absolute bottom-10 left-20 w-16 h-16 border border-gold-500/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-fantasy font-bold text-gold-500 glow-text mb-6 ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("serverInfo.title")}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-4"></div>
          <p
            className={`text-xl text-gold-200 max-w-2xl mx-auto leading-relaxed ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("serverInfo.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serverRates.map((rate, index) => (
            <div
              key={index}
              className="fantasy-border bg-navy-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-navy-700/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{rate.icon}</div>
              <div className="text-2xl font-fantasy text-gold-500 mb-2">
                {rate.value}
              </div>
              <div
                className={`text-gold-200 text-sm leading-relaxed ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {rate.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3
            className={`text-2xl md:text-3xl font-fantasy font-bold text-gold-500 text-center mb-8 ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("serverInfo.specialFeatures")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="fantasy-border bg-navy-800/30 rounded-lg p-8 text-center"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h4
                  className={`text-xl font-fantasy font-bold text-gold-500 mb-4 ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {feature.title}
                </h4>
                <p
                  className={`text-gold-200 text-lg ${
                    isRTL ? "font-arabic" : ""
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
