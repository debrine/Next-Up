import AcePilotAdjustments from "./theme-adjustments/AcePilotAdjustments.ts"

export let themeList: {
    themeName: string,
    themeDescription: string,
    themeFunction: (
        keyID: ThemeTypes
    )=>void,
    themeFirstTitle: string,
    themeFirstDescription: string,
    themeSixthTitle: string,
    themeSixthDescription: string,
    themeTwelfthTitle: string,
    themeTwelfthDescription: string,
    themeEighteenthTitle: string,
    themeEighteenthDescription: string
}[] = [
    {
        themeName: 'Ace Pilot',
        themeDescription: 'You are most comfortable at the controls of a vehicle, whether it\'s a starship racing through the inky void of space or a ground vehicle zooming between trees, around boulders, and across dusty badlands. You might be a member of an elite military force, the recipient of intense courses of training. Alternatively, you might be a total amateur with innate skills that make you a much-admired hotshot.',
        themeFunction: (ref) => AcePilotAdjustments(ref),
        themeFirstTitle: 'Theme Knowledge (1st Level)',
        themeFirstDescription: 'You are obsessed with starships and vehicles, and have committed to memory almost every related tidbit of knowledge you\'ve ever come across. Reduce the DC of Culture checks to recall knowledge about starship and vehicle models and parts as well as famous hotshot pilots by 5. Piloting is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to your Piloting checks. In addition, you gain an ability adjustment of +1 to Dexterity at character creation.',
        themeSixthTitle: 'Lone Wolf (6th Level)',
        themeSixthDescription: 'You know at least a little bit about handling every role on a starship, and you can sub in for certain tasks in a pinch. Whenever you need to attempt a skill check either during starship combat or to directly repair or otherwise maintain your starship, you can treat half your ranks in Piloting as your ranks in the appropriate skill for the check, if that would be better (since you effectively have ranks in the related skill, you are considered trained in the skill for the purposes of this check).',
        themeTwelfthTitle: 'Need For Speed (12th Level)',
        themeTwelfthDescription: 'Speeding in a vehicle gives you a heady rush, and you can easily handle operating vehicles at high velocities that might send lesser pilots spinning out of control. Reduce any penalties to Piloting checks you make when on a vehicle by 1. When you take the double maneuver action during a vehicle chase (see page 283), reduce the penalty for each action by 1. Whenever a Piloting check has a penalty for failing by 5 or more, you take that penalty only if you fail by 10 or more.',
        themeEighteenthTitle: 'Master Pilot (18th Level)',
        themeEighteenthDescription: 'Your piloting accomplishments invigorate you, giving you renewed purpose and zeal. Up to twice per day, when you defeat a significant enemy in starship combat as a pilot or succeed in a vehicle chase (meaning that you\'ve either escaped a pursuer or caught or defeated your opponent), you recover 1 Resolve Point.'
    }
]