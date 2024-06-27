import styles from './CreateCharacterOptions.module.css'
import CharacterCreationRaceDisplay from '../CharacterCreationRaceDisplay/CharacterCreationRaceDisplay'
import CharacterCreationThemeDisplay from '../CharacterCreationThemeDisplay/CharacterCreationThemeDisplay'
import CharacterCreationClassDisplay from '../CharacterCreationClassDisplay/CharacterCreationClassDisplay'

type createCharacterOptionsProps = {
    optionType: string
}

function CreateCharacterOptions({
    optionType
}: createCharacterOptionsProps) {

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
        {
            optionType === 'Class' &&
            <CharacterCreationClassDisplay />
        }
    </div>
    )
}

export default CreateCharacterOptions