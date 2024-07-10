import { getValue } from "../../../../utils/getValue";
import { setValue } from "../../../../utils/setValue";
import { skillList } from "../../../skillList";

export function OperativesEdgeSkillBonus(keyID: string, bonus: number){
    Object.keys(skillList).forEach(i=>{
        let tempSkill: SkillListType = getValue(`${i}${keyID}`)
        // Set the insight bonus to the value to be equal to the one given by Operative's Edge if it is greater than any current insight bonus.
        if(bonus > tempSkill.insightBonusToValue){
            tempSkill.insightBonusToValue = bonus
        }
        setValue(`${i}${keyID}`, tempSkill)
    })
}