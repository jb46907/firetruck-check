export type Equipment = {
  id: number;        // redni broj (stavka u kartonu)
  name: string;      // naziv opreme
  quantity: number;  // količina komada
};

export type Compartment = {
  id: number;
  name: string;      // npr. "Boks 1", "Kabina"
  equipment: Equipment[];
};

export type Vehicle = {
  id: number;
  name: string;      // npr. "Navalno 1"
  type: string;      // npr. "Mercedes Atego"
  compartments: Compartment[];
};