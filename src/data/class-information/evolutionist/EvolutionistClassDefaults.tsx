const EvolutionistClassDefaults: {
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
        'Str',
        'Dex'
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
        'Fort',
        'Ref',
    ],

    badSavingThrows: [
        'Will'
    ],
}

export default EvolutionistClassDefaults