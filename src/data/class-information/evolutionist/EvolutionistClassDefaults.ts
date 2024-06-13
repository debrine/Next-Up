import { ClassDefaultTypes } from "../../type-files/classDefaultTypes.type.ts"

const EvolutionistClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 6,

    keyAbilityScore: [
        'Strength',
        'Dexterity'
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
        'Fortitude',
        'Reflex',
    ],

    badSavingThrows: [
        'Will'
    ],
}

export default EvolutionistClassDefaults