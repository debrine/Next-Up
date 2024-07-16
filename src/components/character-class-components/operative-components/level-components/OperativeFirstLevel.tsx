import { useEffect, useState } from 'react';
import { operativeAbilityList } from '../../../../data/class-information/operative/abilities/operativeAbilityList.ts';
import { specializationList } from '../../../../data/class-information/operative/abilities/specializationsList.ts';
import DropDownList from '../../../DropDownList/DropDownList.tsx';
import styles from './OperativeLevelComponents.module.css';
import { setValue } from '../../../../utils/setValue.ts';
import { Link } from 'react-router-dom';
import { AddAbility } from '../../../../utils/AddAbility.ts';
import { OperativesEdgeSkillBonus } from '../../../../data/class-information/operative/functions/OperativesEdgeSkillBonus.ts';
import confirmLevelUpAttributes from '../../confirmLevelUpAttributes.ts';

function OperativeFirstLevel({ keyID }: { keyID: string }) {
  const specializationArray = Object.keys(specializationList).map(
    (key: string) => {
      return key;
    }
  );

  const [specialization, setSpecialization] = useState<string>('');

  const [moveOn, setMoveOn] = useState<boolean>(false);

  const [
    {
      description,
      associatedSkills,
      trickAttackSkill,
      specializationExploit,
      abilityName,
      abilityDescription,
    },
    setSpecializationObject,
  ] = useState<SpecializationListTypes>({
    description: '',
    associatedSkills: [''],
    trickAttackSkill: '',
    specializationExploit: {
      abilityName: '',
      abilityDescription: '',
      abilitySource: '',
      actionType: [''],
      usesResolve: 0,
    },
    abilityName: '',
    abilityDescription: '',
    actionType: [''],
    usesResolve: 0,
  });

  useEffect(() => {
    if (specializationList[specialization]) {
      setSpecializationObject(specializationList[specialization]);
      setMoveOn(true);
    }
  }, [specialization]);

  function confirmFirstLevelChanges() {
    // Set the default abilities given by Operative
    Object.keys(operativeAbilityList['1']).forEach((i) => {
      AddAbility(keyID, operativeAbilityList['1'][i]);
    });

    // Add the specialization as an object to the ability list.
    const specializationAsAbility: AbilityListTypes = {
      abilityName: `Specialization: ${specialization}`.toUpperCase(),
      abilityDescription: `Associated Skills: ${associatedSkills[0]} and ${associatedSkills[1]}. ${trickAttackSkill}`,
      abilitySource: 'Operative (Specialization)',
      actionType: ['None'],
      usesResolve: 0,
    };
    AddAbility(keyID, specializationAsAbility);

    // Set the specialization selected to the list so we can reference it again later when needed.
    setValue(`OperativeSpecialization${keyID}`, {
      specialization,
    });

    // Add Operative's Edge bonus of 1.
    OperativesEdgeSkillBonus(keyID, 1);

    // Confirm Attributes.
    confirmLevelUpAttributes(keyID);

    // Set the level to 1 so it's no longer locked in the level 1 selection screen.
    setValue(`Level${keyID}`, 1);
  }

  return (
    <div className={styles.firstParentDiv}>
      <div className={styles.levelUpDescription}>
        At first level you gain the following abilities. You must confirm all
        changes before you can view your Character Sheet
      </div>
      <div className={styles.classAbilityList}>
        {Object.keys(operativeAbilityList['1']).map((ability) => {
          return (
            <div className={styles.classAbility} key={`classAbility${ability}`}>
              <h3>{ability}</h3>
              <div className={styles.abilityDescription}>
                {operativeAbilityList['1'][ability].abilityDescription}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.specializationSelected}>
        <div className={styles.specializationMessage}>
          Select your Specialization from the list below. You will gain the
          Exploit at 5th level, even if you don't meet the requirements.
        </div>
        <DropDownList
          optionType={'Specialization'}
          optionsArray={specializationArray}
          optionSelection={setSpecialization}
          selectedOption={specialization}
        />
        {specialization != '' && (
          <div className={styles.specializationFullDescription}>
            <div className={styles.specializationHead}>{specialization}</div>
            <div className={styles.specializationDescription}>
              {description}
            </div>
            <ul>
              <li key={'AssociatedSkills'}>
                <span>Associated Skills: </span> {associatedSkills[0]} and{' '}
                {associatedSkills[1]}. {trickAttackSkill}
              </li>
              <li key={'SpecializationExploit'}>
                <div>Specialization Exploit: </div>
                <div className={styles.exploitHead}>
                  {specializationExploit.abilityName}
                </div>
                <ul>
                  <li>{specializationExploit.abilityDescription}</li>
                </ul>
              </li>
              <li key={'SpecializationAbility'}>
                <span>{abilityName}: </span>
                {abilityDescription}
              </li>
            </ul>
          </div>
        )}
      </div>
      {moveOn && (
        <div className={styles.confirmFirstLevelChangesParent}>
          <Link
            onClick={confirmFirstLevelChanges}
            to={`/Next-Up/charactersheet/${keyID}`}>
            Add Character
          </Link>
          {/* <button onClick={confirmFirstLevelChanges}>Confirm Changes</button> */}
        </div>
      )}
    </div>
  );
}

export default OperativeFirstLevel;
