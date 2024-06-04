import CreateCharacterOptions from '../../components/character-sheet-components/CreateCharacterOptions/CreateCharacterOptions'
import { raceList } from '../../data/race-information/raceList'
// import { useLocalStorage } from '../../data/useLocalStorage'
import styles from './CreateCharacter.module.css'

function CreateCharacter() {
    let raceArray: string[] = raceList.map((race)=>{
        return(race.raceName)
    })
    // const [characterBasicInfo, setCharacterBasicInfo] = useLocalStorage('characterBasicInfo',{})
  return (
    <div className={styles.parentDiv}>
        <CreateCharacterOptions optionType='Race' optionArray={raceArray}/>
    </div>
  )
}

export default CreateCharacter