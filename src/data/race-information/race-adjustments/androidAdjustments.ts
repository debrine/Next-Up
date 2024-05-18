import { useAbilityScore } from "../../../global-values/character-stats/useAbilityScore.ts";

 export default function androidAdjustments(){
    // Ability Score adjustments
    const {dex, dexterityScore, int, intelligenceScore, cha, charismaScore} = useAbilityScore((state)=>({
        dex: state.dex,
        dexterityScore: state.dexterityScore,
        int: state.int,
        intelligenceScore: state.intelligenceScore,
        cha: state.cha,
        charismaScore: state.charismaScore
    }))

    dexterityScore(dex + 2);
    intelligenceScore(int + 2);
    charismaScore(cha - 2);

    // -2 penalty to sense motive checks due to Flat Affect (useBaseSkill to be added later after testing stuff out)
 }