import { useState } from 'react'
import styles from './CreateCharacterOptions.module.css'
import DropDownList from '../../DropDownList/DropDownList';
import { useLocalStorage } from '../../../data/useLocalStorage';

type createCharacterOptionsProps = {
    optionType: string
    optionArray: string[]
    setFunction: React.Dispatch<React.SetStateAction<String>>
}

function CreateCharacterOptions({
    optionType,
    optionArray,
    setFunction
}: createCharacterOptionsProps) {

    // Save option selected to local storage
    const [characterBasicInfo, setCharacterBasicInfo] = useLocalStorage('characterBasicInfo',{})

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');

    // Saves as "optionType":"Kasatha" instead of "Race":"Kasatha". Would prefer to have these values set here dynamically instead of individually in the CreateCharacter.tsx file.
    function saveOptionHandler(){
        setCharacterBasicInfo({
            ...characterBasicInfo,
            optionType: selectedOption
        })
    }
    
    // Toggle Drop Down
    const toggleDropDown = ()=>{
        setShowDropDown(!showDropDown)
    }

    // Dismiss showing options.
    const dismissHandler = (e: React.FocusEvent<HTMLButtonElement>): void =>{
        if(e.currentTarget === e.target) {
            setShowDropDown(false)
        }
    }

    // Set the selected option.
    const optionSelection = (option: string): void => {
        setSelectedOption(option)
        setFunction(option)
    }

    return (
    <div className={styles.parentDiv}>
        <h1>
            Select {optionType}
        </h1>
        <button
            onClick={(): void => toggleDropDown()}
            onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
        >
        <div>{selectedOption ? `${optionType}: ${selectedOption}` : `${optionType}...`}</div>
            {showDropDown && (
            <DropDownList 
                optionsArray={optionArray}
                showDropDown={false}
                toggleDropDown={(): void=> toggleDropDown()}
                optionSelection={optionSelection}
            />
        )}
        </button>
        <button onClick={saveOptionHandler}>Set value (Not working properly)</button>
        
    </div>
    )
}

export default CreateCharacterOptions