import { skillList } from "../skillList.ts"
import androidAdjustments from "./race-adjustments/core/androidAdjustments.ts"
import humanAdjustments from "./race-adjustments/core/humanAdjustments.ts"
import kasathaAdjustments from "./race-adjustments/core/kasathaAdjustments.ts"
import lashuntaAdjustments from "./race-adjustments/core/lashuntaAdjustments.ts"
import shirrenAdjustments from "./race-adjustments/core/shirrenAdjustments.ts"
import veskAdjustments from "./race-adjustments/core/veskAdjustments.ts"
import ysokiAdjustments from "./race-adjustments/core/ysokiAdjustments.ts"

// When an option for any skill is needed.
let skillNames: string[] = skillList.map(skill=>{
    return(skill.skillName)
})

export let raceList: {
    raceSource: string,
    raceName: string,
    raceHP: number,
    raceSize: string,
    raceAbilityName: string[],
    raceAbilityDescription: string[],
    hasOptions: boolean,
    optionDescription?: string[],
    optionArray?: [string[], ...any[]],
    raceFunction: (
        option?: string[],
    ) => void
}[] = [
    {
        raceSource: 'Core',
        raceName:'Android',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['Constructed', 'Exceptional Vision', 'Flat Affect','Upgrade Slot'],
        raceAbilityDescription: [
            'For effects targeting creatures by type, androids count as both constructs and humanoids (whichever type allows an ability to affect them for abilities that affect only one type, and whichever is worse for abilities that affect both types). They receive a +2 racial bonus to saving throws against disease, mind-affecting effects, poison, and sleep, unless those effects specifically target constructs. In addition, androids do not breathe or suffer the normal environmental effects of being in a vacuum.',
            'Androids have darkvision with a range of 60 feet and low-light vision. See pages 263-264 for more information.',
            'Androids find emotions confusing and keep them bottled up. They take a -2 penalty to Sense Motive checks, but the DCs of Sense Motive checks attempted against them increase by 2.',
            'Androids have a single armor upgrade slot in their bodies. Regardless of whether androids are wearing physical armor, they can use this slot to install any one armor upgrade that could be installed into light armor.'
        ],
        hasOptions: false,
        raceFunction: androidAdjustments
    },
    {
        raceSource: 'Core',
        raceName: 'Human',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['Skilled'],
        raceAbilityDescription: [
            'Humans gain an additional skill rank at 1st level and each level thereafter.'
        ],
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
        raceFunction: (ref) => humanAdjustments(ref)
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
        hasOptions: false,
        raceFunction: kasathaAdjustments
    },
    {
        raceSource: 'Core',
        raceName: 'Lashunta',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['Lashunta Magic','Limited Telepathy','Student'],
        raceAbilityDescription: [
            'Lashuntas gain the following spell-like abilities: At will: daze, psychokinetic hand. 1/day: detect thoughts. See Spell-like Abilities on page 262. The caster level for these effects is equal to the lashunta\'s level.',
            'Lashuntas can mentally communicate with any creatures within 30 feet with whom they share a language. Conversing telepathically with multiple creatures simultaneously is just as difficult as listening to multiple people speaking.',
            'Lashuntas love to learn, and they receive a +2 racial bonus to any two skills of their choice.'
        ],
        hasOptions: true,
        optionDescription: [
            'All lashuntas gain +2 Charisma at character creation. Korasha lashuntas are muscular (+2 Strength at character creation) but often brash and unobservant (-2 Wisdom at character creation). Damaya lashuntas are typically clever and well-spoken (+2 Intelligence at character creation) but somewhat delicate (-2 Constitution at character creation).',
            'Lashuntas love to learn, and they receive a +2 racial bonus to any two skills of their choice. Select the first skill',
            'Select your second skill'
        ],
        optionArray: [
            ['Korasha', 'Damaya'],
            skillNames,
            skillNames
        ],
        raceFunction: (ref) => lashuntaAdjustments(ref)
    },
    {
        raceSource: 'Core',
        raceName: 'Shirren',
        raceHP: 6,
        raceSize: 'Medium',
        raceAbilityName: ['Blindsense', 'Communalism', 'Cultural Fascination','Limited Telepathy'],
        raceAbilityDescription: [
            'Shirrens\' sensitive antennae grant them blindsense (vibration)—the ability to sense vibrations in the air—with a range of 30 feet. See page 262 for more information about blindsense.',
            'Shirrens are used to working with others as part of a team. Once per day, as long as an ally is within 10 feet, a shirren can roll a single attack roll or skill check twice and take the higher result.',
            'Shirrens are eager to learn about new cultures and societies. Shirrens receive a +2 racial bonus to Culture and Diplomacy checks.',
            'Shirrens can communicate telepathically with any creatures within 30 feet with whom they share a language. Conversing telepathically with multiple creatures simultaneously is just as difficult as listening to multiple people speak.'
        ],
        hasOptions: false,
        raceFunction: shirrenAdjustments
    },
    {
        raceSource: 'Core',
        raceName: 'Vesk',
        raceHP: 6,
        raceSize: 'Medium',
        raceAbilityName: ['Armor Savant','Fearless','Low-Light Vision','Natural Weapons'],
        raceAbilityDescription: [
            'Vesk use armor in a way that complements their uniquely sturdy physiology. When wearing armor, they gain a +1 racial bonus to AC. When they\'re wearing heavy armor, their armor check penalty is 1 less severe than normal.',
            'Vesk receive a +2 racial bonus to saving throws against fear effects.',
            'Vesk can see in dim light as if it were normal light. For more details, see page 264.',
            'Vesk can attack with a special unarmed strike that deals lethal damage, doesn\'t count as archaic, and threatens squares. Vesk gain a special version of the Weapon Specialization feat with this unarmed strike at 3rd level, allowing them to add 1-1/2 x their character level to their damage rolls for this unarmed strike (instead of just adding their character level, as usual).'
        ],
        hasOptions: false,
        raceFunction: veskAdjustments
    },
    {
        raceSource: 'Core',
        raceName: 'Ysoki',
        raceHP: 2,
        raceSize: "Small",
        raceAbilityName: ['Cheek Pouches','Darkvision','Moxie','Scrounger'],
        raceAbilityDescription: [
            'Ysoki can store up to 1 cubic foot of items weighing up to 1 bulk in total in their cheek pouches, and they can transfer a single object between hand and cheek as a swift action. A ysoki can disgorge the entire contents of his pouch onto the ground in his square as a move action that does not provoke an attack of opportunity.',
            'Ysoki can see up to 60 feet in the dark. See page 263 for more information.',
            'Ysoki are scrappy and nimble even when the odds are against them. A ysoki can stand from prone as a swift action. Additionally, when off-kilter (see page 276), a ysoki does not take the normal penalties to attacks or gain the flat-footed condition. When attempting an Acrobatics check to tumble through the space of an opponent at least one size category larger than himself, a ysoki receive a +5 racial bonus to the check.',
            'Ysoki receive a +2 racial bonus to Engineering, Stealth, and Survival checks.'
        ],
        hasOptions: false,
        raceFunction: ysokiAdjustments
    }
]