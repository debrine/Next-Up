import styles from './CharacterInfo.module.css'
import SheetLabel from '../labels/SheetLabel.tsx'
// import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { KeyIDContext } from '../../../states/CharacterSheet/CharacterSheet.tsx';
import { getValue } from '../../../utils/getValue.ts';

function CharacterInfo(){
    const {
        register
    } = useForm();

    const { keyID, characterInfoObject } = useContext(KeyIDContext)
    

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
                    value={characterInfoObject.inputName}
                />
            </div>

            <div className={styles.classRaceThemeDiv}>

                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('classLevel')
                        }
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                        value={`${characterInfoObject.chClass} ${getValue(`Level${keyID}`)}`}
                    />
                    <div>CLASS/LEVEL</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('characterRace')
                        }
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                        value={characterInfoObject.race}
                    />
                    <div>RACE</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        {
                            ...register('characterTheme')
                        }
                        type="text" 
                        className={styles.infoInput}
                        spellCheck={false}
                        value={characterInfoObject.theme}
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
                        defaultValue={30}
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
                            ...register('characterHome')
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