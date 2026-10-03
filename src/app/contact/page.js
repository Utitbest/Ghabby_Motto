import {
  IconPhone,
  IconBrandWhatsapp,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink, WA_CONTACT } from "@/data/site";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact | Fiba Motors",
  description:
    "Get in touch with Fiba Motors by phone, WhatsApp or the contact form.",
};

export default function IletisimPage() {
  return (
    <div className="container">
      <section className={styles.head}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.lead}>
          Get in touch with Fiba Motors by phone, WhatsApp or the form below.
        </p>
      </section>

      <div className={styles.layout}>
        <ContactForm />

        <aside className={styles.info}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Contact details</h3>
            <a className={styles.row} href={`tel:${site.phoneRaw}`}>
              <IconPhone size={20} stroke={1.7} />
              <span>{site.phoneDisplay}</span>
            </a>
            <a
              className={styles.row}
              href={whatsappLink(WA_CONTACT)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp size={20} stroke={1.7} />
              <span>WhatsApp</span>
            </a>
            <div className={styles.row}>
              <IconMapPin size={20} stroke={1.7} />
              <span>{site.address}</span>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <IconClock size={18} stroke={1.8} />
              Opening hours
            </h3>
            <div className={styles.hoursRow}>
              <span>Weekdays</span>
              <span className={styles.hoursValue}>{site.hoursWeekday}</span>
            </div>
            <div className={styles.hoursRow}>
              <span>Saturday</span>
              <span className={styles.hoursValue}>{site.hoursSaturday}</span>
            </div>
          </div>

          <div className={styles.mapCard}>
            <iframe
              title="Fiba Motors location"
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Girne+Turk+Mahallesi+Mevlana+Sokak&output=embed"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
