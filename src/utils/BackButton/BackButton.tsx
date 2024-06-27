import { Dispatch, SetStateAction } from 'react'
import styles from './BackButton.module.css'

type BackButtonTypes={
    arrayPosition: number,
    setArrayPosition: Dispatch<SetStateAction<number>>
}

function BackButton({
    arrayPosition,
    setArrayPosition
}:BackButtonTypes){

    function handleBack(){
        if(arrayPosition > 0){
            setArrayPosition(arrayPosition-1)
        }
    }

  return (
    <button className={styles.backButton} onClick={handleBack}>Back</button>
  )
}

export default BackButton