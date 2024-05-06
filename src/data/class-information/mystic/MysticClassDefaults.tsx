const MysticClassDefaults: {
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
        'Wis'
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
        'Fort',
        'Ref',
    ],
}

export default MysticClassDefaults