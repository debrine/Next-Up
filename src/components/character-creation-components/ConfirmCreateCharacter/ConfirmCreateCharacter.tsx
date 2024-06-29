import { useContext } from 'react'
import BackButton from '../../../utils/BackButton/BackButton'
import styles from './ConfirmCreateCharacter.module.css'
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter'

function ConfirmCreateCharacter() {

    const { componentArrayPosition, setComponentArrayPosition} = useContext(CharacterCreationContext)
  return (
    <div className={styles.parentDiv}>
        <div className={styles.confirmName}>
            Create 
        </div>
        <BackButton
            arrayPosition={componentArrayPosition}
            setArrayPosition={setComponentArrayPosition}
        />
    </div>
  )
}

export default ConfirmCreateCharacter