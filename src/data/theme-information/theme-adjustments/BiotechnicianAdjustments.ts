// Skill - Medicine
// Ability Score - Intelligence

import EditTempCharacterInfoValue from "../../EditTempCharacterInfoValue.ts"
import setIsClassSkillOrPlusOne from "../setIsClassSkillOrPlusOne.ts"

export default function BiotechnicianAdjustments(
    keyID: string
){
    
    // Intelligence
    EditTempCharacterInfoValue(true, 1, 'Intelligence')

    // Medicine
    setIsClassSkillOrPlusOne(keyID, 'Medicine')
}