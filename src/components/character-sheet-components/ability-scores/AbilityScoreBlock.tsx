
import SheetLabel from '../labels/SheetLabel'
import styles from './AbilityScoreBlock.module.css'
import AbilityScoreType from './AbilityScoreType/AbilityScoreType.tsx'
import ScoreModifierInput from './ScoreModifierInput/ScoreModifierInput.tsx'

function AbilityScoreBlock(){
    // const [scoreStr, setScoreStr] = useState<number>(10)
    // const [scoreDex, setScoreDex] = useState<number>(10)
    // const [scoreCon, setScoreCon] = useState<number>(10)
    // const [scoreInt, setScoreInt] = useState<number>(10)
    // const [scoreWis, setScoreWis] = useState<number>(10)
    // const [scoreCha, setScoreCha] = useState<number>(10)

    // const handleScoreStr = (e: ChangeEvent<HTMLInputElement>) => {
    //     if(e && +e.target.value){
    //         setScoreStr(+e.target.value)
    //     }
    // }

    // const handleScoreDex = (e: ChangeEvent<HTMLInputElement>) => {
    //     if(e && +e.target.value){
    //         setScoreDex(+e.target.value)
    //     }
    // }

    // const handleScoreCon = (e: ChangeEvent<HTMLInputElement>) => {
    //     if(e && +e.target.value){
    //         setScoreCon(+e.target.value)
    //     }
    // }

    // const handleScoreInt = (e: ChangeEvent<HTMLInputElement>) => {
    //     if(e && +e.target.value){
    //         setScoreInt(+e.target.value)
    //     }
    // }

    // const handleScoreWis = (e: ChangeEvent<HTMLInputElement>) => {
    //     if(e && +e.target.value){
    //         setScoreWis(+e.target.value)
    //     }
    // }

    // const handleScoreCha = (e: ChangeEvent<HTMLInputElement>) => {
    //     if(e && +e.target.value){
    //         setScoreCha(+e.target.value)
    //     }
    // }

    return(
        <div className={styles.parentDiv}>
            <SheetLabel sheetLabelText='ABILITY SCORES' />
            <div className={styles.attributeBox}>
                <div className={styles.attributeColumn}>
                    <AbilityScoreType attributeShort='STR' attributeLong='STRENGTH'/>
                    <AbilityScoreType attributeShort='DEX' attributeLong='DEXTERITY'/>
                    <AbilityScoreType attributeShort='CON' attributeLong='CONSTITUTION'/>
                    <AbilityScoreType attributeShort='INT' attributeLong='INTELLIGENCE'/>
                    <AbilityScoreType attributeShort='WIS' attributeLong='WISDOM'/>
                    <AbilityScoreType attributeShort='CHA' attributeLong='CHARISMA'/>
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.scoreModifierColumn}>
                        <ScoreModifierInput heading='SCORE' defaultValue={10}/>
                    </div>
                    <div className={styles.scoreModifierColumn}>
                        <ScoreModifierInput heading='MODIFIER' defaultValue={0}/>
                    </div>
                    <div className={styles.penDrainColumn}>
                        <ScoreModifierInput heading='PENALTY' defaultValue={0}/>
                    </div>
                    <div className={styles.penDrainColumn}>
                        <ScoreModifierInput heading='DRAIN' defaultValue={0}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AbilityScoreBlock