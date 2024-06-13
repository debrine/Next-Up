import { ClassDefaultTypes } from "../../type-files/classDefaultTypes.type.ts"

const WitchwarperClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 5,

    keyAbilityScore: [
        'Charisma'
    ],

    classSkills: [
        'Acrobatics',
        'Bluff',
        'Culture',
        'Diplomacy',
        'Intimidate',
        'Mysticism',
        'Physical Science'
    ],

    skillPointsPerLevel: 4,

    armorProficiencies: [
        'light armor',
    ],

    weaponProficiencies: [
        'basic weapons',
        'small arms',
        'grenades'
    ],

    babAdvancement: 0.75,
    
    goodSavingThrows: [
        'Reflex',
    ],

    badSavingThrows: [
        'Fortitude',
        'Will'
    ],
}

export default WitchwarperClassDefaults