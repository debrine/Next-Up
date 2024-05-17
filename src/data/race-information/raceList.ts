import { androidAdjustments } from "./race-adjustments/androidAdjustments"
import { humanAdjustments } from "./race-adjustments/humanAdjustments"

export let raceList: {
    raceSource: string,
    raceName: string,
    raceHP: number,
    raceSize: string,
    raceAbilityName: string[],
    raceAbilityDescription: string[],
    lowLightVision: boolean,
    lowLightDistance: number,
    darkvision: boolean,
    darkvisionDistance: number,
    raceFunction: (attribute?: string, subrace?: string) => void
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
        lowLightDistance: 0,
        darkvision: false,
        darkvisionDistance: 0,
        raceFunction: (attribute) => humanAdjustments // Check on this.
    }
]