import { useEffect, useState } from 'react'
import { raceList } from '../../../data/race-information/raceList'
import styles from './CharacterCreationRaceDisplay.module.css'
import DropDownList from '../../DropDownList/DropDownList'

type CharacterCreationRaceDisplayProps ={
  race: string;
  raceOptionsSelected: React.MutableRefObject<string[]>
  // raceOptionsSelected: string[];
  // setRaceOptionsSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

function CharacterCreationRaceDisplay(
  props: CharacterCreationRaceDisplayProps
) {
  // const { race, raceOptionsSelected, setRaceOptionsSelected } = props
  const { race, raceOptionsSelected } = props

  const [tempArrayValue, setTempArrayValue] = useState<string>('')
  

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
    // setRaceOptionsSelected(['','',''])
    setTempArrayValue('')
    raceOptionsSelected.current = ['','','']
  },[race])

  function addOptionSelected(index: number){
    let tempList = raceOptionsSelected.current
    tempList.forEach((option: string, i: number)=>{
      if(i === index){
        option = tempArrayValue
        console.log(tempArrayValue)
      }
    })
    console.log(tempList)
    raceOptionsSelected.current = tempList
    // setRaceOptionsSelected(tempList)
    console.log(raceOptionsSelected)
  }
  

  // Needs to be able to set values into the array.
  function showOptions(){
    if(
      hasOptions
    ){
      return(
        optionDescription.map(
        (option: string, index: number)=>{
          // tempArrayIndex.current.push(index)
          {addOptionSelected(index)!}
          return(
            <div className={styles.raceOptions}>
              <div>
                {option}
              </div>
                <DropDownList 
                  optionsArray={optionArray[index]}
                  optionSelection={setTempArrayValue}
                  optionType='Option'
                  selectedOption={raceOptionsSelected.current[index]}
                />
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