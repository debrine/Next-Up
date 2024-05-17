import { useAbilityScore } from "../../../global-values/character-stats/useAbilityScore.ts";

export function humanAdjustments(attribute: string){
    // Attribute will be taken by selecting from a dropdown list.
    const {
        str, strengthScore,
        dex, dexterityScore,
        con, constitutionScore,
        int, intelligenceScore,
        wis, wisdomScore,
        cha, charismaScore,
    } = useAbilityScore((state)=>({
        str: state.str,
        strengthScore: state.strengthScore,
        dex: state.dex,
        dexterityScore: state.dexterityScore,
        con: state.con,
        constitutionScore: state.constitutionScore,
        int: state.int,
        intelligenceScore: state.intelligenceScore,
        wis: state.wis,
        wisdomScore: state.wisdomScore,
        cha: state.cha,
        charismaScore: state.charismaScore
    }))

    if(attribute === 'Strength'){
        strengthScore(str + 2)
    } else if(attribute === 'Dexterity'){
        dexterityScore(dex + 2)
    } else if(attribute === 'Constitution'){
        constitutionScore(con + 2)
    } else if(attribute === 'Intelligence'){
        intelligenceScore(int + 2)
    } else if(attribute === 'Wisdom'){
        wisdomScore(wis + 2)
    } else if(attribute === 'Charisma'){
        charismaScore(cha + 2)
    }
}