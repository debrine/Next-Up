import { useEffect, useState } from 'react'
import styles from './CreateCharacterOptions.module.css'
// import { FieldValues, UseFormRegister, useForm } from 'react-hook-form'

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
    // const { register, getValues } = useForm()

    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    // const selectedOption = getValues(optionType)

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
            // <DropDownList 
            //     optionsArray={optionArray}
            //     showDropDown={false}
            //     toggleDropDown={(): void=> toggleDropDown()}
            //     optionSelection={optionSelection}
            // />
            <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
                {optionArray.map(
                    (option: string, index: number): JSX.Element => {
                        return (
                        <p
                            key={index}
                            // {...register(optionType)}
                            onClick={(): void => {
                            optionSelection(option);
                            }}
                        >
                            {option}
                        </p>
                        );
                    }
                )}
            </div>
        )}
        </button>
        
    </div>
    )
}

export default CreateCharacterOptions