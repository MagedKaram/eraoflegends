import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
  const { t, isRTL } = useLanguage();

  return (
    <main
      className={`min-h-screen bg-navy-900/60 py-16 ${isRTL ? "font-arabic" : ""}`}
      data-terms-page
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl text-gold-400 font-bold mb-3">
            {t("terms.title")}
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Card */}
        <article className="rounded-2xl border border-gold-500/20 bg-navy-900/70 backdrop-blur-sm shadow-xl p-6 md:p-8 text-gold-100 leading-relaxed">
          {/* 1 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("terms.h1")}
            </h2>
            <p>{t("terms.h1.body")}</p>
          </section>

          {/* 2 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("terms.h2")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("terms.h2.li1")}</li>
              <li>{t("terms.h2.li2")}</li>
              <li>{t("terms.h2.li3")}</li>
            </ul>
          </section>

          {/* 3 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("terms.h3")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("terms.h3.li1")}</li>
              <li>{t("terms.h3.li2")}</li>
              <li>{t("terms.h3.li3")}</li>
              <li>{t("terms.h3.li4")}</li>
            </ul>
          </section>

          {/* 4 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("terms.h4")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("terms.h4.li1")}</li>
              <li>{t("terms.h4.li2")}</li>
            </ul>
          </section>

          {/* 5 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("terms.h5")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("terms.h5.li1")}</li>
              <li>{t("terms.h5.li2")}</li>
              <li>{t("terms.h5.li3")}</li>
            </ul>
          </section>

          {/* 6 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("terms.h6")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("terms.h6.li1")}</li>
              <li>{t("terms.h6.li2")}</li>
            </ul>
          </section>

          {/* 7 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("terms.h7")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("terms.h7.li1")}</li>
              <li>{t("terms.h7.li2")}</li>
              <li>{t("terms.h7.li3")}</li>
            </ul>
          </section>

          {/* 8 */}
          <section className="mb-6">
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("terms.h8")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("terms.h8.li1")}</li>
              <li>{t("terms.h8.li2")}</li>
              <li>{t("terms.h8.li3")}</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-gold-300 text-xl font-semibold mb-2">
              {t("terms.h9")}
            </h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>{t("terms.h9.li1")}</li>
              <li>
                {t("terms.h9.li2")}{" "}
                <a
                  href="https://discord.gg/8wnwnA5XgP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-300 hover:text-gold-500 underline"
                >
                  Discord
                </a>
              </li>
            </ul>
            <p className="mt-2 text-gold-200/80">{t("terms.updated")}</p>
          </section>
        </article>
      </div>
    </main>
  );
}
