export interface ContactInfo {
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  location: string | null;
  bookingUrl: string | null;
  linkedin: string;
  youtube: string;
}

/**
 * Contact details — Sprint 07. Email/phone/WhatsApp/location/bookingUrl are
 * intentionally null: not yet confirmed by Mohammed. Do not hardcode
 * placeholder-looking values here — the UI layer decides how to render an
 * absent value honestly. LinkedIn/YouTube are confirmed (same URLs already
 * used in the Footer).
 */
export const contact: ContactInfo = {
  email: null,
  phone: null,
  whatsapp: null,
  location: null,
  bookingUrl: null,
  linkedin: "https://www.linkedin.com/in/mohammedattallah/",
  youtube: "https://youtube.com/@EasyAutomationTips",
};
