"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#projekte", label: "Projekte" },
  { href: "/#ueber-mich", label: "Über mich" },
  { href: "/#kontakt", label: "Kontakt" },
];

const Logo = () => (
  <a href="/" className="text-xl font-extrabold italic tracking-tight select-none">
    <span className="text-[#E8400A]">2</span>
    <span className="text-white">fastmedia</span>
    <span className="text-[#E8400A]">.</span>
  </a>
);

export default function ServiceNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-8">
        <Logo />

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#kontakt"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#141414] border-b border-white/5 px-5 py-6 flex flex-col gap-5"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-[#A0A0A0] hover:text-white font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              onClick={closeMenu}
              className="mt-1 w-full text-center py-3 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-colors"
            >
              Projekt starten
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
