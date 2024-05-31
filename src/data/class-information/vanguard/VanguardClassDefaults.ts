import { ClassDefaultTypes } from "../all-class-types/classDefaultTypes.ts"

const VanguardClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 7,

    keyAbilityScore: [
        'Con'
    ],

    classSkills: [
        'Acrobatics',
        'Athletics',
        'Culture',
        'Diplomacy',
        'Intimidate',
        'Life Science',
        'Medicine',
        'Mysticism',
        'Perception',
        'Stealth',
        'Survival'
    ],

    skillPointsPerLevel: 6,

    armorProficiencies: [
        'light armor',
        'heavy armor',
        'shields'
    ],

    weaponProficiencies: [
        'basic weapons',
        'advanced melee weapons',
        'small arms',
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

export default VanguardClassDefaults