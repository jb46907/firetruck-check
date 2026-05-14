"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { vehicles } from "@/data/vehicles";

export default function VehiclePage() {
    const params = useParams();
    const id = params.id as string;

    const vehicle = vehicles.find(
        (v) => v.id === Number(id)
    );

    const [checked, setChecked] = useState<
        Record<number, boolean>
    >({});

    const [openCompartments, setOpenCompartments] =
        useState<Record<number, boolean>>({
            1: true,
        });

    function toggleItem(itemId: number) {
        setChecked((prev) => ({
            ...prev,
            [itemId]: !prev[itemId],
        }));
    }

    function toggleCompartment(compartmentId: number) {
        setOpenCompartments((prev) => ({
            ...prev,
            [compartmentId]:
                !prev[compartmentId],
        }));
    }

    const allItems =
        vehicle?.compartments.flatMap(
            (c) => c.equipment
        ) ?? [];

    const total = allItems.length;

    const checkedCount =
        Object.values(checked).filter(Boolean)
            .length;

    const progress =
        total === 0
            ? 0
            : (checkedCount / total) * 100;

    if (!vehicle) {
        return (
            <main className="p-8">
                <h1 className="text-2xl font-bold">
                    Vehicle not found
                </h1>
            </main>
        );
    }

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">
                {vehicle.name}
            </h1>

            <div className="mb-6">
                <div className="flex justify-between mb-1">
                    <span className="text-sm">
                        Pregledano
                    </span>

                    <span className="text-sm font-bold">
                        {checkedCount} / {total}
                    </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-green-500 h-3 rounded-full transition-all"
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>
            </div>

            {vehicle.compartments.map(
                (compartment) => {
                    const compartmentTotal =
                        compartment.equipment.length;

                    const compartmentChecked =
                        compartment.equipment.filter(
                            (item) =>
                                checked[item.id]
                        ).length;

                    const isOpen =
                        openCompartments[
                            compartment.id
                        ];

                    return (
                        <div
                            key={compartment.id}
                            className="mb-6"
                        >
                            <button
                                onClick={() =>
                                    toggleCompartment(
                                        compartment.id
                                    )
                                }
                                className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">
                                        {isOpen
                                            ? "▼"
                                            : "▶"}
                                    </span>

                                    <span className="text-xl font-bold">
                                        {
                                            compartment.name
                                        }
                                    </span>
                                </div>

                                <span className="font-semibold">
                                    {
                                        compartmentChecked
                                    }
                                    /
                                    {
                                        compartmentTotal
                                    }
                                </span>
                            </button>

                            {isOpen && (
                                <ul className="mt-3">
                                    {compartment.equipment.map(
                                        (item) => (
                                            <li
                                                key={
                                                    item.id
                                                }
                                                className="flex items-center gap-3 py-2"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={
                                                        !!checked[
                                                            item.id
                                                        ]
                                                    }
                                                    onChange={() =>
                                                        toggleItem(
                                                            item.id
                                                        )
                                                    }
                                                    className="w-5 h-5"
                                                />

                                                <span className="text-lg">
                                                    {
                                                        item.id
                                                    }
                                                    .{" "}
                                                    {
                                                        item.name
                                                    }{" "}
                                                    (
                                                    {
                                                        item.quantity
                                                    }
                                                    x)
                                                </span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )}
                        </div>
                    );
                }
            )}
        </main>
    );
}