"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Metadata muss in einem eigenen server component definiert werden,
// aber diese Seite ist "use client". Wir definieren es via generateMetadata
// in einer separaten Datei oder akzeptieren, dass Metadata hier nicht
// direkt möglich ist. Für jetzt bleibt es ohne Export.

const questions = [
  {
    id: "q1",
    text: "Hast du eine aktuelle Website?",
    detail: "Bewertet den Grundzustand deines digitalen Auftritts.",
    options: [
      { label: "Ja, sie ist aktuell und gepflegt", value: 1 },
      { label: "Ja, aber sie ist veraltet oder ich bin unzufrieden", value: 0.5 },
      { label: "Nein, noch keine Website", value: 0 },
    ],
  },
  {
    id: "q2",
    text: "Bekommst du über deine Website regelmäßig Anfragen?",
    detail: "Zeigt, ob deine Website aktiv zur Neukundengewinnung beiträgt.",
    options: [
      { label: "Ja, regelmäßig und verlässlich", value: 1 },
      { label: "Gelegentlich, aber selten", value: 0.5 },
      { label: "Nein, so gut wie nie", value: 0 },
    ],
  },
  {
    id: "q3",
    text: "Ist deine Website auf dem Smartphone überzeugend?",
    detail: "Über 60 % aller Website-Besuche erfolgen mobil.",
    options: [
      { label: "Ja, sie sieht gut aus und funktioniert reibungslos", value: 1 },
      { label: "Es geht, aber es hakt an einigen Stellen", value: 0.5 },
      { label: "Nein, das ist ein bekanntes Problem", value: 0 },
    ],
  },
  {
    id: "q4",
    text: "Weißt du, über welche Suchbegriffe du bei Google gefunden wirst?",
    detail: "Gibt Aufschluss über dein SEO-Bewusstsein und deine Sichtbarkeit.",
    options: [
      { label: "Ja, ich kenne meine wichtigsten Keywords genau", value: 1 },
      { label: "Ungefähr, aber nicht systematisch", value: 0.5 },
      { label: "Nein, keine Ahnung", value: 0 },
    ],
  },
  {
    id: "q5",
    text: "Gibt es klare Kontaktwege und CTAs auf deiner Website?",
    detail: "Ohne klare Handlungsaufforderung verlässt der Besucher die Seite.",
    options: [
      { label: "Ja, Formular, Telefon und klare CTAs sind alle vorhanden", value: 1 },
      { label: "Kontaktdaten gibt es, aber kein klares Ziel", value: 0.5 },
      { label: "Nein, das fehlt noch", value: 0 },
    ],
  },
  {
    id: "q6",
    text: "Lädt deine Website schnell — auch auf dem Handy?",
    detail: "Ladezeit beeinflusst Google-Ranking und Absprungrate direkt.",
    options: [
      { label: "Ja, sie lädt sehr schnell", value: 1 },
      { label: "Mittel — manchmal hakelt es", value: 0.5 },
      { label: "Nein, sie ist spürbar langsam", value: 0 },
    ],
  },
  {
    id: "q7",
    text: "Vermittelt deine Website Vertrauen — auf den ersten Blick?",
    detail: "Besucher entscheiden in Sekunden, ob sie einer Seite vertrauen.",
    options: [
      { label: "Ja, professionell, stimmig und überzeugend", value: 1 },
      { label: "Geht so — es fehlt noch etwas", value: 0.5 },
      { label: "Nein, das Vertrauen ist schwach", value: 0 },
    ],
  },
];

type Answers = Record<string, number>;

