import { useContext, useEffect, useState } from 'react'
import { raceList } from '../../../data/race-information/raceList'
import styles from './CharacterCreationRaceDisplay.module.css'
import DropDownList from '../../DropDownList/DropDownList'
import { CharacterCreationContext } from '../../../states/CreateCharacter/CreateCharacter'
import BackButton from '../../../utils/BackButton/BackButton'
import NextButton from '../../../utils/NextButton/NextButton'
import NextButtonValidation from '../../../utils/NextButtonValidation'
import ShowOptions from '../../../utils/character-creation-functions/ShowOptions/ShowOptions'


function CharacterCreationRaceDisplay() {

  const { race, setRace, raceOptionsSelected, componentArrayPosition, setComponentArrayPosition, componentArray } = useContext(CharacterCreationContext)

  const raceArray: string[] = Object.keys(raceList).map((key:string)=>{
    return(key)
  });

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


  useEffect(()=>{
    // Set the Race object to display as user selects their race.
    if(raceList[race] != undefined){
      setSelectedRaceObject(raceList[race])
    }
    // Reset the options if you change the race selected.
    raceOptionsSelected.forEach(i=>{
      i.optionSet('')
    })
  },[race])
  

  // Commented out in case it needs to be different from other showOptions
  // // Sets values into an array to be used for character creation.
  // function showOptions(){
  //   if(
  //     // If the Race has options to select.
  //     hasOptions
  //   ){
  //     return(
  //       optionDescription.map(
  //         (option: string, index: number)=>{
  //           return(
  //             <div className={styles.raceOptions} key={`raceOption${index}`}>
  //               <div>
  //                 {/* Display the description of the option. */}
  //                 {option}
  //               </div>
  //                 <DropDownList 
  //                   optionsArray={optionArray[index]}
  //                   optionSelection={raceOptionsSelected[index].optionSet}
  //                   optionType='Option'
  //                   selectedOption={raceOptionsSelected[index].optionValue}
  //                 />
  //             </div>
  //           )
  //         }
  //       )
  //     )
  //   }
  // }

  // Validation for the next button
  const [moveOn, setMoveOn] = useState<boolean>(false)

  useEffect(()=>{
    NextButtonValidation({
      optionType: race,
      hasOptions: hasOptions,
      forEachOption: optionDescription,
      individualOptions: raceOptionsSelected,
      setMoveOn: setMoveOn
    })
    // Don't allow same option to be chosen twice
    raceOptionsSelected.forEach((initial)=>{
      raceOptionsSelected.forEach((compare)=>{
        if(
          // If the values are the same, and not in the same position, and not empty, don't allow moving on.
          initial.optionValue === compare.optionValue &&
          raceOptionsSelected.indexOf(initial) != raceOptionsSelected.indexOf(compare) &&
          initial.optionValue != ''
        ){
          setMoveOn(false)
        }
      })
    })
  },[race, hasOptions, raceOptionsSelected])



  return(
    <div className={styles.parentDiv}>
      {
        race != '' &&
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
          <RaceAbilityArray
            raceAbilityName={raceAbilityName}
            raceAbilityDescription={raceAbilityDescription}
          />
          {hasOptions &&
            ShowOptions({
              optionsToMap: optionDescription,
              optionArray: optionArray,
              optionsSelectedArray: raceOptionsSelected,
              keyString: 'raceOptions',
            })
          }
        </div>
      }

      <DropDownList 
          optionType={'Race'}
          optionsArray={raceArray}
          optionSelection={setRace}
          selectedOption={race}
      />
      <BackButton
        arrayPosition={componentArrayPosition}
        setArrayPosition={setComponentArrayPosition}
      />
      <NextButton
      message='Next'
        arrayPosition={componentArrayPosition}
        setArrayPosition={setComponentArrayPosition}
        arrayToCycle={componentArray}
        condition={moveOn}
      />
    </div>
  )
}

type RaceAbilityArrayProps = {
  raceAbilityName: string[],
  raceAbilityDescription: string[]
}

function RaceAbilityArray({
  raceAbilityName,
  raceAbilityDescription
}: RaceAbilityArrayProps){
  return(
    raceAbilityName.map(
      (header, index)=>{
        return(
          <div className={styles.abilityDiv} key={`${header}${index}`}>
              <h3>{header}</h3>
              <div>{raceAbilityDescription[index]}</div>
          </div>
        )
      }
    )
  )
}

export default CharacterCreationRaceDisplay