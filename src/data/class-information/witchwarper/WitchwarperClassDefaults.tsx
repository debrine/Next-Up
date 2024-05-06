const WitchwarperClassDefaults: {
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

    hitStaminaPoints: 5,

    keyAbilityScore: [
        'Cha'
    ],

    classSkills: [
        'Acrobatics',
        'Bluff',
        'Culture',
        'Diplomacy',
        'Intimidate',
        'Mysticism',
        'Physical Science'
    ],

    skillPointsPerLevel: 4,

    armorProficiencies: [
        'light armor',
    ],

    weaponProficiencies: [
        'basic weapons',
        'small arms',
        'grenades'
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

export default WitchwarperClassDefaults