function getResult(score: number) {
  const max = questions.length;
  const pct = (score / max) * 100;

  if (pct <= 35) {
    return {
      label: "Website bremst dich gerade aktiv",
      color: "#E8400A",
      borderColor: "border-[#E8400A]/40",
      bgColor: "bg-[#E8400A]/10",
      headline: "Deine Website kostet dich aktuell Anfragen",
      text: "Vertrauen, mobile Darstellung, Ladezeit und klare Kontaktführung fehlen oder sind unzureichend. Das ist das größte Wachstumspotenzial, das du gerade ungenutzt lässt.",
      cta: "Jetzt kostenlose Einschätzung anfragen",
    };
  }
  if (pct <= 65) {
    return {
      label: "Gute Basis — konkretes Potenzial liegt offen",
      color: "#F59E0B",
      borderColor: "border-amber-500/40",
      bgColor: "bg-amber-500/10",
      headline: "Du hast eine Grundlage, aber verlierst Anfragen",
      text: "Es gibt konkrete Stellen, an denen Besucher abspringen oder dich nicht finden. Mit gezielten Verbesserungen in Sichtbarkeit, Struktur und Kontaktführung lässt sich deutlich mehr herausholen.",
      cta: "Potenzial einschätzen lassen",
    };
  }
  return {
    label: "Solider Auftritt — jetzt Sichtbarkeit skalieren",
    color: "#22C55E",
    borderColor: "border-green-500/40",
    bgColor: "bg-green-500/10",
    headline: "Deine Website ist gut aufgestellt",
    text: "Technik, Vertrauen und Kontaktführung sind gut gelöst. Der nächste Schritt ist systematischer Aufbau von Sichtbarkeit, mehr Reichweite und Prozessoptimierung.",
    cta: "Nächsten Schritt besprechen",
  };
}

