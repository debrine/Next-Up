import { useState } from 'react'
import styles from './CreateCharacterOptions.module.css'
import DropDownList from '../../DropDownList/DropDownList';

type createCharacterOptionsProps = {
    optionType: string
}

function CreateCharacterOptions({
    optionType
}: createCharacterOptionsProps) {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');

    const races = () => {
        return ["Android", "Human", "Kasatha", "Lashunta", "Shirren", "Vesk", "Ysoki"];
    };

    // Toggle Drop Down
    const toggleDropDown = ()=>{
        setShowDropDown(!showDropDown)
    }

    const dismissHandler = (e: React.FocusEvent<HTMLButtonElement>): void =>{
        if(e.currentTarget === e.target) {
            setShowDropDown(false)
        }
    }

    const optionSelection = (option: string): void => {
        setSelectedOption(option)
        console.log(option)
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
            {optionType}
        </button>
        <div>{selectedOption ? 'Selected: '+ selectedOption : "Nothing Selected"}</div>
        {showDropDown && (
            <DropDownList 
                optionsArray={races()}
                showDropDown={false}
                toggleDropDown={(): void=> toggleDropDown()}
                optionSelection={optionSelection}
            />
        )}
    </div>
    )
}

export default CreateCharacterOptions