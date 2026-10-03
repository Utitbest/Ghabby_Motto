// Shared site-wide constants (contact details, navigation, WhatsApp helpers).

export const site = {
  name: "Fiba Motors",
  phoneDisplay: "+90 (533) 833-2533",
  phoneRaw: "+905338332533",
  whatsappNumber: "905338332533",
  address:
    "Eski Turk Mahallesi Mevlana Sokak No:3/1 Girne (Kyrenia), North Cyprus",
  hoursWeekday: "08:00 - 18:00",
  hoursSaturday: "09:00 - 15:00",
  hoursShort: "Weekdays 08:00 - 18:00 · Saturday 09:00 - 15:00",
  year: 2026,
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function whatsappLink(text) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const WA_GENERIC =
  "Hello, I'm interested in the Fiba Motors vehicle inventory.";
export const WA_CONTACT = "Hello, I'd like to get in touch with Fiba Motors.";
