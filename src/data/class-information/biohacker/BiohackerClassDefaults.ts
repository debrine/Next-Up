import { ClassDefaultTypes } from "../../type-files/classDefaultTypes.type"


const BiohackerClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 6,

    keyAbilityScore: [
        'Dexterity'
    ],

    classSkills: [
        'Acrobatics',
        'Athletics',
        'Bluff',
        'Computers',
        'Culture',
        'Disguise',
        'Engineering',
        'Intimidate',
        'Medicine',
        'Perception',
        'Piloting',
        'Sense Motive',
        'Sleight of Hand',
        'Stealth',
        'Survival'
    ],

    skillPointsPerLevel: 8,

    armorProficiencies: [
        'light armor'
    ],

    weaponProficiencies: [
        'basic melee weapons',
        'small arms',
        'sniper weapons'
    ],

    babAdvancement: 0.75,
    
    goodSavingThrows: [
        'Fortitude'
    ],

    badSavingThrows: [
        'Reflex',
        'Will'
    ],
}

export default BiohackerClassDefaults