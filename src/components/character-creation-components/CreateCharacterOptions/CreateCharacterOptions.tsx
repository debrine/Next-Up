import { useEffect, useState } from 'react'
import styles from './CreateCharacterOptions.module.css'
import DropDownList from '../../DropDownList/DropDownList'
import CharacterCreationRaceDisplay from '../CharacterCreationRace/CharacterCreationRaceDisplay'

type createCharacterOptionsProps = {
    optionType: string
    optionArray: string[]
    setFunction: React.Dispatch<React.SetStateAction<String>>
    setCreationOptionSelected: React.Dispatch<React.SetStateAction<string>>
    creationOptionSelected: string
}

function CreateCharacterOptions({
    optionType,
    optionArray,
    setFunction,
    setCreationOptionSelected,
    creationOptionSelected
}: createCharacterOptionsProps) {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    

    // To clear the selected option between components.
    useEffect(()=>{
        setSelectedOption('')
    },[optionType])

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
        // Set the option to be shown as selected.
        setSelectedOption(option)
        // Set our values in the parent to the option selected (ex. race, chClass, theme....)
        setFunction(option)
    }

    function renderSelectionType(){
        if(optionType === 'Race'){
            return(
            <CharacterCreationRaceDisplay 
            race={selectedOption} 
            setRaceOptionSelected={setCreationOptionSelected}
            raceOptionSelected={creationOptionSelected}
            toggleDropDown={(): void=> toggleDropDown()}
            showDropDown={showDropDown}
            dismissHandler={dismissHandler}
            />
            )
        }
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
        <div>{selectedOption !='' ? `${optionType}: ${selectedOption}` : `${optionType}...`}</div>
            {showDropDown && (
            <DropDownList 
                optionsArray={optionArray}
                showDropDown={showDropDown}
                toggleDropDown={(): void=> toggleDropDown()}
                optionSelection={optionSelection}
            />
        )}
        </button>
        {renderSelectionType()}
    </div>
    )
}

export default CreateCharacterOptions