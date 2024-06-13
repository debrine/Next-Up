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
    if(skill.isClassSkill){
        skill.skillValue++
    } else {
        skill.isClassSkill = true
    }
    localStorage.setItem(`Piloting${keyID}`, JSON.stringify(skill))
}