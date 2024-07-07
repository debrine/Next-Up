// Skill - Survival
// Ability Score - Choice of Intelligence or Wisdom

import EditLocalStorageValue from "../../EditLocalStorageValue"
import IsClassSkillPlusOne from "../IsClassSkillPlusOne"

export default function BeastbloodAdjustments(
    keyID: string,
    option: string | undefined
){
    if(option != ''){
        // Survival
        if(
            !option
        ){
            IsClassSkillPlusOne(keyID, 'Survival')
        } else if(option && option !=''){
            // Choice of Intelligence or Wisdom
            EditLocalStorageValue(true, 1, option)
        }
    }
}