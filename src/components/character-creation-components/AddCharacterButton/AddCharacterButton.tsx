import { useEffect, useRef } from "react"
import { useLocalStorage } from "../../../data/useLocalStorage";

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
            keyID: tempCharInfo.keyID,
            race: tempCharInfo.race,
            chClass: tempCharInfo.chClass,
            theme: tempCharInfo.theme,
            abilityScores
            }
        ])
    }


    return (
        <button onClick={addCharacterHandler}>Set Values (Add)</button>

    )
}

export default AddCharacterButton