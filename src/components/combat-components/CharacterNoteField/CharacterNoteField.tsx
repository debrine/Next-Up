import styles from './CharacterNoteField.module.css'
import { useState, ChangeEvent } from 'react'

type CharacterNoteFieldProps ={
    id: string
}
function CharacterNoteField({
    id
}: CharacterNoteFieldProps){

    const [comment, setComment] = useState('')
    const [turnsLeft, setTurnsLeft] = useState(0)


    let buttonStyle = turnsLeft == 0 ? styles.expiredButton : styles.removeButton
    
    const updateNote = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }

    const updateExpire = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value >= 0){
            setTurnsLeft(+e.target.value)
        }
    }

    function removeNote(){
        const noteToRemove = (document.getElementById(id) as HTMLDivElement)
        noteToRemove.remove();
    }


    return(
        <div className={styles.commentContainer} id={id}>
            <textarea 
                value={comment}
                onChange={updateNote}
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