import { useAbilityScore } from "../../../global-values/character-stats/useAbilityScore.ts";

export default function kasathaAdjustments(){
    const {
        str, strengthScore,
        int, intelligenceScore,
        wis, wisdomScore,
    } = useAbilityScore((state)=>({
        str: state.str,
        strengthScore: state.strengthScore,
        int: state.int,
        intelligenceScore: state.intelligenceScore,
        wis: state.wis,
        wisdomScore: state.wisdomScore,
    }))

    strengthScore(str + 2)
    wisdomScore(wis + 2)
    intelligenceScore(int - 2)

    // +2 bonus to Acrobatics, Athletics, and Culture (useBaseSkill to be added later after testing stuff out)
}