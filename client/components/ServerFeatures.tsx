import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServerFeatures() {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      icon: "🔥",
      title: t("features.lowRate.title"),
      description: t("features.lowRate.desc"),
    },
    {
      icon: "🤖",
      title: t("features.autoFarm.title"),
      description: t("features.autoFarm.desc"),
    },
    {
      icon: "🛡️",
      title: t("features.clans.title"),
      description: t("features.clans.desc"),
    },
    {
      icon: "🏰",
      title: t("features.official.title"),
      description: t("features.official.desc"),
    },
    {
      icon: "🌍",
      title: t("features.arabic.title"),
      description: t("features.arabic.desc"),
    },
    {
      icon: "🎉",
      title: t("features.events.title"),
      description: t("features.events.desc"),
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const autoSlideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoSlideInterval);
  }, [features.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume after 10 seconds
  };

  return (
    <section className="py-20 relative bg-navy-900/20">
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
            {t("features.title")}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${
                  isRTL ? currentSlide * 100 : currentSlide * -100
                }%)`,
              }}
            >
              {features.map((feature, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="fantasy-border bg-navy-800/50 backdrop-blur-sm rounded-lg p-8 text-center min-h-[300px] flex flex-col justify-center">
                    <div className="text-6xl mb-6">{feature.icon}</div>
                    <h3
                      className={`text-2xl md:text-3xl font-fantasy font-bold text-gold-500 mb-6 ${
                        isRTL ? "font-arabic" : ""
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-lg text-gold-100 leading-relaxed ${
                        isRTL ? "font-arabic" : ""
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className={`absolute top-1/2 -translate-y-1/2 ${
              isRTL ? "right-4" : "left-4"
            } bg-gold-500/20 hover:bg-gold-500/40 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isRTL ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={`absolute top-1/2 -translate-y-1/2 ${
              isRTL ? "left-4" : "right-4"
            } bg-gold-500/20 hover:bg-gold-500/40 text-gold-500 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isRTL ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>

          <div
            className={`flex justify-center mt-8 ${
              isRTL ? "space-x-reverse space-x-2" : "space-x-2"
            }`}
          >
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-gold-500" : "bg-gold-500/30"
                }`}
              >
                {index === currentSlide && isAutoPlaying && (
                  <div className="absolute inset-0 bg-gold-500 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center items-center mt-4 gap-2">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isAutoPlaying ? "bg-gold-500 animate-pulse" : "bg-gold-500/30"
              }`}
            ></div>
            <span
              className={`text-xs transition-all duration-300 ${
                isAutoPlaying ? "text-gold-400" : "text-gold-500/50"
              } ${isRTL ? "font-arabic" : ""}`}
            >
              {isAutoPlaying
                ? isRTL
                  ? "تشغيل تلقائي"
                  : "Auto-playing"
                : isRTL
                  ? "متوقف"
                  : "Paused"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
