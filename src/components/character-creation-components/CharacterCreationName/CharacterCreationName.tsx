import { ChangeEvent } from "react"

type CharacterCreationNameProps = {
    setInputName: React.Dispatch<React.SetStateAction<string>>,
    inputName: string
}

function CharacterCreationName({
    setInputName,
    inputName
}: CharacterCreationNameProps){

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setInputName(e.target.value)
    }
    
    return (
    <div>
        <p>Enter Character Name</p>
        <input type="text" onChange={handleNameChange} value={inputName}/>
    </div>
  )
}

export default CharacterCreationName