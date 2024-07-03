// Skill - Choice of Actobatics or Athletes
// Ability Score - Str, Dex, or Con

import EditLocalStorageValue from "../../EditLocalStorageValue"
import IsClassSkillPlusOne from "../IsClassSkillPlusOne"

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
            IsClassSkillPlusOne(keyID, option)
        } else {
            // Str, Dex, or Con
            EditLocalStorageValue(true, 1, option)
        }
    }
}