import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CountdownTimer() {
  const { t, isRTL } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launchDate = new Date("2025-09-11T16:00:00+03:00"); // توقيت مكة المكرمة

    const updateTimer = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h3
          className={`text-xl md:text-2xl text-gold-500 font-fantasy mb-2 ${
            isRTL ? "font-arabic" : ""
          }`}
        >
          {t("hero.launchTitle")}
        </h3>
        <p className={`text-lg text-gold-200 ${isRTL ? "font-arabic" : ""}`}>
          {t("hero.launchDate")}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {[
          { value: timeLeft.days, label: t("countdown.days") },
          { value: timeLeft.hours, label: t("countdown.hours") },
          { value: timeLeft.minutes, label: t("countdown.minutes") },
          { value: timeLeft.seconds, label: t("countdown.seconds") },
        ].map((item, index) => (
          <div
            key={index}
            className="fantasy-border bg-navy-800/50 backdrop-blur-sm rounded-lg p-4 text-center"
          >
            <div className="text-2xl md:text-3xl font-fantasy text-gold-500 mb-1">
              {item.value}
            </div>
            <div
              className={`text-gold-200 text-sm ${isRTL ? "font-arabic" : ""}`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
