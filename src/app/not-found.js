import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div
      className="container"
      style={{
        padding: "90px 20px",
        textAlign: "center",
        minHeight: "50vh",
      }}
    >
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: 30, fontWeight: 800, margin: "12px 0 10px" }}>
        Page not found
      </h1>
      <p className="muted" style={{ marginBottom: 26 }}>
        The vehicle or page you&apos;re looking for no longer exists.
      </p>
      <Link href="/" className="btn btn-primary">
        <IconArrowLeft size={16} stroke={2} />
        Back to home
      </Link>
    </div>
  );
}
