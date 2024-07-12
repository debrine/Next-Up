import styles from './CharacterInfo.module.css'
import SheetLabel from '../labels/SheetLabel.tsx'
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react';
import { KeyIDContext } from '../../../states/CharacterSheet/CharacterSheet.tsx';
import { getValue } from '../../../utils/getValue.ts';
import { setValue } from '../../../utils/setValue.ts';

function CharacterInfo(){

    const { keyID, characterInfoObject } = useContext(KeyIDContext)

    const characterInfoDynamicObject:{
        characterAlignment: string,
        characterDiety: string,
        characterGender: string,
        characterHomeWorld: string,
        characterName: string,
        characterSize: string,
        characterSpeed: number,
        playerName: string,
    } = getValue(`characterBasicInfoDynamic${keyID}`)

    const {
        register,
        watch
    } = useForm({
        defaultValues: {
            characterName: characterInfoDynamicObject.characterName,
            characterSize: characterInfoDynamicObject.characterSize,
            characterSpeed: characterInfoDynamicObject.characterSpeed,
            characterGender: characterInfoDynamicObject.characterGender,
            characterHomeWorld: characterInfoDynamicObject.characterHomeWorld,
            characterAlignment: characterInfoDynamicObject.characterAlignment,
            characterDiety: characterInfoDynamicObject.characterDiety,
            playerName: characterInfoDynamicObject.playerName
        }
    });
    
    useEffect(()=>{
        const subscription = watch((data) =>
            setValue(`characterBasicInfoDynamic${keyID}`, data)
        )
        return ()=>subscription.unsubscribe()
    }, [watch])

    return(
        <div className={styles.parentDiv}>
            <div className={styles.characterNameDiv}>
                <SheetLabel sheetLabelText='CHARACTER NAME' />
                <input 
                    {
                        ...register('characterName')
                    }
                    type="text" 
                    className={styles.characterNameBar}
                    spellCheck={false}
                />
            </div>

            <div className={styles.classRaceThemeDiv}>

                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                        value={`${characterInfoObject.chClass} ${getValue(`Level${keyID}`)}`}
                        readOnly
                    />
                    <div>CLASS/LEVEL</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                        value={characterInfoObject.race}
                        readOnly
                    />
                    <div>RACE</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                        value={characterInfoObject.theme}
                        readOnly
                    />
                    <div>THEME</div>
                </div>
                
            </div>

            <div className={styles.sizeSpeedGenderHomeDiv}>

                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('characterSize')
                        }
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                    />
                    <div>SIZE</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('characterSpeed')
                        }
                        type="number" 
                        className={styles.infoInput}
                    />
                    <div>SPEED</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('characterGender')
                        }
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                    />
                    <div>GENDER</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('characterHomeWorld')
                        }
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                    />
                    <div>HOME WORLD</div>
                </div>

            </div>

            <div className={styles.alignmentDietyPlayerDiv}>

                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('characterAlignment')
                        }
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                    />
                    <div>ALIGNMENT</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('characterDiety')
                        }
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                    />
                    <div>DIETY</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('playerName')
                        }
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                    />
                    <div>PLAYER</div>
                </div>
                
            </div> 
        </div>
    )
}

export default CharacterInfo