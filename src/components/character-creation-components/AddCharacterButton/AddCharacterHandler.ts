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
    Object.keys(skillList).forEach((key:string)=>{
      localStorage.setItem(`${skillList[key].skillName}${tempCharInfo.keyID}`, JSON.stringify(skillList[key]))
    })
    Object.keys(abilityScoreList).forEach((key:string)=>{
      localStorage.setItem(`${abilityScoreList[key].aSName}${tempCharInfo.keyID}`, JSON.stringify(abilityScoreList[key]))
    })
  }