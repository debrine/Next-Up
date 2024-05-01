import PropTypes from 'prop-types'
import styles from './CreateInitiativeCard.module.css'
import React, {useState} from 'react'
import CharacterNoteField from '../CharacterNoteField/CharacterNoteField'

function CreateInitiativeCard(props){

    const [color, setColor] = useState('#6091A9')
    const [name, setName] = useState()
    const [noteList, setNoteList] = useState([])
    // temp to test, eventually a variable will be set to the place of the component in the array to determine turn order
    const testArray = ['1','2','3','4','5']
    const [currentTurn, setCurrentTurn] = useState(0)
    

    function selectBackgroundColor(e){
        setColor(e.target.value)
    }

    function updateCharacterName(e){
        setName(e.target.value)
    }
    
    function addNote(){
        const keyID = crypto.randomUUID()
        setNoteList(n => [...n, <CharacterNoteField 
                                    key={keyID} 
                                    id={keyID} 
                                    next={testArray}
                                />])
    }
    
    function nextTurn(){
        if(currentTurn === testArray.length){
            setCurrentTurn(c=> c = 0)
            console.log('resetting')
        } else{
            setCurrentTurn(c=> c+1)
            console.log('adding')
        }
        console.log(currentTurn)
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
            <button onClick={nextTurn}>
                Next turn {testArray[currentTurn]}
            </button>
        </div>
    )
}

export default CreateInitiativeCard