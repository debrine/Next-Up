import { Dispatch, SetStateAction } from 'react'
import styles from './NextButton.module.css'

type NextButtonTypes = {
    message: string
    arrayToCycle: any[]
    arrayPosition: number,
    setArrayPosition: Dispatch<SetStateAction<number>>,
    condition: boolean,
    functionToRun?: ()=>void
}

function NextButton({
    message,
    arrayToCycle,
    arrayPosition,
    setArrayPosition,
    condition,
    functionToRun
}:NextButtonTypes) {

    function handleNext(){
        if(functionToRun){
          functionToRun()
        }
        if(arrayPosition < arrayToCycle.length-1){
          setArrayPosition(arrayPosition+1)
        }
    }
    
    function renderNext(){
        return(
            <button className={styles.selected} onClick={handleNext}>{message}</button>
        )
    }

  return (
    <>
        { condition &&
            renderNext()
        }
    
        { !condition &&
            <button className={styles.unselected}>Fake Next</button>
        }
    </>
  )
}

export default NextButton