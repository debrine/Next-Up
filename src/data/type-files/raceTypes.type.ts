type RaceListTypes = {
    raceSource: string,
    raceName: string,
    raceScoreModifiers: string,
    raceDescription: string,
    raceSizeAndType: string,
    raceHP: number,
    raceSize: string,
    raceAbilityName: string[],
    raceAbilityDescription: string[],
    hasOptions: boolean,
    optionDescription: string[],
    optionArray: Array<Array<string>>,
    raceFunction: (
        option?: string[],
    ) => void
}