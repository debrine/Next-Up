

const SoldierClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 7,

    keyAbilityScore: [
        'Strength',
        'Dexterity'
    ],

    keyAbilityDescription: 'Your Strength helps you attack up close in melee and carry heavier weapons and armor, while your Dexterity helps you fire weapons from a distance and dodge returning fire, so you should choose either Strength or Dexterity as your key ability score. Once made, this choice cannot be changed. A high Constitution score allows you to soak up more damage.',

    classSkills: [
        'Acrobatics',
        'Athletics',
        'Engineering',
        'Intimidate',
        'Medicine',
        'Piloting',
        'Survival'
    ],

    skillPointsPerLevel: 4,

    armorProficiencies: [
        'light armor',
        'heavy armor',
        'shields'
    ],

    weaponProficiencies: [
        'basic weapons',
        'advanced melee weapons',
        'small arms',
        'longarms',
        'heavy weapons',
        'sniper weapons',
        'grenades'
    ],

    babAdvancement: 1,
    
    goodSavingThrows: [
        'Fortitude',
        'Will'
    ],

    badSavingThrows: [
        'Reflex',
    ],
}

export default SoldierClassDefaults