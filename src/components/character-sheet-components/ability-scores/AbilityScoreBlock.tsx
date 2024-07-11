
// import { useParams } from 'react-router-dom'
import SheetLabel from '../labels/SheetLabel'
import styles from './AbilityScoreBlock.module.css'
import AbilityScoreType from './AbilityScoreType/AbilityScoreType.tsx'
import ScoreModifierInput from './ScoreModifierInput/ScoreModifierInput.tsx'

function AbilityScoreBlock(){
    
    // const {characterID} = useParams()
    

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