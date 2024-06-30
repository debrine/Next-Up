// Skill - Piloting
// Ability Score - Dex

import EditLocalStorageValue from "../../EditLocalStorageValue"

export default function AcePilotAdjustments(
    keyID: KeyIDType
){
    
    // Dexterity
    EditLocalStorageValue(true, 1, 'Dexterity')

    // Piloting
    let skill = JSON.parse(localStorage.getItem(`Piloting${keyID}`)!)
    console.log(skill)
    if(skill.isClassSkill){
        skill.value++
    } else {
        skill.isClassSkill = true
    }
    localStorage.setItem(`Piloting${keyID}`, JSON.stringify(skill))
}