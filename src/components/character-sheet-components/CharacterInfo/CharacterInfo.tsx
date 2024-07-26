import styles from "./CharacterInfo.module.css";
import SheetLabel from "../labels/SheetLabel.tsx";
import { useContext, useEffect, useState } from "react";
import { CharacterSheetContext } from "../../../states/CharacterSheet/CharacterSheet.tsx";
import { getValue } from "../../../utils/getValue.ts";
import { useForm } from "react-hook-form";
import { setValue } from "../../../utils/setValue.ts";
import { useParams } from "react-router-dom";

function CharacterInfo() {
  const { characterID } = useParams();

  const { characterInfoObject } = useContext(CharacterSheetContext);

  const [characterInfoDynamicObject, setCharacterInfoDynamicObject] =
    useState<CharacterBasicInfoDynamicType>(
      getValue(`characterBasicInfoDynamic${characterID}`)
    );

  const { register, watch } = useForm({});

  useEffect(() => {
    setCharacterInfoDynamicObject(
      getValue(`characterBasicInfoDynamic${characterID}`)
    );
  }, [characterID]);

  useEffect(() => {
    const subscription = watch((data) => {
      setCharacterInfoDynamicObject({
        characterAlignment: data.characterAlignment,
        characterDiety: data.characterDiety,
        characterGender: data.characterGender,
        characterHomeWorld: data.characterHomeWorld,
        characterName: data.characterName,
        characterSize: data.characterSize,
        characterSpeed: data.characterSpeed,
        playerName: data.playerName,
      });
      setValue(`characterBasicInfoDynamic${characterID}`, data);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.parentDiv}>
      <div className={styles.characterNameDiv}>
        <SheetLabel sheetLabelText="CHARACTER NAME" />
        <input
          {...register("characterName")}
          type="text"
          className={styles.characterNameBar}
          spellCheck={false}
          value={characterInfoDynamicObject.characterName}
          // defaultValue={characterInfoDynamicObject.characterName}
        />
      </div>

      <div className={styles.classRaceThemeDiv}>
        <div className={styles.infoInputDiv}>
          <input
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={`${characterInfoObject.chClass} ${getValue(
              `Level${characterID}`
            )}`}
            readOnly
          />
          <div>CLASS/LEVEL</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={characterInfoObject.race}
            readOnly
          />
          <div>RACE</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={characterInfoObject.theme}
            readOnly
          />
          <div>THEME</div>
        </div>
      </div>

      <div className={styles.sizeSpeedGenderHomeDiv}>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterSize")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={characterInfoDynamicObject.characterSize}
          />
          <div>SIZE</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterSpeed")}
            type="number"
            className={styles.infoInput}
            value={characterInfoDynamicObject.characterSpeed}
          />
          <div>SPEED</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterGender")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={characterInfoDynamicObject.characterGender}
          />
          <div>GENDER</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterHomeWorld")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={characterInfoDynamicObject.characterHomeWorld}
          />
          <div>HOME WORLD</div>
        </div>
      </div>

      <div className={styles.alignmentDietyPlayerDiv}>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterAlignment")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={characterInfoDynamicObject.characterAlignment}
          />
          <div>ALIGNMENT</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterDiety")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={characterInfoDynamicObject.characterDiety}
          />
          <div>DIETY</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("playerName")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={characterInfoDynamicObject.playerName}
          />
          <div>PLAYER</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterInfo;
