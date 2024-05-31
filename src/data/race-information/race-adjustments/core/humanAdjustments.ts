import { useAbilityScore } from "../../../../global-values/character-stats/useAbilityScore.ts";

export default function humanAdjustments(option?: string){
    if(option == undefined){
        return
    }

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

    switch (option) {
        case 'Strength':
            strengthScore(str + 2);
            break;
        case 'Dexterity':
            dexterityScore(dex + 2);
            break;
        case 'Constitution':
            constitutionScore(con + 2)
            break;
        case 'Intelligence':
            intelligenceScore(int + 2)
            break;
        case 'Wisdom':
            wisdomScore(wis + 2)
            break;
        case 'Charisma':
            charismaScore(cha + 2)
            break;
    }

    // Humans also get an extra feat at 1st level, and bonus skill rank per level.
}