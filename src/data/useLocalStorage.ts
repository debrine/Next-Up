import { useEffect, useState } from "react"

type ReturnType<T> = [
    T | undefined,
    React.Dispatch<React.SetStateAction<T | undefined >>
]

export const useLocalStorage = <T,>(key: string, initialValue?: T): ReturnType<T> => {
    const [state, setState] = useState<T | undefined>(()=>{
        // Initiation of the hook.
        // Check if sending an initial value, if not, return.
        if(!initialValue) return;
        try {
            // Check if key is in local storage.
            const value = localStorage.getItem(key)
            // If we have a value, parse it into its original shape, else return initialValue
            return value ? JSON.parse(value) : initialValue;
        } catch (err) {
            // Return initial value if error.
            return initialValue;
        }
    });

    useEffect(() => {
        // 
        if(state){
            try{
                localStorage.setItem(key, JSON.stringify(state))
            } catch(err){
                console.log(err)
            }
        }
    }, [state, key])

    return [state, setState]
}