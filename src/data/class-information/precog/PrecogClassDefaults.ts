

const PrecogClassDefaults: ClassDefaultTypes = {

    hitStaminaPoints: 5,

    keyAbilityScore: [
        'Dexterity'
    ],

    keyAbilityDescription: 'Your Dexterity is your key ability score, and it determines the number of time-altering paradoxes you can use each day, as well as the saving throw DC of many precog abilities. Your Intelligence determines your spellcasting ability, the saving throw DC of your spells, and the number of bonus spells you can cast per day.',

    classSkills: [
        'Acrobatics',
        'Bluff',
        'Culture',
        'Diplomacy',
        'Mysticism',
        'Perception',
        'Piloting',
        'Sense Motive',
        'Stealth'
    ],

    skillPointsPerLevel: 6,

    armorProficiencies: [
        'light armor'
    ],

    // Precog also gets an option for a proficiency in advanced melee weapons, longarms, or sniper rifles. Make selectable in creation.
    weaponProficiencies: [
        'Basic melee weapons',
        'small arms',
    ],

    babAdvancement: 0.75,
    
    goodSavingThrows: [
        'Reflex',
    ],

    badSavingThrows: [
        'Fortitude',
        'Will'
    ],
}

export default PrecogClassDefaults