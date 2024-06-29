import { useContext, useEffect, useState } from 'react'
import BackButton from '../../../utils/BackButton/BackButton'
import styles from './ConfirmCreateCharacter.module.css'
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter'
import NextButton from '../../../utils/NextButton/NextButton'
import AddCharacterFunction from '../../../utils/AddCharacterFunction'

function ConfirmCreateCharacter() {

  const { 
    componentArray,
    componentArrayPosition, 
    setComponentArrayPosition 
  } = useContext(CharacterCreationContext)

  const [{
    inputName,
    race,
    chClass,
    keyAbilityScoreSelected,
    theme,
    themeOptionOne,
    themeOptionTwo,
    themeOptionThree,
    raceOptionOne,
    raceOptionTwo,
    raceOptionThree,
  }, setTempCharacterInfo] = useState(JSON.parse(localStorage.getItem('tempCharacterInfo')!))

  useEffect(()=>{
    setTempCharacterInfo(JSON.parse(localStorage.getItem('tempCharacterInfo')!))
  },[])

  return (
    <div className={styles.parentDiv}>
        <div className={styles.confirmName}>
            Create {inputName}?
        </div>
        <div className={styles.confirmInfoDiv}>
          <div className={styles.confirmHead}>RACE: {race}</div>
          {
            raceOptionOne != '' &&
            <>
              <div className={styles.confirmOptions}>Selected:</div>
              <div className={styles.confirmOptions}>{raceOptionOne}</div>
              {
                raceOptionTwo != '' &&
                  <div className={styles.confirmOptions}>{raceOptionTwo}</div>
              }
              {
                raceOptionThree != '' &&
                  <div className={styles.confirmOptions}>{raceOptionThree}</div>
              }
            </>
          }
        </div>
        <div className={styles.confirmInfoDiv}>
          <div className={styles.confirmHead}>CLASS: {chClass}</div>
          <div className={styles.confirmOptions}>Key Ability Score: {keyAbilityScoreSelected}</div>
        </div>
        <div className={styles.confirmInfoDiv}>
          <div className={styles.confirmHead}>THEME: {theme}</div>
          {
            themeOptionOne != '' &&
            <>
              <div className={styles.confirmOptions}>Selected:</div>
              <div className={styles.confirmOptions}>{themeOptionOne}</div>
              {
                themeOptionTwo != '' &&
                  <div className={styles.confirmOptions}>{themeOptionTwo}</div>
              }
              {
                themeOptionThree != '' &&
                  <div className={styles.confirmOptions}>{themeOptionThree}</div>
              }
            </>
          }
        </div>
        <BackButton
            arrayPosition={componentArrayPosition}
            setArrayPosition={setComponentArrayPosition}
        />
        <NextButton
          message='Add Character'
          arrayToCycle={componentArray}
          arrayPosition={componentArrayPosition}
          setArrayPosition={setComponentArrayPosition}
          condition={true}
          functionToRun={AddCharacterFunction} // Invalid Hook Call. Will probably need to move this within the function itself and call the function here for the button.
        />
    </div>
  )
}

export default ConfirmCreateCharacter