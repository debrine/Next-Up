import { ClassDefaultTypes } from "../all-class-types/classDefaultTypes.ts"

const EvolutionistClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 6,

    keyAbilityScore: [
        'Str',
        'Dex'
    ],

    classSkills: [
        'Acrobatics',
        'Athletics',
        'Culture',
        'Disguise',
        'Intimidate',
        'Perception',
        'Stealth',
        'Survival'
    ],

    skillPointsPerLevel: 4,

    armorProficiencies: [
        'light armor'
    ],

    weaponProficiencies: [
        'basic melee weapons',
        'grenades',
        'small arms'
    ],

    babAdvancement: 1,
    
    goodSavingThrows: [
        'Fort',
        'Ref',
    ],

    badSavingThrows: [
        'Will'
    ],
}

export default EvolutionistClassDefaults