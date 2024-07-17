import styles from "./CharacterSheet.module.css";
import CharacterInfo from "../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx";
import DescriptionBlock from "../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx";
import LeftSide from "../../components/character-sheet-components/left-side-components/LeftSide/LeftSide.tsx";
import RightSide from "../../components/character-sheet-components/right-side-components/RightSide/RightSide.tsx";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { getValue } from "../../utils/getValue.ts";
import { levelUpList } from "../../data/levelUpList.ts";
import FirstLevelMessage from "../../components/character-class-components/FirstLevelMessage/FirstLevelMessage.tsx";

// Should a reset be called as an onClick for the link itself? Something to look into.

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
  currentSP: number;
  setCurrentSP: Dispatch<SetStateAction<number>>;
  currentHP: number;
  setCurrentHP: Dispatch<SetStateAction<number>>;
  currentRP: number;
  setCurrentRP: Dispatch<SetStateAction<number>>;
  tempSP: number;
  setTempSP: Dispatch<SetStateAction<number>>;
  tempHP: number;
  setTempHP: Dispatch<SetStateAction<number>>;
  tempRP: number;
  setTempRP: Dispatch<SetStateAction<number>>;
  characterInfoObject: CharacterInfoObjectType;
  characterInfoDynamicObject: CharacterBasicInfoDynamicType;
}>({} as any);

function CharacterSheet() {
  const { characterID } = useParams();

  const [keyID, setKeyID] = useState<string>("");

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
  // const [characterInfoDynamicObject, setCharacterInfoDynamicObject] =
  //   useState<CharacterBasicInfoDynamicType>(
  //     getValue(`characterBasicInfoDynamic${characterID}`)
  //   );

  const characterInfoDynamicObject = useRef<CharacterBasicInfoDynamicType>(
    getValue(`characterBasicInfoDynamic${characterID}`)
  );

  useEffect(() => {
    setCharacterInfoObject(getValue(`characterBasicInfo${characterID}`));
    // setCharacterInfoDynamicObject(
    //   getValue(`characterBasicInfoDynamic${characterID}`)
    // );
    characterInfoDynamicObject.current = getValue(
      `characterBasicInfoDynamic${characterID}`
    );
    // reset({
    //   characterAlignment: characterInfoDynamicObject.current.characterAlignment,
    //   characterDiety: characterInfoDynamicObject.current.characterDiety,
    //   characterGender: characterInfoDynamicObject.current.characterGender,
    //   characterHomeWorld: characterInfoDynamicObject.current.characterHomeWorld,
    //   characterName: characterInfoDynamicObject.current.characterName,
    //   characterSize: characterInfoDynamicObject.current.characterSize,
    //   characterSpeed: characterInfoDynamicObject.current.characterSpeed,
    //   playerName: characterInfoDynamicObject.current.playerName,
    // });
  }, [characterID]);

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

  /*
    Stamina, Health, and Resolve
  */
  const [currentSP, setCurrentSP] = useState<number>(
    getValue(`CurrentSP${keyID}`)
  );
  const [currentHP, setCurrentHP] = useState<number>(
    getValue(`CurrentHP${keyID}`)
  );
  const [currentRP, setCurrentRP] = useState<number>(
    getValue(`CurrentRP${keyID}`)
  );
  const [tempSP, setTempSP] = useState<number>(getValue(`TempSP${keyID}`));
  const [tempHP, setTempHP] = useState<number>(getValue(`TempHP${keyID}`));
  const [tempRP, setTempRP] = useState<number>(getValue(`TempRP${keyID}`));

  const Component =
    levelUpList["1"][characterInfoObject.chClass]?.componentForClass;

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
        currentSP: currentSP,
        setCurrentSP: setCurrentSP,
        currentHP: currentHP,
        setCurrentHP: setCurrentHP,
        currentRP: currentRP,
        setCurrentRP: setCurrentRP,
        tempSP: tempSP,
        setTempSP: setTempSP,
        tempHP: tempHP,
        setTempHP: setTempHP,
        tempRP: tempRP,
        setTempRP: setTempRP,
        characterInfoObject: characterInfoObject,
        characterInfoDynamicObject: characterInfoDynamicObject.current,
      }}
    >
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
    </CharacterSheetContext.Provider>
  );
}

export default CharacterSheet;
