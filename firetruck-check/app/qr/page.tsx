"use client";

import QRCode from "react-qr-code";
import { vehicles } from "@/data/vehicles";

export default function QRPage() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-8">
                Vehicle QR Codes
            </h1>

            <div className="grid grid-cols-2 gap-8">
                {vehicles.map((vehicle) => {
                    const url = `http://firetruck-check.vercel.app/vehicle/${vehicle.id}`;

                    return (
                        <div
                            key={vehicle.id}
                            className="border rounded-2xl p-6 flex flex-col items-center"
                        >
                            <h2 className="text-2xl font-bold mb-4">
                                {vehicle.name}
                            </h2>

                            <QRCode
                                value={url}
                                size={200}
                            />

                            <p className="mt-4 text-sm text-gray-500 break-all">
                                {url}
                            </p>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}