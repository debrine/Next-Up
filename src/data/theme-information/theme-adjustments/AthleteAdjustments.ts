// Skill - Choice of Actobatics or Athletes
// Ability Score - Str, Dex, or Con

import EditTempCharacterInfoValue from "../../EditTempCharacterInfoValue.ts"
import setIsClassSkillOrPlusOne from "../setIsClassSkillOrPlusOne.ts"

export default function AthleteAdjustments(
    keyID: string,
    option: string | undefined
){
    if( !option || option ==='' ){
        return
    }
    if(
        option ==='Athletics' ||
        option === 'Acrobatics'
    ){
        setIsClassSkillOrPlusOne(keyID, option)
    } else {
        // Str, Dex, or Con
        EditTempCharacterInfoValue(true, 1, option)
    }
}