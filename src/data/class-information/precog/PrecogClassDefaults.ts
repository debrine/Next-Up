import { ClassDefaultTypes } from "../all-class-types/classDefaultTypes.ts"

const PrecogClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 5,

    keyAbilityScore: [
        'Dex'
    ],

    classSkills: [
        'Acrobatics',
        'Bluff',
        'Culture',
        'Diplomacy',
        'Mysticism',
        'Perception',
        'Piloting',
        'Sense Motive',
        'Stealth'
    ],

    skillPointsPerLevel: 6,

    armorProficiencies: [
        'light armor'
    ],

    // Precog also gets an option for a proficiency in advanced melee weapons, longarms, or sniper rifles. Make selectable in creation.
    weaponProficiencies: [
        'Basic melee weapons',
        'small arms',
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

export default PrecogClassDefaults