import PropTypes from 'prop-types'
import styles from './CreateInitiativeCard.module.css'
import React, {useState} from 'react'
import CharacterNoteField from '../CharacterNoteField/CharacterNoteField'

function CreateInitiativeCard(props){

    const [color, setColor] = useState('#ffffff')
    const [name, setName] = useState()
    const [noteList, setNoteList] = useState([])

    function selectBackgroundColor(e){
        setColor(e.target.value)
    }

    function updateCharacterName(e){
        setName(e.target.value)
    }

    function addNote(){
        setNoteList(noteList.concat(<CharacterNoteField />))
    }
    
    return(
        <div className={styles.cardContainer} style={{backgroundColor: color}}>
            <div>
                <input 
                    value={name} 
                    onChange={updateCharacterName} 
                    placeholder='Enter Name'
                    className={styles.characterName}
                />
            </div>
            {noteList}
            <div>
                <button className={styles.addNote} onClick={addNote}>
                    New Note
                </button>
            </div>
            <div className={styles.colorButtonContainer}>
                <input 
                    type="color" 
                    value={color}
                    onChange={selectBackgroundColor}
                />
                <button className={styles.addCharacter}>Add</button>
            </div>
            
        </div>
    )
}

export default CreateInitiativeCard