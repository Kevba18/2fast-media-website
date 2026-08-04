import Image from "next/image";

function Arrow() {
  return (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function HomeExperience() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0D0D0D] px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute -right-44 top-20 h-[580px] w-[580px] rounded-full border border-[#E8400A]/20" />
        <div className="pointer-events-none absolute -right-20 top-44 h-[360px] w-[360px] rounded-full bg-[#E8400A]/[0.07] blur-[100px]" />

        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="mb-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C6C6C6]">
              <span className="h-2 w-2 rounded-full bg-[#E8400A]" />
              2fastmedia / digitale Entlastung
            </p>
            <h1 className="max-w-4xl text-[3rem] font-extrabold italic leading-[.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.4rem]">
              Das Digitale soll dir Arbeit abnehmen. Nicht neue machen.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#B7B7B7] md:text-xl">
              Wir bringen Auftritt, Inhalte und Abläufe in eine Form, die zu deinem Unternehmen passt — verständlich für Kunden und leicht nutzbar im Alltag.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <a href="#kontakt" className="inline-flex items-center gap-3 rounded-full bg-[#E8400A] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#FF5520]">
                Lass uns draufschauen <Arrow />
              </a>
              <a href="#ansatz" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C6C6C6] transition-colors hover:text-white">
                Unser Ansatz <span className="text-[#E8400A]">↓</span>
              </a>
            </div>
          </div>

          <div className="relative border-l border-white/10 pl-6 pb-1 lg:ml-auto lg:max-w-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E8400A]">Kein Leistungskatalog</p>
            <p className="mt-5 text-2xl font-bold leading-tight text-white">Ein klarer Blick darauf, was gerade unnötig schwer ist.</p>
            <div className="mt-9 space-y-5 border-t border-white/10 pt-5">
              {[
                ["A", "Unklar", "Was zeigt dein Unternehmen nach außen — und was bleibt offen?"],
                ["B", "Manuell", "Was wird jede Woche noch von Hand wiederholt?"],
                ["C", "Unverbunden", "Welche Werkzeuge arbeiten noch aneinander vorbei?"],
              ].map(([letter, title, text]) => (
                <div key={letter} className="grid grid-cols-[25px_1fr] gap-3">
                  <span className="pt-0.5 text-xs font-bold text-[#E8400A]">{letter}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#777]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ansatz" className="border-y border-white/[0.08] bg-[#111111] px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#777]">Was uns wichtig ist</p>
          <p className="mt-8 max-w-5xl text-4xl font-extrabold italic leading-[1.06] tracking-tight text-white md:text-6xl">
            Du musst nicht digitaler werden. Du musst weniger Reibung in deinem Unternehmen haben.
          </p>
          <p className="mt-9 max-w-2xl text-lg leading-relaxed text-[#A0A0A0]">
            Eine gute Lösung macht deine Arbeit nicht komplizierter. Sie schafft Klarheit: für dich, für dein Team und für die Menschen, die mit deinem Unternehmen in Kontakt kommen.
          </p>
        </div>
      </section>

      <section id="arbeitsweise" className="bg-[#0D0D0D] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#171717]">
            <Image src="/projects/wir_machen_handwerk_portal_dashboard.png" alt="Beispiel einer klaren digitalen Oberfläche" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs text-sm font-semibold leading-relaxed text-white">Digitale Lösungen dürfen sich nicht wie zusätzliche Software anfühlen, sondern wie ein selbstverständlicher Teil der Arbeit.</p>
          </div>
          <div className="lg:pl-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E8400A]">Unser Blick auf Digitalisierung</p>
            <h2 className="mt-6 text-4xl font-extrabold italic leading-[1.03] tracking-tight text-white md:text-5xl">Ein guter Auftritt und ein guter Ablauf gehören zusammen.</h2>
            <div className="mt-9 space-y-5 text-base leading-relaxed text-[#A0A0A0]">
              <p>Deine Website ist nicht nur da, um gut auszusehen. Sie soll Informationen sortieren, Sicherheit geben und Wege vereinfachen.</p>
              <p>Und eine Automatisierung ist nicht dafür da, „KI“ auf die Website zu schreiben. Sie ist dann gut, wenn sie etwas wiederkehrend leichter macht.</p>
            </div>
            <a href="#kontakt" className="mt-10 inline-flex items-center gap-3 text-sm font-bold text-white transition-colors hover:text-[#E8400A]">Projekt gemeinsam einordnen <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F2EC] px-5 py-24 text-[#171512] md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border-b border-[#171512]/15 pb-14 md:grid-cols-[.75fr_1.25fr] md:items-end">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7F776D]">So arbeiten wir</p>
            <h2 className="max-w-3xl text-4xl font-extrabold italic leading-[1.03] tracking-tight md:text-5xl">Erst verstehen. Dann die richtige Veränderung umsetzen.</h2>
          </div>
          <div className="grid gap-10 pt-12 md:grid-cols-3 md:gap-14">
            {[
              ["01", "Zuhören", "Wir schauen nicht nur auf die Website oder das gewünschte Tool, sondern auf die Stelle im Alltag, die gerade hakt."],
              ["02", "Vereinfachen", "Wir reduzieren Komplexität und machen sichtbar, was wirklich gebraucht wird — im Auftritt, im Inhalt oder im Prozess."],
              ["03", "Umsetzen", "Wir bauen eine Lösung, die sich in deinem Unternehmen verwenden lässt und nicht als schönes Konzept liegen bleibt."],
            ].map(([number, title, text]) => (
              <div key={number}>
                <p className="text-sm font-bold text-[#E8400A]">{number}</p>
                <h3 className="mt-12 text-2xl font-extrabold italic">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#625D56]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bausteine" className="bg-[#0D0D0D] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-end">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E8400A]">Womit wir arbeiten</p>
            <h2 className="max-w-3xl text-4xl font-extrabold italic leading-[1.03] tracking-tight text-white md:text-5xl">Nicht alles muss neu. Aber alles darf klarer werden.</h2>
          </div>
          <div className="mt-16 border-t border-white/10">
            {[
              ["Websites & Marken", "Damit dein Unternehmen verständlich, eigenständig und professionell auftritt.", "/leistungen/webdesign"],
              ["Inhalte & Sichtbarkeit", "Damit die richtigen Informationen dort ankommen, wo sie gebraucht werden.", "/leistungen/online-sichtbarkeit"],
              ["Abläufe & KI", "Damit wiederkehrende Arbeit nicht jeden Tag wieder neu anfängt.", "/leistungen/ki-integration"],
            ].map(([title, text, href]) => (
              <a key={title} href={href} className="group grid gap-5 border-b border-white/10 py-8 transition-colors hover:border-[#E8400A]/60 md:grid-cols-[1fr_.8fr_auto] md:items-center md:py-10">
                <h3 className="text-2xl font-extrabold italic text-white md:text-3xl">{title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-[#888]">{text}</p>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:border-[#E8400A] group-hover:bg-[#E8400A]"><Arrow /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="arbeiten" className="bg-[#171717] px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E8400A]">Ausgewählte Arbeiten</p>
              <h2 className="mt-5 text-4xl font-extrabold italic tracking-tight text-white md:text-5xl">Klarheit sieht jedes Mal anders aus.</h2>
            </div>
            <a href="/projekte" className="inline-flex items-center gap-2 text-sm font-bold text-[#C6C6C6] transition-colors hover:text-white">Alle Projekte <Arrow /></a>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <a href="https://wir-machen-handwerk.de" target="_blank" rel="noreferrer" className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#252525]">
              <Image src="/projects/wir_machen_handwerk_website_hero.png" alt="Wir machen Handwerk Projektvorschau" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8400A]">B2B-Auftritt & Portal-Konzept</p>
                <p className="mt-2 text-3xl font-extrabold italic text-white">Wir machen Handwerk</p>
              </div>
            </a>
            <a href="https://schwimmschule-wasserflitzer.de/" target="_blank" rel="noreferrer" className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#252525]">
              <Image src="/projects/wasserflitzer-preview.jpeg" alt="Schwimmschule Wasserflitzer Projektvorschau" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top transition duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8400A]">Struktur & lokale Präsenz</p>
                <p className="mt-2 text-3xl font-extrabold italic text-white">Wasserflitzer</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
