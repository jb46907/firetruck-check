type Props = {
  name: string;
};

export default function EquipmentItem({ name }: Props) {
  return (
    <li className="flex items-center gap-3 py-1">
      <input
        type="checkbox"
        className="w-5 h-5"
      />

      <span className="text-lg">
        {name}
      </span>
    </li>
  );
}