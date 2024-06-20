import { useContext, useEffect, useState } from 'react'
import { raceList } from '../../../data/race-information/raceList'
import styles from './CharacterCreationRaceDisplay.module.css'
import DropDownList from '../../DropDownList/DropDownList'
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter'


function CharacterCreationRaceDisplay() {

  const { setRace, raceArray, raceOptionsSelected } = useContext(CharacterCreationContext)

  const [raceSelected, setRaceSelected] = useState<string>('');


  const [{
    raceScoreModifiers,
    raceDescription,
    raceSizeAndType,
    raceHP,
    raceAbilityName,
    raceAbilityDescription,
    hasOptions,
    optionDescription,
    optionArray,
  }, setSelectedRaceObject] = useState<RaceListTypes>(
    {
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
    }
  )

  function optionSelection(
    option: string
  ){
    // Set the option to be shown as selected.
    setRaceSelected(option)
    // Set our values to the option selected (ex. race, chClass, theme....)
    setRace(option)
  }

  

  useEffect(()=>{
    // Set the Race object to display as user selects their race.
    if(raceList[raceSelected] != undefined){
      setSelectedRaceObject(raceList[raceSelected])
    }
    // Reset the options if you change the race selected.
    raceOptionsSelected.forEach(i=>{
      i.optionSet('')
    })
  },[raceSelected])


  let raceAbilityArray = raceAbilityName.map(
    (header, index)=>{
      return(
        <div className={styles.abilityDiv} key={`${header}${index}`}>
            <h3>{header}</h3>
            <div>{raceAbilityDescription[index]}</div>
        </div>
      )
    }
  )
  

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

  return(
    <div className={styles.parentDiv}>
      {
        raceSelected != '' &&
        <div className={styles.raceInformationDiv}>
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
      }

      <DropDownList 
          optionType={'Race'}
          optionsArray={raceArray}
          optionSelection={optionSelection}
          selectedOption={raceSelected}
      />
    </div>
  )
}

export default CharacterCreationRaceDisplay