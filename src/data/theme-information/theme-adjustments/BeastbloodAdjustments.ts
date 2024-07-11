// Skill - Survival
// Ability Score - Choice of Intelligence or Wisdom

import EditTempCharacterInfoValue from "../../EditTempCharacterInfoValue.ts"
import setIsClassSkillOrPlusOne from "../setIsClassSkillOrPlusOne.ts"

export default function BeastbloodAdjustments(
    keyID: string,
    option: string | undefined
){
    if(option === ''){
        return
    }
    // Survival
    if(
        !option
    ){
        setIsClassSkillOrPlusOne(keyID, 'Survival')
    } else if(option && option !=''){
        // Choice of Intelligence or Wisdom
        EditTempCharacterInfoValue(true, 1, option)
    }
}