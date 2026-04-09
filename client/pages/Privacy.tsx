import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
  const { t, isRTL } = useLanguage();

  return (
    <main
      className={`min-h-screen bg-navy-900/60 py-16 ${isRTL ? "font-arabic" : ""}`}
      data-privacy-page
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl text-gold-400 font-bold mb-3">
            {t("privacy.title")}
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Card */}
        <article className="rounded-2xl border border-gold-500/20 bg-navy-900/70 backdrop-blur-sm shadow-xl p-6 md:p-8 text-gold-100 leading-relaxed">
          {/* 1 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h1")}
            </h2>
            <p>{t("privacy.h1.body")}</p>
          </section>

          {/* 2 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h2")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("privacy.h2.li1")}</li>
              <li>{t("privacy.h2.li2")}</li>
              <li>{t("privacy.h2.li3")}</li>
              <li>{t("privacy.h2.li4")}</li>
            </ul>
          </section>

          {/* 3 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h3")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("privacy.h3.li1")}</li>
              <li>{t("privacy.h3.li2")}</li>
              <li>{t("privacy.h3.li3")}</li>
              <li>{t("privacy.h3.li4")}</li>
              <li>{t("privacy.h3.li5")}</li>
            </ul>
          </section>

          {/* 4 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h4")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("privacy.h4.li1")}</li>
              <li>{t("privacy.h4.li2")}</li>
              <li>{t("privacy.h4.li3")}</li>
            </ul>
          </section>

          {/* 5 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h5")}
            </h2>
            <p>{t("privacy.h5.body")}</p>
          </section>

          {/* 6 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h6")}
            </h2>
            <p>{t("privacy.h6.body")}</p>
          </section>

          {/* 7 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h7")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("privacy.h7.li1")}</li>
              <li>{t("privacy.h7.li2")}</li>
            </ul>
          </section>

          {/* 8 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h8")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("privacy.h8.li1")}</li>
              <li>{t("privacy.h8.li2")}</li>
              <li>{t("privacy.h8.li3")}</li>
            </ul>
          </section>

          {/* 9 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h9")}
            </h2>
            <p>{t("privacy.h9.body")}</p>
          </section>

          {/* 10 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h10")}
            </h2>
            <p>{t("privacy.h10.body")}</p>
            <p className="mt-2 text-gold-200/80">{t("privacy.updated")}</p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("privacy.h11")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>
                {t("privacy.h11.email")}
                <span className="underline">support@l2-eraoflegends.com</span>
              </li>
              <li>
                {t("privacy.h11.discord")}
                <a
                  href="https://discord.gg/8wnwnA5XgP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-300 hover:text-gold-500 underline"
                >
                  {t("privacy.h11.discord.link")}
                </a>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
