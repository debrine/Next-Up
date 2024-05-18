import androidAdjustments from "./race-adjustments/androidAdjustments.ts"
import humanAdjustments from "./race-adjustments/humanAdjustments.ts"
import kasathaAdjustments from "./race-adjustments/kasathaAdjustments.ts"
import lashuntaAdjustments from "./race-adjustments/lashuntaAdjustments.ts"

export let raceList: {
    raceSource: string,
    raceName: string,
    raceHP: number,
    raceSize: string,
    raceAbilityName: string[],
    raceAbilityDescription: string[],
    lowLightVision: boolean,
    lowLightDistance?: number,
    darkvision: boolean,
    darkvisionDistance?: number,
    hasOptions: boolean,
    optionDescription?: string[],
    optionArray?: [string[], ...any[]],
    raceFunction: (option: string) => void
}[] = [
    {
        raceSource: 'Core',
        raceName:'Android',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['Constructed', 'Flat Affect','Upgrade Slot'],
        raceAbilityDescription: [
            'For effects targeting creatures by type, androids count as both constructs and humanoids (whichever type allows an ability to affect them for abilities that affect only one type, and whichever is worse for abilities that affect both types). They receive a +2 racial bonus to saving throws against disease, mind-affecting effects, poison, and sleep, unless those effects specifically target constructs. In addition, androids do not breathe or suffer the normal environmental effects of being in a vacuum.',
            'Androids find emotions confusing and keep them bottled up. They take a -2 penalty to Sense Motive checks, but the DCs of Sense Motive checks attempted against them increase by 2.',
            'Androids have a single armor upgrade slot in their bodies. Regardless of whether androids are wearing physical armor, they can use this slot to install any one armor upgrade that could be installed into light armor.'
        ],
        lowLightVision: true,
        lowLightDistance: 60,
        darkvision: true,
        darkvisionDistance: 60,
        hasOptions: false,
        raceFunction: androidAdjustments
    },
    {
        raceSource: 'Core',
        raceName: 'Human',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: [],
        raceAbilityDescription: [],
        lowLightVision: false,
        darkvision: false,
        hasOptions: true,
        optionDescription: ['+2 to any one ability score.'],
        optionArray: [
            ['Strength',
            'Dexterity',
            'Constitution',
            'Intelligence',
            'Wisdom',
            'Charisma']
        ],
        raceFunction: humanAdjustments // Check on this. Need to confirm that it takes the option when called.
    },
    {
        raceSource: 'Core',
        raceName: 'Kasatha',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['Desert Stride','Four-Armed','Historian','Natural Grace'],
        raceAbilityDescription: [
            'Kasathas can move through nonmagical difficult terrain in deserts, hills, and mountains at their normal speed.',
            'Kasathas have four arms, which allows them to wield and hold up to four hands\' worth of weapons and equipment. While their multiple arms increase the number of items they can have at the ready, it doesn\'t increase the number of attacks they can make during combat.',
            'Due to their in-depth historical training and the wide-ranging academic background knowledge they possess, kasathas receive a +2 racial bonus to Culture checks.',
            'Kasathas receive a +2 racial bonus to Acrobatics and Athletics checks.'
        ],
        lowLightVision: false,
        darkvision: false,
        hasOptions: false,
        raceFunction: kasathaAdjustments
    },
    {
        raceSource: 'Core',
        raceName: 'Lashunta',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['Lashunta Magic','Limited Telepathy'],
        raceAbilityDescription: ['Lashuntas gain the following spell-like abilities: At will: daze, psychokinetic hand 1/day: detect thoughts. See Spell-like Abilities on page 262. The caster level for these effects is equal to the lashunta\'s level.','Lashuntas can mentally communicate with any creatures within 30 feet with whom they share a language. Conversing telepathically with multiple creatures simultaneously is just as difficult as listening to multiple people speaking.'],
        lowLightVision: false,
        darkvision: false,
        hasOptions: true,
        optionDescription: ['All lashuntas gain +2 Charisma at character creation. Korasha lashuntas are muscular (+2 Strength at character creation) but often brash and unobservant (-2 Wisdom at character creation). Damaya lashuntas are typically clever and well-spoken (+2 Intelligence at character creation) but somewhat delicate (-2 Constitution at character creation).','Lashuntas love to learn, and they receive a +2 racial bonus to any two skills of their choice.'],
        optionArray: [['Korasha', 'Damaya'],['skills here, will add later']],
        raceFunction: lashuntaAdjustments
    }
]