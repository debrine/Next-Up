const TechnomancerClassDefaults: {
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
        'Int'
    ],

    classSkills: [
        'Computers',
        'Engineering',
        'Life Science',
        'Mysticism',
        'Physical Science',
        'Piloting',
        'Sleight of Hand'
    ],

    skillPointsPerLevel: 4,

    armorProficiencies: [
        'light armor'
    ],

    weaponProficiencies: [
        'basic weapons',
        'small arms',
    ],

    babAdvancement: 0.75,
    
    goodSavingThrows: [
        'Fort',
        'Ref',
    ],

    badSavingThrows: [
        'Will'
    ],
}

export default TechnomancerClassDefaults