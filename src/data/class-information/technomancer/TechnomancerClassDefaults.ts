import { ClassDefaultTypes } from "../all-class-types/classDefaultTypes.ts"

const TechnomancerClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 5,

    keyAbilityScore: [
        'Int'
    ],

    classSkills: [
        'Computers',
        'Engineering',
        'Life Science',
        'Mysticism',
        'Physical Science',
        'Piloting',
        'Sleight of Hand'
    ],

    skillPointsPerLevel: 4,

    armorProficiencies: [
        'light armor'
    ],

    weaponProficiencies: [
        'basic weapons',
        'small arms',
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

export default TechnomancerClassDefaults