import { useAbilityScore } from "../../../../global-values/character-stats/useAbilityScore.ts";

export default function shirrenAdjustments(){
    const {
        con, constitutionScore,
        wis, wisdomScore,
        cha, charismaScore,
    } = useAbilityScore((state)=>({
        con: state.con,
        constitutionScore: state.constitutionScore,
        wis: state.wis,
        wisdomScore: state.wisdomScore,
        cha: state.cha,
        charismaScore: state.charismaScore
    }))

    constitutionScore(con + 2);
    wisdomScore(wis + 2);
    charismaScore(cha - 2);

    // +2 to Culture and Diplomacy added later
}