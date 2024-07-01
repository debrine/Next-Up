// Skill - Survival
// Ability Score - Choice of Intelligence or Wisdom

import EditLocalStorageValue from "../../EditLocalStorageValue"

export default function BeastbloodAdjustments(
    keyID: KeyIDType,
    option: string | undefined
){
    if(option != ''){
        // Survival
        if(
            !option
        ){
            let skill = JSON.parse(localStorage.getItem(`Survival${keyID}`)!)
            if(skill.isClassSkill){
                skill.value++
            } else {
                skill.isClassSkill = true
            }
            localStorage.setItem(`Survival${keyID}`, JSON.stringify(skill))
        } else {
            // Choice of Intelligence or Wisdom
            EditLocalStorageValue(true, 1, option)
        }
    }
}