import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import CarCard from "./CarCard";
import { listings } from "@/data/listings";
import styles from "./HomeListings.module.css";

export default function HomeListings() {
  const cars = listings.slice(0, 8);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">Listings</span>
            <h2 className={styles.title}>Recently added</h2>
          </div>
          <Link href="/vehicles" className={styles.all}>
            View all ({listings.length})
            <IconArrowRight size={16} stroke={2} />
          </Link>
        </div>

        <div className={styles.grid}>
          {cars.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
