import { useParams } from 'react-router-dom';
import styles from './ScoreModifierInput.module.css'
import { useForm } from 'react-hook-form'
import { getValue } from '../../../../utils/getValue';

type ScoreModifierInputProps = {
    heading: string,
    defaultValue: number
}
function ScoreModifierInput({
    heading,
    defaultValue
}: ScoreModifierInputProps){
    const {
        register
    } = useForm();
    
    let {characterID} = useParams()
    let strengthObject:{
        aSName: string
        asBonus: number
        asPenalty: number
        value: number
    } = getValue(`Strength${characterID}`)

    return(
        <div className={styles.parentDiv}>
            <div className={styles.columnLabel}>
                {heading}
            </div>
            <input 
                type="number"
                {
                    ...register('scoreStr')
                }
                defaultValue={strengthObject.value}
            />
            <input 
                type="number"
                {
                    ...register('scoreDex')
                }
                defaultValue={defaultValue}
            />
            <input 
                type="number"
                {
                    ...register('scoreCon')
                }
                defaultValue={defaultValue}
            />
            <input 
                type="number"
                {
                    ...register('scoreInt')
                }
                defaultValue={defaultValue}
            />
            <input 
                type="number"
                {
                    ...register('scoreWis')
                }
                defaultValue={defaultValue}
            />
            <input 
                type="number"
                {
                    ...register('scoreCha')
                }
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default ScoreModifierInput