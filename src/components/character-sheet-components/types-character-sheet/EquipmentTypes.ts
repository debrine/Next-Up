type ArmorType = {
  armorName: string;
  armorType: string;
  armorProficiency: string;
  armorLevel: number;
  armorBulk: string;
  armorCost: number;
  armorEAC: number;
  armorKAC: number;
  maxDexBonus: number;
  armorNotes: string;
};

type WeaponType = {
  weaponName: string;
  weaponType: string;
  weaponRange: string;
  weaponCritical: string;
  usesAmmo: boolean;
  weaponAmmoTotal: number;
  weaponAmmoCurrent: number;
  weaponProficiency: string;
  weaponLevel: number;
  weaponBulk: string;
  weaponCost: number;
  weaponDamageType: string;
  weaponDiceType: number;
  weaponDiceDamage: number;
  weaponDamageBonus: number;
  isOperativeWeapon: boolean;
  weaponNotes: string;
};
