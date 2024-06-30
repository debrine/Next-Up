// Skill - Survival
// Ability Score - Choice of Intelligence or Wisdom

import EditLocalStorageValue from "../../EditLocalStorageValue"

export default function BeastbloodAdjustments(
    keyID: KeyIDType,
    option?: string | undefined
){
    
    // Survival
    if(
        !option
    ){
        let skill = JSON.parse(localStorage.getItem(`${option}${keyID}`)!)
        if(skill.isClassSkill){
            skill.value++
        } else {
            skill.isClassSkill = true
        }
        localStorage.setItem(`${option}${keyID}`, JSON.stringify(skill))
    } else if(
        option !=''
    ){
        // Choice of Intelligence or Wisdom
        EditLocalStorageValue(true, 1, option)
    }
}