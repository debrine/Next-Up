import styles from './CreateInitiativeCard.module.css'
import {ChangeEvent, useState} from 'react'
import CharacterNoteField from '../CharacterNoteField/CharacterNoteField.tsx'
import { useTurnCounterStore } from '../../../global-values/useTurnCounterStore.ts'


function CreateInitiativeCard(){

    const [color, setColor] = useState<string>('#6091A9')
    const [name, setName] = useState<string>('')
    const [noteList, setNoteList] = useState<JSX.Element[]>([])
    // temp to test, eventually a variable will be set to the place of the component in the array to determine turn order
    const testArray: string[] = ['0','1','2','3','4','5']
    // const [currentTurn, setCurrentTurn] = useState<number>(0)
    const {turn, increaseTurnCount, turnReset} = useTurnCounterStore((state)=>({
        turn: state.turn,
        increaseTurnCount: state.increaseTurnCount,
        turnReset: state.turnReset
    }))

    const selectBackgroundColor = (e: ChangeEvent<HTMLInputElement>) => {
        if(e && e.target.value){
            setColor(e.target.value)
        }
    }

    const updateInitiativeCharacterName = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setName(e.target.value)
        }
    }
    
    const addNote = (e: React.MouseEvent<HTMLButtonElement>) =>{
        if(e){
            e.preventDefault();
            const keyID: string = crypto.randomUUID()
            setNoteList(n=>[...n, <CharacterNoteField id={keyID} key={keyID}/>])
        }
    }
    
    function nextTurn(){
        if(turn === testArray.length){
            // turnReset is working when assigned to a button, but not in this statement.
            turnReset()
            console.log(`Resetting ${turn}`)
        } else{
            increaseTurnCount(1)
            console.log(`Adding ${turn}`)
        }
    }
    
    return(
        <div className={styles.cardContainer} style={{backgroundColor: color}}>
            <div>
                <input 
                    value={name} 
                    onChange={updateInitiativeCharacterName} 
                    placeholder='Enter Name'
                    className={styles.initiativeCharacterName}
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
                Next turn {turn}
            </button>
        </div>
    )
}

export default CreateInitiativeCard