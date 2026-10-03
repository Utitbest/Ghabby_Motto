"use client";

import { useState } from "react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { whatsappLink } from "@/data/site";
import styles from "./ContactForm.module.css";

const subjects = [
  "Vehicle information",
  "Trade-in / valuation",
  "Test drive appointment",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    subject: subjects[0],
    car: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const lines = [
      `Hello, I'd like to get in touch with Fiba Motors.`,
      `Subject: ${form.subject}`,
      form.name && `My name: ${form.name}`,
      form.car && `Vehicle of interest: ${form.car}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <h2 className={styles.title}>Write to us</h2>

      <label className={styles.label}>
        Your name
        <input
          className={styles.input}
          value={form.name}
          onChange={update("name")}
        />
      </label>

      <label className={styles.label}>
        Subject
        <select
          className={styles.input}
          value={form.subject}
          onChange={update("subject")}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.label}>
        Vehicle of interest (optional)
        <input
          className={styles.input}
          value={form.car}
          onChange={update("car")}
        />
      </label>

      <label className={styles.label}>
        Your message
        <textarea
          className={styles.textarea}
          rows={4}
          value={form.message}
          onChange={update("message")}
        />
      </label>

      <label className={styles.consent}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          I agree to my details being shared with the dealership via WhatsApp for
          this request.
        </span>
      </label>

      <button
        type="submit"
        className="btn btn-whatsapp btn-block"
        disabled={!consent}
        style={{ opacity: consent ? 1 : 0.55 }}
      >
        <IconBrandWhatsapp size={18} stroke={1.9} />
        Send via WhatsApp
      </button>
    </form>
  );
}
