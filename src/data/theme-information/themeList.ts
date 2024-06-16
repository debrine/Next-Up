import AcePilotAdjustments from "./theme-adjustments/AcePilotAdjustments.ts"
import AthleteAdjustments from "./theme-adjustments/AthleteAdjustments.ts"
import BattleMedicAdjustments from "./theme-adjustments/BattleMedicAdjustments.ts"
import BeastbloodAdjustments from "./theme-adjustments/BeastbloodAdjustments.ts"
import BiotechnicianAdjustments from "./theme-adjustments/BiotechnicianAdjustments.ts"

export let themeList: ThemeListTypes[] = [
    {
        themeName: 'Ace Pilot',
        themeScoreModifiers: '+1 Dex',
        themeDescription: 'You are most comfortable at the controls of a vehicle, whether it\'s a starship racing through the inky void of space or a ground vehicle zooming between trees, around boulders, and across dusty badlands. You might be a member of an elite military force, the recipient of intense courses of training. Alternatively, you might be a total amateur with innate skills that make you a much-admired hotshot.',
        themeFunction: (ref) => AcePilotAdjustments(ref),
        themeAbilityTitle: [
            'THEME KNOWLEDGE (1ST)',
            'LONE WOLF (6TH)',
            'NEED FOR SPEED (12TH)',
            'MASTER PILOT (18TH)'
        ],
        themeAbilityDescription: [
            'You are obsessed with starships and vehicles, and have committed to memory almost every related tidbit of knowledge you\'ve ever come across. Reduce the DC of Culture checks to recall knowledge about starship and vehicle models and parts as well as famous hotshot pilots by 5. Piloting is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to your Piloting checks. In addition, you gain an ability adjustment of +1 to Dexterity at character creation.',

            'You know at least a little bit about handling every role on a starship, and you can sub in for certain tasks in a pinch. Whenever you need to attempt a skill check either during starship combat or to directly repair or otherwise maintain your starship, you can treat half your ranks in Piloting as your ranks in the appropriate skill for the check, if that would be better (since you effectively have ranks in the related skill, you are considered trained in the skill for the purposes of this check).',

            'Speeding in a vehicle gives you a heady rush, and you can easily handle operating vehicles at high velocities that might send lesser pilots spinning out of control. Reduce any penalties to Piloting checks you make when on a vehicle by 1. When you take the double maneuver action during a vehicle chase (see page 283), reduce the penalty for each action by 1. Whenever a Piloting check has a penalty for failing by 5 or more, you take that penalty only if you fail by 10 or more.',
            
            'Your piloting accomplishments invigorate you, giving you renewed purpose and zeal. Up to twice per day, when you defeat a significant enemy in starship combat as a pilot or succeed in a vehicle chase (meaning that you\'ve either escaped a pursuer or caught or defeated your opponent), you recover 1 Resolve Point.'
        ],
        hasOptions: false,
        optionDescription: [],
        optionArray: [[]],
    },
    {
        themeName: 'Athlete',
        themeScoreModifiers: '+1 Str, Dex, or Con',
        themeDescription: 'You currently are or formerly were a professional-level athlete with highly specialized physical skills. You might be a member of your region\'s sports team, chosen for your exceptional strength or finesse, or maybe you competed in individual events requiring exemplary endurance. Your prowess may have already led you to travel extensively for competitions, or you might still be an up-and-coming star. Either way, your impressive physical capabilities enable you to make a living as a professional competitor.',
        themeFunction: (ref, option) => AthleteAdjustments(ref, option),
        themeAbilityTitle: [
            'THEME KNOWLEDGE (1ST)',
            'PHYSICAL PROWESS (6TH)',
            'FAN FAVOURITE (12TH)',
            'CHAMPION (18TH)'
        ],
        themeAbilityDescription: [
            'You\'ve been involved in your sport or activity for years, and you know a great deal about the industry. When recalling knowledge regarding details of your industry, whether historical or current, reduce the DC of the Culture check by 5. In addition, based on the primary abilities required in your chosen sport, either Acrobatics (for Dexterity or Constitution) or Athletics (for Strength or Constitution) is a class skill for you, though if the relevant skill is a class skill from the class you take at 1st level, you instead gain a +1 bonus to your Acrobatics or Athletics checks. Likewise, you gain an ability adjustment of +1 to either Strength, Dexterity, or Constitution at character creation, depending on which ability is most relevant to your athletic endeavors.',

            'You have an impressive degree of control over your body. Athletes who chose Acrobatics at 1st level can move at full speed while balancing and do not fall prone on a failed attempt to tumble through an opponent\'s square. Athletes who chose the Athletics skill at 1st level can move at full speed while climbing and can attempt a vertical or horizontal jump with merely a 5-foot running start, rather than the 10 feet normally required.',

            'When you\'re in a region that recognizes your sport and need an act of goodwill—such as information from a journalist or medical assistance from a physician—you can take 3d4 hours to locate a fan or industry professional whose attitude starts as helpful toward you.',
            
            'The memories of triumphs attained and challenges overcome can bolster you when facing current difficulties. Up to twice per day when in an area with gravity you have adjusted to, you can spend 10 minutes stretching, exercising, meditating, or performing other sport-specific drills to regain 1 Resolve Point.'
        ],
        hasOptions: true,
        optionDescription: [
            'Based on the primary abilities required in your chosen sport, choose an appropriate skill.',
            'Choose an Ability Score appropriate for your chosen skill.'
        ],
        optionArray: [
            [
                'Acrobatics',
                'Athletics'
            ],
            [
                'Strength',
                'Dexterity',
                'Constitution'
            ]
        ],
    },
    {
            themeName: 'Battle Medic',
            themeScoreModifiers: '+1 Int',
            themeDescription: 'You\'ve been trained to treat combat wounds on and off the battlefield. Operating in high-intensity situations in remote rural locales, on city streets, and amid the din of combat, you honed your ability to remain calm and collected under duress and heal those around you. Your peers likely see you as an incredibly valuable team member and, because of this, they defend you with their lives.',
            themeFunction: (ref) => BattleMedicAdjustments(ref),
            themeAbilityTitle: [
                'THEME KNOWLEDGE (1ST)',
                'EXPOSURE IMMUNITY (6TH)',
                'BEDSIDE MANNER (12TH)',
                'PREEMINENT PHYSICIAN (18TH)'
            ],
            themeAbilityDescription: [
                'Having studied and even occasionally treated infirmities and illnesses across the galaxy, you can detect and diagnose a wide array of maladies in both your own species and in beings from all walks of life. You have also done extensive research on unusual—even mystical—aspects of biology and chemistry, and now almost nothing in those fields surprises you. Reduce the DC of any Life Science or Mysticism check to recall knowledge about a disease or poison by 5. Medicine is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Medicine checks. In addition, you gain an ability adjustment of +1 to Intelligence at character creation.',
    
                'Because of your time spent administering long-term care to infirm and quarantined patients, your immune system has been greatly boosted. While these repeated exposures have raised concerns about your health in the past, you have rebounded from them stronger and healthier than ever. You gain a +1 bonus to Fortitude saving throws against poisons and diseases.',
    
                'You are known for the quality of healing that you can provide to a patient even under imperfect circumstances. When you successfully ensure a creature\'s long-term stability with the Medicine skill, you grant the unconscious creature a +4 bonus to their Constitution check (instead of +2). In addition, when you successfully provide long-term care with the Medicine skill, you need to exceed the DC by only 5 to have the patient recover Hit Points and ability score damage (as well as recovering from poison states) at three times the normal rate.',
                
                'Your reputation as a battle medic hinges on your ability to keep your patients alive even in the most dire of circumstances, so when the chips are down, you rise to the challenge. Up to twice per day, when you successfully treat deadly wounds with the Medicine skill, you recover 1 Resolve Point. If the patient had 1 Hit Point or fewer remaining, you instead regain 2 Resolve Points, but can\'t regain Resolve Points with this ability again until you have rested for 8 hours.'
            ],
            hasOptions: false,
            optionDescription: [],
            optionArray: [[]],
        },
        {
                themeName: 'Beastblood',
                themeScoreModifiers: '+1 Int or Wis',
                themeDescription: 'You have a powerful affinity with the beasts of the wild. Perhaps you descend from—or were infected by—a lycanthrope or similar creature, were subjected to the rituals of a beastly fiend, or performed ancestral trials to pledge yourself to a beast spirit. Whatever the source, you fight and hunt like a wild thing, and you know the natural side of worlds like you were born to them.',
                themeFunction: (ref, option) => BeastbloodAdjustments(ref, option),
                themeAbilityTitle: [
                    'THEME KNOWLEDGE (1ST)',
                    'BESTIAL LINEAGE (6TH)',
                    'WILD HUNT (12TH)',
                    'ANIMAL INSTINCTS (18TH)'
                ],
                themeAbilityDescription: [
                    'You have sterling instincts when it comes to understanding wild places and the creatures that inhabit them. When you attempt a Life Science, Physical Science, or Survival check to recall knowledge about animals or terrestrial wilderness environments, reduce the DC by 5. Survival is a class skill for you, though if it\'s also a class skill from the class you take at 1st level, you instead gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Intelligence or Wisdom at character creation.',
        
                    'Your animalistic affinity increases, giving you special insight into a particular technique of a certain kind of wildlife. Select one of the following that best fits your ancestral animal or bestial influence.\nFeline Leap: You are as lithe as a cat. When you jump, you are always considered to have a running start, and the DC for jumping vertically is equal to twice the number of feet you are attempting to jump (instead of four times).\nLupine Tactics: Your instincts lead you to work with your allies to flank foes and bring them down for the kill. When you flank an opponent, you gain a +2 bonus to your attack roll to perform the trip combat maneuver against that opponent, in addition to the benefits of flanking. This bonus does not stack with other effects that grant you a bonus to perform the trip combat maneuver.Rodent Scurry: You are adept at skittering past foes, or perhaps even underfoot, even in the midst of combat. When using the tumble task of the Acrobatics skill, you move at full speed.\nSaurian Carnage: Like the powerful saurian predators of worlds such as Castrovel, you are a terror to behold, especially when you spill enemies\' blood. When you successfully demoralize a creature, that creature is shaken for an additional round, or 2 additional rounds if that creature has witnessed you killing or disabling an enemy during the current encounter.\nUrsine Fury: Injuries don\'t make you weak—on the contrary, they merely make you angry and more dangerous. While you have no Stamina Points remaining, you gain a +5 foot bonus to your speed and you do not suffer the penalty to attack rolls or AC incurred by a charge.',
        
                    'Your sense of smell has become as sharp as your ancestors\', allowing you to sniff out friend and foe alike even in utter darkness. You gain blindsense (scent) with a range of 30 feet.',
                    
                    'Up to twice per day, you can spend 10 minutes giving in to your animalistic impulses in some harmless fashion to recover 1 Resolve Point; this doesn\'t count as resting to regain Stamina Points. For example, a feline beastblood might spend her time playfully stalking friends, chasing butterflies (or someone\'s laser sight), or otherwise playing in feline fashion, while a saurian beastblood might spend time sunning themself on a warm stone.'
                ],
                hasOptions: true,
                optionDescription: ['Choose your ability score to gain a +1 bonus.'],
                optionArray: [['Intelligence', 'Wisdom']],
            },
            {
                    themeName: 'Biotechnician',
                    themeScoreModifiers: '+1 Int',
                    themeDescription: 'You are a biotech researcher or avid user of such tech, constantly seeking out or developing new biotechnologies and combining existing augmentations with advancements in other fields. You might be a member of the Augmented, a researcher in one of Bretheda\'s cutting-edge biotech corporations, a spellcasting genetomancer blending biotechnology with magic, or even a voluntary test subject for new augmentations. Either way, you have taken a strong hand in your own evolution.',
                    themeFunction: (ref) => BiotechnicianAdjustments(ref),
                    themeAbilityTitle: [
                        'THEME KNOWLEDGE (1ST)',
                        'INDUSTRY CONNECTIONS (6TH)',
                        'TEST SUBJECT (12TH)',
                        'ADAPTIVE BIOTECH (18TH)'
                    ],
                    themeAbilityDescription: [
                        'You have a sharp mind for the intricacies of biotech augmentations and keep up-to-date on current research in the field, whether because you work to develop such technology or because you are the beneficiary of biotech augmentations— or, most likely, both. Reduce the DC of Life Science checks to identify biotech augmentations and to recall knowledge about famous biotech corporations and researchers by 5. Medicine is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to your Medicine checks. In addition, you gain an ability adjustment of +1 to Intelligence at character creation.',
            
                        'You\'ve forged and maintained a number of connections with significant players in the biotech industry, scoring yourself favors and preferred treatment. As long as you are able to contact your connections in the industry, you gain a 10% discount off the typical list price for biotech augmentations installed in you.',
            
                        'Thanks to your enthusiasm for biotech gear and constant tinkering with your DNA, you can adopt experimental, cutting-edge augmentations in your body beyond what most people can support. You can install one additional piece of biotech augmentation than a typical member of your race. For example, a human could have both a dragon gland and a wildwise implant even though they both occupy the throat system.',
                        
                        'You have learned to leverage your biotech augmentations in ways their creators hardly envisioned. Up to twice per day as a standard action, you can deactivate a piece of biotech implanted in your body (except for a prosthetic limb), rendering it inert until your next 8-hour rest, to regain 1 Resolve Point. An inert piece of biotech doesn\'t grant its usual benefits (for instance, an inert venom spur can\'t be used to attack), and you can shut down a single biotech implant only once per day.'
                    ],
                    hasOptions: false,
                    optionDescription: [],
                    optionArray: [[]],
                },
]

/*
{
        themeName: '',
        themeScoreModifiers: '+1 ',
        themeDescription: '',
        themeFunction: (ref, option) => (ref, option),
        themeAbilityTitle: [
            'THEME KNOWLEDGE (1ST)',
            ' (6TH)',
            ' (12TH)',
            ' (18TH)'
        ],
        themeAbilityDescription: [
            '',

            '',

            '',
            
            ''
        ],
        hasOptions: false,
        optionDescription: [],
        optionArray: [[]],
    },
*/