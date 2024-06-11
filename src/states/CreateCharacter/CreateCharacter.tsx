import {  useState } from 'react'
import CreateCharacterOptions from '../../components/character-creation-components/CreateCharacterOptions/CreateCharacterOptions.tsx'
import { raceList } from '../../data/race-information/raceList.ts'
import { useLocalStorage } from '../../data/useLocalStorage.ts'
import styles from './CreateCharacter.module.css'
import CharacterCreationName from '../../components/character-creation-components/CharacterCreationName/CharacterCreationName.tsx'
import { themeList } from '../../data/theme-information/themeList.ts'
import AddCharacterButton from '../../components/character-creation-components/AddCharacterButton/AddCharacterButton.tsx'


function CreateCharacter() {

  let raceArray: string[] = raceList.map((race)=>{
      return(race.raceName)
  });

  let themeArray: string[] = themeList.map((theme)=>{
    return(theme.themeName)
  })

  const [race, setRace] = useState<String>('')
  const [chClass, setChClass] = useState<String>('')
  const [theme, setTheme] = useState<String>('')

  const [componentArrayPosition, setComponentArrayPosition] = useState<number>(0)

  // Temporarily set values to be used before saving to local storage.
  const [, setTempCharacterInfo] = useLocalStorage(`tempCharacterInfo`, {}) 
  

  const [inputName, setInputName] = useState<string>('')

  /*
    Function to add values temporarily
  */
  function addTempValuesHandler(){
    // Generate Key to point the character selected to.
    const keyID: string = crypto.randomUUID()
    setTempCharacterInfo({
      inputName,
      keyID,
      race,
      chClass,
      theme
    })
  }

  let componentArray: JSX.Element[] = [
    <CharacterCreationName setInputName={setInputName} inputName={inputName}/>,
    <CreateCharacterOptions optionType='Race' optionArray={raceArray} setFunction={setRace}/>,
    <CreateCharacterOptions optionType='Class' optionArray={raceArray} setFunction={setChClass}/>,
    <CreateCharacterOptions optionType='Theme' optionArray={themeArray} setFunction={setTheme}/>
  ]

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

  function renderNext(){
    if(componentArrayPosition === componentArray.length-1){
      return(
        <>
          <button onClick={addTempValuesHandler}>Set Values (Temp)</button>
          <AddCharacterButton />
        </>
      )
      
    } else {
      return(
        <button onClick={handleNext}>Next</button>
      )
    }
  }

  return (
    <div className={styles.parentDiv}>
      {componentArray[componentArrayPosition]}
      <button onClick={handleBack}>Back</button>
      {renderNext()}
    </div>
  )
}

export default CreateCharacter