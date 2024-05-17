import { useForm } from 'react-hook-form'
import { useTurnCounterStore } from '../../../global-values/useTurnCounterStore.ts'
import styles from './CharacterNoteField.module.css'
import { useState, ChangeEvent, useEffect } from 'react'

type CharacterNoteFieldProps ={
    id: string
}

function CharacterNoteField({
    id
}: CharacterNoteFieldProps){
    const {
        register
    } = useForm()

    const [turnsLeft, setTurnsLeft] = useState(0)

    const turn = useTurnCounterStore((state) =>({
        turn: state.turn
    }))


    let buttonStyle = turnsLeft == 0 ? styles.expiredButton : styles.removeButton

    const updateExpire = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value >= 0){
            setTurnsLeft(+e.target.value)
        }
    }

    useEffect(()=>{
        if(turnsLeft > 0){
            setTurnsLeft(turnsLeft - 1)
        }
    },[turn])

    function removeNote(){
        const noteToRemove = (document.getElementById(id) as HTMLDivElement)
        noteToRemove.remove();
    }


    return(
        <div className={styles.commentContainer} id={id}>
            <textarea 
                {
                    ...register('comment')
                }
                placeholder='Character Notes'
            />
            <div className={styles.expireContainer}>
                <div className={styles.turnsLeftContainer}>
                    <label >Number of Turns: </label>
                    <input 
                        type="number" 
                        className={styles.expireCounter} 
                        onChange={updateExpire} 
                        value={turnsLeft}
                    />
                </div>
                
                <button className={buttonStyle} onClick={removeNote}>
                    {turnsLeft == 0 ? 'Expired' : 'Remove'}
                </button>
            </div>
            {/* <input type="number" ref={turnsLeftRef}/>
            {turnsLeftRef.current} */}
        </div>
    )
    
}

export default CharacterNoteField