import EditTempCharacterInfoValue from "../../../EditTempCharacterInfoValue"

export default function drowAdjustments(){
    // Ability Score adjustments
    // +2 to Dexterity and Charisma.
    // -2 to Constitution

    // Dexterity
    EditTempCharacterInfoValue(true, 2, 'Dexterity')

    // Charisma
    EditTempCharacterInfoValue(true, 2, 'Charisma')

    // Constitution
    EditTempCharacterInfoValue(false, 2, 'Constitution')

    // +2 bonus to Perception from Keen Senses 
    EditTempCharacterInfoValue(true, 2, 'Perception')
}