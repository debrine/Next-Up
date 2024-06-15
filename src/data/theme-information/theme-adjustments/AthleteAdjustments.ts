// Skill - Choice of Actobatics or Athletes
// Ability Score - Str, Dex, or Con

import EditLocalStorageValue from "../../EditLocalStorageValue"

export default function AthleteAdjustments(
    keyID: KeyIDType,
    option: string | undefined
){
    
    // Choice of Actobatics or Athletics
    if(
        option != '' &&
        option ==='Athletics' ||
        option === 'Acrobatics'
    ){let skill = JSON.parse(localStorage.getItem(`${option}${keyID}`)!)
        if(skill.isClassSkill){
            skill.skillValue++
        } else {
            skill.isClassSkill = true
        }
        localStorage.setItem(`${option}${keyID}`, JSON.stringify(skill))
    } else if(
        option !=''
    ){
        // Str, Dex, or Con
        EditLocalStorageValue(true, 1, option!)
    }
}