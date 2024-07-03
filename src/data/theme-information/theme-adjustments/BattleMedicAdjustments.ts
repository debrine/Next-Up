// Skill - Medicine
// Ability Score - Intelligence

import EditLocalStorageValue from "../../EditLocalStorageValue"
import IsClassSkillPlusOne from "../IsClassSkillPlusOne"

export default function BattleMedicAdjustments(
    keyID: KeyIDType
){
    
    // Intelligence
    EditLocalStorageValue(true, 1, 'Intelligence')

    // Medicine
    IsClassSkillPlusOne(keyID, 'Medicine')
}