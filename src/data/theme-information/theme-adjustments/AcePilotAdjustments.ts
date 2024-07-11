// Skill - Piloting
// Ability Score - Dex

import EditTempCharacterInfoValue from "../../EditTempCharacterInfoValue.ts"
import setIsClassSkillOrPlusOne from "../setIsClassSkillOrPlusOne.ts"

export default function AcePilotAdjustments(
    keyID: string
){
    
    // Dexterity
    EditTempCharacterInfoValue(true, 1, 'Dexterity')

    // Piloting
    setIsClassSkillOrPlusOne(keyID, 'Piloting')
}