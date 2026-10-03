"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconChevronLeft,
  IconChevronRight,
  IconStarFilled,
  IconBrandWhatsapp,
  IconArrowRight,
} from "@tabler/icons-react";
import { whatsappLink } from "@/data/site";
import styles from "./Hero.module.css";

export default function Hero({ slides }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5500);
    return () => clearInterval(t);
  }, [count]);

  const car = slides[index];
  const wa = whatsappLink(
    `Hello, I'd like more information about the ${car.title} listed on your Fiba Motors website.`
  );

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.gallery}>
          {slides.map((s, i) => (
            <Image
              key={s.slug}
              src={s.image}
              alt={s.title}
              width={900}
              height={620}
              priority={i === 0}
              className={`${styles.slide} ${i === index ? styles.slideActive : ""}`}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          ))}

          <span className={styles.vitrinBadge}>
            <IconStarFilled size={13} />
            Featured
          </span>
          <span className={styles.counter}>
            {index + 1} / {count}
          </span>

          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            aria-label="Önceki"
            onClick={() => go(-1)}
          >
            <IconChevronLeft size={22} />
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            aria-label="Sonraki"
            onClick={() => go(1)}
          >
            <IconChevronRight size={22} />
          </button>

          <div className={styles.dots}>
            {slides.map((s, i) => (
              <button
                key={s.slug}
                aria-label={`Slayt ${i + 1}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <span className="eyebrow">Featured</span>
          <h1 className={styles.title}>{car.title}</h1>
          <div className={styles.tags}>
            <span className={styles.tag}>{car.fuel}</span>
            <span className={styles.tag}>{car.transmission}</span>
          </div>

          <div className={styles.priceBlock}>
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
              className="btn btn-primary btn-block"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp size={18} stroke={1.9} />
              Ask on WhatsApp
            </a>
            <Link
              className="btn btn-outline btn-block"
              href={`/vehicles/${car.slug}`}
            >
              View listing
              <IconArrowRight size={16} stroke={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
