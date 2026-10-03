import Link from "next/link";
import {
  IconMapPin,
  IconClock,
  IconBrandWhatsapp,
  IconArrowRight,
} from "@tabler/icons-react";
import { site, whatsappLink, WA_GENERIC } from "@/data/site";
import styles from "./AboutStrip.module.css";

export default function AboutStrip() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className="eyebrow">About us</span>
          <h2 className={styles.title}>Fiba Motors</h2>
          <p className={styles.text}>
            We buy and sell vehicles in the Girne (Kyrenia) area. Browse our
            stock and get in touch with any questions.
          </p>
          <div className={styles.actions}>
            <Link href="/about" className="btn btn-primary">
              Get to know us
              <IconArrowRight size={16} stroke={2} />
            </Link>
            <a
              className="btn btn-outline"
              href={whatsappLink(WA_GENERIC)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp size={18} stroke={1.9} />
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.infoRow}>
            <IconMapPin size={20} stroke={1.7} />
            <div>
              <span className={styles.infoLabel}>Address</span>
              <p className={styles.infoValue}>{site.address}</p>
            </div>
          </div>
          <div className={styles.infoRow}>
            <IconClock size={20} stroke={1.7} />
            <div>
              <span className={styles.infoLabel}>Opening hours</span>
              <p className={styles.infoValue}>
                Weekdays {site.hoursWeekday}
                <br />
                Saturday {site.hoursSaturday}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
