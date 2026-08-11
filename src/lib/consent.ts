export const CONSENT_STORAGE_KEY = "2fastmedia-consent-v1";
export const CONSENT_VERSION = "1.1";

export const OPTIONAL_CONSENT_SERVICES_ENABLED = false;

export type ConsentCategory = "necessary" | "analytics" | "marketing" | "externalMedia";

export type ConsentPreferences = Record<ConsentCategory, boolean> & {
  timestamp: string;
  version: typeof CONSENT_VERSION;
};

export const defaultConsentSelection = {
  necessary: true,
  analytics: false,
  marketing: false,
  externalMedia: false,
};

export function createConsentPreferences(
  selection: typeof defaultConsentSelection,
): ConsentPreferences {
  return {
    ...selection,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
}

export function isCurrentConsent(value: unknown): value is ConsentPreferences {
  if (!value || typeof value !== "object") {
    return false;
  }

  const consent = value as Partial<ConsentPreferences>;

  return (
    consent.version === CONSENT_VERSION &&
    consent.necessary === true &&
    typeof consent.analytics === "boolean" &&
    typeof consent.marketing === "boolean" &&
    typeof consent.externalMedia === "boolean"
  );
}

export function canLoadConsentCategory(
  consent: ConsentPreferences | null,
  category: Exclude<ConsentCategory, "necessary">,
) {
  return Boolean(consent?.[category]);
}
