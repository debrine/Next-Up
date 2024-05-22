import { ClassDefaultTypes } from "../all-class-types/classDefaultTypes.ts"

const SolarianClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 7,

    keyAbilityScore: [
        'Cha'
    ],

    classSkills: [
        'Acrobatics',
        'Athletics',
        'Diplomacy',
        'Intimidate',
        'Mysticism',
        'Perception',
        'Physical Science',
        'Sense Motive',
        'Stealth'
    ],

    skillPointsPerLevel: 4,

    armorProficiencies: [
        'light armor',
        'shields'
    ],

    weaponProficiencies: [
        'Basic weapons',
        'advanced melee weapons',
        'small arms'
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

export default SolarianClassDefaults