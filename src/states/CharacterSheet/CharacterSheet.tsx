import styles from './CharacterSheet.module.css'
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx'
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx'
import LeftSide from '../../components/character-sheet-components/LeftSide/LeftSide.tsx'
import RightSide from '../../components/character-sheet-components/RightSide/RightSide.tsx'
import { createContext } from 'react'
import { useParams } from 'react-router-dom'
import { getValue } from '../../utils/getValue.ts'
import { levelUpList } from '../../data/levelUpList.ts'

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
    } = getValue(`characterBasicInfo${characterID}`)

    const characterLevel = getValue(`Level${characterID}`)

    

    

    return(
        
        <KeyIDContext.Provider value={{keyID:characterID, characterInfoObject:characterInfoObject}}>
            {
                characterLevel === 0 ?
                // Confirm all first level selections based on class, which need to be handled uniquely.
                levelUpList['1'][characterInfoObject.chClass].componentForClass(characterInfoObject.id) :

                // Once character has confirmed choices, move on to sheet.
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
            }
            
        </KeyIDContext.Provider>
        
    )
}

export default CharacterSheet