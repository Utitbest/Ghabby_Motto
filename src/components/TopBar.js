import { IconMapPin, IconClock, IconPhone, IconBrandWhatsapp } from "@tabler/icons-react";
import { site, whatsappLink, WA_GENERIC } from "@/data/site";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.item}>
            <IconMapPin size={15} stroke={1.75} />
            <span className={styles.address}>{site.address}</span>
          </span>
          <span className={`${styles.item} ${styles.hideSm}`}>
            <IconClock size={15} stroke={1.75} />
            {site.hoursShort}
          </span>
        </div>
        <div className={styles.right}>
          <a className={styles.item} href={`tel:${site.phoneRaw}`}>
            <IconPhone size={15} stroke={1.75} />
            {site.phoneDisplay}
          </a>
          <a
            className={styles.item}
            href={whatsappLink(WA_GENERIC)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={15} stroke={1.75} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
