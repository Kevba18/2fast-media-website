/**
 * SEITE NOCH NICHT VERÖFFENTLICHT / VERLINKT
 * Status: Vorbereitet – wird aktiviert nach Freigabe durch Kevin
 * Echte Zahlen und Joel-Referenzen müssen noch ergänzt werden.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  { title: "Social Media Strategie", icon: "🎯", text: "Welche Plattform, welches Format, welche Botschaft – strateg. geplant statt spontan gepostet." },
  { title: "Reels & Kurzvideos", icon: "🎬", text: "Formatgerecht produziert für Instagram, TikTok und YouTube Shorts." },
  { title: "Musikvideos & Künstlercontent", icon: "🎵", text: "Visuelle Umsetzung für Releases, Artists und Musikprojekte." },
  { title: "Eventcontent", icon: "📸", text: "Highlights, Aftermovies, Teaser – professionell festgehalten." },
  { title: "Kampagnen-Landingpages", icon: "🚀", text: "Jede Kampagne braucht eine Seite, die auch konvertiert." },
  { title: "Website & Funnel-Aufbau", icon: "🌐", text: "Reichweite führt ins Nichts ohne eine Seite, die Anfragen generiert." },
  { title: "Auswertung & Optimierung", icon: "📊", text: "Reichweite, Klicks und Anfragen werden ausgewertet und verbessert." },
];

const audiences = [
  { label: "Künstler & Musiker", icon: "🎵" },
  { label: "Events & Veranstalter", icon: "🎪" },
  { label: "Lokale Marken", icon: "📍" },
  { label: "Dienstleister mit Persönlichkeit", icon: "✦" },
  { label: "Unternehmen mit Sichtbarkeitsbedarf", icon: "📡" },
  { label: "Produkte mit Erklärungsbedarf", icon: "💡" },
];

const formOptions = {
  typ: ["Unternehmen", "Künstler / Band", "Event / Veranstaltung", "Produkt / Marke"],
  plattform: ["Instagram", "TikTok", "YouTube", "Spotify-Umfeld", "LinkedIn"],
  ziel: ["Reichweite aufbauen", "Buchungen generieren", "Verkäufe steigern", "Bekanntheit erhöhen", "Community aufbauen", "Musik Release begleiten"],
};

type SocialFields = {
  name: string;
  email: string;
  typ: string;
  plattformen: string[];
  material: string;
  referenzen: string;
  ziele: string[];
  nachricht: string;
};

const initialSocial: SocialFields = {
  name: "",
  email: "",
  typ: "",
  plattformen: [],
  material: "",
  referenzen: "",
  ziele: [],
  nachricht: "",
};

function toggle<T>(arr: T[], val: T): T[] {
  return arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];
}

export default function SocialMediaVideoPage() {
  const [fields, setFields] = useState<SocialFields>(initialSocial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(""); setLoading(true);
    const body: Record<string, string> = {
      "form-name": "social-media-anfrage",
      source: "social-media-video-marketing",
      name: fields.name, email: fields.email,
      typ: fields.typ, plattformen: fields.plattformen.join(", "),
      material: fields.material, referenzen: fields.referenzen,
      ziele: fields.ziele.join(", "), nachricht: fields.nachricht,
    };
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(body).toString(),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Senden fehlgeschlagen. Bitte direkt per E-Mail melden.");
    } finally { setLoading(false); }
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center px-5 md:px-8 pt-20 bg-[#050505] overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8400A]/50 to-transparent" />
            <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-[#E8400A]/6 blur-[160px]" />
          </div>
          <div className="max-w-6xl mx-auto py-24 relative">
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8400A] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#A0A0A0]">
                Social Media · Video · Sichtbarkeit
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold italic tracking-tight leading-[1.05] mb-7 max-w-4xl">
              Social Media, Videos und{" "}
              <span className="text-[#E8400A]">digitale Sichtbarkeit</span>{" "}
              für Marken, Künstler und Unternehmen
            </h1>
            <p className="text-base md:text-xl text-[#A0A0A0] leading-relaxed max-w-2xl mb-10">
              2fastmedia verbindet Website-Strategie, Content-Produktion und Reichweitenaufbau –
              gemeinsam mit einem spezialisierten Partner für Video und Social Media. Für
              Unternehmen, Events, Künstler und Marken, die nicht nur posten wollen, sondern
              sichtbar werden möchten.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#anfrage"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-105"
              >
                Projekt besprechen
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  className="group-hover:translate-x-0.5 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all"
              >
                Zurück zur Hauptseite
              </Link>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">Das Problem</p>
              <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-5">
                Gute Inhalte bringen nichts, wenn sie{" "}
                <span className="text-[#E8400A]">nirgends hinführen</span>
              </h2>
              <p className="text-[#A0A0A0] text-base leading-relaxed">
                Views ohne Ziel sind verschwendete Reichweite. Viele Unternehmen und Künstler
                investieren in Content, aber ohne eine saubere Zielseite, ein klares Angebot und
                eine Struktur, die Besucher zu echten Anfragen führt, verpufft das Potenzial.
                Genau hier setzt das gemeinsame Angebot von 2fastmedia und unserem Partner für
                Videoproduktion an.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-5 md:px-8 bg-[#141414]">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll className="mb-12 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">Was wir liefern</p>
              <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">
                Das gemeinsame Angebot
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <AnimateOnScroll key={s.title} delay={i * 0.07}>
                  <div className="h-full rounded-2xl bg-[#0D0D0D] border border-white/5 p-6 hover:border-[#E8400A]/20 transition-colors">
                    <span className="text-2xl mb-4 block">{s.icon}</span>
                    <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-[#A0A0A0] leading-relaxed">{s.text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll className="mb-10 text-center">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">Für wen ist das?</p>
              <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Das Angebot passt zu euch</h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {audiences.map((a, i) => (
                <AnimateOnScroll key={a.label} delay={i * 0.07}>
                  <div className="flex items-center gap-4 rounded-2xl bg-[#141414] border border-white/5 p-5 hover:border-[#E8400A]/20 transition-colors">
                    <span className="text-2xl shrink-0">{a.icon}</span>
                    <p className="text-sm font-bold text-white">{a.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section id="anfrage" className="py-20 px-5 md:px-8 bg-[#141414]">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">Anfrage</p>
              <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-4">
                Projekt direkt anfragen
              </h2>
              <p className="text-[#A0A0A0] text-sm">
                Kein Angebot ohne Gespräch. Wir melden uns innerhalb von 24h.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              {submitted ? (
                <div className="rounded-3xl bg-[#0D0D0D] border border-[#E8400A]/20 p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#E8400A]/10 border border-[#E8400A]/25 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" fill="none" stroke="#E8400A" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Anfrage erhalten!</h3>
                  <p className="text-[#A0A0A0] text-sm">Wir melden uns innerhalb von 24 Stunden.</p>
                </div>
              ) : (
                <form
                  name="social-media-anfrage"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="rounded-3xl bg-[#0D0D0D] border border-white/5 p-7 md:p-8 space-y-7"
                >
                  <input type="hidden" name="form-name" value="social-media-anfrage" />
                  <input type="hidden" name="bot-field" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Name *", type: "text", ph: "Max Mustermann", req: true },
                      { id: "email", label: "E-Mail *", type: "email", ph: "max@firma.de", req: true },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-xs font-semibold text-[#A0A0A0] mb-1.5">{f.label}</label>
                        <input
                          name={f.id} type={f.type} required={f.req} placeholder={f.ph}
                          value={fields[f.id as keyof SocialFields] as string}
                          onChange={(e) => setFields((p) => ({ ...p, [f.id]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-white/8 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E8400A]/40 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Typ */}
                  <div>
                    <p className="text-xs font-bold tracking-wide uppercase text-[#A0A0A0] mb-3">Worum geht es?</p>
                    <div className="flex flex-wrap gap-2">
                      {formOptions.typ.map((t) => (
                        <button key={t} type="button"
                          onClick={() => setFields((p) => ({ ...p, typ: t }))}
                          className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                            fields.typ === t ? "bg-[#E8400A]/15 border-[#E8400A]/50 text-white" : "bg-[#1C1C1C] border-white/5 text-[#A0A0A0] hover:border-white/20"
                          }`}
                        >{t}</button>
                      ))}
                    </div>
                  </div>

                  {/* Plattform */}
                  <div>
                    <p className="text-xs font-bold tracking-wide uppercase text-[#A0A0A0] mb-3">Wichtige Plattformen (Mehrfachauswahl)</p>
                    <div className="flex flex-wrap gap-2">
                      {formOptions.plattform.map((p) => (
                        <button key={p} type="button"
                          onClick={() => setFields((prev) => ({ ...prev, plattformen: toggle(prev.plattformen, p) }))}
                          className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                            fields.plattformen.includes(p) ? "bg-[#E8400A]/15 border-[#E8400A]/50 text-white" : "bg-[#1C1C1C] border-white/5 text-[#A0A0A0] hover:border-white/20"
                          }`}
                        >{p}</button>
                      ))}
                    </div>
                  </div>

                  {/* Material + Referenzen */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "material", label: "Vorhandenes Videomaterial?", ph: "Ja / Nein / Beschreibung" },
                      { id: "referenzen", label: "Bestehende Zahlen / Referenzen?", ph: "z.B. Instagram-Seite, Views, ..." },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-xs font-semibold text-[#A0A0A0] mb-1.5">{f.label}</label>
                        <input name={f.id} type="text" placeholder={f.ph}
                          value={fields[f.id as keyof SocialFields] as string}
                          onChange={(e) => setFields((p) => ({ ...p, [f.id]: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-white/8 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#E8400A]/40 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Ziele */}
                  <div>
                    <p className="text-xs font-bold tracking-wide uppercase text-[#A0A0A0] mb-3">Hauptziel (Mehrfachauswahl)</p>
                    <div className="flex flex-wrap gap-2">
                      {formOptions.ziel.map((z) => (
                        <button key={z} type="button"
                          onClick={() => setFields((p) => ({ ...p, ziele: toggle(p.ziele, z) }))}
                          className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                            fields.ziele.includes(z) ? "bg-[#E8400A]/15 border-[#E8400A]/50 text-white" : "bg-[#1C1C1C] border-white/5 text-[#A0A0A0] hover:border-white/20"
                          }`}
                        >{z}</button>
                      ))}
                    </div>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label className="block text-xs font-semibold text-[#A0A0A0] mb-1.5">Kurze Beschreibung</label>
                    <textarea name="nachricht" rows={4} placeholder="Was ist dein Projekt? Was soll erreicht werden?"
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
                    <p className="rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</p>
                  )}

                  <button type="submit" disabled={loading || !fields.name || !fields.email}
                    className="group w-full py-4 rounded-xl bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? "Wird gesendet..." : (
                      <>
                        Anfrage senden
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
