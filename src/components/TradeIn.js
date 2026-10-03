"use client";

import { useState } from "react";
import { IconBrandWhatsapp, IconCheck } from "@tabler/icons-react";
import { whatsappLink } from "@/data/site";
import styles from "./TradeIn.module.css";

const perks = [
  "Trade against a car in stock, pay the difference",
  "Fast response",
  "Same-day payment if you accept",
];

export default function TradeIn() {
  const [form, setForm] = useState({ model: "", year: "", km: "", name: "" });
  const [consent, setConsent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const lines = [
      "Hello, I'd like to submit my car for a trade-in / valuation.",
      form.model && `Make / model: ${form.model}`,
      form.year && `Model year: ${form.year}`,
      form.km && `Mileage: ${form.km}`,
      form.name && `My name: ${form.name}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <span className="eyebrow">Trade-in &amp; Valuation</span>
          <h2 className={styles.title}>
            Trade in your car or sell it for cash.
          </h2>
          <p className={styles.lead}>
            Send us your car&apos;s details; our team will review it and get back
            to you with a trade-in or cash purchase offer.
          </p>
          <ul className={styles.perks}>
            {perks.map((p) => (
              <li key={p}>
                <IconCheck size={18} stroke={2.2} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <form className={styles.form} onSubmit={submit}>
          <h3 className={styles.formTitle}>Request an offer</h3>
          <div className={styles.row}>
            <label className={styles.label}>
              Make / model
              <input
                className={styles.input}
                value={form.model}
                onChange={update("model")}
                placeholder="e.g. VW Golf"
              />
            </label>
          </div>
          <div className={styles.grid2}>
            <label className={styles.label}>
              Model year
              <input
                className={styles.input}
                value={form.year}
                onChange={update("year")}
                placeholder="2020"
                inputMode="numeric"
              />
            </label>
            <label className={styles.label}>
              Mileage
              <input
                className={styles.input}
                value={form.km}
                onChange={update("km")}
                placeholder="45,000"
                inputMode="numeric"
              />
            </label>
          </div>
          <label className={styles.label}>
            Your name (optional)
            <input
              className={styles.input}
              value={form.name}
              onChange={update("name")}
            />
          </label>

          <label className={styles.consent}>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span>
              I agree to my details being shared with the dealership via WhatsApp
              for this request.
            </span>
          </label>

          <button
            type="submit"
            className="btn btn-whatsapp btn-block"
            disabled={!consent}
            style={{ opacity: consent ? 1 : 0.55 }}
          >
            <IconBrandWhatsapp size={18} stroke={1.9} />
            Request offer via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
