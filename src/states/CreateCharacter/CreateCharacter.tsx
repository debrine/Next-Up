import {  useEffect, useRef, useState } from 'react'
import CreateCharacterOptions from '../../components/character-creation-components/CreateCharacterOptions/CreateCharacterOptions.tsx'
import { raceList } from '../../data/race-information/raceList.ts'
import { useLocalStorage } from '../../data/useLocalStorage.ts'
import styles from './CreateCharacter.module.css'
import CharacterCreationName from '../../components/character-creation-components/CharacterCreationName/CharacterCreationName.tsx'

/*
  Set everything in a temp state, then when character is confirmed, set it all within 
  Needed for character creation:
    Name first (This way we can assign the name key to other things in local storage)
    Class
      Followed by class options, if any.
    Theme
    Set Ability Scores
    First Feat
    The rest can be added after the fact.
*/


function CreateCharacter() {

    let raceArray: string[] = raceList.map((race)=>{
        return(race.raceName)
    });

    const [race, setRace] = useState<String>('')
    const [chClass, setChClass] = useState<String>('')
    const [theme, setTheme] = useState<String>('')
    const [componentArrayPosition, setComponentArrayPosition] = useState<number>(0)
    const [, setCharacterBasicInfo] = useLocalStorage(`characterBasicInfo`,{})

    // Character Name **********************
    // Set the character name in local storage to an array of objects.
    // Set the default array
    let nameArray = useRef<{characterName: string, id: string}[]>([])
    // Find if the array exists.
    useEffect(()=>{
        if(localStorage.getItem('charactersAvailable') != null){
            nameArray.current = JSON.parse(localStorage.getItem('charactersAvailable')!)
        }
    }, [])
    

    const [inputName, setInputName] = useState<string>('')
        
    const [, setCharacterNames] = useLocalStorage('charactersAvailable')

    /*
      Function to add the character.
    */
    function addCharacterHandler(){
      // Generate Key to point the character selected to.
      const keyID: string = crypto.randomUUID()
        nameArray.current = ([
                ...nameArray.current,
                {
                    characterName: inputName,
                    id: keyID
                }
            ])
        setCharacterNames( nameArray.current )
        setCharacterBasicInfo({
            race,
            chClass,
            theme,
        })
    }


    let componentArray: JSX.Element[] = [
      <CharacterCreationName setInputName={setInputName} inputName={inputName}/>,
      <CreateCharacterOptions optionType='Race' optionArray={raceArray} setFunction={setRace}/>,
      <CreateCharacterOptions optionType='Class' optionArray={raceArray} setFunction={setChClass}/>,
      <CreateCharacterOptions optionType='Theme' optionArray={raceArray} setFunction={setTheme}/>
    ]

    // function setBasicInfoHandler(){
    //     setCharacterBasicInfo({
    //       ...characterBasicInfo,
    //         race,
    //         chClass,
    //         theme,
    //     })
    // }

    function handleNext(){
      if(componentArrayPosition < componentArray.length-1){
        setComponentArrayPosition(componentArrayPosition+1)
      }
    }

    function handleBack(){
      if(componentArrayPosition > 0){
        setComponentArrayPosition(componentArrayPosition-1)
      }
    }


  return (
    <div className={styles.parentDiv}>
      {componentArray[componentArrayPosition]}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={addCharacterHandler}>Set Values (Temp)</button>
    </div>
  )
}

export default CreateCharacter