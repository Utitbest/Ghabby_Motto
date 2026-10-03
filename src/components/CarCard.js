import Link from "next/link";
import Image from "next/image";
import {
  IconGasStation,
  IconManualGearbox,
  IconMapPin,
  IconArrowRight,
} from "@tabler/icons-react";
import styles from "./CarCard.module.css";

export default function CarCard({ car }) {
  const href = `/vehicles/${car.slug}`;
  const meta = [car.year, car.km].filter(Boolean).join(" · ");

  return (
    <article className={styles.card}>
      <Link href={href} className={styles.media}>
        <Image
          src={car.image}
          alt={car.title}
          width={600}
          height={420}
          className={styles.image}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {car.badge && <span className={styles.badge}>{car.badge}</span>}
      </Link>

      <div className={styles.body}>
        <span className={styles.meta}>{meta}</span>
        <h3 className={styles.title}>
          <Link href={href}>{car.title}</Link>
        </h3>

        <ul className={styles.specs}>
          <li>
            <IconGasStation size={16} stroke={1.7} />
            {car.fuel}
          </li>
          <li>
            <IconManualGearbox size={16} stroke={1.7} />
            {car.transmission}
          </li>
          <li>
            <IconMapPin size={16} stroke={1.7} />
            {car.location}
          </li>
        </ul>

        <div className={styles.footer}>
          <span
            className={`${styles.price} ${
              car.priceValue == null ? styles.ask : ""
            }`}
          >
            {car.price}
          </span>
          <Link href={href} className={styles.detail}>
            View
            <IconArrowRight size={15} stroke={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}
