import { useContext, useEffect, useState } from 'react'
import BackButton from '../../../utils/BackButton/BackButton.tsx'
import styles from './ConfirmCreateCharacter.module.css'
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter.tsx'
import AddCharacterButton from '../AddCharacterButton/AddCharacterButton.tsx'
import { getValue } from '../../../utils/getValue.ts'

function ConfirmCreateCharacter() {

  const {
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
  }, setTempCharacterInfo] = useState(getValue('tempCharacterInfo'))

  useEffect(()=>{
    setTempCharacterInfo(getValue('tempCharacterInfo'))
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
        <AddCharacterButton/>
    </div>
  )
}

export default ConfirmCreateCharacter