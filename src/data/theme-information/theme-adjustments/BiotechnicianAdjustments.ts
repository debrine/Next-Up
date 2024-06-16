// Skill - Medicine
// Ability Score - Intelligence

import EditLocalStorageValue from "../../EditLocalStorageValue"

export default function BiotechnicianAdjustments(
    keyID: KeyIDType
){
    
    // Intelligence
    EditLocalStorageValue(true, 1, 'Intelligence')

    // Medicine
    let skill = JSON.parse(localStorage.getItem(`Medicine${keyID}`)!)
    if(skill.isClassSkill){
        skill.skillValue++
    } else {
        skill.isClassSkill = true
    }
    localStorage.setItem(`Medicine${keyID}`, JSON.stringify(skill))
}