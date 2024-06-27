type NextButtonValidation={
    optionType: string,
    hasOptions: boolean,
    forEachOption: any[],
    individualOptions: {
        optionValue: string
    }[]
    setMoveOn: Function,
}

export default function NextButtonValidation({
    optionType,
    hasOptions,
    forEachOption,
    individualOptions,
    setMoveOn,
}: NextButtonValidation){
    
    if(optionType === ''){
        // If no optionType selected, don't allow next button functionality.
        setMoveOn(false);
    } else if(hasOptions){
        // If the optionType has options to select from.
        // Temp condition boolean.
        let optionCondition: boolean = true

        // Check each option.
        forEachOption.forEach(i=>{
            let index: number = forEachOption.indexOf(i);
            // If the option hasn't been selected yet, return false for moveOn and optionCondition.
            if(individualOptions[index].optionValue === ''){
                setMoveOn(false)
                optionCondition = false
            }
        })

        // If all options are selected, allow next button functionality.
        if (optionCondition){
            setMoveOn(true)
        }
    } else {
        // If the race has been selected and has no options, allow next button functionality.
        setMoveOn(true);
    }
}