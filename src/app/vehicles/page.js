import { Suspense } from "react";
import VehiclesBrowser from "@/components/VehiclesBrowser";

export const metadata = {
  title: "Vehicles for Sale | Fiba Motors",
  description: "Used car listings from the Fiba Motors stock.",
};

export default function VehiclesPage() {
  return (
    <Suspense
      fallback={
        <div className="container" style={{ padding: "60px 20px" }}>
          Loading…
        </div>
      }
    >
      <VehiclesBrowser />
    </Suspense>
  );
}
