import { ClassDefaultTypes } from "../../type-files/classDefaultTypes.type.ts"

const MysticClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 6,

    keyAbilityScore: [
        'Wisdom'
    ],

    classSkills: [
        'Bluff',
        'Culture',
        'Diplomacy',
        'Disguise',
        'Intimidate',
        'Life Science',
        'Medicine',
        'Mysticism',
        'Perception',
        'Sense Motive',
        'Survival'
    ],

    skillPointsPerLevel: 6,

    armorProficiencies: [
        'light armor'
    ],

    weaponProficiencies: [
        'basic melee weapons',
        'small arms'
    ],

    babAdvancement: 0.75,
    
    goodSavingThrows: [
        'Will'
    ],

    badSavingThrows: [
        'Fortitude',
        'Reflex',
    ],
}

export default MysticClassDefaults