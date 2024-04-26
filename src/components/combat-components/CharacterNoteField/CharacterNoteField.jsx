import styles from './CharacterNoteField.module.css'
import { useState, useRef } from 'react'

function CharacterNoteField(){

    const [comment, setComment] = useState('')
    const [turnsLeft, setTurnsLeft] = useState(0)

    const turnsLeftRef = useRef(0)
    
    function updateComment(e){
        setComment(e.target.value)
    }

    function updateExpire(e){
        setTurnsLeft(e.target.value)
    }
   
    return(
        <div className={styles.commentContainer}>
            <textarea 
                value={comment}
                onChange={updateComment}
                placeholder='Character Notes'
            />
            <div className={styles.expireContainer}>
                <label id='expireNotice'>Expired</label>
                <input type="number" id="expireCounter" onChange={updateExpire} value={turnsLeft}/>
            </div>
            {/* <input type="number" ref={turnsLeftRef}/>
            {turnsLeftRef.current} */}
        </div>
    )
    
}

export default CharacterNoteField