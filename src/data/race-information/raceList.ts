import { skillList } from "../skillList.ts"
import androidAdjustments from "./race-adjustments/core/androidAdjustments.ts"
import humanAdjustments from "./race-adjustments/core/humanAdjustments.ts"
import kasathaAdjustments from "./race-adjustments/core/kasathaAdjustments.ts"
import lashuntaAdjustments from "./race-adjustments/core/lashuntaAdjustments.ts"
import shirrenAdjustments from "./race-adjustments/core/shirrenAdjustments.ts"
import veskAdjustments from "./race-adjustments/core/veskAdjustments.ts"
import ysokiAdjustments from "./race-adjustments/core/ysokiAdjustments.ts"

// When an option for any skill is needed.
let skillNames: string[] = Object.keys(skillList).map((key: string)=>{
    return(key)
});

export let raceList: {[key:string]: RaceListTypes} = {
    'Android':{
        raceSource: 'Core',
        raceName:'Android',
        raceScoreModifiers: '+2 Dex, +2 Int, -2 Cha',
        raceDescription: 'Complex technological creations crafted to resemble humans, androids were originally a servitor race, but they have since broken free to form their own society. Unlike ordinary robots or ship AIs, androids do not simply respond according to their programming; rather, they have independent consciousnesses and are animated by souls—a distinction crucial to their generally accepted status as people rather than property.',
        raceSizeAndType: 'Androids are Medium humanoids with the android subtype.',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['CONSTRUCTED', 'EXCEPTIONAL VISION', 'FLAT AFFECT','UPGRADE SLOT'],
        raceAbilityDescription: [
            'For effects targeting creatures by type, androids count as both constructs and humanoids (whichever type allows an ability to affect them for abilities that affect only one type, and whichever is worse for abilities that affect both types). They receive a +2 racial bonus to saving throws against disease, mind-affecting effects, poison, and sleep, unless those effects specifically target constructs. In addition, androids do not breathe or suffer the normal environmental effects of being in a vacuum.',
            'Androids have darkvision with a range of 60 feet and low-light vision. See pages 263-264 for more information.',
            'Androids find emotions confusing and keep them bottled up. They take a -2 penalty to Sense Motive checks, but the DCs of Sense Motive checks attempted against them increase by 2.',
            'Androids have a single armor upgrade slot in their bodies. Regardless of whether androids are wearing physical armor, they can use this slot to install any one armor upgrade that could be installed into light armor.'
        ],
        hasOptions: false,
        optionDescription: [],
        optionArray: [[]],
        raceFunction: androidAdjustments
    },
    'Human':{
        raceSource: 'Core',
        raceName: 'Human',
        raceScoreModifiers: '+2 to any one ability score',
        raceDescription: 'Ambitious, creative, and endlessly curious, humans have shown more drive to explore their system and the universe beyond than any of their neighbor races—for better and for worse. They\'ve helped usher in a new era of system-wide communication and organization and are admired for their passion and tenacity, but their tendency to shoot first and think about the consequences later can make them a liability for those races otherwise inclined to work with them.',
        raceSizeAndType: 'Humans are Medium humanoids and have the human subtype.',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['BONUS FEAT', 'SKILLED'],
        raceAbilityDescription: [
            'Humans select one extra feat at 1st level.',
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
    'Kasatha':{
        raceSource: 'Core',
        raceName: 'Kasatha',
        raceScoreModifiers: '+2 Str, +2 Wis, -2 Int',
        raceDescription: 'Originally from a planet orbiting a dying star far beyond the Pact Worlds, the four-armed kasathas maintain a reputation as a noble and mysterious people. They are famous for their anachronistic warriors, ancient wisdom, and strange traditions.',
        raceSizeAndType: 'Kasathas are Medium humanoids with the kasatha subtype.',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['DESERT STRIDE','FOUR-ARMED','HISTORIAN','NATURAL GRACE'],
        raceAbilityDescription: [
            'Kasathas can move through nonmagical difficult terrain in deserts, hills, and mountains at their normal speed.',
            'Kasathas have four arms, which allows them to wield and hold up to four hands\' worth of weapons and equipment. While their multiple arms increase the number of items they can have at the ready, it doesn\'t increase the number of attacks they can make during combat.',
            'Due to their in-depth historical training and the wide-ranging academic background knowledge they possess, kasathas receive a +2 racial bonus to Culture checks.',
            'Kasathas receive a +2 racial bonus to Acrobatics and Athletics checks.'
        ],
        hasOptions: false,
        optionDescription: [],
        optionArray: [[]],
        raceFunction: kasathaAdjustments
    },
    'Lashunta':{
        raceSource: 'Core',
        raceName: 'Lashunta',
        raceScoreModifiers: '+2 Cha, +2 Str, -2 Wis (Korasha) or +2 Cha, +2 Int, -2 Con (Damaya)',
        raceDescription: 'Idealized by many other humanoid races and gifted with innate psychic abilities, lashuntas are at once consummate scholars and enlightened warriors, naturally divided into two specialized subraces with different abilities and societal roles.',
        raceSizeAndType: 'Lashuntas are Medium humanoids with the lashunta subtype.',
        raceHP: 4,
        raceSize: 'Medium',
        raceAbilityName: ['LASHUNTA MAGIC','LIMITED TELEPATHY','STUDENT'],
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
    'Shirren':{
        raceSource: 'Core',
        raceName: 'Shirren',
        raceScoreModifiers: '+2 Con, +2 Wis, -2 Cha',
        raceDescription: 'Once part of a ravenous hive of locust-like predators, the insectile shirrens only recently broke with their hive mind to become a race of telepaths physically addicted to their own individualism, yet dedicated to the idea of community and harmony with other races.',
        raceSizeAndType: 'Shirrens are Medium humanoids with the shirren subtype.',
        raceHP: 6,
        raceSize: 'Medium',
        raceAbilityName: ['BLINDSENSE', 'COMMUNALISM', 'CULTURAL FASCINATION','LIMITED TELEPATHY'],
        raceAbilityDescription: [
            'Shirrens\' sensitive antennae grant them blindsense (vibration)—the ability to sense vibrations in the air—with a range of 30 feet. See page 262 for more information about blindsense.',
            'Shirrens are used to working with others as part of a team. Once per day, as long as an ally is within 10 feet, a shirren can roll a single attack roll or skill check twice and take the higher result.',
            'Shirrens are eager to learn about new cultures and societies. Shirrens receive a +2 racial bonus to Culture and Diplomacy checks.',
            'Shirrens can communicate telepathically with any creatures within 30 feet with whom they share a language. Conversing telepathically with multiple creatures simultaneously is just as difficult as listening to multiple people speak.'
        ],
        hasOptions: false,
        optionDescription: [],
        optionArray: [[]],
        raceFunction: shirrenAdjustments
    },
    'Vesk':{
        raceSource: 'Core',
        raceName: 'Vesk',
        raceScoreModifiers: '+2 Str, +2 Con, -2 Int',
        raceDescription: 'Heavily muscled and covered with thick scales and short, sharp horns, the reptilian vesk are exactly as predatory and warlike as they appear. Originally hailing from a star system near the Pact Worlds, they sought to conquer and subdue their stellar neighbors, as they had all the other intelligent races in their own system, until an overwhelming threat forced them into a grudging alliance with the Pact Worlds—for now.',
        raceSizeAndType: 'Vesk are Medium humanoids with the vesk subtype.',
        raceHP: 6,
        raceSize: 'Medium',
        raceAbilityName: ['ARMOR SAVANT','FEARLESS','LOW-LIGHT VISION','NATURAL WEAPONS'],
        raceAbilityDescription: [
            'Vesk use armor in a way that complements their uniquely sturdy physiology. When wearing armor, they gain a +1 racial bonus to AC. When they\'re wearing heavy armor, their armor check penalty is 1 less severe than normal.',
            'Vesk receive a +2 racial bonus to saving throws against fear effects.',
            'Vesk can see in dim light as if it were normal light. For more details, see page 264.',
            'Vesk can attack with a special unarmed strike that deals lethal damage, doesn\'t count as archaic, and threatens squares. Vesk gain a special version of the Weapon Specialization feat with this unarmed strike at 3rd level, allowing them to add 1-1/2 x their character level to their damage rolls for this unarmed strike (instead of just adding their character level, as usual).'
        ],
        hasOptions: false,
        optionDescription: [],
        optionArray: [[]],
        raceFunction: veskAdjustments
    },
    'Ysoki':{
        raceSource: 'Core',
        raceName: 'Ysoki',
        raceScoreModifiers: '+2 Dex, +2 Int, -2 Str',
        raceDescription: 'Small and furtive, the ysoki are often overlooked by larger races. Yet through wit and technological prowess, they\'ve spread throughout the solar system, giving truth to the old adage that every starship needs a few rats.',
        raceSizeAndType: 'Ysoki are Small humanoids with the ysoki subtype.',
        raceHP: 2,
        raceSize: "Small",
        raceAbilityName: ['CHEEK POUCHES','DARKVISION','MOXIE','SCROUNGER'],
        raceAbilityDescription: [
            'Ysoki can store up to 1 cubic foot of items weighing up to 1 bulk in total in their cheek pouches, and they can transfer a single object between hand and cheek as a swift action. A ysoki can disgorge the entire contents of his pouch onto the ground in his square as a move action that does not provoke an attack of opportunity.',
            'Ysoki can see up to 60 feet in the dark. See page 263 for more information.',
            'Ysoki are scrappy and nimble even when the odds are against them. A ysoki can stand from prone as a swift action. Additionally, when off-kilter (see page 276), a ysoki does not take the normal penalties to attacks or gain the flat-footed condition. When attempting an Acrobatics check to tumble through the space of an opponent at least one size category larger than himself, a ysoki receive a +5 racial bonus to the check.',
            'Ysoki receive a +2 racial bonus to Engineering, Stealth, and Survival checks.'
        ],
        hasOptions: false,
        optionDescription: [],
        optionArray: [[]],
        raceFunction: ysokiAdjustments
    }
}