# 2fastmedia Website

## Projekt
Agentur-Website für 2fastmedia.
Next.js 16.2.4, TypeScript, Tailwind CSS v4, Framer Motion.

## Lokaler Pfad
`/Users/kevinbalfanz/2fast-media-website`

## GitHub
Repo: `https://github.com/Kevba18/2fast-media-website`
Push-Befehl: `git push origin main`

## Netlify
Projekt: `2fast-media-website` (Team: 2fastmedia)
Login: info@2fastmedia.de (E-Mail + Passwort, nicht GitHub OAuth)
Dashboard: https://app.netlify.com/projects/2fast-media-website

## Aktueller Stand
- Alle Komponenten fertig und gepusht
- Netlify verbunden, Build schlägt noch fehl
- Letzter offener Fix: `data-netlify`-Attribute aus Contact.tsx entfernt (Commit `00a526f`) — muss noch gepusht werden

## Offene To-dos (nach erfolgreichem Deploy)
- WhatsApp-Nummer in `src/components/Contact.tsx` ersetzen (Platzhalter: 4915000000000)
- Agentur-Foto oder Markenvisual in `src/components/About.tsx` einbauen
- Instagram/LinkedIn-Links in `src/components/Footer.tsx` setzen
- Impressum-Seite anlegen + Link in Footer
- Datenschutz-Seite anlegen + Link in Footer
- Kontaktformular: echte E-Mail-Weiterleitung (Netlify Function oder Formspree)
- Eigene Domain verbinden

## Brand
- Orange: `#E8400A`
- Hintergrund: `#0D0D0D`
- Schrift: Plus Jakarta Sans
- Logo: "2" orange · "fastmedia" weiß · "." orange · italic bold

## Bekannte Probleme & Fixes
- `ease: [0.22, 1, 0.36, 1]` muss als `as [number, number, number, number]` gecastet werden (Framer Motion TypeScript)
- `data-netlify="true"` nicht kompatibel mit `@netlify/plugin-nextjs@5` → entfernt
