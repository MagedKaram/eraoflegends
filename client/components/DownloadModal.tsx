// components/DownloadModal.tsx
import React, { useEffect, useRef, useState } from "react";
import { downloadGroups } from "./downloadLinks";
import { useLanguage } from "@/contexts/LanguageContext";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const { t, isRTL } = useLanguage();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggle = (id: string) => setOpenId((curr) => (curr === id ? null : id));

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      ref={overlayRef}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={stop}
        className="relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden
                   bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 border border-gold-500/20"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gold-500/20 flex items-center justify-between">
          <h3
            className={`text-2xl font-semibold text-white ${isRTL ? "font-arabic" : ""}`}
          >
            {t("download.title")}
          </h3>
          <button
            onClick={onClose}
            className="text-gold-300 hover:text-gold-100 transition-colors"
            aria-label={t("download.close")}
            title={t("download.close")}
          >
            {/* X icon */}
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body / Accordions */}
        <div className="px-4 sm:px-6 py-4">
          <p
            className={`text-gold-100/90 text-sm mb-4 ${isRTL ? "font-arabic" : ""}`}
          >
            {t("download.note")}
          </p>

          <div className="space-y-3">
            {downloadGroups.map((group) => {
              const isOpen = openId === group.id;
              return (
                <div
                  key={group.id}
                  className="rounded-xl border border-gold-500/20 bg-navy-900/40 overflow-hidden"
                >
                  {/* Accordion header */}
                  <button
                    onClick={() => toggle(group.id)}
                    className={`w-full px-4 sm:px-6 py-4 flex items-center justify-between text-left
                                hover:bg-navy-800/40 transition-colors ${isRTL ? "flex-row-reverse" : ""}`}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div
                        className={`text-lg text-white ${isRTL ? "font-arabic" : ""}`}
                      >
                        {t(group.titleKey)}
                      </div>
                      {group.hintKey && (
                        <div
                          className={`text-sm text-gold-200/80 mt-1 ${isRTL ? "font-arabic" : ""}`}
                        >
                          {t(group.hintKey)}
                        </div>
                      )}
                    </div>
                    <svg
                      className={`w-5 h-5 text-gold-300 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Accordion content */}
                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5">
                      <div
                        className={`grid sm:grid-cols-2 gap-3 ${isRTL ? "font-arabic" : ""}`}
                      >
                        {group.links.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold-outline justify-center text-base py-3 flex items-center gap-2"
                          >
                            {/* Provider bubble */}
                            <span className="inline-block text-xs px-2 py-1 rounded-full border border-gold-500/40">
                              {t(`download.providers.${item.provider}`) ||
                                item.provider}
                            </span>
                            <span className="truncate">{item.label}</span>
                          </a>
                        ))}
                      </div>
                      <p className="mt-3 text-xs text-gold-100/70">
                        {t("download.externalWarning")}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gold-500/20 flex justify-end">
          <button onClick={onClose} className="btn-gold px-6">
            {t("download.close")}
          </button>
        </div>
      </div>
    </div>
  );
}
