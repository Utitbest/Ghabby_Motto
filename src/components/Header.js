"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconBrandWhatsapp, IconMenu2, IconX } from "@tabler/icons-react";
import { nav, site, whatsappLink, WA_GENERIC } from "@/data/site";
import { LOGO } from "@/data/images";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Image src={LOGO} alt="Fiba Motors" width={40} height={40} className={styles.logo} />
          <span className={styles.brandName}>Fiba Motors</span>
        </Link>

        <nav className={styles.nav}>
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${active ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <a
            className={`btn btn-whatsapp ${styles.waBtn}`}
            href={whatsappLink(WA_GENERIC)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={18} stroke={1.9} />
            WhatsApp
          </a>
          <Link className={`btn btn-primary ${styles.stockBtn}`} href="/vehicles">
            View stock
          </Link>
          <button
            className={styles.menuBtn}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <div className="container">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className={styles.mobileActions}>
              <a
                className="btn btn-whatsapp btn-block"
                href={whatsappLink(WA_GENERIC)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandWhatsapp size={18} stroke={1.9} />
                WhatsApp
              </a>
              <Link
                className="btn btn-primary btn-block"
                href="/vehicles"
                onClick={() => setOpen(false)}
              >
                View stock
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
