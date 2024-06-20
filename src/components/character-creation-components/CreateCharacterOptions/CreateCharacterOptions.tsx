import styles from './CreateCharacterOptions.module.css'
import CharacterCreationRaceDisplay from '../CharacterCreationRaceDisplay/CharacterCreationRaceDisplay'
import CharacterCreationThemeDisplay from '../CharacterCreationThemeDisplay/CharacterCreationThemeDisplay'

type createCharacterOptionsProps = {
    optionType: string
}

function CreateCharacterOptions({
    optionType
    // setCreationOptionsSelected,
}: createCharacterOptionsProps) {

    // const [selectedOption, setSelectedOption] = useState<string>('');
    

    // // To clear the selected option between components.
    // useEffect(()=>{
    //     setSelectedOption('')
    // },[optionType])

    

   

    return (
    <div className={styles.parentDiv}>
        <h1>
            Select {optionType}
        </h1>
        {
            optionType === 'Race' &&
            <CharacterCreationRaceDisplay />
        }
        {
            optionType === 'Theme' &&
            <CharacterCreationThemeDisplay />
        }
    </div>
    )
}

export default CreateCharacterOptions