import { useAbilityScore } from "../../../../global-values/character-stats/useAbilityScore"

export default function ysokiAdjustments(){
    // Attribute will be taken by selecting from a dropdown list.
    const {
        str, strengthScore,
        dex, dexterityScore,
        int, intelligenceScore,
    } = useAbilityScore((state)=>({
        str: state.str,
        strengthScore: state.strengthScore,
        dex: state.dex,
        dexterityScore: state.dexterityScore,
        int: state.int,
        intelligenceScore: state.intelligenceScore,
    }))

    dexterityScore(dex + 2);
    intelligenceScore(int + 2);
    strengthScore(str - 2);

    // Ysoki receive a +2 racial bonus to Engineering, Stealth, and Survival checks.
}