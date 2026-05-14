import { Vehicle } from "@/types/vehicle";
import CompartmentCard from "./CompartmentCard";

type Props = {
  vehicle: Vehicle;
};

export default function VehicleCard({
  vehicle,
}: Props) {
  return (
    <div className="border rounded-2xl p-6 mb-8 shadow-sm">
      <h2 className="text-3xl font-bold">
        {vehicle.name}
      </h2>

      <p className="text-gray-500 mb-6">
        {vehicle.type}
      </p>

      {vehicle.compartments.map((compartment) => (
        <CompartmentCard
          key={compartment.id}
          compartment={compartment}
        />
      ))}
    </div>
  );
}