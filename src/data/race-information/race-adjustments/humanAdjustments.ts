import { useAbilityScore } from "../../../global-values/character-stats/useAbilityScore.ts";

export default function humanAdjustments(option: string){
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

    if(option === 'Strength'){
        strengthScore(str + 2)
    } else if(option === 'Dexterity'){
        dexterityScore(dex + 2)
    } else if(option === 'Constitution'){
        constitutionScore(con + 2)
    } else if(option === 'Intelligence'){
        intelligenceScore(int + 2)
    } else if(option === 'Wisdom'){
        wisdomScore(wis + 2)
    } else if(option === 'Charisma'){
        charismaScore(cha + 2)
    }

    // Humans also get an extra feat at 1st level, and bonus skill rank per level.
}