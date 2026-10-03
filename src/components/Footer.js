import Link from "next/link";
import Image from "next/image";
import { IconMapPin, IconPhone, IconBrandWhatsapp } from "@tabler/icons-react";
import { nav, site, whatsappLink, WA_GENERIC } from "@/data/site";
import { LOGO } from "@/data/images";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand}>
            <Image src={LOGO} alt="Fiba Motors" width={40} height={40} className={styles.logo} />
            <span className={styles.brandName}>Fiba Motors</span>
          </Link>
          <p className={styles.copy}>
            © {site.year} Fiba Motors. All rights reserved.
          </p>
          <a
            className={`btn btn-whatsapp ${styles.waBtn}`}
            href={whatsappLink(WA_GENERIC)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={18} stroke={1.9} />
            WhatsApp
          </a>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Menu</h4>
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.list}>
            <li className={styles.infoItem}>
              <IconMapPin size={17} stroke={1.75} />
              <span>{site.address}</span>
            </li>
            <li>
              <a className={styles.infoItem} href={`tel:${site.phoneRaw}`}>
                <IconPhone size={17} stroke={1.75} />
                {site.phoneDisplay}
              </a>
            </li>
            <li className={styles.hours}>{site.hoursShort}</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>© {site.year} Fiba Motors</span>
          <span className={styles.infra}>
            Powered by{" "}
            <a
              href="https://www.galerimplus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GalerimPlus
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
