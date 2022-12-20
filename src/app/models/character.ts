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
  fatigueCount?: number;
  inventory?: string[];
  notes?: any;
}
