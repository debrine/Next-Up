import DropDownList from '../../../components/DropDownList/DropDownList'
import styles from './ShowOptions.module.css'

type ShowOptionsTypes ={
  hasOptions: boolean,
  optionsToMap: string[],
  optionArray: string[][],
  optionsSelectedArray:{
    optionSet: Function,
    optionValue: string
  }[]
  keyString: string,
}
function ShowOptions({
  hasOptions,
  optionsToMap,
  optionArray,
  optionsSelectedArray,
  keyString,
}: ShowOptionsTypes) {
  if(
    // If the Race has options to select.
    hasOptions
  ){
    return(
      optionsToMap.map(
        (option: string, index: number)=>{
          return(
            <div className={styles.raceOptions} key={`${keyString}${index}`}>
              <div>
                {/* Display the description of the option. */}
                {option}
              </div>
                <DropDownList 
                  optionsArray={optionArray[index]}
                  optionSelection={optionsSelectedArray[index].optionSet}
                  optionType='Option'
                  selectedOption={optionsSelectedArray[index].optionValue}
                />
            </div>
          )
        }
      )
    )
  }
}

export default ShowOptions