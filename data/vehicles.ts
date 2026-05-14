import { Vehicle } from "@/types/vehicle";

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Navalno 1",
    type: "Mercedes Atego",
    compartments: [
      {
        id: 1,
        name: "Boks 1",
        equipment: [
          { id: 6, name: "Sjekira", quantity: 5 },
          { id: 7, name: "Crijevo 25m", quantity: 2 },
        ],
      },
      {
        id: 2,
        name: "Kabina",
        equipment: [
          { id: 8, name: "Radio stanica", quantity: 1 },
          { id: 9, name: "GPS uređaj", quantity: 1 },
        ],
      },
    ],
  },
];