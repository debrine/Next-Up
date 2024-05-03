import { ChangeEvent, useState } from 'react'
import styles from './ScoreModifierInput.module.css'

type ScoreModifierInputProps = {
    heading: string,
    defaultValue: number
}
function ScoreModifierInput({
    heading,
    defaultValue
}: ScoreModifierInputProps){
    const [scoreStr, setScoreStr] = useState<number>(defaultValue)
    const [scoreDex, setScoreDex] = useState<number>(defaultValue)
    const [scoreCon, setScoreCon] = useState<number>(defaultValue)
    const [scoreInt, setScoreInt] = useState<number>(defaultValue)
    const [scoreWis, setScoreWis] = useState<number>(defaultValue)
    const [scoreCha, setScoreCha] = useState<number>(defaultValue)

    const handleScoreStr = (e: ChangeEvent<HTMLInputElement>) => {
        if(e && +e.target.value){
            setScoreStr(+e.target.value)
        }
    }

    const handleScoreDex = (e: ChangeEvent<HTMLInputElement>) => {
        if(e && +e.target.value){
            setScoreDex(+e.target.value)
        }
    }

    const handleScoreCon = (e: ChangeEvent<HTMLInputElement>) => {
        if(e && +e.target.value){
            setScoreCon(+e.target.value)
        }
    }

    const handleScoreInt = (e: ChangeEvent<HTMLInputElement>) => {
        if(e && +e.target.value){
            setScoreInt(+e.target.value)
        }
    }

    const handleScoreWis = (e: ChangeEvent<HTMLInputElement>) => {
        if(e && +e.target.value){
            setScoreWis(+e.target.value)
        }
    }

    const handleScoreCha = (e: ChangeEvent<HTMLInputElement>) => {
        if(e && +e.target.value){
            setScoreCha(+e.target.value)
        }
    }

    return(
        <div className={styles.parentDiv}>
            <div className={styles.columnLabel}>
                {heading}
            </div>
            <input 
                type="number"
                value={scoreStr}
                onChange={handleScoreStr}
            />
            <input 
                type="number"
                value={scoreDex}
                onChange={handleScoreDex}
            />
            <input 
                type="number"
                value={scoreCon}
                onChange={handleScoreCon}
            />
            <input 
                type="number"
                value={scoreInt}
                onChange={handleScoreInt}
            />
            <input 
                type="number"
                value={scoreWis}
                onChange={handleScoreWis}
            />
            <input 
                type="number"
                value={scoreCha}
                onChange={handleScoreCha}
            />
        </div>
    )
}

export default ScoreModifierInput