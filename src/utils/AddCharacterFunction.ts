import { useEffect, useRef } from "react"
import { useLocalStorage } from "../data/useLocalStorage";
import { abilityScoreList } from "../data/abilityScoreList";
import { skillList } from "../data/skillList";
import { classList } from "../data/class-information/classList";

/*
  Things to save:
  `Object with Name and keyID stored in array with the rest of the characters created.
  `BasicInfo - Stuff not meant to be changed
    Class + Key Ability Score
    Race
    Theme

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
*/

function AddCharacterFunction() {

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
  } = JSON.parse(localStorage.getItem('tempCharacterInfo')!)




  /*
    Character Name
  */
  // Set the character name in local storage to an array of objects.
  // Set the default array
  const nameArray = useRef<{characterName: string, id: string}[]>([])
  // Find if the array exists.
  useEffect(()=>{
  if(localStorage.getItem('charactersAvailable') != null){
      nameArray.current = JSON.parse(localStorage.getItem('charactersAvailable')!)
  }
  }, [])
  const [, setCharacterNames] = useLocalStorage('charactersAvailable')

  // Needs a useRef to point to current and save that version.
  setCharacterNames([
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
  const [, setCharacterBasicInfo] = useLocalStorage(`characterBasicInfo${keyID}`)

  setCharacterBasicInfo({
    inputName,
    id: keyID,
    race,
    chClass,
    keyAbilityScoreSelected,
    theme
  })
  // Description
  localStorage.setItem(`Description${keyID}`, JSON.stringify(''))
  



  /*
    Ability Scores
  */
  Object.keys(abilityScoreList).forEach((key:string)=>{
    localStorage.setItem(`${abilityScoreList[key].aSName}${keyID}`, JSON.stringify(abilityScoreList[key]))
  })




  /*
    Skills
  */
  Object.keys(skillList).forEach((key:string)=>{
    localStorage.setItem(`${skillList[key].skillName}${keyID}`, JSON.stringify(skillList[key]))
  })
  // Skill notes
  localStorage.setItem(`SkillNotes${keyID}`, JSON.stringify(''))
  // Set Class Skills
  classList[chClass].classDefaults.classSkills.forEach(s=>{
    const [classSkill, setClassSkill] = useLocalStorage<{}>(`${s}${keyID}`)
    if(classSkill != undefined){
      let tempSkill = Object.assign(classSkill)
      tempSkill.isClassSkill = true
      setClassSkill(tempSkill)
    }
  })




  /*
    Weapons, Armor, Abilities, Other Wealth, Languages
  */
  localStorage.setItem(`Weapons${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Armor${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Abilities${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Feats${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Equipment${keyID}`, JSON.stringify([]))
  localStorage.setItem(`OtherWealth${keyID}`, JSON.stringify(''))
  localStorage.setItem(`Languages${keyID}`, JSON.stringify(''))
  localStorage.setItem(`XPEarned${keyID}`, JSON.stringify(''))
  



  /*
    Spells
  */
  localStorage.setItem(`Level0Spells${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Level1Spells${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Level2Spells${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Level3Spells${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Level4Spells${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Level5Spells${keyID}`, JSON.stringify([]))
  localStorage.setItem(`Level6Spells${keyID}`, JSON.stringify([]))

  /*
    Run Race and Theme functions to adjust stats.
  */
}

export default AddCharacterFunction