export default function WebsiteCheckPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  const answered = Object.keys(answers).length;
  const allAnswered = answered === questions.length;
  const score = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const result = getResult(score);
  const progressPct = (answered / questions.length) * 100;

  function handleSelect(questionId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleReset() {
    setAnswers({});
    setShowResult(false);
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0D0D0D] text-white">

        {/* Page header */}
        <section className="pt-32 pb-10 px-5 md:px-8 bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="mb-8 inline-flex text-sm font-semibold text-[#A0A0A0] hover:text-white transition-colors">
              ← Zurück zur Startseite
            </Link>
            <div className="mt-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
                Selbstcheck
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold italic tracking-tight mb-5">
                Kostenloser Website Check für dein Unternehmen
              </h1>
              <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed max-w-3xl">
                Finde heraus, ob deine Website Vertrauen aufbaut, verständlich ist und Besucher
                gezielt zur Anfrage führt. 7 Fragen, ehrliche Einschätzung, kein Opt-in nötig.
              </p>
            </div>
          </div>
        </section>

        {/* Check */}
        <section className="py-12 px-5 md:px-8 bg-[#0D0D0D] relative overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8400A]/4 blur-[140px]" />
          <div className="max-w-4xl mx-auto relative">
            <AnimateOnScroll>
              {!showResult ? (
                <div className="rounded-3xl bg-[#141414] border border-white/5 p-8 md:p-10">
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between text-xs text-[#A0A0A0] mb-2">
                      <span>{answered} von {questions.length} beantwortet</span>
                      <span>{Math.round(progressPct)}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#E8400A] transition-all duration-500"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="space-y-10">
                    {questions.map((q, qi) => (
                      <div key={q.id}>
                        <div className="mb-4">
                          <p className="text-sm font-bold text-white mb-1">
                            <span className="text-[#E8400A] mr-2">0{qi + 1}</span>
                            {q.text}
                          </p>
                          <p className="text-xs text-[#555]">{q.detail}</p>
                        </div>
                        <div className="grid gap-2">
                          {q.options.map((opt) => {
                            const selected = answers[q.id] === opt.value;
                            return (
                              <button
                                key={opt.label}
                                onClick={() => handleSelect(q.id, opt.value)}
                                className={`w-full text-left px-5 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-150 ${
                                  selected
                                    ? "bg-[#E8400A]/15 border-[#E8400A]/50 text-white"
                                    : "bg-[#1C1C1C] border-white/5 text-[#A0A0A0] hover:border-white/20 hover:text-white"
                                }`}
                              >
                                <span className="flex items-center gap-3">
                                  <span className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${selected ? "border-[#E8400A] bg-[#E8400A]" : "border-white/20"}`}>
                                    {selected && (
                                      <svg width="8" height="8" viewBox="0 0 8 8" fill="white">
                                        <circle cx="4" cy="4" r="2.5" />
                                      </svg>
                                    )}
                                  </span>
                                  {opt.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <button
                      onClick={() => { if (allAnswered) setShowResult(true); }}
                      disabled={!allAnswered}
                      className="group w-full py-4 rounded-xl bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      Einschätzung anzeigen
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                        className="group-hover:translate-x-0.5 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </button>
                    {!allAnswered && (
                      <p className="text-center text-xs text-[#A0A0A0] mt-3">
                        Bitte beantworte alle {questions.length} Fragen
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className={`rounded-3xl bg-[#141414] border ${result.borderColor} p-8 md:p-10`}>
                  {/* Result header */}
                  <div className="text-center mb-10">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${result.bgColor} border ${result.borderColor} mb-5`}>
                      <span className="w-2 h-2 rounded-full" style={{ background: result.color }} />
                      <span className="text-sm font-bold" style={{ color: result.color }}>
                        {result.label}
                      </span>
                    </div>
                    <h2 className="text-2xl font-extrabold italic text-white mb-3">
                      {result.headline}
                    </h2>
                    <p className="text-[#D8D8D8] text-base leading-relaxed max-w-2xl mx-auto">
                      {result.text}
                    </p>
                  </div>

                  {/* Score bars */}
                  <div className="grid grid-cols-7 gap-2 mb-10">
                    {questions.map((q, i) => {
                      const val = answers[q.id] ?? 0;
                      const pct = val === 1 ? 100 : val === 0.5 ? 50 : 10;
                      const col = val === 1 ? "#22C55E" : val === 0.5 ? "#F59E0B" : "#E8400A";
                      return (
                        <div key={q.id} className="text-center">
                          <div className="h-16 w-full rounded-lg bg-white/5 relative overflow-hidden mb-2">
                            <div
                              className="absolute bottom-0 w-full rounded-lg transition-all duration-700"
                              style={{ height: `${pct}%`, background: col + "40", borderTop: `2px solid ${col}` }}
                            />
                          </div>
                          <p className="text-[9px] text-[#555]">F{i + 1}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {questions.map((q, i) => {
                      const val = answers[q.id] ?? 0;
                      const col = val === 1 ? "#22C55E" : val === 0.5 ? "#F59E0B" : "#E8400A";
                      const label = val === 1 ? "Gut" : val === 0.5 ? "Verbesserungspotenzial" : "Handlungsbedarf";
                      return (
                        <div key={q.id} className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-4">
                          <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: col }} />
                          <div>
                            <p className="text-xs font-bold text-white leading-snug mb-0.5">Frage {i + 1}</p>
                            <p className="text-xs text-[#555]">{q.text}</p>
                            <p className="text-xs font-semibold mt-1" style={{ color: col }}>{label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/kontakt"
                      className="group flex-1 py-4 rounded-xl bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      {result.cta}
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                        className="group-hover:translate-x-0.5 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Link>
                    <button
                      onClick={handleReset}
                      className="px-6 py-4 rounded-xl border border-white/10 text-sm font-semibold text-[#A0A0A0] hover:border-white/25 hover:text-white transition-all duration-200"
                    >
                      Nochmal beantworten
                    </button>
                  </div>

                  <p className="mt-4 text-xs text-center text-[#555]">
                    Kostenlos · Kein Opt-in · Keine automatische Kontaktaufnahme
                  </p>
                </div>
              )}
            </AnimateOnScroll>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-20 px-5 md:px-8 bg-[#141414]">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-4">
                Was nach dem Check passiert
              </h2>
              <p className="text-[#A0A0A0] max-w-2xl mx-auto">
                Der Check zeigt, wo deine Website steht. Was du daraus machst, liegt bei dir.
              </p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: "🔍",
                  title: "Eigene Analyse",
                  text: "Nutze das Ergebnis als Grundlage, um eigene Prioritäten zu setzen — ohne Beratung, wenn du das bevorzugst.",
                },
                {
                  icon: "💬",
                  title: "Kostenloses Gespräch",
                  text: "Wenn du magst, besprechen wir die Ergebnisse in einem kurzen Gespräch — konkret, ohne Verkaufsfloskeln.",
                },
                {
                  icon: "🚀",
                  title: "Nächster Schritt",
                  text: "Falls es passt, erarbeitest du gemeinsam mit 2fastmedia eine Lösung, die zu deinem Ziel und Budget passt.",
                },
              ].map(({ icon, title, text }) => (
                <AnimateOnScroll key={title}>
                  <div className="rounded-2xl border border-white/8 bg-[#1C1C1C] p-6 h-full">
                    <div className="text-2xl mb-4">{icon}</div>
                    <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm text-[#A0A0A0] leading-relaxed">{text}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll className="mt-10 text-center">
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-colors"
              >
                Projekt anfragen
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  className="group-hover:translate-x-0.5 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
