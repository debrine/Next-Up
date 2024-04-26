import styles from './CharacterNoteField.module.css'
import { useState, useRef } from 'react'

function CharacterNoteField(){

    const [comment, setComment] = useState('')
    const [turnsLeft, setTurnsLeft] = useState(0)

    const turnsLeftRef = useRef(0)

    let buttonStyle = turnsLeft == 0 ? styles.expiredButton : styles.removeButton
    
    function updateComment(e){
        setComment(e.target.value)
    }

    function updateExpire(e){
        if (e.target.value >= 0){
            setTurnsLeft(e.target.value)
        }
    }

   
    return(
        <div className={styles.commentContainer}>
            <textarea 
                value={comment}
                onChange={updateComment}
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
                
                <button className={buttonStyle}>
                    {turnsLeft == 0 ? 'Expired' : 'Remove'}
                </button>
            </div>
            {/* <input type="number" ref={turnsLeftRef}/>
            {turnsLeftRef.current} */}
        </div>
    )
    
}

export default CharacterNoteField