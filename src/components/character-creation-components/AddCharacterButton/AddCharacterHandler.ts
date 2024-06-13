import { skillList } from "../../../data/skillList";
import AcePilotAdjustments from "../../../data/theme-information/theme-adjustments/AcePilotAdjustments";
import { abilityScoreList } from "../../../data/abilityScoreList";
import androidAdjustments from "../../../data/race-information/race-adjustments/core/androidAdjustments";


type AddCharacterHandlerType= {
    setCharacterNames: React.Dispatch<unknown>
    setCharacterBasicInfo: React.Dispatch<unknown>
    characterBasicInfo: React.MutableRefObject<[]>,
    nameArray: React.MutableRefObject<{
        characterName: string;
        id: string;
    }[]>
}

export default function AddCharacterHandler( {
    setCharacterNames,
    setCharacterBasicInfo,
    characterBasicInfo,
    nameArray
}: AddCharacterHandlerType){

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
    console.log(skillList)
    skillList.forEach(skill=>{
      localStorage.setItem(`${skill.skillName}${tempCharInfo.keyID}`, JSON.stringify(skill))
    })
    abilityScoreList.forEach(ability=>{
      localStorage.setItem(`${ability.aSName}${tempCharInfo.keyID}`, JSON.stringify(ability))
    })
    AcePilotAdjustments(tempCharInfo.keyID)
    androidAdjustments(tempCharInfo.keyID)
  }