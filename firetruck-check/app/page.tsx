import Link from "next/link";
import { vehicles } from "@/data/vehicles";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Firetruck Check
      </h1>

      <div className="grid gap-4">
        {vehicles.map((vehicle) => (
          <Link
            key={vehicle.id}
            href={`/vehicle/${vehicle.id}`}
            className="border rounded-2xl p-6 hover:bg-gray-100 transition"
          >
            <h2 className="text-2xl font-bold">
              {vehicle.name}
            </h2>

            <p className="text-gray-500">
              {vehicle.type}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}