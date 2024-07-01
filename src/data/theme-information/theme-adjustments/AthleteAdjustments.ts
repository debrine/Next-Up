// Skill - Choice of Actobatics or Athletes
// Ability Score - Str, Dex, or Con

import EditLocalStorageValue from "../../EditLocalStorageValue"

export default function AthleteAdjustments(
    keyID: KeyIDType,
    option: string | undefined
){
    if(option && option != ''){
        // Choice of Actobatics or Athletics
        if(
            option ==='Athletics' ||
            option === 'Acrobatics'
        ){
            let skill = JSON.parse(localStorage.getItem(`${option}${keyID}`)!)
            if(skill.isClassSkill){
                skill.value++
            } else {
                skill.isClassSkill = true
            }
            localStorage.setItem(`${option}${keyID}`, JSON.stringify(skill))
        } else {
            // Str, Dex, or Con
            EditLocalStorageValue(true, 1, option)
        }
    }
}