const BiohackerClassDefaults: {
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
        'Dex'
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
        'Fort'
    ],

    badSavingThrows: [
        'Ref',
        'Will'
    ],
}

export default BiohackerClassDefaults