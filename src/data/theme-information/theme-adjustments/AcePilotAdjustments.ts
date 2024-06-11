// Skill - Piloting
// Ability Score - Dex

export default function AcePilotAdjustments(
    ref: React.MutableRefObject<{
        strScore: number;
        dexScore: number;
        conScore: number;
        intScore: number;
        wisScore: number;
        chaScore: number;
    }>
    
){
    ref.current = {
        strScore: ref.current.strScore,
        dexScore: (ref.current.dexScore +1),
        conScore: ref.current.conScore,
        intScore: ref.current.intScore,
        wisScore: ref.current.wisScore,
        chaScore: ref.current.chaScore,
    }
}