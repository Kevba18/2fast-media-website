import BrandLogo from "./BrandLogo";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          {/* Logo + tagline */}
          <div>
            <BrandLogo href="/" className="md:h-10" />
            <p className="text-xs text-[#A0A0A0] mt-2 max-w-xs">
              Webdesign, Online-Sichtbarkeit & KI-Integration für Unternehmen im Ruhrgebiet.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              ["#leistungen", "Leistungen"],
              ["#warum", "Warum 2fastmedia"],
              ["/projekte", "Projekte"],
              ["/website-check", "Website Check"],
              ["/kontakt", "Kontakt"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-xs text-[#A0A0A0]">
            © {year} 2fastmedia · Webdesign, SEO und KI Integration
          </p>
          <div className="flex items-center gap-5">
            {[
              ["/impressum", "Impressum"],
              ["/datenschutz", "Datenschutz"],
            ].map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="text-xs text-[#A0A0A0] hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
