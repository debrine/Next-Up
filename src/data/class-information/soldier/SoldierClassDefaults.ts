import { ClassDefaultTypes } from "../all-class-types/classDefaultTypes.ts"

const SoldierClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 7,

    keyAbilityScore: [
        'Str',
        'Dex'
    ],

    classSkills: [
        'Acrobatics',
        'Athletics',
        'Engineering',
        'Intimidate',
        'Medicine',
        'Piloting',
        'Survival'
    ],

    skillPointsPerLevel: 4,

    armorProficiencies: [
        'light armor',
        'heavy armor',
        'shields'
    ],

    weaponProficiencies: [
        'basic weapons',
        'advanced melee weapons',
        'small arms',
        'longarms',
        'heavy weapons',
        'sniper weapons',
        'grenades'
    ],

    babAdvancement: 1,
    
    goodSavingThrows: [
        'Fort',
        'Will'
    ],

    badSavingThrows: [
        'Ref',
    ],
}

export default SoldierClassDefaults