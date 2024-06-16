import { useEffect, useState } from 'react'
import { raceList } from '../../../data/race-information/raceList'
import styles from './CharacterCreationRaceDisplay.module.css'
import DropDownList from '../../DropDownList/DropDownList'

type CharacterCreationRaceDisplayProps ={
  race: string;
  raceOptionsSelected: {
    optionValue: string;
    optionSet: React.Dispatch<React.SetStateAction<string>>;
}[]
}

function CharacterCreationRaceDisplay(
  props: CharacterCreationRaceDisplayProps
) {
  const { race, raceOptionsSelected } = props


  const [selectedRaceObject, setSelectedRaceObject] = useState<RaceListTypes>({
    raceSource: '',
    raceName: '',
    raceScoreModifiers: '',
    raceDescription: '',
    raceSizeAndType: '',
    raceHP: 0,
    raceSize: '',
    raceAbilityName: [''],
    raceAbilityDescription: [''],
    hasOptions: false,
    optionDescription: [''],
    optionArray: [['']],
    raceFunction: ()=>null
  })

  const {
    raceScoreModifiers,
    raceDescription,
    raceSizeAndType,
    raceHP,
    raceAbilityName,
    raceAbilityDescription,
    hasOptions,
    optionDescription,
    optionArray
  } = selectedRaceObject

  // Set the Race object to display as user selects their race.
  useEffect(()=>{
    raceList.forEach(raceType =>{
      if(raceType.raceName === race){
        setSelectedRaceObject(raceType)
      }
    })
  },[race])


  let raceAbilityArray = raceAbilityName.map(
    (header, index)=>{
      return(
        <div className={styles.abilityDiv}>
                <h3>{header}</h3>
                <div>{raceAbilityDescription[index]}</div>
            </div>
      )
    }
  )
  useEffect(()=>{
    raceOptionsSelected.forEach(i=>{
      i.optionSet('')
    })
  },[race])
  

  // Sets values into an array to be used for character creation.
  function showOptions(){
    if(
      // If the Race has options to select.
      hasOptions
    ){
      return(
        optionDescription.map(
        (option: string, index: number)=>{
          return(
            <div className={styles.raceOptions} key={`raceOption${index}`}>
              <div>
                {/* Display the description of the option. */}
                {option}
              </div>
                <DropDownList 
                  optionsArray={optionArray[index]}
                  optionSelection={raceOptionsSelected[index].optionSet}
                  optionType='Option'
                  selectedOption={raceOptionsSelected[index].optionValue}
                />
            </div>
          )
        }
      )
      
      )
    }
  }

  function renderRaceInformation(){
    if(race != ''){
      return(
        <div className={styles.parentDiv}>
          <div className={styles.raceDescription}>
            {raceDescription}
          </div>
          <div className={styles.abilityModifiersHP}>
            <h3>
              ABILITY SCORE MODIFIERS
            </h3>
            <span className={styles.abilityScoreModifierSpan}>
              {raceScoreModifiers}
            </span>
            <span className={styles.hpSpan}>
              {raceHP.toString()} HP
            </span>
          </div>

          <div className={styles.abilityDiv}>
            <h3>SIZE AND TYPE</h3>
            <div>
              {raceSizeAndType}
            </div>
          </div>
          {raceAbilityArray}
          {showOptions()}
        </div>
      )
    }
  }

  return(
    renderRaceInformation()
  )
}

export default CharacterCreationRaceDisplay