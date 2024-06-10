import { useEffect } from "react"
import { useLocalStorage } from "../data/useLocalStorage.ts"
import { useForm } from "react-hook-form"

// Gather everything needed to create character.

function MockForm(){
    const { register, watch } = useForm()

    const [, setCharacterBasicInfo] = useLocalStorage('characterBasicInfoTesting',{})

    useEffect(()=>{
        const subscription = watch((data) =>
            setCharacterBasicInfo(data)
        )
        return ()=> subscription.unsubscribe()
    },[watch])


    return(
        <div>
        <input type='text' placeholder='Race' {...register('race')} />
        <input type='text' placeholder='Class' {...register('class')} />
        <input type='text' placeholder='Theme' {...register('theme')} />
        <input type='text' placeholder='Gender' {...register('gender')} />
        <input type='text' placeholder='Home World' {...register('homeWorld')} />
        <input type='text' placeholder='Alignment' {...register('alignment')} />
        <input type='text' placeholder='Diety' {...register('diety')} />
        </div>
    )
}

export default MockForm