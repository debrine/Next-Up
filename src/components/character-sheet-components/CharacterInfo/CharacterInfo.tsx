import styles from './CharacterInfo.module.css'
import SheetLabel from '../labels/SheetLabel.tsx'
import { ChangeEvent, useState } from 'react'

function CharacterInfo(){
    const [characterName, setCharacterName] = useState<string>('')
    const [classLevel, setClassLevel] = useState<string>('')
    const [race, setRace] = useState<string>('')
    const [theme, setTheme] = useState<string>('')
    const [size, setSize] = useState<string>('')
    const [speed, setSpeed] = useState<number>(30)
    const [gender, setGender] = useState<string>('')
    const [home, setHome] = useState<string>('')
    const [alignment, setAlignment] = useState<string>('')
    const [diety, setDiety] = useState<string>('')
    const [player, setPlayer] = useState<string>('')

    const handleCharacterName = (e: ChangeEvent<HTMLInputElement>) => {
        if (e){
            setCharacterName(e.target.value)
        }
    }

    const handleClassLevel = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setClassLevel(e.target.value)
        }
    }

    const handleRace = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setRace(e.target.value)
        }
    }

    const handleTheme = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setTheme(e.target.value)
        }
    }

    const handleSize = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setSize(e.target.value)
        }
    }

    const handleSpeed = (e: ChangeEvent<HTMLInputElement>) => {
        if(e && +e.target.value){
            //  && +e.target.value to stop it from defaulting to 0 when something other than a number is input.
            setSpeed(+e.target.value)
        }
    }

    const handleGender = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setGender(e.target.value)
        }
    }

    const handleHome = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setHome(e.target.value)
        }
    }

    const handleAlignment = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setAlignment(e.target.value)
        }
    }

    const handleDiety = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setDiety(e.target.value)
        }
    }

    const handlePlayer = (e: ChangeEvent<HTMLInputElement>) => {
        if(e){
            setPlayer(e.target.value)
        }
    }

    return(
        <div className={styles.parentDiv}>
            <div className={styles.characterNameDiv}>
                <SheetLabel sheetLabelText='CHARACTER NAME' />
                <input 
                    type="text" 
                    className={styles.characterNameBar}
                    value={characterName}
                    onChange={handleCharacterName}
                />
            </div>

            <div className={styles.classRaceThemeDiv}>

                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        value={classLevel}
                        onChange={handleClassLevel}
                    />
                    <div>CLASS/LEVEL</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        value={race}
                        onChange={handleRace}
                    />
                    <div>RACE</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        value={theme}
                        onChange={handleTheme}
                    />
                    <div>THEME</div>
                </div>
                
            </div>

            <div className={styles.sizeSpeedGenderHomeDiv}>

                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        value={size}
                        onChange={handleSize}
                    />
                    <div>SIZE</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        type="number" 
                        className={styles.infoInput}
                        value={speed}
                        onChange={handleSpeed}
                    />
                    <div>SPEED</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        value={gender}
                        onChange={handleGender}
                    />
                    <div>GENDER</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        value={home}
                        onChange={handleHome}
                    />
                    <div>HOME WORLD</div>
                </div>

            </div>

            <div className={styles.alignmentDietyPlayerDiv}>

                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        value={alignment}
                        onChange={handleAlignment}
                    />
                    <div>ALIGNMENT</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        value={diety}
                        onChange={handleDiety}
                    />
                    <div>DIETY</div>
                </div>
                <div className={styles.infoInputDiv}>
                    <input 
                        type="text" 
                        className={styles.infoInput}
                        value={player}
                        onChange={handlePlayer}
                    />
                    <div>PLAYER</div>
                </div>
                
            </div> 
        </div>
    )
}

export default CharacterInfo