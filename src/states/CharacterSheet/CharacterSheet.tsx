import styles from './CharacterSheet.module.css'
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx'
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx'
import LeftSide from '../../components/character-sheet-components/LeftSide/LeftSide.tsx'
import RightSide from '../../components/character-sheet-components/RightSide/RightSide.tsx'
import { createContext } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../utils/getItem.ts'

export const KeyIDContext = createContext<{
    keyID: string | undefined,
    characterInfoObject:{
        chClass: string
        id: string
        inputName: string
        keyAbilityScoreSelected: string
        race: string
        theme: string
    }
}>({} as any)

function CharacterSheet(){

    let {characterID} = useParams()

    const characterInfoObject:{
        chClass: string
        id: string
        inputName: string
        keyAbilityScoreSelected: string
        race: string
        theme: string
    } = getItem(`characterBasicInfo${characterID}`)


    return(
        <KeyIDContext.Provider value={{keyID:characterID, characterInfoObject:characterInfoObject}}>
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
                        <LeftSide />
                    </div>

                    <div className={styles.rightSide}>
                        <RightSide />
                    </div>
                </div>
            </div>
        </KeyIDContext.Provider>
        
    )
}

export default CharacterSheet