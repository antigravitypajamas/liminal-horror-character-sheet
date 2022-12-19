export interface Character {
  name?: string;
  background?: string;
  maxStrength?: number;
  maxDexterity?: number;
  maxControl?: number;
  maxHitProtection?: number;
  deprived?: boolean;
  armor?: number;
  stability?: number;
  fatigueCount?: number;
  inventory?: string[];
  notes?: any;
}
