type ThemeListTypes = {
    themeName: string,
    themeScoreModifiers: string,
    themeDescription: string,
    themeFunction: (
        keyID: string,
        option?: string,
    )=>void,
    themeAbilityTitle: string[],
    themeAbilityDescription: string[],
    hasOptions: boolean,
    optionDescription: string[],
    optionArray: Array<Array<string>>,
}