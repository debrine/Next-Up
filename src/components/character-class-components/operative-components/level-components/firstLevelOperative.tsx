
import { useState } from 'react';
import { operativeAbilityList } from '../../../../data/class-information/operative/abilities/operativeAbilityList';
import { specializationList } from '../../../../data/class-information/operative/abilities/specializationsList';
import DropDownList from '../../../DropDownList/DropDownList';
import styles from './OperativeLevelComponents.module.css'


function FirstLevelOperative() {

  // For testing, we'll be using the first character in the charactersAvailable array.
  // Typically, it'll be passed down from the AddCharacter.

  // const keyID: string = 'c2a8a524-d808-44ca-994f-6d0dd127f320'

  const specializationArray = Object.keys(specializationList).map((key:string)=>{
    return (key)
  })

  const [specialization, setSpecialization] = useState<string>('')

  
  const {
    description,
    associatedSkills,
    trickAttackSkill,
    // specializationExploit,
    // abilityName,
    // abilityDescription,
    // actionType,
    // usesResolve
  } = specializationList[specialization]

  return (
    <div className={styles.firstParentDiv}>
      <div className={styles.levelUpDescription}>
        At first level you gain the following abilities. You must confirm all changes before you can view your Character Sheet
      </div>
      <div className={styles.classAbilityList}>
        {operativeAbilityList['1'].abilityName.map((a: string, i: number)=>{
          return(
            <div className={styles.classAbility}>
              <h3>{a}</h3>
              <div className={styles.abilityDescription}>
                {operativeAbilityList['1'].abilityDescription[i]}
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.specializationSelected}>
        <div className={styles.specializationMessage}>
          Select your Specialization from the list below. You will gain the Exploit at 5th level, even if you don't meet the requirements.
        </div>
        <DropDownList
          optionType={'Specialization'}
          optionsArray={specializationArray}
          optionSelection={setSpecialization}
          selectedOption={specialization}
        />
        {
          specialization != '' &&
          <div className={styles.specializationFullDescription}>
            <div className={styles.specializationHead}>
              {specialization}
            </div>
            <div className={styles.specializationDescription}>
              {description}
            </div>
            <ul>
              <li><span>Associated Skills: </span> {associatedSkills[0]} and {associatedSkills[1]}. {trickAttackSkill}</li>
              <li><span>Specialization Exploit: </span></li>
              <li></li>
            </ul>
          </div>
        }
      </div>
      
    </div>
  )
}

export default FirstLevelOperative