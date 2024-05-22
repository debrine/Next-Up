import styles from './CharacterSheet.module.css'
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx'
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx'
import LeftSide from '../../components/character-sheet-components/LeftSide/LeftSide.tsx'
import RightSide from '../../components/character-sheet-components/RightSide/RightSide.tsx'
import { useCharacterRace } from '../../global-values/character-stats/useCharacterRace.ts'
import { ChangeEvent } from 'react'

function CharacterSheet(){
    const { race, selectedCharacterRace} = useCharacterRace((state)=>({
        race: state.race,
        selectedCharacterRace: state.selectedCharacterRace
    }))

    return(
        <div className={styles.characterSheetMainDiv}>
            {race}
        <input type="text" placeholder='Race' onChange={(e)=>selectedCharacterRace(e.target.value)}/>

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
                    <LeftSide />
                </div>

                <div className={styles.rightSide}>
                    <RightSide />
                </div>
            </div>
            
        </div>
    )
}

export default CharacterSheet