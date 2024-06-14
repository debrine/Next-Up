import { useEffect, useState } from 'react'
import { raceList } from '../../../data/race-information/raceList'
import styles from './CharacterCreationRaceDisplay.module.css'
// import DropDownList from '../../DropDownList/DropDownList'

type CharacterCreationRaceDisplayProps ={
  race: string,
  raceOptionArray: React.Dispatch<React.SetStateAction<String[]>>
  toggleDropDown: Function;
}

function CharacterCreationRaceDisplay(
  props: CharacterCreationRaceDisplayProps
) {
  // const { race, raceOptionArray, toggleDropDown } = props
  const { race } = props

  const [selectedRaceObject, setSelectedRaceObject] = useState<RaceListTypes | null>(null)

  // Set the Race object to display as user selects their race.
  useEffect(()=>{
    raceList.forEach(raceType =>{
      if(raceType.raceName === race){
        setSelectedRaceObject(raceType)
      }
    })
  },[race])


  let raceAbilityArray = selectedRaceObject?.raceAbilityName.map(
    (header, index)=>{
      return(
        <div className={styles.abilityDiv}>
                <h3>{header}</h3>
                <div>{selectedRaceObject.raceAbilityDescription[index]}</div>
            </div>
      )
    }
  )

  // Not working, find out why later.
  // function showOptions(){
  //   if(
  //     selectedRaceObject?.hasOptions
  //   ){
  //     selectedRaceObject.optionDescription.map(
  //       (option, index)=>{
  //         return(
  //           <div className={styles.raceOptions}>
  //             <div>
  //               {option}
  //             </div>
  //             <DropDownList 
  //                 optionsArray={selectedRaceObject.optionArray[index]}
  //                 showDropDown={false}
  //                 toggleDropDown={(): void=> toggleDropDown()}
  //                 optionSelection={raceOptionArray}
  //             />
  //           </div>
  //         )
  //       }
  //     )
  //   } else{
  //     return(<></>)
  //   }
  // }

  function renderRaceInformation(){
    if(selectedRaceObject != null){
      return(
        <div className={styles.parentDiv}>
          <div className={styles.raceDescription}>
            {selectedRaceObject.raceDescription}
          </div>
          <div className={styles.abilityModifiersHP}>
            <h3>
              ABILITY SCORE MODIFIERS
            </h3>
            <span className={styles.abilityScoreModifierSpan}>
              {selectedRaceObject.raceScoreModifiers}
            </span>
            <span className={styles.hpSpan}>
              {selectedRaceObject.raceHP.toString()} HP
            </span>
          </div>

          <div className={styles.abilityDiv}>
            <h3>SIZE AND TYPE</h3>
            <div>
              {selectedRaceObject.raceSizeAndType}
            </div>
          </div>
          {raceAbilityArray}
          {/* {showOptions()} */}
        </div>
      )
    }
  }

  return(
    renderRaceInformation()
  )
}

export default CharacterCreationRaceDisplay