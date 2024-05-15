import styles from './ScoreModifierInput.module.css'
import { useForm } from 'react-hook-form'

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
                defaultValue={defaultValue}
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