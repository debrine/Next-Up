import styles from './CharacterSheet.module.css'
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx'
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx'

function CharacterSheet(){

    return(
        <div className={styles.characterSheetMainDiv}>

            <div className={styles.characterInfoDescriptionBlock}>

                <div className={styles.characterInfoBlock}>
                    <CharacterInfo />
                </div>
                
                <div className={styles.characterDescriptionBlock}>
                    <DescriptionBlock />
                </div>
            </div>
            <div className={styles.statArea}>
                <div className={styles.leftSide}>

                </div>

                <div className={styles.rightSide}>

                </div>
            </div>
            
        </div>
    )
}

export default CharacterSheet