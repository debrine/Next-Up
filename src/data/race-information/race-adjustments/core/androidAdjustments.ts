import EditTempCharacterInfoValue from "../../../EditTempCharacterInfoValue.ts"

export default function androidAdjustments(
){
    // Ability Score adjustments
    // +2 to Dexterity and Intelligence.
    // -2 to Charisma

    // Dexterity
    EditTempCharacterInfoValue(true, 2, 'Dexterity')

    // Intelligence
    EditTempCharacterInfoValue(true, 2, 'Intelligence')

    // Charisma
    EditTempCharacterInfoValue(false, 2, 'Charisma')

    // -2 penalty to sense motive checks due to Flat Affect 
    EditTempCharacterInfoValue(false, 2, 'Sense Motive')
}