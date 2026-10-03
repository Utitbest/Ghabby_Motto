"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  IconSearch,
  IconShieldCheck,
  IconFileDescription,
  IconRefresh,
} from "@tabler/icons-react";
import { brands } from "@/data/listings";
import styles from "./HomeSearch.module.css";

const trust = [
  { icon: IconShieldCheck, label: "Trusted dealership guarantee" },
  { icon: IconFileDescription, label: "Support with transfer paperwork" },
  { icon: IconRefresh, label: "Trade-ins welcome" },
];

export default function HomeSearch() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [brand, setBrand] = useState("");

  function submit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (brand) params.set("marka", brand);
    const qs = params.toString();
    router.push(`/vehicles${qs ? `?${qs}` : ""}`);
  }

  return (
    <section className={styles.wrap}>
      <div className="container">
        <form className={styles.bar} onSubmit={submit}>
          <div className={styles.field}>
            <IconSearch size={19} stroke={1.8} className={styles.searchIcon} />
            <input
              className={styles.input}
              type="text"
              placeholder="Search make or model"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <select
            className={styles.select}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            aria-label="Make"
          >
            <option value="">All makes</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <button type="submit" className={`btn btn-dark ${styles.submit}`}>
            Show vehicles
          </button>
        </form>

        <ul className={styles.trust}>
          {trust.map((t) => (
            <li key={t.label}>
              <t.icon size={18} stroke={1.8} />
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
