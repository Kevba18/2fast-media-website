"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const WHATSAPP_URL =
  "https://wa.me/4920649922191?text=Hallo%202fastmedia%2C%20ich%20interessiere%20mich%20f%C3%BCr%20deine%20Leistungen.";

const LEISTUNGEN = [
  "Neue Website",
  "Website Relaunch",
  "SEO und Google Sichtbarkeit",
  "Landingpage",
  "Branding",
  "Social Media",
  "Video Content",
  "KI Automatisierung",
  "Ich bin mir noch nicht sicher",
];

const ZIELE = [
  "Mehr Anfragen",
  "Moderner auftreten",
  "Besser bei Google gefunden werden",
  "Social Media professioneller nutzen",
  "Prozesse automatisieren",
  "Neues Angebot verkaufen",
  "Mehr Reichweite aufbauen",
];

const leistungsKategorien: Record<string, string> = {
  "Neue Website": "Website",
  "Website Relaunch": "Website",
  Landingpage: "Website",
  "SEO und Google Sichtbarkeit": "Sichtbarkeit",
  Branding: "Content",
  "Social Media": "Content",
  "Video Content": "Content",
  "KI Automatisierung": "KI Prozesse",
};

type Fields = {
  name: string;
  unternehmen: string;
  email: string;
  telefon: string;
  website_status: string;
  website_url: string;
  leistungen: string[];
  branche: string;
  dringlichkeit: string;
  budget: string;
  ziele: string[];
  nachricht: string;
};

const initialFields: Fields = {
  name: "",
  unternehmen: "",
  email: "",
  telefon: "",
  website_status: "",
  website_url: "",
  leistungen: [],
  branche: "",
  dringlichkeit: "",
  budget: "",
  ziele: [],
  nachricht: "",
};

