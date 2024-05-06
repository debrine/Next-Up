const VanguardClassDefaults: {
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

    hitStaminaPoints: 7,

    keyAbilityScore: [
        'Con'
    ],

    classSkills: [
        'Acrobatics',
        'Athletics',
        'Culture',
        'Diplomacy',
        'Intimidate',
        'Life Science',
        'Medicine',
        'Mysticism',
        'Perception',
        'Stealth',
        'Survival'
    ],

    skillPointsPerLevel: 6,

    armorProficiencies: [
        'light armor',
        'heavy armor',
        'shields'
    ],

    weaponProficiencies: [
        'basic weapons',
        'advanced melee weapons',
        'small arms',
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

export default VanguardClassDefaults