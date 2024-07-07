// Skill - Piloting
// Ability Score - Dex

import EditLocalStorageValue from "../../EditLocalStorageValue"
import IsClassSkillPlusOne from "../IsClassSkillPlusOne"

export default function AcePilotAdjustments(
    keyID: string
){
    
    // Dexterity
    EditLocalStorageValue(true, 1, 'Dexterity')

    // Piloting
    IsClassSkillPlusOne(keyID, 'Piloting')
}