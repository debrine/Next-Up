import { useAbilityScore } from "../../../global-values/character-stats/useAbilityScore.ts";

export default function lashuntaAdjustments(option: string){
    const {
        str, strengthScore,
        con, constitutionScore,
        int, intelligenceScore,
        wis, wisdomScore,
        cha, charismaScore,
    } = useAbilityScore((state)=>({
        str: state.str,
        strengthScore: state.strengthScore,
        con: state.con,
        constitutionScore: state.constitutionScore,
        int: state.int,
        intelligenceScore: state.intelligenceScore,
        wis: state.wis,
        wisdomScore: state.wisdomScore,
        cha: state.cha,
        charismaScore: state.charismaScore
    }))

    if(option === 'Korasha'){
        charismaScore(cha + 2);
        strengthScore(str + 2);
        wisdomScore(wis - 2);
    } else if(option === 'Damaya'){
        charismaScore(cha + 2);
        intelligenceScore(int + 2);
        constitutionScore(con - 2);
    } // else logic for skills after
}