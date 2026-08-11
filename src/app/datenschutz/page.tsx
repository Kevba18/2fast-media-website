import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | 2fastmedia",
  robots: {
    index: false,
    follow: true,
  },
};

const listClass = "mt-4 list-disc space-y-2 pl-5";

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>
        </header>

        <div className="space-y-12 text-base leading-8 text-[#CFCFCF]">
          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="mt-6 text-lg font-bold text-white">Allgemeine Hinweise</h3>
            <p className="mt-3">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was
              mit personenbezogenen Daten passiert, wenn diese Website besucht
              wird. Personenbezogene Daten sind alle Daten, mit denen Personen
              direkt oder indirekt identifiziert werden können.
            </p>
            <h3 className="mt-6 text-lg font-bold text-white">
              Datenerfassung auf dieser Website
            </h3>
            <p className="mt-3">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Die Kontaktdaten sind im Abschnitt
              „Verantwortliche Stelle“ dieser Datenschutzerklärung sowie im
              Impressum dieser Website zu finden.
            </p>
            <p className="mt-3">
              Ein Teil der Daten wird erhoben, wenn Nutzer diese mitteilen, zum
              Beispiel durch eine Kontaktanfrage per E-Mail oder über ein
              Kontaktformular.
            </p>
            <p className="mt-3">
              Andere Daten können automatisch beim Besuch der Website durch die
              IT-Systeme erfasst werden. Das sind vor allem technische Daten,
              zum Beispiel Browser, Betriebssystem, Uhrzeit des Seitenaufrufs
              oder IP-Adresse. Diese Daten werden automatisch erfasst, sobald die
              Website aufgerufen wird.
            </p>
            <h3 className="mt-6 text-lg font-bold text-white">
              Wofür werden die Daten genutzt?
            </h3>
            <p className="mt-3">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
              der Website zu gewährleisten. Andere Daten können zur Bearbeitung
              von Anfragen genutzt werden.
            </p>
            <h3 className="mt-6 text-lg font-bold text-white">
              Welche Rechte bestehen?
            </h3>
            <p className="mt-3">
              Betroffene Personen haben jederzeit das Recht, unentgeltlich
              Auskunft über Herkunft, Empfänger und Zweck ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Außerdem besteht ein Recht auf
              Berichtigung, Löschung oder Einschränkung der Verarbeitung dieser
              Daten. Darüber hinaus besteht ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website
              ist:
            </p>
            <div className="mt-4 space-y-1">
              <p>2fastmedia</p>
              <p>Kevin Balfanz</p>
              <p>Friedrichstraße 36</p>
              <p>46535 Dinslaken</p>
              <p>Deutschland</p>
            </div>
            <p className="mt-4">
              E-Mail:{" "}
              <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-[#E8400A]" href="mailto:info@2fastmedia.de">
                info@2fastmedia.de
              </a>
            </p>
            <p className="mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung personenbezogener Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              3. Hosting
            </h2>
            <p>Diese Website wird bei folgendem Anbieter gehostet:</p>
            <div className="mt-4 space-y-1">
              <p>Netlify, Inc.</p>
              <p>101 2nd Street</p>
              <p>San Francisco, CA 94105</p>
              <p>USA</p>
            </div>
            <p className="mt-4">
              Beim Besuch dieser Website verarbeitet der Hosting Anbieter
              technische Daten, die für den sicheren und stabilen Betrieb der
              Website erforderlich sind. Dazu können insbesondere IP-Adresse,
              Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Referrer URL,
              Browsertyp, Betriebssystem und Hostname des zugreifenden Rechners
              gehören.
            </p>
            <p className="mt-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Das berechtigte Interesse liegt in der sicheren, schnellen
              und zuverlässigen Bereitstellung der Website.
            </p>
            <h3 className="mt-6 text-lg font-bold text-white">
              Auftragsverarbeitung
            </h3>
            <p className="mt-3">
              Für die Verarbeitung personenbezogener Daten in unserem Auftrag
              gilt das von Netlify bereitgestellte Data Processing Addendum. Es
              ist in die Netlify Vertragsbedingungen einbezogen und regelt die
              Auftragsverarbeitung nach Art. 28 DSGVO. Das aktuelle Dokument ist
              unter{" "}
              <a
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-[#E8400A]"
                href="https://www.netlify.com/pdf/netlify-dpa.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                netlify.com/pdf/netlify-dpa.pdf
              </a>{" "}
              abrufbar.
            </p>
            <h3 className="mt-6 text-lg font-bold text-white">
              Datenübermittlung in Drittländer
            </h3>
            <p className="mt-3">
              Netlify, Inc. ist ein in den USA ansässiges Unternehmen. Die
              Übermittlung personenbezogener Daten in die USA erfolgt auf
              Grundlage des Angemessenheitsbeschlusses der EU-Kommission zum
              EU-US Data Privacy Framework (DPF) gemäß Art. 45 DSGVO, da
              Netlify unter dem DPF zertifiziert ist.
            </p>
            <p className="mt-4">
              Weitere Informationen zum Datenschutz bei Netlify sowie zur
              DPF-Zertifizierung sind unter{" "}
              <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-[#E8400A]" href="https://www.netlify.com/privacy/" rel="noopener noreferrer" target="_blank">
                https://www.netlify.com/privacy/
              </a>{" "}
              abrufbar.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              4. Server Log Dateien
            </h2>
            <p>
              Der Provider der Website erhebt und speichert automatisch
              Informationen in sogenannten Server Log Dateien, die der Browser
              automatisch übermittelt. Dies können sein:
            </p>
            <ul className={listClass}>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt
              nicht.
            </p>
            <p className="mt-4">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
              an der technisch fehlerfreien Darstellung und Optimierung der
              Website.
            </p>
            <p className="mt-4">
              Die Löschung erfolgt, sobald die Daten für den sicheren und
              stabilen Betrieb nicht mehr erforderlich sind. Maßgeblich sind die
              planabhängigen Aufbewahrungsfristen des Hosting-Anbieters sowie der
              konkrete Sicherheits- und Fehleranalysezweck. Eine längere
              Speicherung erfolgt nur, wenn ein sicherheitsrelevanter Vorfall
              untersucht werden muss oder gesetzliche Pflichten dies verlangen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              5. Kontaktaufnahme
            </h2>
            <p>
              Wenn Nutzer per E-Mail oder über ein Kontaktformular Kontakt mit
              uns aufnehmen, werden die übermittelten Angaben zur Bearbeitung der
              Anfrage und für mögliche Anschlussfragen gespeichert.
            </p>
            <p className="mt-4">
              Dabei können insbesondere folgende Daten verarbeitet werden:
            </p>
            <ul className={listClass}>
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer, falls angegeben</li>
              <li>Unternehmensname, falls angegeben</li>
              <li>Website-URL, falls angegeben</li>
              <li>Branche, falls angegeben</li>
              <li>Angaben zu gewünschten Leistungen, Projektzielen, Dringlichkeit und Budgetrahmen, falls angegeben</li>
              <li>Nachrichteninhalt, falls angegeben</li>
              <li>Zeitpunkt der Anfrage</li>
            </ul>
            <p className="mt-4">
              Die technische Übermittlung der Formulardaten erfolgt über
              Netlify Forms. Netlify verarbeitet die Angaben als technischer
              Dienstleister, speichert die eingegangene Anfrage im
              Netlify-System und leitet für neue Einträge eine Benachrichtigung
              an unsere E-Mail-Adresse weiter.
            </p>
            <p className="mt-4">
              Die Angabe von Name und E-Mail-Adresse ist erforderlich, um die
              Anfrage bearbeiten zu können. Ohne diese Angaben kann das Formular
              nicht abgesendet werden. Alle weiteren Angaben sind freiwillig.
            </p>
            <p className="mt-4">
              Formulareinträge können in den USA verarbeitet werden. Für diese
              Übermittlung gelten die im Abschnitt „Hosting“ beschriebenen
              Garantien und Hinweise zu Netlify und dem EU-US Data Privacy Framework.
            </p>
            <p className="mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
              1 lit. b DSGVO, sofern die Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist.
            </p>
            <p className="mt-4">
              In allen übrigen Fällen erfolgt die Verarbeitung auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der
              Bearbeitung der an uns gerichteten Anfragen.
            </p>
            <p className="mt-4">
              Die Daten verbleiben bei uns, bis der Zweck für die Speicherung
              entfällt oder eine Löschung verlangt wird. Gesetzliche
              Aufbewahrungsfristen bleiben unberührt. Gespeicherte
              Formulareinträge werden regelmäßig geprüft und gelöscht, sobald
              sie für die Bearbeitung und Dokumentation der Anfrage nicht mehr
              erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              6. Cookies und vergleichbare Technologien
            </h2>
            <p>
              Diese Website verwendet technisch notwendige Technologien, die
              für den Betrieb der Website erforderlich sind. Dazu kann
              insbesondere die Speicherung der Datenschutzeinstellungen gehören.
            </p>
            <p className="mt-4">
              Optionale Dienste für Analyse, Marketing oder externe Medien
              werden nach aktuellem Stand nicht eingesetzt. Sofern dies künftig
              der Fall sein sollte, wird eine ausdrückliche Einwilligung eingeholt.
              Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft
              widerrufen werden, zum Beispiel per E-Mail an info@2fastmedia.de.
            </p>
            <p className="mt-4">
              Die Speicherung und der Zugriff auf Informationen im Endgerät
              erfolgen, soweit erforderlich, auf Grundlage von § 25 Abs. 2 TDDDG.
              Soweit eine Einwilligung erforderlich ist, erfolgt dies auf
              Grundlage von § 25 Abs. 1 TDDDG in Verbindung mit Art. 6 Abs. 1
              lit. a DSGVO.
            </p>
            <p className="mt-4">
              Nach aktuellem Stand werden keine optionalen Analyse-, Marketing-
              oder externen Mediendienste geladen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              7. Google Fonts
            </h2>
            <p>
              Diese Website nutzt Schriftarten, die lokal auf dem eigenen Server
              eingebunden sind. Dabei findet beim Besuch der Website keine
              Verbindung zu Servern von Google statt.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              8. Analyse und Tracking
            </h2>
            <p>
              Auf dieser Website werden nach aktuellem Stand keine Analyse Tools
              wie Google Analytics, Matomo, Plausible Analytics, Meta Pixel oder
              vergleichbare Tracking Dienste eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              9. Externe Inhalte und Einbindungen
            </h2>
            <p>
              Auf dieser Website werden nach aktuellem Stand keine externen
              Inhalte wie YouTube Videos, Google Maps Karten, Calendly Widgets
              oder Social Media Feeds direkt eingebunden.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              10. Kommunikation über WhatsApp
            </h2>
            <p>
              Auf dieser Website wird WhatsApp als freiwilliger Kommunikationsweg
              angeboten. Wenn Nutzer den WhatsApp Link anklicken oder 2fastmedia
              über WhatsApp kontaktieren, werden insbesondere die Telefonnummer,
              Profilinformationen, Kommunikationsinhalte sowie technische
              Verbindungs- und Nutzungsdaten verarbeitet.
            </p>
            <p className="mt-4">
              Anbieter für Nutzer in der Europäischen Region ist WhatsApp Ireland
              Limited. WhatsApp gehört zur Meta Unternehmensgruppe und setzt für
              den Betrieb weitere Meta Unternehmen und Dienstleister ein. Dabei
              können Daten auch außerhalb des Europäischen Wirtschaftsraums,
              insbesondere in den USA, verarbeitet werden. WhatsApp nennt hierfür
              unter anderem das EU-US Data Privacy Framework und von der
              EU-Kommission genehmigte Standardvertragsklauseln als Garantien.
            </p>
            <p className="mt-4">
              Die Verarbeitung durch 2fastmedia erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, soweit die Kommunikation zur Durchführung
              vorvertraglicher Maßnahmen oder zur Vertragserfüllung erforderlich
              ist. In allen übrigen Fällen erfolgt sie auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in einer
              schnellen und nutzerfreundlichen Kommunikation.
            </p>
            <p className="mt-4">
              Die Nutzung von WhatsApp ist nicht erforderlich. E-Mail und Telefon
              stehen als gleichwertige Kontaktmöglichkeiten zur Verfügung. Weitere
              Informationen zur Verarbeitung durch WhatsApp enthält die{" "}
              <a
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-[#E8400A]"
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                rel="noopener noreferrer"
                target="_blank"
              >
                Datenschutzerklärung von WhatsApp
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              11. Projektanfragen
            </h2>
            <p>
              Wenn über diese Website Projektanfragen gestellt werden,
              verarbeiten wir die angegebenen Daten zur Prüfung, Bearbeitung und
              Beantwortung der Anfrage. Dazu können Name, Kontaktdaten,
              Unternehmensangaben, Projektinformationen, Budgetangaben und
              weitere freiwillig mitgeteilte Informationen gehören.
            </p>
            <p className="mt-4">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO, soweit sie zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. Im Übrigen erfolgt die Verarbeitung auf Grundlage
              von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              12. Empfänger von Daten
            </h2>
            <p>
              Personenbezogene Daten werden nur an Dritte weitergegeben, wenn
              dies zur Vertragsdurchführung erforderlich ist, eine gesetzliche
              Verpflichtung besteht, eine Einwilligung vorliegt oder ein
              berechtigtes Interesse besteht.
            </p>
            <p className="mt-4">
              Mögliche Empfänger können technische Dienstleister, Hosting
              Anbieter, E-Mail Anbieter oder sonstige Anbieter sein, die für den
              Betrieb der Website und die Bearbeitung von Anfragen notwendig
              sind.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              13. Speicherdauer
            </h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie dies
              für den jeweiligen Zweck erforderlich ist. Gesetzliche
              Aufbewahrungsfristen bleiben unberührt.
            </p>
            <p className="mt-4">
              Wenn ein Nutzer eine Löschung verlangt oder eine Einwilligung
              widerruft, werden die Daten gelöscht, sofern keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              14. Rechte betroffener Personen
            </h2>
            <p>
              Betroffene Personen haben im Rahmen der geltenden gesetzlichen
              Bestimmungen jederzeit folgende Rechte:
            </p>
            <ul className={listClass}>
              <li>Recht auf Auskunft gemäß Art. 15 DSGVO</li>
              <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
              <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
              <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
              <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
              <li>Recht auf Widerspruch gemäß Art. 21 DSGVO</li>
              <li>Recht auf Widerruf einer Einwilligung gemäß Art. 7 Abs. 3 DSGVO</li>
              <li>Recht auf Beschwerde bei einer Aufsichtsbehörde gemäß Art. 77 DSGVO</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-[#E8400A]/25 bg-[#E8400A]/5 p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              15. Widerspruchsrecht gegen die Verarbeitung in besonderen Fällen
            </h2>
            <p>
              Werden personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit.
              f DSGVO verarbeitet, besteht aus Gründen, die sich aus der
              besonderen Situation der betroffenen Person ergeben, jederzeit
              das Recht, Widerspruch gegen diese Verarbeitung einzulegen. Wir
              verarbeiten die betroffenen Daten dann nicht mehr, es sei denn, es
              bestehen zwingende schutzwürdige Gründe für die Verarbeitung, die
              die Interessen, Rechte und Freiheiten der betroffenen Person
              überwiegen, oder die Verarbeitung dient der Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              16. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Zuständige Aufsichtsbehörde ist die Landesbeauftragte für
              Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI
              NRW), Kavalleriestraße 2–4, 40213 Düsseldorf. Weitere Informationen
              und Kontaktmöglichkeiten sind unter{" "}
              <a
                className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-[#E8400A]"
                href="https://www.ldi.nrw.de/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.ldi.nrw.de/
              </a>{" "}
              abrufbar.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              17. Widerspruch gegen Werbe E-Mails
            </h2>
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
              Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
              Werbung und Informationsmaterialien wird widersprochen. Die
              Betreiber der Seiten behalten sich rechtliche Schritte im Falle der
              unverlangten Zusendung von Werbung vor.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
              18. Aktualität dieser Datenschutzerklärung
            </h2>
            <p>Diese Datenschutzerklärung ist aktuell gültig.</p>
            <p className="mt-4">Stand: August 2026</p>
          </section>
        </div>
      </article>
    </main>
  );
}
