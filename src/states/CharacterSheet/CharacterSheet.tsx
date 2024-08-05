import styles from './CharacterSheet.module.css';
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx';
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx';
import LeftSide from '../../components/character-sheet-components/left-side-components/LeftSide/LeftSide.tsx';
import RightSide from '../../components/character-sheet-components/right-side-components/RightSide/RightSide.tsx';
import { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../../utils/getValue.ts';
import { levelUpList } from '../../data/levelUpList.ts';
import FirstLevelMessage from '../../components/character-class-components/FirstLevelMessage/FirstLevelMessage.tsx';
import { useAbilityScores } from '../../hooks/useAbilityScores.ts';
import { useSkills } from '../../hooks/useSkills.ts';
import { useStaminaHealthResolve } from '../../hooks/useStaminaHealthResolve.ts';
import { FormProvider, useForm } from 'react-hook-form';
import { setValue } from '../../utils/setValue.ts';
import { useInitiativeScore } from '../../hooks/useInitiativeScore.ts';
import { useCurrentID } from '../../utils/useCurrentID.ts';

type SkillBlockStatesListType = {
  [key: string]: {
    skillState: SkillListType;
    setSkill: (newValues: SkillListType) => void;
  };
};

export const CharacterSheetContext = createContext<{
  strengthAbility: AbilityScoreType;
  dexterityAbility: AbilityScoreType;
  constitutionAbility: AbilityScoreType;
  intelligenceAbility: AbilityScoreType;
  wisdomAbility: AbilityScoreType;
  charismaAbility: AbilityScoreType;
  initMisc: number;
  currentSP: number;
  // setCurrentSP: Dispatch<SetStateAction<number>>;
  currentHP: number;
  // setCurrentHP: Dispatch<SetStateAction<number>>;
  currentRP: number;
  // setCurrentRP: Dispatch<SetStateAction<number>>;
  tempSP: number;
  // setTempSP: Dispatch<SetStateAction<number>>;
  tempHP: number;
  // setTempHP: Dispatch<SetStateAction<number>>;
  tempRP: number;
  // setTempRP: Dispatch<SetStateAction<number>>;
  SkillBlockStatesList: SkillBlockStatesListType;
  characterInfoObject: CharacterInfoObjectType;
  characterInfoDynamicObject: CharacterBasicInfoDynamicType;
}>({} as any);

function CharacterSheet() {
  const { characterID } = useParams();

  // This is needed to not overwrite the data in the previously selected character. Form will write data before the characterID from useParams would update.
  const { currentID } = useCurrentID();

  // React-hook-form methods.
  const methods = useForm();
  const { reset, watch } = methods;

  // Custom hook states.
  const {
    strengthAbility,
    dexterityAbility,
    constitutionAbility,
    intelligenceAbility,
    wisdomAbility,
    charismaAbility,
    updateCharisma,
    updateConstitution,
    updateDexterity,
    updateIntelligence,
    updateStrength,
    updateWisdom,
    currentCharacterID,
  } = useAbilityScores();

  const { initMisc } = useInitiativeScore();

  const {
    currentSP,
    currentHP,
    currentRP,
    tempSP,
    tempHP,
    tempRP,
    // maxSP,
    // maxHP,
    // maxRP,
  } = useStaminaHealthResolve();

  const { SkillBlockStatesList } = useSkills();
  // used to know what characters info is currently loaded
  const characterIDRef = useRef<string | undefined>();

  // useEffect for all changes related to swapping characters
  useEffect(() => {
    // // Set default values based on character selected.

    // if the values have not been set, or the character changes
    // we use the characterID provided from the hook, as it is updated
    // after the new values are set in state, so they should be ready.
    if (characterIDRef.current != currentCharacterID) {
      characterIDRef.current = currentCharacterID ?? '';
      let defaultValues = {
        // CharacterInfo registers

        characterAlignment: characterInfoDynamicObject.characterAlignment,
        characterDiety: characterInfoDynamicObject.characterDiety,
        characterGender: characterInfoDynamicObject.characterGender,
        characterHomeWorld: characterInfoDynamicObject.characterHomeWorld,
        characterName: characterInfoDynamicObject.characterName,
        characterSize: characterInfoDynamicObject.characterSize,
        characterSpeed: characterInfoDynamicObject.characterSpeed,
        playerName: characterInfoDynamicObject.playerName,

        // DescriptionBlock registers

        descriptionBlock: getValue(`Description${characterID}`),

        // AbilityScoreBlock registers

        bonusStr: strengthAbility.asBonus,
        bonusDex: dexterityAbility.asBonus,
        bonusCon: constitutionAbility.asBonus,
        bonusInt: intelligenceAbility.asBonus,
        bonusWis: wisdomAbility.asBonus,
        bonusCha: charismaAbility.asBonus,

        penaltyStr: strengthAbility.asPenalty,
        penaltyDex: dexterityAbility.asPenalty,
        penaltyCon: constitutionAbility.asPenalty,
        penaltyInt: intelligenceAbility.asPenalty,
        penaltyWis: wisdomAbility.asPenalty,
        penaltyCha: charismaAbility.asPenalty,

        // InitiativeBlock registers
        InitiativeMiscModifier: initMisc.current,

        // HealthAndResolveBlock registers
        currentSP: currentSP.current,
        currentHP: currentHP.current,
        currentRP: currentRP.current,
        tempSP: tempSP.current,
        tempHP: tempHP.current,
        tempRP: tempRP.current,
      };

      // Reset the defaultValues.
      reset({ ...defaultValues });

      setCharacterInfoObject(getValue(`characterBasicInfo${characterID}`));

      Object.keys(SkillBlockStatesList).forEach((key) => {
        SkillBlockStatesList[key].setSkill(getValue(`${key}${characterID}`));
      });
    }
  }, [
    currentID,
    strengthAbility,
    constitutionAbility,
    dexterityAbility,
    wisdomAbility,
    intelligenceAbility,
    charismaAbility,
  ]);

  // useEffect to save data to local storage.
  useEffect(() => {
    const subscription = watch((data) => {
      // CharacterInfo registers
      setValue(`characterBasicInfoDynamic${characterID}`, {
        characterAlignment: data.characterAlignment,
        characterDiety: data.characterDiety,
        characterGender: data.characterGender,
        characterHomeWorld: data.characterHomeWorld,
        characterName: data.characterName,
        characterSize: data.characterSize,
        characterSpeed: data.characterSpeed,
        playerName: data.playerName,
      });

      // DescriptionBlock registers.
      setValue(`Description${characterID}`, data.descriptionBlock);

      // AbilityScoreBlock registers.
      updateStrength({
        aSName: 'Strength',
        asBonus: Number(data.bonusStr),
        asPenalty: Number(data.penaltyStr),
        value: Number(strengthAbility.value),
      });

      updateDexterity({
        aSName: 'Dexterity',
        asBonus: Number(data.bonusDex),
        asPenalty: Number(data.penaltyDex),
        value: Number(dexterityAbility.value),
      });

      updateConstitution({
        aSName: 'Constitution',
        asBonus: Number(data.bonusCon),
        asPenalty: Number(data.penaltyCon),
        value: Number(constitutionAbility.value),
      });

      updateIntelligence({
        aSName: 'Intelligence',
        asBonus: Number(data.bonusInt),
        asPenalty: Number(data.penaltyInt),
        value: Number(intelligenceAbility.value),
      });

      updateWisdom({
        aSName: 'Wisdom',
        asBonus: Number(data.bonusWis),
        asPenalty: Number(data.penaltyWis),
        value: Number(wisdomAbility.value),
      });

      updateCharisma({
        aSName: 'Charisma',
        asBonus: Number(data.bonusCha),
        asPenalty: Number(data.penaltyCha),
        value: Number(charismaAbility.value),
      });

      // InitiativeBlock registers.
      setValue(
        `InitiativeMiscModifier${characterID}`,
        Number(data.InitiativeMiscModifier)
      );

      // HealthAndResolveBlock registers.
      setValue(`CurrentSP${characterID}`, data.currentSP);
      setValue(`CurrentHP${characterID}`, data.currentHP);
      setValue(`CurrentRP${characterID}`, data.currentRP);
      setValue(`TempSP${characterID}`, data.tempSP);
      setValue(`TempHP${characterID}`, data.tempHP);
      setValue(`TempRP${characterID}`, data.tempRP);
    });
    return () => subscription.unsubscribe();
  }, [
    currentID,
    watch,
    updateCharisma,
    updateConstitution,
    updateStrength,
    updateDexterity,
    updateIntelligence,
    updateWisdom,
    strengthAbility,
    wisdomAbility,
    charismaAbility,
    dexterityAbility,
    constitutionAbility,
    intelligenceAbility,
  ]);

  const characterInfoDynamicObject: CharacterBasicInfoDynamicType = useMemo(
    () => getValue(`characterBasicInfoDynamic${characterID}`),
    [characterID]
  );

  const [characterInfoObject, setCharacterInfoObject] =
    useState<CharacterInfoObjectType>(
      getValue(`characterBasicInfo${characterID}`)
    );

  /*
    Static States to be passed to children.*****************************************************************
    */

  // Character Level

  const characterLevel = getValue(`Level${characterID}`);

  /*
    Stamina, Health, and Resolve
  */

  const Component =
    levelUpList['1'][characterInfoObject.chClass]?.componentForClass;

  return (
    <CharacterSheetContext.Provider
      value={{
        strengthAbility: strengthAbility,
        dexterityAbility: dexterityAbility,
        constitutionAbility: constitutionAbility,
        intelligenceAbility: intelligenceAbility,
        wisdomAbility: wisdomAbility,
        charismaAbility: charismaAbility,

        initMisc: initMisc.current,
        currentSP: currentSP.current,
        currentHP: currentHP.current,
        currentRP: currentRP.current,
        tempSP: tempSP.current,
        tempHP: tempHP.current,
        tempRP: tempRP.current,

        SkillBlockStatesList: SkillBlockStatesList,

        characterInfoObject: characterInfoObject,
        characterInfoDynamicObject: characterInfoDynamicObject,
      }}>
      <FormProvider {...methods}>
        {characterLevel === 0 && characterID ? (
          // Confirm all first level selections based on class, which need to be handled uniquely.
          <div className={styles.FirstLevelSelectionChanges}>
            <FirstLevelMessage />
            <div>{Component ? <Component keyID={characterID} /> : null}</div>
          </div>
        ) : (
          // Once character has confirmed choices, move on to sheet.
          <div className={styles.parentDiv}>
            <div className={styles.characterSheetMainDiv}>
              <div className={styles.characterInfoDescriptionBlock}>
                <div className={styles.characterInfoBlock}>
                  <CharacterInfo />
                </div>

                <div className={styles.characterDescriptionBlock}>
                  <DescriptionBlock />
                </div>
              </div>
              <div className={styles.statArea}>
                <div className={styles.leftSide}>
                  <LeftSide />
                </div>

                <div className={styles.rightSide}>
                  <RightSide />
                </div>
              </div>
            </div>
          </div>
        )}
      </FormProvider>
    </CharacterSheetContext.Provider>
  );
}

export default CharacterSheet;