// Single-select dropdown
function SelectField({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
}: {
  id?: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: { label: string; value: string }[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-white/8 text-sm focus:outline-none focus:border-[#E8400A]/40 transition-colors appearance-none cursor-pointer pr-10 ${
          value === "" ? "text-white/30" : "text-white"
        }`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-white bg-[#1C1C1C]">
            {o.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#666]">
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

// Multi-select dropdown
function MultiSelectDropdown({
  options,
  selected,
  onChange,
  placeholder,
}: {
  options: string[];
  selected: string[];
  onChange: (v: string[]) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const displayText =
    selected.length === 0
      ? placeholder
      : selected.length === 1
      ? selected[0]
      : `${selected.length} ausgewählt`;

  const toggle = (opt: string) => {
    onChange(selected.includes(opt) ? selected.filter((v) => v !== opt) : [...selected, opt]);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border text-sm text-left focus:outline-none transition-colors flex items-center justify-between gap-2 ${
          open ? "border-[#E8400A]/40" : "border-white/8"
        } ${selected.length === 0 ? "text-white/30" : "text-white"}`}
      >
        <span className="truncate">{displayText}</span>
        <svg
          width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          className={`shrink-0 text-[#666] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 rounded-xl bg-[#1C1C1C] border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="max-h-56 overflow-y-auto">
            {options.map((opt) => {
              const checked = selected.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggle(opt)}
                  className="w-full px-4 py-3 text-sm text-left flex items-center gap-3 hover:bg-white/[0.06] transition-colors border-b border-white/5 last:border-0"
                >
                  <span
                    className={`w-4 h-4 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                      checked ? "border-[#E8400A] bg-[#E8400A]" : "border-white/20"
                    }`}
                  >
                    {checked && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className={checked ? "text-white" : "text-[#A0A0A0]"}>{opt}</span>
                </button>
              );
            })}
          </div>
          {selected.length > 0 && (
            <div className="px-4 py-2.5 border-t border-white/8 flex items-center justify-between">
              <span className="text-xs text-[#E8400A] font-semibold">{selected.length} ausgewählt</span>
              <button
                type="button"
                onClick={() => onChange([])}
                className="text-xs text-[#555] hover:text-white transition-colors"
              >
                Auswahl löschen
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-wide uppercase text-[#A0A0A0] mb-3">{children}</p>
  );
}

export default function Contact() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const focusScore = useMemo(() => {
    const counts: Record<string, number> = {
      Website: 0,
      Sichtbarkeit: 0,
      Content: 0,
      "KI Prozesse": 0,
    };
    fields.leistungen.forEach((l) => {
      const cat = leistungsKategorien[l];
      if (cat) counts[cat]++;
    });
    fields.ziele.forEach((z) => {
      if (z === "Besser bei Google gefunden werden") counts["Sichtbarkeit"]++;
      if (z === "Prozesse automatisieren") counts["KI Prozesse"]++;
      if (z === "Social Media professioneller nutzen" || z === "Mehr Reichweite aufbauen")
        counts["Content"]++;
      if (z === "Mehr Anfragen" || z === "Moderner auftreten" || z === "Neues Angebot verkaufen")
        counts["Website"]++;
    });
    const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
    return Object.fromEntries(
      Object.entries(counts).map(([k, v]) => [k, Math.round((v / total) * 100)])
    );
  }, [fields.leistungen, fields.ziele]);

  const showFocus = fields.leistungen.length > 0 || fields.ziele.length > 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const body: Record<string, string> = {
      "form-name": "projektstart",
      source: "startseite",
      name: fields.name,
      unternehmen: fields.unternehmen,
      email: fields.email,
      telefon: fields.telefon,
      website_status: fields.website_status,
      website_url: fields.website_url,
      leistungen: fields.leistungen.join(", "),
      branche: fields.branche,
      dringlichkeit: fields.dringlichkeit,
      budget: fields.budget,
      ziele: fields.ziele.join(", "),
      nachricht: fields.nachricht,
    };

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(body).toString(),
      });
      if (!response.ok) throw new Error("Fehler beim Senden");
      setSubmitted(true);
    } catch {
      setError(
        "Die Nachricht konnte gerade nicht gesendet werden. Bitte versuch es erneut oder schreib direkt per E-Mail."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kontakt" className="py-28 px-5 md:px-8 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#E8400A]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Projekt starten
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight mb-4">
            Bereit online sichtbar{" "}
            <span className="text-[#E8400A]">zu werden?</span>
          </h2>
          <p className="text-[#A0A0A0]">
            Erstes Gespräch ist{" "}
            <strong className="text-white">kostenlos</strong> und unverbindlich.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          <AnimateOnScroll>
            {submitted ? (
              <div className="flex flex-col items-center justify-center p-12 rounded-3xl bg-[#141414] border border-[#E8400A]/20 text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-[#E8400A]/10 border border-[#E8400A]/25 flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" fill="none" stroke="#E8400A" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Projekt eingegangen!</h3>
                <p className="text-[#A0A0A0] text-sm max-w-sm">
                  Danke für deine Anfrage. Wir melden uns innerhalb von 24 Stunden mit einer
                  ersten Einschätzung.
                </p>
              </div>
            ) : (
              <form
                name="projektstart"
                method="POST"
                onSubmit={handleSubmit}
                className="rounded-3xl bg-[#141414] border border-white/5 p-7 md:p-8 space-y-6"
              >
                <input type="hidden" name="form-name" value="projektstart" />
                <input type="hidden" name="bot-field" />

                {/* Kontaktdaten */}
                <div>
                  <FieldLabel>Kontakt</FieldLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Name *", type: "text", placeholder: "Max Mustermann", required: true },
                      { id: "unternehmen", label: "Unternehmen", type: "text", placeholder: "Muster GmbH", required: false },
                      { id: "email", label: "E-Mail *", type: "email", placeholder: "max@firma.de", required: true },
                      { id: "telefon", label: "Telefon / WhatsApp", type: "tel", placeholder: "+49 151 ...", required: false },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-xs font-semibold text-[#A0A0A0] mb-1.5" htmlFor={f.id}>
                          {f.label}
                        </label>
                        <input
                          id={f.id} name={f.id} type={f.type} required={f.required}
                          placeholder={f.placeholder}
                          value={fields[f.id as keyof Fields] as string}
                          onChange={(e) => setFields((p) => ({ ...p, [f.id]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-white/8 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E8400A]/40 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Website + Branche */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel>Website vorhanden?</FieldLabel>
                    <SelectField
                      name="website_status"
                      value={fields.website_status}
                      onChange={(v) => setFields((p) => ({ ...p, website_status: v, website_url: "" }))}
                      placeholder="Bitte auswählen"
                      options={[
                        { label: "Ja, Link eintragen", value: "ja_link" },
                        { label: "Ja, aber ich bin unzufrieden", value: "ja_unzufrieden" },
                        { label: "Nein, noch keine Website", value: "nein" },
                      ]}
                    />
                    {fields.website_status && fields.website_status !== "nein" && (
                      <input
                        name="website_url" type="url"
                        placeholder="https://deine-website.de"
                        value={fields.website_url}
                        onChange={(e) => setFields((p) => ({ ...p, website_url: e.target.value }))}
                        className="mt-3 w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-white/8 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E8400A]/40 transition-colors"
                      />
                    )}
                  </div>
                  <div>
                    <FieldLabel>Branche</FieldLabel>
                    <SelectField
                      name="branche"
                      value={fields.branche}
                      onChange={(v) => setFields((p) => ({ ...p, branche: v }))}
                      placeholder="Branche wählen"
                      options={[
                        { label: "Handwerk", value: "Handwerk" },
                        { label: "Dienstleistung", value: "Dienstleistung" },
                        { label: "Praxis oder Gesundheit", value: "Praxis oder Gesundheit" },
                        { label: "Gastronomie", value: "Gastronomie" },
                        { label: "Coaching oder Beratung", value: "Coaching oder Beratung" },
                        { label: "Verein", value: "Verein" },
                        { label: "Event oder Musik", value: "Event oder Musik" },
                        { label: "Künstler oder Musik", value: "Künstler oder Musik" },
                        { label: "Sonstiges", value: "Sonstiges" },
                      ]}
                    />
                  </div>
                </div>

                {/* Dringlichkeit + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <FieldLabel>Dringlichkeit</FieldLabel>
                    <SelectField
                      name="dringlichkeit"
                      value={fields.dringlichkeit}
                      onChange={(v) => setFields((p) => ({ ...p, dringlichkeit: v }))}
                      placeholder="Zeitrahmen wählen"
                      options={[
                        { label: "So schnell wie möglich", value: "So schnell wie möglich" },
                        { label: "In den nächsten 4 Wochen", value: "In den nächsten 4 Wochen" },
                        { label: "In den nächsten 3 Monaten", value: "In den nächsten 3 Monaten" },
                        { label: "Erstmal Beratung", value: "Erstmal Beratung" },
                      ]}
                    />
                  </div>
                  <div>
                    <FieldLabel>Budget-Orientierung</FieldLabel>
                    <SelectField
                      name="budget"
                      value={fields.budget}
                      onChange={(v) => setFields((p) => ({ ...p, budget: v }))}
                      placeholder="Budget wählen"
                      options={[
                        { label: "Unter 1.000 €", value: "Unter 1.000 €" },
                        { label: "1.000 – 2.500 €", value: "1.000 – 2.500 €" },
                        { label: "2.500 – 5.000 €", value: "2.500 – 5.000 €" },
                        { label: "Über 5.000 €", value: "Über 5.000 €" },
                        { label: "Noch offen", value: "Noch offen" },
                      ]}
                    />
                  </div>
                </div>

                {/* Leistungen */}
                <div>
                  <FieldLabel>Worum geht es? (Mehrfachauswahl)</FieldLabel>
                  <MultiSelectDropdown
                    options={LEISTUNGEN}
                    selected={fields.leistungen}
                    onChange={(v) => setFields((p) => ({ ...p, leistungen: v }))}
                    placeholder="Leistungen auswählen"
                  />
                </div>

                {/* Ziele */}
                <div>
                  <FieldLabel>Ziel des Projekts (Mehrfachauswahl)</FieldLabel>
                  <MultiSelectDropdown
                    options={ZIELE}
                    selected={fields.ziele}
                    onChange={(v) => setFields((p) => ({ ...p, ziele: v }))}
                    placeholder="Ziele auswählen"
                  />
                </div>

                {/* Nachricht */}
                <div>
                  <label className="block text-xs font-semibold text-[#A0A0A0] mb-1.5" htmlFor="nachricht">
                    Kurze Nachricht (optional)
                  </label>
                  <textarea
                    id="nachricht" name="nachricht" rows={4}
                    placeholder="Was soll ich wissen, bevor wir sprechen?"
                    value={fields.nachricht}
                    onChange={(e) => setFields((p) => ({ ...p, nachricht: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-white/8 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E8400A]/40 transition-colors resize-none"
                  />
                </div>

                <p className="text-xs leading-relaxed text-[#A0A0A0]">
                  Hinweise zur Verarbeitung meiner Angaben habe ich der{" "}
                  <a href="/datenschutz" className="text-white underline transition-colors hover:text-[#E8400A]">
                    Datenschutzerklärung
                  </a>{" "}
                  entnommen.
                </p>

                {error && (
                  <p className="rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading || !fields.name || !fields.email}
                  className="group w-full py-4 rounded-xl bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {loading ? "Wird gesendet..." : (
                    <>
                      Projekt kostenlos einschätzen lassen
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                        className="group-hover:translate-x-0.5 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimateOnScroll>

          {/* Sidebar */}
          <AnimateOnScroll delay={0.1}>
            <div className="space-y-5 lg:sticky lg:top-28">
              {showFocus && (
                <div className="rounded-3xl bg-[#141414] border border-white/5 p-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#E8400A] mb-4">
                    Dein Fokus sieht aktuell so aus
                  </p>
                  <div className="space-y-3">
                    {Object.entries(focusScore).map(([label, pct]) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="font-semibold text-white">{label}</span>
                          <span className="text-[#A0A0A0]">{pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#E8400A] transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#141414] border border-white/5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src="/pics/2fastmedia.png"
                    alt="Kevin – 2fastmedia"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Kevin</p>
                  <p className="text-xs text-[#A0A0A0] mt-0.5">Gründer & Ansprechpartner</p>
                  <p className="text-xs text-[#E8400A] mt-0.5 font-semibold">2fastmedia</p>
                </div>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full p-5 rounded-2xl bg-[#1A3D2B] border border-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">WhatsApp schreiben</p>
                  <p className="text-xs text-[#A0A0A0] mt-0.5">Antwort i.d.R. innerhalb von 2h</p>
                </div>
                <svg width="14" height="14" fill="none" stroke="#25D366" strokeWidth="2.5" viewBox="0 0 24 24"
                  className="shrink-0 group-hover:translate-x-0.5 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>

              <a href="mailto:info@2fastmedia.de"
                className="group flex items-center gap-4 w-full p-5 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#E8400A]/25 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-[#E8400A]/10 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" fill="none" stroke="#E8400A" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">info@2fastmedia.de</p>
                  <p className="text-xs text-[#A0A0A0] mt-0.5">Antwort innerhalb von 24 Stunden</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#141414] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-lg">📍</div>
                <div>
                  <p className="text-sm font-bold text-white">NRW und deutschlandweit</p>
                  <p className="text-xs text-[#A0A0A0] mt-0.5">Vor-Ort Termine im Ruhrgebiet möglich</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
