import EditTempCharacterInfoValue from "../../../EditTempCharacterInfoValue.ts"

export default function kasathaAdjustments(
){
    // Ability Score adjustments
    // +2 to Strength and Wisdom.
    // -2 to Intelligence

    // Strength
    EditTempCharacterInfoValue(true, 2, 'Strength')

    // Wisdom
    EditTempCharacterInfoValue(true, 2, 'Wisdom')

    // Intelligence
    EditTempCharacterInfoValue(false, 2, 'Intelligence')

    // +2 bonus to Acrobatics, Athletics, and Culture

    // Acrobatics
    EditTempCharacterInfoValue(true, 2, 'Acrobatics')

    // Athletics
    EditTempCharacterInfoValue(true, 2, 'Athletics')

    // Culture
    EditTempCharacterInfoValue(true, 2, 'Culture')
}