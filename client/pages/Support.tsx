import { useLanguage } from "@/contexts/LanguageContext";

export default function Support() {
  const { t, isRTL } = useLanguage();

  return (
    <main
      className={`min-h-screen bg-navy-900/60 py-16 ${isRTL ? "font-arabic" : ""}`}
      data-support-page
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl text-gold-400 font-bold mb-3">
            {t("support.title")}
          </h1>
          <p className="text-gold-200">{t("support.subtitle")}</p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Contact Methods */}
        <article className="rounded-2xl border border-gold-500/20 bg-navy-900/70 backdrop-blur-sm shadow-xl p-6 md:p-8 text-gold-100 leading-relaxed mb-10">
          <h2 className="text-gold-300 text-xl font-semibold mb-4">
            {t("support.contact.methods")}
          </h2>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold">{t("support.email")} </span>
              <span className="underline">{t("support.email.value")}</span>
            </li>
            <li>
              <span className="font-semibold">{t("support.discord")} </span>
              <a
                href="https://discord.gg/8wnwnA5XgP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-300 hover:text-gold-500 underline"
              >
                {t("support.discord.link")}
              </a>
            </li>
          </ul>
        </article>

        {/* FAQ */}
        <article className="rounded-2xl border border-gold-500/20 bg-navy-900/70 backdrop-blur-sm shadow-xl p-6 md:p-8 text-gold-100 leading-relaxed">
          <h2 className="text-gold-300 text-xl font-semibold mb-4">
            {t("support.faq")}
          </h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold">{t("support.faq.q1")}</p>
              <p className="text-gold-200">{t("support.faq.a1")}</p>
            </div>
            <div>
              <p className="font-semibold">{t("support.faq.q2")}</p>
              <p className="text-gold-200">{t("support.faq.a2")}</p>
            </div>
            <div>
              <p className="font-semibold">{t("support.faq.q3")}</p>
              <p className="text-gold-200">{t("support.faq.a3")}</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
