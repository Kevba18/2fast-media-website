"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      className="text-xs text-[#A0A0A0] hover:text-white transition-colors"
    >
      Cookie Einstellungen
    </button>
  );
}
