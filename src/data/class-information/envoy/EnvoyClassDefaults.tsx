const EnvoyClassDefaults: {
    hitStaminaPoints: number,
    keyAbilityScore: string[],
    classSkills: string[],
    skillPointsPerLevel: number,
    armorProficiencies: string[],
    weaponProficiencies: string[],
    babAdvancement: number,
    goodSavingThrows: string[],
    badSavingThrows: string[]
} = {

    hitStaminaPoints: 6,

    keyAbilityScore: [
        'Cha'
    ],

    classSkills: [
        'Acrobatics',
         'Athletics',
         'Bluff',
         'Computers',
         'Culture',
         'Diplomacy',
         'Disguise',
         'Engineering',
         'Intimidate',
         'Medicine',
         'Perception',
         'Piloting',
         'Sense Motive',
         'Sleight of Hand',
         'Stealth'
    ],

    skillPointsPerLevel: 8,

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
        'Ref',
        'Will'
    ],

    badSavingThrows: [
        'Fort'
    ],
}

export default EnvoyClassDefaults