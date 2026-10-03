import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  IconChevronRight,
  IconCalendar,
  IconGauge,
  IconGasStation,
  IconManualGearbox,
  IconMapPin,
  IconBrandWhatsapp,
  IconPhone,
  IconArrowLeft,
} from "@tabler/icons-react";
import { listings, getListing } from "@/data/listings";
import { site, whatsappLink } from "@/data/site";
import styles from "./detail.module.css";

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }) {
  const car = getListing(params.slug);
  if (!car) return { title: "Vehicle not found | Fiba Motors" };
  return {
    title: `${car.title} | Fiba Motors`,
    description: `${car.title} — ${car.fuel}, ${car.transmission}, ${car.location}.`,
  };
}

export default function CarDetailPage({ params }) {
  const car = getListing(params.slug);
  if (!car) notFound();

  const wa = whatsappLink(
    `Hello, I'd like more information about the ${car.title} listed on your Fiba Motors website.`
  );

  const specs = [
    { icon: IconCalendar, label: "Model year", value: car.year },
    { icon: IconGauge, label: "Mileage", value: car.km || "Not specified" },
    { icon: IconGasStation, label: "Fuel", value: car.fuel },
    { icon: IconManualGearbox, label: "Transmission", value: car.transmission },
    { icon: IconMapPin, label: "Location", value: car.location },
  ];

  return (
    <div className="container">
      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link>
        <IconChevronRight size={15} />
        <Link href="/vehicles">Vehicles</Link>
        <IconChevronRight size={15} />
        <span>{car.title}</span>
      </nav>

      <div className={styles.layout}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image
              src={car.image}
              alt={car.title}
              width={1000}
              height={700}
              priority
              className={styles.img}
              sizes="(max-width: 900px) 100vw, 60vw"
            />
            {car.badge && <span className={styles.badge}>{car.badge}</span>}
          </div>
        </div>

        <aside className={styles.info}>
          <span className="eyebrow">Featured</span>
          <h1 className={styles.title}>{car.title}</h1>
          <div className={styles.tags}>
            <span className={styles.tag}>{car.fuel}</span>
            <span className={styles.tag}>{car.transmission}</span>
            <span className={styles.tag}>{car.location}</span>
          </div>

          <div className={styles.priceCard}>
            <span className={styles.priceLabel}>Price</span>
            <span
              className={`${styles.price} ${
                car.priceValue == null ? styles.ask : ""
              }`}
            >
              {car.price}
            </span>
          </div>

          <div className={styles.actions}>
            <a
              className="btn btn-whatsapp btn-block"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp size={19} stroke={1.9} />
              Ask on WhatsApp
            </a>
            <a className="btn btn-dark btn-block" href={`tel:${site.phoneRaw}`}>
              <IconPhone size={18} stroke={1.9} />
              {site.phoneDisplay}
            </a>
          </div>
        </aside>
      </div>

      <section className={styles.specsSection}>
        <h2 className={styles.specsTitle}>Vehicle details</h2>
        <div className={styles.specsGrid}>
          {specs.map((s) => (
            <div key={s.label} className={styles.specItem}>
              <s.icon size={22} stroke={1.6} />
              <div>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specValue}>{s.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Link href="/vehicles" className={styles.back}>
        <IconArrowLeft size={17} stroke={2} />
        Back to all vehicles
      </Link>
    </div>
  );
}
