export interface MaterialOrder {
  id?: number;
  materialName: string;
  characteristics: Characteristic[];
  inventory: Inventory;
  plants: Plant[];
  supplier: Supplier;
}

export interface Characteristic {
  name: string;
  value: string;
}

export interface Inventory {
  currentStock: number;
  minStock: number;
  location: string;
}

export interface Plant {
  name: string;
  code: string;
  quantity: number;
}

export interface Supplier {
  name: string;
  code: string;
  leadTime: number;
  unitPrice: number;
}
