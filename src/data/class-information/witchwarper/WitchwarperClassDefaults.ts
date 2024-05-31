import { ClassDefaultTypes } from "../all-class-types/classDefaultTypes.ts"

const WitchwarperClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 5,

    keyAbilityScore: [
        'Cha'
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
        'Ref',
    ],

    badSavingThrows: [
        'Fort',
        'Will'
    ],
}

export default WitchwarperClassDefaults