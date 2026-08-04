import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | 2fastmedia",
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    title: "Angaben gemäß § 5 DDG",
    content: (
      <>
        <p>2fastmedia</p>
        <p>Kevin Balfanz</p>
        <p>Friedrichstraße 36</p>
        <p>46535 Dinslaken</p>
        <p>Deutschland</p>
      </>
    ),
  },
  {
    title: "Umsatzsteuer-Identifikationsnummer",
    content: (
      <p>
        USt-IdNr.: DE348577923
      </p>
    ),
  },
  {
    title: "Kontakt",
    content: (
      <>
        <p>
          Telefon:{" "}
          <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-[#E8400A]" href="tel:+4920649922191">
            +49 2064 9922191
          </a>
        </p>
        <p>
          E-Mail:{" "}
          <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-[#E8400A]" href="mailto:info@2fastmedia.de">
            info@2fastmedia.de
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    content: (
      <>
        <p>Kevin Balfanz</p>
        <p>Friedrichstraße 36</p>
        <p>46535 Dinslaken</p>
        <p>Deutschland</p>
      </>
    ),
  },
  {
    title: "Verbraucherstreitbeilegung",
    content: (
      <p>
        Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    ),
  },
  {
    title: "Haftung für Inhalte",
    content: (
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder
        Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
        bleiben hiervon unberührt.
      </p>
    ),
  },
  {
    title: "Haftung für Links",
    content: (
      <p>
        Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter,
        auf deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für
        diese fremden Inhalte keine Gewähr. Für die Inhalte der verlinkten Seiten
        ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
    ),
  },
  {
    title: "Urheberrecht",
    content: (
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser
        Website unterliegen dem deutschen Urheberrecht. Vervielfältigung,
        Bearbeitung, Verbreitung oder jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
        jeweiligen Rechteinhabers.
      </p>
    ),
  },
];

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] px-5 py-24 text-white md:px-8 md:py-32">
      <article className="mx-auto max-w-[900px]">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm font-semibold text-[#A0A0A0] transition-colors hover:text-white"
        >
          Zurück zur Startseite
        </Link>

        <header className="mb-14 border-b border-white/8 pb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#E8400A]">
            Rechtliches
          </p>
          <h1 className="text-5xl font-extrabold italic tracking-tight md:text-7xl">
            Impressum
          </h1>
        </header>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
                {section.title}
              </h2>
              <div className="space-y-1 text-base leading-8 text-[#CFCFCF]">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
