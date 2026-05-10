"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

const serviceLinks = [
  { href: "/leistungen/webdesign", label: "Webdesign & Entwicklung", emoji: "🌐" },
  { href: "/leistungen/online-sichtbarkeit", label: "Online-Sichtbarkeit", emoji: "🔍" },
  { href: "/leistungen/ki-integration", label: "KI-Integration", emoji: "🤖" },
  { href: "/leistungen/grafik-branding", label: "Grafik & Branding", emoji: "🎨" },
  { href: "/leistungen/video-content", label: "Video & Content", emoji: "🎬" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileLeistungenOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-8">
        <BrandLogo href="/" />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {/* Leistungen dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors duration-200"
            >
              Leistungen
              <svg
                width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-[#141414] border border-white/10 rounded-xl shadow-xl overflow-hidden"
                >
                  {serviceLinks.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-[#A0A0A0] hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <span>{s.emoji}</span>
                      {s.label}
                    </a>
                  ))}
                  <div className="border-t border-white/5 mx-3" />
                  <a
                    href="#leistungen"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-[#E8400A] hover:bg-white/5 transition-colors font-medium"
                  >
                    Alle Leistungen →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <a href="#problem" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors duration-200">
              Warum
            </a>
          </li>
          <li>
            <a href="/projekte" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors duration-200">
              Projekte
            </a>
          </li>
          <li>
            <a href="/kontakt" className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors duration-200">
              Kontakt
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="/kontakt"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#E8400A] text-white text-sm font-bold hover:bg-[#FF5520] transition-colors duration-200 group"
        >
          Projekt starten
          <svg
            width="14" height="14"
            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
            className="group-hover:translate-x-0.5 transition-transform duration-150"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#A0A0A0] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#141414] border-b border-white/5 px-5 py-6 flex flex-col gap-1"
          >
            {/* Leistungen accordion */}
            <button
              onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
              className="flex items-center justify-between w-full py-2.5 text-[#A0A0A0] hover:text-white font-medium transition-colors"
            >
              Leistungen
              <svg
                width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                className={`transition-transform duration-200 ${mobileLeistungenOpen ? "rotate-180" : ""}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {mobileLeistungenOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-3 border-l border-white/10 mb-1 flex flex-col gap-1">
                    {serviceLinks.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        onClick={closeMenu}
                        className="flex items-center gap-2.5 py-2 text-sm text-[#A0A0A0] hover:text-white transition-colors"
                      >
                        <span>{s.emoji}</span>
                        {s.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <a href="#problem" onClick={closeMenu} className="py-2.5 text-[#A0A0A0] hover:text-white font-medium transition-colors">
              Warum
            </a>
            <a href="#ablauf" onClick={closeMenu} className="py-2.5 text-[#A0A0A0] hover:text-white font-medium transition-colors">
              Ablauf
            </a>
            <a href="/projekte" onClick={closeMenu} className="py-2.5 text-[#A0A0A0] hover:text-white font-medium transition-colors">
              Projekte
            </a>
            <a href="/kontakt" onClick={closeMenu} className="py-2.5 text-[#A0A0A0] hover:text-white font-medium transition-colors">
              Kontakt
            </a>
            <a
              href="/kontakt"
              onClick={closeMenu}
              className="mt-3 w-full text-center py-3 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-colors"
            >
              Projekt starten
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
