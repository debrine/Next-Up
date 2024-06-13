import { ClassDefaultTypes } from "../../type-files/classDefaultTypes.type.ts"

const SolarianClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 7,

    keyAbilityScore: [
        'Charisma'
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
        'Fortitude',
        'Will'
    ],

    badSavingThrows: [
        'Reflex',
    ],
}

export default SolarianClassDefaults