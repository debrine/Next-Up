import { useAbilityScore } from "../../../../global-values/character-stats/useAbilityScore.ts";

export default function veskAdjustments(){
    const {
        str, strengthScore,
        con, constitutionScore,
        int, intelligenceScore,
    } = useAbilityScore((state)=>({
        str: state.str,
        strengthScore: state.strengthScore,
        con: state.con,
        constitutionScore: state.constitutionScore,
        int: state.int,
        intelligenceScore: state.intelligenceScore,
    }))
    
    strengthScore(str + 2);
    constitutionScore(con + 2);
    intelligenceScore(int - 2);
}