import PropTypes from 'prop-types'
import styles from './CreateInitiativeCard.module.css'
import React, {useState} from 'react'
import CharacterNoteField from '../CharacterNoteField/CharacterNoteField'

function CreateInitiativeCard(props){

    const [color, setColor] = useState('#ffffff')
    const [name, setName] = useState()

    function selectBackgroundColor(e){
        setColor(e.target.value)
    }

    function updateCharacterName(e){
        setName(e.target.value)
    }
    
    return(
        <div className={styles.cardContainer} style={{backgroundColor: color}}>
            <input 
                value={name} 
                onChange={updateCharacterName} 
                placeholder='Enter Name'
            />
            <CharacterNoteField />
            <input 
                type="color" 
                value={color}
                onChange={selectBackgroundColor}
            />
        </div>
    )
}

export default CreateInitiativeCard