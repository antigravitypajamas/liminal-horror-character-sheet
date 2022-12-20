export interface InventoryAndFatigue {
  item: string;
  fatigue: boolean;
}

export interface Character {
  name?: string;
  background?: string;
  baseStrength?: number;
  modifiedStrength?: number;
  baseDexterity?: number;
  modifiedDexterity?: number;
  baseControl?: number;
  modifiedControl?: number;
  baseHp?: number;
  modifiedHp?: number;
  deprived?: boolean;
  armor?: number;
  stability?: number;
  inventoryRightHand?: string;
  inventoryLeftHand?: string;
  inventorySlot3?: string;
  inventorySlot4?: string;
  inventorySlot5?: string;
  inventorySlot6?: string;
  inventorySlot7?: string;
  inventorySlot8?: string;
  inventorySlot9?: string;
  inventorySlot10?: string;
  fatigue1?: boolean;
  fatigue2?: boolean;
  fatigue3?: boolean;
  fatigue4?: boolean;
  fatigue5?: boolean;
  fatigue6?: boolean;
  fatigue7?: boolean;
  fatigue8?: boolean;
  fatigue9?: boolean;
  fatigue10?: boolean;
  notes?: any;
}
