import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CommunitySection() {
  const { t, isRTL } = useLanguage();

  const communityFeatures = [
    {
      icon: "💬",
      title: t("community.discord.title"),
      description: t("community.discord.desc"),
    },
    {
      icon: "📣",
      title: t("community.updates.title"),
      description: t("community.updates.desc"),
    },
    {
      icon: "🎮",
      title: t("community.support.title"),
      description: t("community.support.desc"),
    },
  ];
  const goToDiscord = () => {
    window.open("https://discord.gg/8wnwnA5XgP", "_blank");
  };

  return (
    <section className="py-20 relative bg-navy-900/30">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-gold-500/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold-500/10 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-fantasy font-bold text-gold-500 glow-text mb-6 ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("community.title")}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6"></div>
          <p
            className={`text-xl text-gold-200 max-w-3xl mx-auto leading-relaxed ${
              isRTL ? "font-arabic" : ""
            }`}
          >
            {t("community.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className="fantasy-border bg-navy-800/50 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-navy-700/50 transition-all duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3
                className={`text-xl font-fantasy font-bold text-gold-500 mb-4 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-gold-200 leading-relaxed text-lg ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <div className="fantasy-border bg-navy-800/30 rounded-lg p-8 text-center ">
              <div className="text-6xl mb-6">🎯</div>
              <h3
                className={`text-2xl font-fantasy font-bold text-gold-500 mb-4 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("community.joinHistory")}
              </h3>
              <p
                className={`text-gold-200 text-lg leading-relaxed mb-6 ${
                  isRTL ? "font-arabic" : ""
                }`}
              >
                {t("community.joinHistoryDesc")}
              </p>
              <div
                className={`flex flex-col sm:flex-row justify-center gap-4 ${
                  isRTL ? "sm:flex-row-reverse" : ""
                }`}
              >
                <button
                  className="btn-gold text-lg px-8 py-4 relative z-10"
                  onClick={() =>
                    window.open("https://discord.gg/8wnwnA5XgP", "_blank")
                  }
                >
                  <span
                    className={`flex items-center justify-center gap-3 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z" />
                    </svg>
                    {t("community.joinDiscord")}
                  </span>
                </button>
                <button className="btn-gold-outline text-lg px-8 py-4">
                  {t("community.followNews")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
