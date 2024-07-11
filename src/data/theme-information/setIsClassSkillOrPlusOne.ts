import { getValue } from "../../utils/getValue.ts"
import { setValue } from "../../utils/setValue.ts"

function setIsClassSkillOrPlusOne(keyID: string, skillName: string) {
    let skill = getValue(`${skillName}${keyID}`)
    if(skill.isClassSkill){
        skill.value++
    } else {
        skill.isClassSkill = true
    }
    setValue(`${skillName}${keyID}`, skill)
}

export default setIsClassSkillOrPlusOne