import EditLocalStorageValue from "../../../EditLocalStorageValue"

export default function androidAdjustments(
){
    // Ability Score adjustments
    // +2 to Dexterity and Intelligence.
    // -2 to Charisma

    // Dexterity
    EditLocalStorageValue(true, 2, 'Dexterity')

    // Intelligence
    EditLocalStorageValue(true, 2, 'Intelligence')

    // Charisma
    EditLocalStorageValue(false, 2, 'Charisma')

    // -2 penalty to sense motive checks due to Flat Affect 
    EditLocalStorageValue(false, 2, 'Sense Motive')
}