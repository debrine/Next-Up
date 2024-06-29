import { ChangeEvent, useContext, useEffect, useState } from "react"
import BackButton from "../../../utils/BackButton/BackButton"
import NextButton from "../../../utils/NextButton/NextButton"
import { CharacterCreationContext } from "../../../states/CreateCharacter/CreateCharacter"

type CharacterCreationNameProps = {
    setInputName: React.Dispatch<React.SetStateAction<string>>,
    inputName: string
}

function CharacterCreationName({
    setInputName,
    inputName
}: CharacterCreationNameProps){
    
    const { componentArrayPosition, setComponentArrayPosition, componentArray } = useContext(CharacterCreationContext)

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setInputName(e.target.value)
    }

    // Validation for the next button
    const [moveOn, setMoveOn] = useState<boolean>(false)

    useEffect(()=>{
        if(inputName === ''){
            setMoveOn(false);
        } else {
            setMoveOn(true);
        }
    },[inputName])
    
    return (
    <div>
        <p>Enter Character Name</p>
        <input type="text" onChange={handleNameChange} value={inputName}/>
        <BackButton
            arrayPosition={componentArrayPosition}
            setArrayPosition={setComponentArrayPosition}
        />
        <NextButton
            message="Next"
            arrayPosition={componentArrayPosition}
            setArrayPosition={setComponentArrayPosition}
            arrayToCycle={componentArray}
            condition={moveOn}
        />
    </div>
  )
}

export default CharacterCreationName