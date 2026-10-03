"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { IconFilter, IconX } from "@tabler/icons-react";
import CarCard from "./CarCard";
import { listings, brands, fuels, transmissions } from "@/data/listings";
import styles from "./VehiclesBrowser.module.css";

const sortOptions = [
  { value: "yeni", label: "Newest" },
  { value: "fiyat-artan", label: "Price: low to high" },
  { value: "fiyat-azalan", label: "Price: high to low" },
  { value: "km-az", label: "Mileage: lowest" },
];

const PAGE_SIZE = 12;

function kmToNumber(km) {
  if (!km) return Infinity;
  return parseInt(km.replace(/[^\d]/g, ""), 10) || 0;
}

export default function VehiclesBrowser() {
  const params = useSearchParams();
  const [brand, setBrand] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("All");
  const [sort, setSort] = useState("yeni");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setBrand(params.get("marka") || "");
    setQuery(params.get("q") || "");
  }, [params]);

  const filtered = useMemo(() => {
    let list = listings.filter((car) => {
      if (brand && car.brand !== brand) return false;
      if (fuel && car.fuel !== fuel) return false;
      if (transmission !== "All" && car.transmission !== transmission)
        return false;
      if (query && !car.title.toLowerCase().includes(query.toLowerCase()))
        return false;
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "fiyat-artan":
          return (a.priceValue ?? Infinity) - (b.priceValue ?? Infinity);
        case "fiyat-azalan":
          return (b.priceValue ?? -Infinity) - (a.priceValue ?? -Infinity);
        case "km-az":
          return kmToNumber(a.km) - kmToNumber(b.km);
        default:
          return b.year - a.year;
      }
    });
    return list;
  }, [brand, fuel, transmission, sort, query]);

  useEffect(() => setVisible(PAGE_SIZE), [brand, fuel, transmission, sort, query]);

  function reset() {
    setBrand("");
    setFuel("");
    setTransmission("All");
    setQuery("");
  }

  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;

  const filterPanel = (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>Filters</span>
        <button className={styles.reset} onClick={reset}>
          Clear
        </button>
      </div>

      <div className={styles.group}>
        <span className={styles.groupLabel}>Make</span>
        <div className={styles.chips}>
          <button
            className={`${styles.chip} ${brand === "" ? styles.chipActive : ""}`}
            onClick={() => setBrand("")}
          >
            All
          </button>
          {brands.map((b) => (
            <button
              key={b}
              className={`${styles.chip} ${brand === b ? styles.chipActive : ""}`}
              onClick={() => setBrand(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.groupLabel}>Fuel</span>
        <div className={styles.chips}>
          <button
            className={`${styles.chip} ${fuel === "" ? styles.chipActive : ""}`}
            onClick={() => setFuel("")}
          >
            All
          </button>
          {fuels.map((f) => (
            <button
              key={f}
              className={`${styles.chip} ${fuel === f ? styles.chipActive : ""}`}
              onClick={() => setFuel(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <span className={styles.groupLabel}>Transmission</span>
        <div className={styles.chips}>
          {transmissions.map((t) => (
            <button
              key={t}
              className={`${styles.chip} ${
                transmission === t ? styles.chipActive : ""
              }`}
              onClick={() => setTransmission(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className={styles.header}>
        <div>
          <span className="eyebrow">Vehicles in stock</span>
          <h1 className={styles.pageTitle}>Vehicles for Sale</h1>
          <p className={styles.count}>Fiba Motors · {filtered.length} vehicles</p>
        </div>
        <div className={styles.controls}>
          <button
            className={`btn btn-outline ${styles.filterToggle}`}
            onClick={() => setMobileOpen(true)}
          >
            <IconFilter size={18} stroke={1.8} />
            Filter
          </button>
          <select
            className={styles.sort}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>{filterPanel}</aside>

        <div className={styles.content}>
          {shown.length === 0 ? (
            <p className={styles.empty}>No vehicles match these filters.</p>
          ) : (
            <div className={styles.grid}>
              {shown.map((car) => (
                <CarCard key={car.slug} car={car} />
              ))}
            </div>
          )}

          {remaining > 0 && (
            <div className={styles.more}>
              <button
                className="btn btn-outline"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
              >
                Show more ({remaining})
              </button>
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.drawer}>
          <div
            className={styles.drawerBackdrop}
            onClick={() => setMobileOpen(false)}
          />
          <div className={styles.drawerPanel}>
            <div className={styles.drawerHead}>
              <span>Filters</span>
              <button
                aria-label="Close"
                onClick={() => setMobileOpen(false)}
                className={styles.drawerClose}
              >
                <IconX size={22} />
              </button>
            </div>
            {filterPanel}
            <button
              className="btn btn-primary btn-block"
              onClick={() => setMobileOpen(false)}
            >
              Show {filtered.length} vehicles
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
