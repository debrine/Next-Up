import styles from './CharacterSheet.module.css';
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx';
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx';
import LeftSide from '../../components/character-sheet-components/LeftSide/LeftSide.tsx';
import RightSide from '../../components/character-sheet-components/RightSide/RightSide.tsx';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../../utils/getValue.ts';
import { levelUpList } from '../../data/levelUpList.ts';
import FirstLevelMessage from '../../components/character-class-components/FirstLevelMessage/FirstLevelMessage.tsx';
import { FormProvider, useForm } from 'react-hook-form';

export const CharacterSheetContext = createContext<{
  keyID: string;
  strengthAbility: AbilityScoreType;
  setStrengthAbility: Dispatch<SetStateAction<AbilityScoreType>>;
  dexterityAbility: AbilityScoreType;
  setDexterityAbility: Dispatch<SetStateAction<AbilityScoreType>>;
  constitutionAbility: AbilityScoreType;
  setConstitutionAbility: Dispatch<SetStateAction<AbilityScoreType>>;
  intelligenceAbility: AbilityScoreType;
  setIntelligenceAbility: Dispatch<SetStateAction<AbilityScoreType>>;
  wisdomAbility: AbilityScoreType;
  setWisdomAbility: Dispatch<SetStateAction<AbilityScoreType>>;
  charismaAbility: AbilityScoreType;
  setCharismaAbility: Dispatch<SetStateAction<AbilityScoreType>>;
  characterInfoObject: CharacterInfoObjectType;
  characterInfoDynamicObject: CharacterBasicInfoDynamicType;
}>({} as any);

function CharacterSheet() {
  const { characterID } = useParams();

  const [keyID, setKeyID] = useState<string>('');

  useEffect(() => {
    if (characterID) {
      setKeyID(characterID);
    }
  }, [characterID]);

  const [characterInfoObject, setCharacterInfoObject] =
    useState<CharacterInfoObjectType>(
      getValue(`characterBasicInfo${characterID}`)
    );

  /*
    States to be passed to children.*****************************************************************
    */
  const [characterInfoDynamicObject, setCharacterInfoDynamicObject] =
    useState<CharacterBasicInfoDynamicType>(
      getValue(`characterBasicInfoDynamic${characterID}`)
    );

  const methods = useForm({ defaultValues: characterInfoDynamicObject });
  // const { reset } = methods;

  // Attribute information for sheet.

  const [strengthAbility, setStrengthAbility] = useState<AbilityScoreType>(
    getValue(`Strength${characterID}`)
  );

  const [dexterityAbility, setDexterityAbility] = useState<AbilityScoreType>(
    getValue(`Dexterity${characterID}`)
  );

  const [constitutionAbility, setConstitutionAbility] =
    useState<AbilityScoreType>(getValue(`Constitution${characterID}`));

  const [intelligenceAbility, setIntelligenceAbility] =
    useState<AbilityScoreType>(getValue(`Intelligence${characterID}`));

  const [wisdomAbility, setWisdomAbility] = useState<AbilityScoreType>(
    getValue(`Wisdom${characterID}`)
  );

  const [charismaAbility, setCharismaAbility] = useState<AbilityScoreType>(
    getValue(`Charisma${characterID}`)
  );

  // Character Level

  const characterLevel = getValue(`Level${characterID}`);

  useEffect(() => {
    setCharacterInfoObject(getValue(`characterBasicInfo${characterID}`));
    setCharacterInfoDynamicObject(
      getValue(`characterBasicInfoDynamic${characterID}`)
    );
  }, [characterID]);

  const Component =
    levelUpList['1'][characterInfoObject.chClass]?.componentForClass;

  return (
    <CharacterSheetContext.Provider
      value={{
        keyID: keyID,
        strengthAbility: strengthAbility,
        setStrengthAbility: setStrengthAbility,
        dexterityAbility: dexterityAbility,
        setDexterityAbility: setDexterityAbility,
        constitutionAbility: constitutionAbility,
        setConstitutionAbility: setConstitutionAbility,
        intelligenceAbility: intelligenceAbility,
        setIntelligenceAbility: setIntelligenceAbility,
        wisdomAbility: wisdomAbility,
        setWisdomAbility: setWisdomAbility,
        charismaAbility: charismaAbility,
        setCharismaAbility: setCharismaAbility,
        characterInfoObject: characterInfoObject,
        characterInfoDynamicObject: characterInfoDynamicObject,
      }}>
      <FormProvider {...methods}>
        {characterLevel === 0 ? (
          // Confirm all first level selections based on class, which need to be handled uniquely.
          <div className={styles.FirstLevelSelectionChanges}>
            <FirstLevelMessage />
            <div>{Component ? <Component keyID={keyID} /> : null}</div>
          </div>
        ) : (
          // Once character has confirmed choices, move on to sheet.
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
        )}
      </FormProvider>
    </CharacterSheetContext.Provider>
  );
}

export default CharacterSheet;
