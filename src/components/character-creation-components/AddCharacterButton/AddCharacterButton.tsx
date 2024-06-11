import { useEffect, useRef } from "react"
import { useLocalStorage } from "../../../data/useLocalStorage";

type AddCharacterButtonProps ={
    race: String;
    chClass: String;
    theme: String;
}

function AddCharacterButton({
    race,
    chClass,
    theme
}: AddCharacterButtonProps) {
    
    // Number to give an ID to characterBasicInfo
    let characterBasicInfo = useRef<[]>([])
    useEffect(()=>{
        if(localStorage.getItem('characterBasicInfo') != null){
        characterBasicInfo.current = JSON.parse(localStorage.getItem('characterBasicInfo')!)
        }
    })

    // Values that will be saved to local storage. These values aren't meant to be changed.
    const [, setCharacterBasicInfo] = useLocalStorage(`characterBasicInfo`)


    const [, setCharacterNames] = useLocalStorage('charactersAvailable')

    // Ability Score default values will be adjusted by Theme and Race.
    let abilityScores = useRef<{
        strScore:number, 
        dexScore:number,
        conScore:number,
        intScore:number,
        wisScore:number,
        chaScore:number,
      }>({
        strScore: 10,
        dexScore: 10,
        conScore: 10,
        intScore: 10,
        wisScore: 10,
        chaScore: 10
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
            keyID: tempCharInfo.keyID,
            race,
            chClass,
            theme,
            abilityScores
            }
        ])
    }


    return (
        <button onClick={addCharacterHandler}>Set Values (Add)</button>

    )
}

export default AddCharacterButton