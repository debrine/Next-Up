import {  Dispatch, SetStateAction, createContext, useState } from 'react'
import CreateCharacterOptions from '../../components/character-creation-components/CreateCharacterOptions/CreateCharacterOptions.tsx'
// import { useLocalStorage } from '../../data/useLocalStorage.ts'
import styles from './CreateCharacter.module.css'
import CharacterCreationName from '../../components/character-creation-components/CharacterCreationName/CharacterCreationName.tsx'
import ConfirmCreateCharacter from '../../components/character-creation-components/ConfirmCreateCharacter/ConfirmCreateCharacter.tsx'
import { setValue } from '../../utils/setValue.ts'
// import AddCharacterButton from '../../components/character-creation-components/AddCharacterButton/AddCharacterButton.tsx'


// Context to use in our character creation options
export const CharacterCreationContext = createContext<{
  // Pass on the races and race options.
  race: string,
  setRace: Dispatch<SetStateAction<string>>,
  raceOptionsSelected: {
    optionValue: string;
    optionSet: React.Dispatch<React.SetStateAction<string>>;
  }[],
  // Pass on the themes and theme options.
  theme: string,
  setTheme: Dispatch<SetStateAction<string>>,
  themeOptionsSelected: {
    optionValue: string;
    optionSet: React.Dispatch<React.SetStateAction<string>>;
  }[],
  // Pass on the classes and class options.
  chClass: string,
  setChClass: Dispatch<SetStateAction<string>>,
  keyAbilityScoreSelected: string,
  setKeyAbilityScoreSelected: Dispatch<React.SetStateAction<string>>,
  // Pass on for our back/next buttons
  componentArrayPosition: number,
  setComponentArrayPosition: Dispatch<SetStateAction<number>>
  componentArray: JSX.Element[]
  // Pass to create temp object
  addTempValuesHandler:()=>void
}>({} as any);


function CreateCharacter() {

  /*
    Name
  */
  const [inputName, setInputName] = useState<string>('')



  /*
    Class
  */
  const [chClass, setChClass] = useState<string>('')
  // Set the Key Ability Score
  const [keyAbilityScoreSelected, setKeyAbilityScoreSelected] = useState<string>('')

  /*
    Race
  */
  const [race, setRace] = useState<string>('')
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
    const [theme, setTheme] = useState<string>('')
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
  // const [, setTempCharacterInfo] = useLocalStorage(`tempCharacterInfo`, {}) 
  



  /*
    Function to add values temporarily
  */
  function addTempValuesHandler(){
    // Generate Key to point the character selected to.
    const keyID: string = crypto.randomUUID()
    setValue(`tempCharacterInfo`, {
      inputName,
      keyID,
      race,
      chClass,
      keyAbilityScoreSelected,
      theme,
      themeOptionOne,
      themeOptionTwo,
      themeOptionThree,
      raceOptionOne,
      raceOptionTwo,
      raceOptionThree,
    })
  }

  let componentArray: JSX.Element[] = [
    <CharacterCreationName setInputName={setInputName} inputName={inputName}/>,
    <CreateCharacterOptions 
      optionType='Race'
    />,
    <CreateCharacterOptions 
      optionType='Class'
    />,
    <CreateCharacterOptions 
      optionType='Theme'
    />,
    <ConfirmCreateCharacter />
  ]

  
  return (
    <CharacterCreationContext.Provider value={{
      race: race,
      setRace: setRace,
      raceOptionsSelected: raceOptionsSelected,
      theme: theme,
      setTheme: setTheme,
      themeOptionsSelected: themeOptionsSelected,
      chClass:chClass,
      setChClass: setChClass,
      keyAbilityScoreSelected: keyAbilityScoreSelected,
      setKeyAbilityScoreSelected: setKeyAbilityScoreSelected,
      componentArrayPosition: componentArrayPosition,
      setComponentArrayPosition: setComponentArrayPosition,
      componentArray: componentArray,
      addTempValuesHandler: addTempValuesHandler
    }}>
      <div className={styles.parentDiv}>
        {componentArray[componentArrayPosition]}
      </div>
    </CharacterCreationContext.Provider>
  )
}

export default CreateCharacter