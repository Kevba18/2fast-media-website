"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  CONSENT_STORAGE_KEY,
  OPTIONAL_CONSENT_SERVICES_ENABLED,
  createConsentPreferences,
  defaultConsentSelection,
  isCurrentConsent,
  type ConsentPreferences,
} from "@/lib/consent";

const categories = [
  {
    id: "necessary",
    title: "Notwendig",
    description:
      "Speichert ausschließlich deine Cookie-Einstellungen im Browser (localStorage). Keine Tracking- oder Analysedaten. Technisch erforderlich für den Betrieb dieser Website.",
    locked: true,
    unavailable: false,
  },
  {
    id: "analytics",
    title: "Analyse",
    description:
      "Aktuell sind keine Analyse-Dienste hinterlegt. Deshalb kann für diese Kategorie keine Einwilligung erteilt werden.",
    locked: false,
    unavailable: !OPTIONAL_CONSENT_SERVICES_ENABLED,
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Aktuell sind keine Marketing-Dienste hinterlegt. Deshalb kann für diese Kategorie keine Einwilligung erteilt werden.",
    locked: false,
    unavailable: !OPTIONAL_CONSENT_SERVICES_ENABLED,
  },
  {
    id: "externalMedia",
    title: "Externe Medien",
    description:
      "Aktuell sind keine externen Mediendienste hinterlegt. Deshalb kann für diese Kategorie keine Einwilligung erteilt werden.",
    locked: false,
    unavailable: !OPTIONAL_CONSENT_SERVICES_ENABLED,
  },
] as const;

type ConsentSelection = typeof defaultConsentSelection;

const consentStoreServerSnapshot = "__server__";

function getConsentStoreSnapshot() {
  if (typeof window === "undefined") {
    return consentStoreServerSnapshot;
  }

  return window.localStorage.getItem(CONSENT_STORAGE_KEY) ?? "";
}

function subscribeToConsentStore(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("2fastmedia-consent-updated", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("2fastmedia-consent-updated", onStoreChange);
  };
}

function parseStoredConsent(snapshot: string) {
  try {
    if (!snapshot || snapshot === consentStoreServerSnapshot) {
      return null;
    }

    const parsed = JSON.parse(snapshot);
    return isCurrentConsent(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function selectionFromConsent(consent: ConsentPreferences | null): ConsentSelection {
  if (!consent || !OPTIONAL_CONSENT_SERVICES_ENABLED) {
    return defaultConsentSelection;
  }

  return {
    necessary: true,
    analytics: consent.analytics,
    marketing: consent.marketing,
    externalMedia: consent.externalMedia,
  };
}

function storeConsent(selection: ConsentSelection) {
  const consent = createConsentPreferences(selection);
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("2fastmedia-consent-updated", { detail: consent }));
  return consent;
}

export default function ConsentProvider() {
  const [selection, setSelection] = useState<ConsentSelection>(defaultConsentSelection);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const consentSnapshot = useSyncExternalStore(
    subscribeToConsentStore,
    getConsentStoreSnapshot,
    () => consentStoreServerSnapshot,
  );
  const consent = useMemo(() => parseStoredConsent(consentSnapshot), [consentSnapshot]);

  useEffect(() => {
    const openSettings = () => {
      const storedConsent = parseStoredConsent(getConsentStoreSnapshot());
      setSelection(selectionFromConsent(storedConsent));
      setShowModal(true);
    };

    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  useEffect(() => {
    if (!showModal) {
      return;
    }

    const modal = modalRef.current;
    const focusableSelector = "button, input, a[href], [tabindex]:not([tabindex='-1'])";
    const focusable = modal ? Array.from(modal.querySelectorAll<HTMLElement>(focusableSelector)) : [];
    focusable[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [showModal]);

  const hasStoredConsent = Boolean(consent);

  function saveConsent(nextSelection: ConsentSelection) {
    storeConsent(nextSelection);
    setSelection(nextSelection);
    setShowModal(false);
  }

  function saveNecessaryOnly() {
    saveConsent(defaultConsentSelection);
  }

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <div
            ref={modalRef}
            className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#141414] p-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.55)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-5">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#E8400A]">
                  2fastmedia
                </p>
                <h2 id="cookie-settings-title" className="text-2xl font-extrabold italic tracking-tight">
                  Cookie Einstellungen
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#A0A0A0]">
                  Aktuell lädt 2fastmedia keine optionalen Analyse-, Marketing- oder Mediendienste.
                  Die nicht verwendeten Kategorien sind deshalb deaktiviert und können nicht auf Vorrat freigegeben werden.{" "}
                  <Link href="/datenschutz" className="underline underline-offset-2 hover:text-white transition-colors">
                    Datenschutzerklärung
                  </Link>
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                }}
                className="rounded-full border border-white/10 px-3 py-2 text-sm text-[#A0A0A0] transition-colors hover:text-white"
                aria-label="Cookie Einstellungen schließen"
              >
                Schließen
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className={`flex gap-4 rounded-2xl border border-white/8 bg-[#1C1C1C] p-4 ${
                    category.unavailable ? "opacity-60" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selection[category.id]}
                    disabled={category.locked || category.unavailable}
                    onChange={(event) =>
                      setSelection((current) => ({
                        ...current,
                        [category.id]: event.target.checked,
                      }))
                    }
                    className="mt-1 h-5 w-5 accent-[#E8400A]"
                  />
                  <span>
                    <span className="flex flex-wrap items-center gap-2 text-sm font-bold text-white">
                      {category.title}
                      {category.locked && (
                        <span className="rounded-full bg-white/8 px-2 py-0.5 text-[11px] font-semibold text-[#A0A0A0]">
                          Immer aktiv
                        </span>
                      )}
                      {category.unavailable && (
                        <span className="rounded-full bg-white/8 px-2 py-0.5 text-[11px] font-semibold text-[#A0A0A0]">
                          Derzeit nicht verfügbar
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[#A0A0A0]">
                      {category.description}
                    </span>
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-6 flex flex-col-reverse gap-2 border-t border-white/8 pt-5 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={saveNecessaryOnly}
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-white/35 hover:bg-white/[0.04]"
              >
                Notwendige Einstellung speichern
              </button>
            </div>

            {hasStoredConsent && (
              <p className="mt-4 text-xs leading-5 text-[#808080]">
                Deine aktuelle Auswahl ist lokal in diesem Browser gespeichert.
                Es werden keine personenbezogenen Daten in der Consent-Auswahl
                gespeichert.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
