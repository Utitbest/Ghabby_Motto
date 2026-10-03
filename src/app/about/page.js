import Link from "next/link";
import { IconBrandWhatsapp, IconArrowRight } from "@tabler/icons-react";
import { whatsappLink, WA_GENERIC } from "@/data/site";
import styles from "./about.module.css";

export const metadata = {
  title: "About | Fiba Motors",
  description:
    "Buying and selling vehicles in the Girne (Kyrenia) area. Trade-in, import, financing and after-sales services.",
};

const services = [
  {
    no: "01",
    title: "Trade-in",
    text: "We value your current car and settle the difference the same day.",
  },
  {
    no: "02",
    title: "Import",
    text: "We bring in vehicles from the UK and Europe; customs and registration are on us.",
  },
  {
    no: "03",
    title: "Financing",
    text: "We set up instalment and loan options together with our partner banks.",
  },
  {
    no: "04",
    title: "After-sales",
    text: "We stay by your side after the sale for maintenance, insurance and transfer.",
  },
];

export default function AboutPage() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <span className="eyebrow">About us</span>
        <h1 className={styles.title}>Fiba Motors</h1>
        <p className={styles.lead}>
          We buy and sell vehicles in the Girne (Kyrenia) area. Browse our stock
          and get in touch with any questions.
        </p>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Our services</h2>
        <div className={styles.services}>
          {services.map((s) => (
            <article key={s.no} className={styles.service}>
              <span className={styles.serviceNo}>{s.no}</span>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceText}>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <Link href="/vehicles" className="btn btn-primary">
          View stock
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
      </section>
    </div>
  );
}
