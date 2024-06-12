import { useEffect, useRef } from "react"
import { useLocalStorage } from "../../../data/useLocalStorage";
import { skillList } from "../../../data/skillList";
import AcePilotAdjustments from "../../../data/theme-information/theme-adjustments/AcePilotAdjustments";
import { abilityScoreList } from "../../../data/abilityScoreList";

/*
  Set everything in a temp state, then when character is confirmed, set it all within a function.
  Needed for character creation:
    Name first (This way we can assign the name key to other things in local storage)
    Class
      Followed by class options, if any.
    Theme
    Set Ability Scores
    First Feat
    The rest can be added after the fact.
*/

function AddCharacterButton() {
    
  // Values that will be saved to local storage. These values aren't meant to be changed.
  const [, setCharacterBasicInfo] = useLocalStorage(`characterBasicInfo`)

  // Number to give an ID to characterBasicInfo
  let characterBasicInfo = useRef<[]>([])
  useEffect(()=>{
    if(localStorage.getItem('characterBasicInfo') != null){
      characterBasicInfo.current = JSON.parse(localStorage.getItem('characterBasicInfo')!)
    }
  })

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
  const [, setCharacterNames] = useLocalStorage('charactersAvailable')


  /*
  Function to add the character.
  */

  function addCharacterHandler(){
    const tempCharInfo = JSON.parse(localStorage.getItem('tempCharacterInfo')!)
    // Needs a useRef to point to current and save that version.
    setCharacterNames([
        ...nameArray.current,
        {
        characterName: tempCharInfo.inputName,
        id: tempCharInfo.keyID
        }
    ])
    setCharacterBasicInfo([
        ...characterBasicInfo.current,
        {
          name: tempCharInfo.inputName,
          keyID: tempCharInfo.keyID,
          race: tempCharInfo.race,
          chClass: tempCharInfo.chClass,
          theme: tempCharInfo.theme
        }
    ])
    // Only writing last one, but iterating through them all.
    skillList.forEach(skill=>{
      localStorage.setItem(`${skill.skillName}${tempCharInfo.keyID}`, JSON.stringify(skill))
    })
    abilityScoreList.forEach(ability=>{
      localStorage.setItem(`${ability.aSName}${tempCharInfo.keyID}`, JSON.stringify(ability))
    })
    AcePilotAdjustments(tempCharInfo.keyID)
  }


  return (
    <button onClick={addCharacterHandler}>Set Values (Add)</button>
  )
}

export default AddCharacterButton