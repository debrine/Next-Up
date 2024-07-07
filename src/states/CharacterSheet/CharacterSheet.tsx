import styles from './CharacterSheet.module.css'
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx'
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx'
import LeftSide from '../../components/character-sheet-components/LeftSide/LeftSide.tsx'
import RightSide from '../../components/character-sheet-components/RightSide/RightSide.tsx'
import { createContext, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const KeyIDContext = createContext<{
    keyID: string,
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
    
    const statePassed=useLocation()

    const characterID = useRef<string>('')

    const characterInfoObject = useRef<{
        chClass: string
        id: string
        inputName: string
        keyAbilityScoreSelected: string
        race: string
        theme: string
    }>({
        chClass: '',
        id: '',
        inputName: '',
        keyAbilityScoreSelected: '',
        race: '',
        theme: ''
    })

    function getFromLocalStorage(item: string){
        return(
            JSON.parse(localStorage.getItem(item)!)
        )
    }

    useEffect(()=>{
        console.log(statePassed.state.keyID)
        
        console.log(JSON.parse(localStorage.getItem(`characterBasicInfo${statePassed.state.keyID}`)!))
        characterID.current = statePassed.state.keyID
        
        characterInfoObject.current = getFromLocalStorage(`characterBasicInfo${statePassed.state.keyID}`)
    },[])


    return(
        <KeyIDContext.Provider value={{keyID:characterID.current, characterInfoObject:characterInfoObject.current}}>
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