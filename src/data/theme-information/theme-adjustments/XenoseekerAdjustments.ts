// Skill - Life Science
// Ability Score - Cha

import EditTempCharacterInfoValue from "../../EditTempCharacterInfoValue.ts"
import setIsClassSkillOrPlusOne from "../setIsClassSkillOrPlusOne.ts"

export default function XenoseekerAdjustments(
    keyID: string
){
    
    // Charisma
    EditTempCharacterInfoValue(true, 1, 'Charisma')

    // Life Science
    setIsClassSkillOrPlusOne(keyID, 'Life Science')
}