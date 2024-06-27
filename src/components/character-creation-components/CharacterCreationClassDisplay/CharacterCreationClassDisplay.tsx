import { useContext } from "react"
import { classList } from "../../../data/class-information/classList"
import BackButton from "../../../utils/BackButton/BackButton"
import NextButton from "../../../utils/NextButton/NextButton"
import styles from './CharacterCreationClassDisplay.module.css'
import { CharacterCreationContext } from "../../../states/CreateCharacter/CreateCharacter"
import DropDownList from "../../DropDownList/DropDownList"


function CharacterCreationClassDisplay() {

    const { chClass, setChClass, classOptionsSelected, componentArrayPosition, setComponentArrayPosition, componentArray } = useContext(CharacterCreationContext)

    let classArray: string[] = Object.keys(classList).map((key:string)=>{
        return(key)
    })
    
  return (
    <div className={styles.parentDiv}>
        CharacterCreationClassDisplay
        <DropDownList 
          optionType={'Class'}
          optionsArray={classArray}
          optionSelection={setChClass}
          selectedOption={chClass}
      />
        <BackButton
            arrayPosition={componentArrayPosition}
            setArrayPosition={setComponentArrayPosition}
        />
        <NextButton
            arrayPosition={componentArrayPosition}
            setArrayPosition={setComponentArrayPosition}
            arrayToCycle={componentArray}
            condition={true}
        />
    </div>
  )
}

export default CharacterCreationClassDisplay