// Set the selected option.
export function optionSelection(
    option: string,
    setSelectedOption: (value: React.SetStateAction<string>) => void,
    setFunction: (value: React.SetStateAction<String>) => void
){
    // Set the option to be shown as selected.
    setSelectedOption(option)
    // Set our values to the option selected (ex. race, chClass, theme....)
    setFunction(option)
}