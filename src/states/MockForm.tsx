import { ChangeEvent, useEffect, useState } from "react"
import { useLocalStorage } from "../data/useLocalStorage.ts"
// import { useForm } from "react-hook-form"

// Gather everything needed to create character.


function MockForm(){
    // const {
    //     register,
    //     getValues
    // } = useForm()
    // See if React-Hook-Form could handle these somehow?
    // See if this can be done without also making the state every time, as it's only needed when calling the value.

    const [characterBasicInfo, setCharacterBasicInfo] = useLocalStorage('characterBasicInfo',{})

    const [race, setRace] = useState<String>('')
    const [chClass, setChClass] = useState<String>('')
    const [theme, setTheme] = useState<String>('')
    const [gender, setGender] = useState<String>('')
    const [homeWorld, setHomeWorld] = useState<String>('')
    const [alignment, setAlignment] = useState<String>('')
    const [diety, setDiety] = useState<String>('')

    useEffect(()=>{
        // console.log(getValues('race'))
        setCharacterBasicInfo({
            race,
            chClass,
            theme,
            gender,
            homeWorld,
            alignment,
            diety
            // getValues("race")
        })
    },[race, chClass, theme, gender, homeWorld, alignment, diety, characterBasicInfo])
    

    function useCharacterRace(e: ChangeEvent<HTMLInputElement>){
        setRace(e.target.value)
    }

    function useCharacterClass(e: ChangeEvent<HTMLInputElement>){
        setChClass(e.target.value)
    }

    function useCharacterTheme(e: ChangeEvent<HTMLInputElement>){
        setTheme(e.target.value)
    }

    function useCharacterGender(e: ChangeEvent<HTMLInputElement>){
        setGender(e.target.value)
    }

    function useCharacterHomeWorld(e: ChangeEvent<HTMLInputElement>){
        setHomeWorld(e.target.value)
    }

    function useCharacterAlignment(e: ChangeEvent<HTMLInputElement>){
        setAlignment(e.target.value)
    }

    function useCharacterDiety(e: ChangeEvent<HTMLInputElement>){
        setDiety(e.target.value)
    }


    return(
        <div>
        <input type="text" placeholder='Race' onChange={(e)=> useCharacterRace(e)}/>
        <input type="text" placeholder='Class' onChange={(e)=> useCharacterClass(e)}/>
        <input type="text" placeholder='Theme' onChange={(e)=> useCharacterTheme(e)}/>
        <input type="text" placeholder='Gender' onChange={(e)=> useCharacterGender(e)}/>
        <input type="text" placeholder='Home World' onChange={(e)=> useCharacterHomeWorld(e)}/>
        <input type="text" placeholder='Alignment' onChange={(e)=> useCharacterAlignment(e)}/>
        <input type="text" placeholder='Diety' onChange={(e)=> useCharacterDiety(e)}/>
        {/* <input type="text" placeholder='Race' {...register('race')}/>
        <input type="text" placeholder='Class' />
        <input type="text" placeholder='Theme' />
        <input type="text" placeholder='Gender' />
        <input type="text" placeholder='Home World' />
        <input type="text" placeholder='Alignment' />
        <input type="text" placeholder='Diety' /> */}
        </div>
    )
}

export default MockForm