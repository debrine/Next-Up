import { Dispatch, SetStateAction } from 'react'
import styles from './NextButton.module.css'

type NextButtonTypes = {
    arrayToCycle: any[]
    arrayPosition: number,
    setArrayPosition: Dispatch<SetStateAction<number>>,
    condition: boolean,
    nextPart?: JSX.Element
}

function NextButton({
    arrayToCycle,
    arrayPosition,
    setArrayPosition,
    condition,
    nextPart
}:NextButtonTypes) {

    function handleNext(){
        if(arrayPosition < arrayToCycle.length-1){
          setArrayPosition(arrayPosition+1)
        }
    }
    
    function renderNext(){
        if(arrayPosition === arrayToCycle.length-1 && nextPart){
          return(
            <>
              {nextPart}
            </>
        )
          
        } else {
            return(
                <button className={styles.selected} onClick={handleNext}>Next</button>
            )
        }
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