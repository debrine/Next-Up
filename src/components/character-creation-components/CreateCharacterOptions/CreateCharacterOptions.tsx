import { useState } from 'react'
import styles from './CreateCharacterOptions.module.css'
import DropDownList from '../../DropDownList/DropDownList';

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

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');

    
    
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
        
    </div>
    )
}

export default CreateCharacterOptions