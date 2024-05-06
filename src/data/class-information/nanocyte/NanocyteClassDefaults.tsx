const NanocyteClassDefaults: {
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
        'Con'
    ],

    classSkills: [
        'Acrobatics',
        'Athletics',
        'Computers',
        'Engineering',
        'Life Science',
        'Medicine',
        'Perception',
        'Physical Science',
        'Piloting',
        'Sleight of Hand',
        'Stealth'
    ],

    skillPointsPerLevel: 6,

    armorProficiencies: [
        'light armor'
    ],

    weaponProficiencies: [
        'basic weapons',
        'advanced melee weapons',
        'small arms',
        'longarms'
    ],

    babAdvancement: 1,
    
    goodSavingThrows: [
        'Fort',
    ],

    badSavingThrows: [
        'Ref',
        'Will'
    ],
}

export default NanocyteClassDefaults