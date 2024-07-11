import styles from './CreateCharacterOptions.module.css'
import CharacterCreationRaceDisplay from '../CharacterCreationRaceDisplay/CharacterCreationRaceDisplay.tsx'
import CharacterCreationThemeDisplay from '../CharacterCreationThemeDisplay/CharacterCreationThemeDisplay.tsx'
import CharacterCreationClassDisplay from '../CharacterCreationClassDisplay/CharacterCreationClassDisplay.tsx'

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