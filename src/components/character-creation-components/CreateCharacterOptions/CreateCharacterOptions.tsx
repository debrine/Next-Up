import { useEffect, useState } from 'react'
import styles from './CreateCharacterOptions.module.css'
import DropDownList from '../../DropDownList/DropDownList'
import CharacterCreationRaceDisplay from '../CharacterCreationRace/CharacterCreationRaceDisplay'

type createCharacterOptionsProps = {
    optionType: string
    optionArray: string[]
    setFunction: React.Dispatch<React.SetStateAction<String>>
    creationOptionsSelected: React.MutableRefObject<string[]>
    // creationOptionsSelected: string[]
    // setCreationOptionsSelected: React.Dispatch<React.SetStateAction<string[]>>
}

function CreateCharacterOptions({
    optionType,
    optionArray,
    setFunction,
    creationOptionsSelected
    // setCreationOptionsSelected,
    // creationOptionsSelected
}: createCharacterOptionsProps) {

    const [selectedOption, setSelectedOption] = useState<string>('');
    

    // To clear the selected option between components.
    useEffect(()=>{
        setSelectedOption('')
    },[optionType])

    

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
            // setRaceOptionsSelected={setCreationOptionsSelected}
            raceOptionsSelected={creationOptionsSelected}
            />
            )
        }
    }

    return (
    <div className={styles.parentDiv}>
        <h1>
            Select {optionType}
        </h1>
        
            <DropDownList 
                optionType={optionType}
                optionsArray={optionArray}
                optionSelection={optionSelection}
                selectedOption={selectedOption}
            />
        {renderSelectionType()}
    </div>
    )
}

export default CreateCharacterOptions