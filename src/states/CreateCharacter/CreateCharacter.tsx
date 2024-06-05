import { useState } from 'react'
import CreateCharacterOptions from '../../components/character-sheet-components/CreateCharacterOptions/CreateCharacterOptions'
import { raceList } from '../../data/race-information/raceList'
import { useLocalStorage } from '../../data/useLocalStorage'
import styles from './CreateCharacter.module.css'

function CreateCharacter() {
    let raceArray: string[] = raceList.map((race)=>{
        return(race.raceName)
    })

    /*
    Maybe temporary. See note in CreateCharacterOptions.tsx****************************************************************************
    */
    const [characterBasicInfo, setCharacterBasicInfo] = useLocalStorage('characterBasicInfo',{})

    const [race, setRace] = useState<String>('')
    const [chClass, setChClass] = useState<String>('')
    const [theme, setTheme] = useState<String>('')
    const [gender, setGender] = useState<String>('')
    const [homeWorld, setHomeWorld] = useState<String>('')
    const [alignment, setAlignment] = useState<String>('')
    const [diety, setDiety] = useState<String>('')

    function setBasicInfoHandler(){
        setCharacterBasicInfo({
          ...characterBasicInfo,
            race,
            chClass,
            theme,
            gender,
            homeWorld,
            alignment,
            diety
        })
    }
    /*
    Maybe temporary. See note in CreateCharacterOptions.tsx****************************************************************************
    */

  return (
    <div className={styles.parentDiv}>
      <p>Only Race is working currently. The rest are in place to test.</p>
      <CreateCharacterOptions optionType='Race' optionArray={raceArray} setFunction={setRace}/>
      <CreateCharacterOptions optionType='Class' optionArray={raceArray} setFunction={setChClass}/>
      <CreateCharacterOptions optionType='Theme' optionArray={raceArray} setFunction={setTheme}/>
      <CreateCharacterOptions optionType='Gender' optionArray={raceArray} setFunction={setGender}/>
      <CreateCharacterOptions optionType='HomeWorld' optionArray={raceArray} setFunction={setHomeWorld}/>
      <CreateCharacterOptions optionType='Alignment' optionArray={raceArray} setFunction={setAlignment}/>
      <CreateCharacterOptions optionType='Diety' optionArray={raceArray} setFunction={setDiety}/>
      <button onClick={setBasicInfoHandler}>Set Values (Temp)</button>
    </div>
  )
}

export default CreateCharacter