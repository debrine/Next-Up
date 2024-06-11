// Skill - Piloting
// Ability Score - Dex
export default function AcePilotAdjustments(
    abilityScores?: {
        strScore: number;
        dexScore: number;
        conScore: number;
        intScore: number;
        wisScore: number;
        chaScore: number;
    },
    setAbilityScores?: React.Dispatch<React.SetStateAction<{
        strScore: number;
        dexScore: number;
        conScore: number;
        intScore: number;
        wisScore: number;
        chaScore: number;
    }>>)
{
    if(setAbilityScores && abilityScores){
        setAbilityScores({
        strScore: abilityScores.strScore,
        dexScore: (abilityScores.dexScore +1),
        conScore: abilityScores.conScore,
        intScore: abilityScores.intScore,
        wisScore: abilityScores.wisScore,
        chaScore: abilityScores.chaScore,
        })
    }
}