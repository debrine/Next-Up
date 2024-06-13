import EditLocalStorageValue from "../../../EditLocalStorageValue"

export default function kasathaAdjustments(
){
    // Ability Score adjustments
    // +2 to Strength and Wisdom.
    // -2 to Intelligence

    // Strength
    EditLocalStorageValue(true, 2, 'Strength')

    // Wisdom
    EditLocalStorageValue(true, 2, 'Wisdom')

    // Intelligence
    EditLocalStorageValue(false, 2, 'Intelligence')

    // +2 bonus to Acrobatics, Athletics, and Culture

    // Acrobatics
    EditLocalStorageValue(true, 2, 'Acrobatics')

    // Athletics
    EditLocalStorageValue(true, 2, 'Athletics')

    // Culture
    EditLocalStorageValue(true, 2, 'Culture')
}