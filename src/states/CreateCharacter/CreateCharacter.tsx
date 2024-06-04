import CreateCharacterOptions from '../../components/character-sheet-components/CreateCharacterOptions/CreateCharacterOptions'
// import { useLocalStorage } from '../../data/useLocalStorage'
import styles from './CreateCharacter.module.css'

function CreateCharacter() {

    // const [characterBasicInfo, setCharacterBasicInfo] = useLocalStorage('characterBasicInfo',{})
  return (
    <div className={styles.parentDiv}>
        <CreateCharacterOptions optionType='Race'/>
    </div>
  )
}

export default CreateCharacter