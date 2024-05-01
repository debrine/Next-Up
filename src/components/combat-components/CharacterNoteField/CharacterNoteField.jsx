import styles from './CharacterNoteField.module.css'
import { useState, useRef, useEffect } from 'react'

function CharacterNoteField(props){

    const [comment, setComment] = useState('')
    const [turnsLeft, setTurnsLeft] = useState(0)

    const nextTurnRef = useRef(props.next)

    let buttonStyle = turnsLeft == 0 ? styles.expiredButton : styles.removeButton
    
    function updateNote(e){
        setComment(e.target.value)
    }

    function updateExpire(e){
        if (e.target.value >= 0){
            setTurnsLeft(e.target.value)
        }
    }

    function removeNote(){
        const noteToRemove = document.getElementById(props.id)
        noteToRemove.remove();
    }

    useEffect(()=>
        {if(props.next == 4){
            if(turnsLeft === 0){
                removeNote
                console.log('Deleting')
            } else{
                setTurnsLeft(t=> t -1)
                console.log('Decreasing')
            }
        }}
    , [props.next])

    return(
        <div className={styles.commentContainer} id={props.id}>
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