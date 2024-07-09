import { useEffect, useRef } from "react"
// import { useLocalStorage } from "../../../data/useLocalStorage";
import { abilityScoreList } from "../../../data/abilityScoreList";
import { skillList } from "../../../data/skillList";
import { classList } from "../../../data/class-information/classList";
// import NextButton from "../../../utils/NextButton/NextButton";
// import { CharacterCreationContext } from "../../../states/CreateCharacter/CreateCharacter";
import { raceList } from "../../../data/race-information/raceList";
import { themeList } from "../../../data/theme-information/themeList";
import { getValue } from "../../../utils/getValue";
import { setValue } from "../../../utils/setValue";
import { Link } from "react-router-dom";
import styles from './AddCharacterButton.module.css'

/*
  Things to save:
  `Object with Name and keyID stored in array with the rest of the characters created.
  `BasicInfo - Stuff not meant to be changed
    Class + Key Ability Score
    Race
    Theme

  `Player level will be stored as a number.
    Default 0, after character added, players will have to make their 1st level ability and feat choices.    
  `Size does not need to be stored.
  `Speed will be stored as a number.
    Default 30
  `Gender, Home World, Alignment, Diety, Player all stored as seperate strings.

  `Description will need to be saved as a string.

  `Ability Scores will need to be saved individually for race and theme functions.

  `Skills will need to be saved individually for race and theme functions.

  `Skill notes will need to be saved as a string.

  `Health and resolve will not need to be stored.
  `Saving Throws will not need to be stored.
  `Attack Bonuses will not need to be saved.
  `Proficiencies will not need to be saved.

  `Weapons will need to be saved as an array of weapon objects.
    Empty on creation.

  `Armor will need to be saved as an array of armor objects.
    Empty on creation.
  
  `Abilities will need to be saved in an array.
    Abilities will come from Race, Theme, and Class and have those listed as their source.

  `Feats will need to be saved in an array.
    Will be able to edit list. Empty on creation.

  `Equipment will need to be saved in an array.
    Will be able to edit list. Empty on creation

  `Other Wealth will need to be saved as a string.
  
  `Languages will need to be saved as a string.
  
  `Experience Points Earned will need to be saved as a string that only accepts numbers.

  `Spells will need to be added as a list from 0-6th level.
    Will be able to edit each list.

  `Card list to use for combat.
    Initial values should be for player.
*/

