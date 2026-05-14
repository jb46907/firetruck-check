import { Compartment } from "@/types/vehicle";
import EquipmentItem from "./EquipmentItem";

type Props = {
  compartment: Compartment;
};

export default function CompartmentCard({
  compartment,
}: Props) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-3">
        {compartment.name}
      </h3>

      <ul>
        {compartment.equipment.map((item) => (
          <EquipmentItem
            key={item.id}
            name={item.name}
          />
        ))}
      </ul>
    </div>
  );
}