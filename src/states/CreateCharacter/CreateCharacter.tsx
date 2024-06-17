import {  useState } from 'react'
import CreateCharacterOptions from '../../components/character-creation-components/CreateCharacterOptions/CreateCharacterOptions.tsx'
import { raceList } from '../../data/race-information/raceList.ts'
import { useLocalStorage } from '../../data/useLocalStorage.ts'
import styles from './CreateCharacter.module.css'
import CharacterCreationName from '../../components/character-creation-components/CharacterCreationName/CharacterCreationName.tsx'
import { themeList } from '../../data/theme-information/themeList.ts'
import AddCharacterButton from '../../components/character-creation-components/AddCharacterButton/AddCharacterButton.tsx'
import { classList } from '../../data/class-information/classList.ts'


function CreateCharacter() {

  let raceArray: string[] = Object.keys(raceList).map((key:string)=>{
    return(key)
  });

  let classArray: string[] = Object.keys(classList).map((key:string)=>{
    return(key)
  })

  let themeArray: string[] = Object.keys(themeList).map((key:string)=>{
    return(key)
  });

  const [chClass, setChClass] = useState<String>('')

  /*
    Race
  */
  const [race, setRace] = useState<String>('')
  // Set the selected option if the race requires options.
  const [raceOptionOne, setRaceOptionOne] = useState<string>('')
  const [raceOptionTwo, setRaceOptionTwo] = useState<string>('')
  const [raceOptionThree, setRaceOptionThree] = useState<string>('')

  // Array to be passed into the DropDownList in Race Display.
  const raceOptionsSelected: { 
    optionValue: string; 
    optionSet: React.Dispatch<React.SetStateAction<string>>; 
  }[] = ([
    {
      optionValue: raceOptionOne,
      optionSet: setRaceOptionOne
    },
    {
      optionValue: raceOptionTwo,
      optionSet: setRaceOptionTwo
    },
    {
      optionValue: raceOptionThree,
      optionSet: setRaceOptionThree
    },
  ])

  /*
    Theme
  */
    const [theme, setTheme] = useState<String>('')
    // Set the selected option if the theme requires options.
    const [themeOptionOne, setThemeOptionOne] = useState<string>('')
    const [themeOptionTwo, setThemeOptionTwo] = useState<string>('')
    const [themeOptionThree, setThemeOptionThree] = useState<string>('')
  
    // Array to be passed into the DropDownList in Theme Display.
    const themeOptionsSelected: { 
      optionValue: string; 
      optionSet: React.Dispatch<React.SetStateAction<string>>; 
    }[] = ([
      {
        optionValue: themeOptionOne,
        optionSet: setThemeOptionOne
      },
      {
        optionValue: themeOptionTwo,
        optionSet: setThemeOptionTwo
      },
      {
        optionValue: themeOptionThree,
        optionSet: setThemeOptionThree
      },
    ])

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
    <CreateCharacterOptions 
      optionType='Race' 
      optionArray={raceArray} 
      setFunction={setRace} 
      creationOptionsSelected={raceOptionsSelected}
    />,
    <CreateCharacterOptions 
      optionType='Class' 
      optionArray={classArray} 
      setFunction={setChClass} 
      creationOptionsSelected={themeOptionsSelected}
    />,
    <CreateCharacterOptions 
      optionType='Theme' 
      optionArray={themeArray} 
      setFunction={setTheme} 
      creationOptionsSelected={themeOptionsSelected}
    />
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