function AddCharacterButton() {

  // const { componentArray, componentArrayPosition, setComponentArrayPosition } = useContext(CharacterCreationContext)

  // Get the temp info saved.
  const {
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
  } = getValue('tempCharacterInfo')

  /*
    Character Name
  */
  // Set the character name in local storage to an array of objects.
  // Set the default array
  const nameArray = useRef<{characterName: string, id: string}[]>([])
  // Find if the array exists.
  useEffect(()=>{
    if(localStorage.getItem('charactersAvailable') != null){
      nameArray.current = getValue('charactersAvailable')
    }
  }, [])
  // const [, setCharacterNames] = useLocalStorage('charactersAvailable')

  // Character Basic Info useLocalStorage
  // const [, setCharacterBasicInfo] = useLocalStorage(`characterBasicInfo${keyID}`)

  function addCharacterhandler(){



    
    /*
      Character
    */
    // Needs a useRef to point to current and save that version.
    setValue('charactersAvailable', [
      ...nameArray.current,
      {
        characterName: inputName,
        id: keyID
      }
    ])




    /*
      Character Basic Info
    */
    // Values that will be saved to local storage. These values aren't meant to be changed.

    setValue(`characterBasicInfo${keyID}`, {
      inputName,
      id: keyID,
      race,
      chClass,
      keyAbilityScoreSelected,
      theme
    })
    // Level
    setValue(`Level${keyID}`, 0)
    // Description
    setValue(`Description${keyID}`, '')
    // Speed
    setValue(`Speed${keyID}`, 30)
    // Gender
    setValue(`Gender${keyID}`, '')
    // HomeWorld
    setValue(`HomeWorld${keyID}`, '')
    // Alignment
    setValue(`Alignment${keyID}`, '')
    // Speed
    setValue(`Diety${keyID}`, '')
    // Player
    setValue(`Player${keyID}`, '')




    /*
      Ability Scores
    */
    Object.keys(abilityScoreList).forEach((key:string)=>{
      setValue(`${abilityScoreList[key].aSName}${keyID}`, abilityScoreList[key])
    })




    /*
      Skills
    */
    Object.keys(skillList).forEach((key:string)=>{
      setValue(`${skillList[key].skillName}${keyID}`, skillList[key])
    })
    // Skill notes
    setValue(`SkillNotes${keyID}`, '')
    // Set Class Skills
    classList[chClass].classDefaults.classSkills.forEach(s=>{

      // const [classSkill, setClassSkill] = useLocalStorage<{}>(`${s}${keyID}`)
      let classSkill:any = getValue(`${s}${keyID}`)

      if(classSkill != undefined){
        let tempSkill = Object.assign(classSkill)
        tempSkill.isClassSkill = true
        // setClassSkill(tempSkill)
        setValue(`${s}${keyID}`, tempSkill)
      }

    })




    /*
      Weapons, Armor, Abilities, Other Wealth, Languages
    */
    setValue(`Weapons${keyID}`, [])
    setValue(`Armor${keyID}`, [])
    setValue(`Abilities${keyID}`, [])
    setValue(`Feats${keyID}`, [])
    setValue(`Equipment${keyID}`, [])
    setValue(`OtherWealth${keyID}`, '')
    setValue(`Languages${keyID}`, '')
    setValue(`XPEarned${keyID}`, '')




    /*
      Spells
    */
    setValue(`Level0Spells${keyID}`, [])
    setValue(`Level1Spells${keyID}`, [])
    setValue(`Level2Spells${keyID}`, [])
    setValue(`Level3Spells${keyID}`, [])
    setValue(`Level4Spells${keyID}`, [])
    setValue(`Level5Spells${keyID}`, [])
    setValue(`Level6Spells${keyID}`, [])

    /*
      Run Race and Theme functions to adjust stats.
    */
    raceList[race].raceFunction()
    if(raceList[race].hasOptions){
      raceList[race].raceFunction(raceOptionOne)
      raceList[race].raceFunction(raceOptionTwo)
      raceList[race].raceFunction(raceOptionThree)
    }
    themeList[theme].themeFunction(keyID)
    if(themeList[theme].hasOptions){
      themeList[theme].themeFunction(keyID, themeOptionOne)
      themeList[theme].themeFunction(keyID, themeOptionTwo)
      themeList[theme].themeFunction(keyID, themeOptionThree)
    }




    /*
      Initiative Card values.
      Temporary as values have not been confirmed yet.
    */
    const characterInitiative: {
      name: string,
      initiative: number,
      noteArray: {
        note: string,
        expiry: number
      }[],
      cardColor: string,
      inGroup: boolean,
      groupName: string,
    } = {
      name: inputName,
      initiative: 0,
      noteArray: [],
      cardColor: '',
      inGroup: false,
      groupName: '',
    }

    setValue(`initiativeCards${keyID}`, [characterInitiative])
  }




  return(
    // <NextButton
    //   message='Add Character'
    //   arrayToCycle={componentArray}
    //   arrayPosition={componentArrayPosition}
    //   setArrayPosition={setComponentArrayPosition}
    //   condition={true}
    //   functionToRun={addCharacterhandler}
    // />
    <div className={styles.navBarItem}>
      <Link onClick={addCharacterhandler} to={`/Next-Up/charactersheet/${keyID}`}>Add Character</Link>
    </div>
  )
}

export default AddCharacterButton