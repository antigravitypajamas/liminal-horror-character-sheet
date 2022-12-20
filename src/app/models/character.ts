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
  inventory?: InventoryAndFatigue[];
  notes?: any;
}
