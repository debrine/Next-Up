import { useEffect, useState } from 'react'
import styles from './CreateCharacterOptions.module.css'
import DropDownList from '../../DropDownList/DropDownList'
import CharacterCreationRaceDisplay from '../CharacterCreationRaceDisplay/CharacterCreationRaceDisplay'
import CharacterCreationThemeDisplay from '../CharacterCreationThemeDisplay/CharacterCreationThemeDisplay'

type createCharacterOptionsProps = {
    optionType: string
    optionArray: string[]
    setFunction: React.Dispatch<React.SetStateAction<String>>
    creationOptionsSelected: {
        optionValue: string;
        optionSet: React.Dispatch<React.SetStateAction<string>>;
    }[],
}

function CreateCharacterOptions({
    optionType,
    optionArray,
    setFunction,
    creationOptionsSelected,
    // setCreationOptionsSelected,
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
        if(optionType === 'Race'){if(selectedOption != undefined){
            return(
                <CharacterCreationRaceDisplay 
                    raceSelected={selectedOption} 
                    raceOptionsSelected={creationOptionsSelected}
                />
            )}
        } else if (optionType === 'Theme'){
            return(
                <CharacterCreationThemeDisplay
                    themeSelected={selectedOption}
                    themeOptionsSelected={creationOptionsSelected}
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