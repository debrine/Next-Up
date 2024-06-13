import { skillList } from "../../../data/skillList";
import { abilityScoreList } from "../../../data/abilityScoreList";


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
    skillList.forEach(skill=>{
      localStorage.setItem(`${skill.skillName}${tempCharInfo.keyID}`, JSON.stringify(skill))
    })
    abilityScoreList.forEach(ability=>{
      localStorage.setItem(`${ability.aSName}${tempCharInfo.keyID}`, JSON.stringify(ability))
    })
  }