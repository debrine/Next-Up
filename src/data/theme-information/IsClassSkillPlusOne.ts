import { getValue } from "../../utils/getValue"
import { setValue } from "../../utils/setValue"

function IsClassSkillPlusOne(keyID: string, skillName: string) {
    let skill = getValue(`${skillName}${keyID}`)
    if(skill.isClassSkill){
        skill.value++
    } else {
        skill.isClassSkill = true
    }
    setValue(`${skillName}${keyID}`, skill)
}

export default IsClassSkillPlusOne