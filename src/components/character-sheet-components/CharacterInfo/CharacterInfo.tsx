import styles from "./CharacterInfo.module.css";
import SheetLabel from "../labels/SheetLabel.tsx";
import { useContext, useEffect } from "react";
import { CharacterSheetContext } from "../../../states/CharacterSheet/CharacterSheet.tsx";
import { getValue } from "../../../utils/getValue.ts";
import { useFormContext } from "react-hook-form";
import { setValue } from "../../../utils/setValue.ts";

function CharacterInfo() {
  const { keyID } = useContext(CharacterSheetContext);

  const { characterInfoObject, characterInfoDynamicObject } = useContext(
    CharacterSheetContext
  );
  //   const [characterInfoDynamicObject, setCharacterInfoDynamicObject] =
  //     useState<CharacterBasicInfoDynamicType>(
  //       getValue(`characterBasicInfoDynamic${keyID}`)
  //     );

  const { register, watch } = useFormContext();

  useEffect(() => {
    const subscription = watch((data) =>
      setValue(`characterBasicInfoDynamic${keyID}`, data)
    );
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
          defaultValue={characterInfoDynamicObject.characterName}
        />
      </div>

      <div className={styles.classRaceThemeDiv}>
        <div className={styles.infoInputDiv}>
          <input
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            value={`${characterInfoObject.chClass} ${getValue(
              `Level${keyID}`
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
            defaultValue={characterInfoDynamicObject.characterSize}
          />
          <div>SIZE</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterSpeed")}
            type="number"
            className={styles.infoInput}
            defaultValue={characterInfoDynamicObject.characterSpeed}
          />
          <div>SPEED</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterGender")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            defaultValue={characterInfoDynamicObject.characterGender}
          />
          <div>GENDER</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterHomeWorld")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            defaultValue={characterInfoDynamicObject.characterHomeWorld}
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
            defaultValue={characterInfoDynamicObject.characterAlignment}
          />
          <div>ALIGNMENT</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("characterDiety")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            defaultValue={characterInfoDynamicObject.characterDiety}
          />
          <div>DIETY</div>
        </div>
        <div className={styles.infoInputDiv}>
          <input
            {...register("playerName")}
            type="text"
            className={styles.infoInput}
            spellCheck={false}
            defaultValue={characterInfoDynamicObject.playerName}
          />
          <div>PLAYER</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterInfo;
