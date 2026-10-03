import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { site, whatsappLink, WA_GENERIC } from "@/data/site";
import styles from "./MobileCallBar.module.css";

export default function MobileCallBar() {
  return (
    <div className={styles.bar}>
      <a
        className={`btn btn-whatsapp ${styles.btn}`}
        href={whatsappLink(WA_GENERIC)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandWhatsapp size={19} stroke={1.9} />
        WhatsApp
      </a>
      <a className={`btn btn-dark ${styles.btn}`} href={`tel:${site.phoneRaw}`}>
        <IconPhone size={19} stroke={1.9} />
        Call now
      </a>
    </div>
  );
}
