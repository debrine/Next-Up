import { useEffect, useState } from 'react'
import { raceList } from '../../../data/race-information/raceList'
import styles from './CharacterCreationRaceDisplay.module.css'
import DropDownList from '../../DropDownList/DropDownList'

type CharacterCreationRaceDisplayProps ={
  race: string;
  toggleDropDown: Function;
  showDropDown: boolean;
  raceOptionSelected: string;
  setRaceOptionSelected: React.Dispatch<React.SetStateAction<string>>;
  dismissHandler: (e: React.FocusEvent<HTMLButtonElement>)=> void
}

function CharacterCreationRaceDisplay(
  props: CharacterCreationRaceDisplayProps
) {
  const { race, raceOptionSelected, setRaceOptionSelected, toggleDropDown, showDropDown, dismissHandler } = props
  // const { race } = props

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

  // Not working, find out why later.
  function showOptions(){
    if(
      hasOptions
    ){
      return(
        optionDescription.map(
        (option, index)=>{
          return(
            <div className={styles.raceOptions}>
              <div>
                {option}
              </div>
              <button
                onClick={(): void => toggleDropDown()}
                onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
              >
              <div>{raceOptionSelected !='' ? `Option Selected: ${raceOptionSelected}` : `Select Option...`}</div>
                {
                  showDropDown && (
                    <DropDownList 
                      optionsArray={optionArray[index]}
                      showDropDown={showDropDown}
                      toggleDropDown={(): void=> toggleDropDown()}
                      optionSelection={setRaceOptionSelected}
                  />
                  )
                }
              </button>
            </div>
          )
        }
      )
      
      )
    } else{
      return(<></>)
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