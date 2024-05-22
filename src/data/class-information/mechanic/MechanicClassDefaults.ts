import { ClassDefaultTypes } from "../all-class-types/classDefaultTypes.ts"

const MechanicClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 6,

    keyAbilityScore: [
        'Int'
    ],

    classSkills: [
        'Athletics',
        'Computers',
        'Engineering',
        'Medicine',
        'Perception',
        'Physical Science',
        'Piloting'
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

    babAdvancement: 0.75,
    
    goodSavingThrows: [
        'Fort',
        'Ref',
    ],

    badSavingThrows: [
        'Will'
    ],
}

export default MechanicClassDefaults