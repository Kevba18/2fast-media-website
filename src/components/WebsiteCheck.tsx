"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const questions = [
  {
    id: "q1",
    text: "Hast du eine aktuelle Website?",
    options: [
      { label: "Ja, sie ist aktuell und gepflegt", value: 1 },
      { label: "Ja, aber sie ist veraltet", value: 0.5 },
      { label: "Nein, noch keine Website", value: 0 },
    ],
  },
  {
    id: "q2",
    text: "Bekommst du über deine Website regelmäßig Anfragen?",
    options: [
      { label: "Ja, regelmäßig", value: 1 },
      { label: "Gelegentlich, aber selten", value: 0.5 },
      { label: "Nein, so gut wie nie", value: 0 },
    ],
  },
  {
    id: "q3",
    text: "Ist deine Website auf dem Handy überzeugend?",
    options: [
      { label: "Ja, sie sieht gut aus und funktioniert gut", value: 1 },
      { label: "Es geht, aber es hakt an einigen Stellen", value: 0.5 },
      { label: "Nein, das ist ein Problem", value: 0 },
    ],
  },
  {
    id: "q4",
    text: "Weißt du, über welche Begriffe du bei Google gefunden wirst?",
    options: [
      { label: "Ja, ich kenne meine wichtigsten Keywords", value: 1 },
      { label: "Ungefähr, aber nicht genau", value: 0.5 },
      { label: "Nein, keine Ahnung", value: 0 },
    ],
  },
  {
    id: "q5",
    text: "Gibt es klare Kontaktwege und messbare Ziele auf deiner Website?",
    options: [
      { label: "Ja, Formular, Telefon und klare CTAs sind vorhanden", value: 1 },
      { label: "Kontaktdaten gibt es, aber kein klares Ziel", value: 0.5 },
      { label: "Nein, das fehlt noch", value: 0 },
    ],
  },
];

type Answers = Record<string, number>;

function getResult(score: number) {
  if (score <= 1.5) {
    return {
      label: "Website bremst dich gerade",
      color: "#E8400A",
      borderColor: "border-[#E8400A]/40",
      bgColor: "bg-[#E8400A]/10",
      text:
        "Deine Website kostet dich aktuell Anfragen, ohne dass du es merkst. Vertrauen, Sichtbarkeit und klare Kontaktführung fehlen. Hier steckt das größte Wachstumspotenzial.",
      cta: "Jetzt kostenlos prüfen lassen",
    };
  }
  if (score <= 3) {
    return {
      label: "Gute Basis, aber Potenzial liegt offen",
      color: "#F59E0B",
      borderColor: "border-amber-500/40",
      bgColor: "bg-amber-500/10",
      text:
        "Du hast eine funktionierende Grundlage, aber es gibt konkrete Stellen, an denen du Anfragen und Sichtbarkeit verlierst. Mit gezielten Verbesserungen lässt sich deutlich mehr herausholen.",
      cta: "Potenzial einschätzen lassen",
    };
  }
  return {
    label: "Solider Auftritt – jetzt Sichtbarkeit skalieren",
    color: "#22C55E",
    borderColor: "border-green-500/40",
    bgColor: "bg-green-500/10",
    text:
      "Deine Website ist gut aufgestellt. Jetzt geht es darum, Sichtbarkeit systematisch aufzubauen, Reichweite zu skalieren und Prozesse zu optimieren.",
    cta: "Nächsten Schritt besprechen",
  };
}

export default function WebsiteCheck() {
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

  function handleSubmit() {
    if (allAnswered) setShowResult(true);
  }

  function handleReset() {
    setAnswers({});
    setShowResult(false);
  }

  return (
    <section
      id="website-check"
      className="py-28 px-5 md:px-8 bg-[#0D0D0D] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#E8400A]/4 blur-[140px]" />

      <div className="max-w-4xl mx-auto relative">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">
            Selbstcheck
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight mb-5">
            Wie stark ist deine{" "}
            <span className="text-[#E8400A]">aktuelle Website?</span>
          </h2>
          <p className="text-[#A0A0A0] text-base leading-relaxed max-w-2xl mx-auto mb-4">
            Beantworte fünf kurze Fragen und erhalte eine ehrliche Einschätzung, wo deine Website
            gerade steht und wo Potenzial liegt.
          </p>
          <Link
            href="/website-check"
            className="text-sm font-semibold text-[#555] hover:text-white transition-colors"
          >
            Ausführlicherer Check mit 7 Fragen →
          </Link>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
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
              <div className="space-y-8">
                {questions.map((q, qi) => (
                  <div key={q.id}>
                    <p className="text-sm font-bold text-white mb-4">
                      <span className="text-[#E8400A] mr-2">0{qi + 1}</span>
                      {q.text}
                    </p>
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
                              <span
                                className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
                                  selected ? "border-[#E8400A] bg-[#E8400A]" : "border-white/20"
                                }`}
                              >
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
                  onClick={handleSubmit}
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
              <div className="text-center mb-8">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${result.bgColor} border ${result.borderColor} mb-6`}>
                  <span className="w-2 h-2 rounded-full" style={{ background: result.color }} />
                  <span className="text-sm font-bold" style={{ color: result.color }}>
                    {result.label}
                  </span>
                </div>
                <p className="text-[#D8D8D8] text-base leading-relaxed max-w-2xl mx-auto">
                  {result.text}
                </p>
              </div>

              {/* Score bars */}
              <div className="grid grid-cols-5 gap-3 mb-10">
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
                      <p className="text-[10px] text-[#A0A0A0]">Frage {i + 1}</p>
                    </div>
                  );
                })}
              </div>

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
            </div>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
