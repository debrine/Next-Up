import { useParams } from "react-router-dom";
import SheetLabel from "../../labels/SheetLabel";
import styles from "./HealthAndResolveBlock.module.css";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { CharacterSheetContext } from "../../../../states/CharacterSheet/CharacterSheet";
import { classList } from "../../../../data/class-information/classList";
import { getValue } from "../../../../utils/getValue";
import { raceList } from "../../../../data/race-information/raceList";
import { setValue } from "../../../../utils/setValue";
import { GetModifier } from "../../../../utils/GetModifier";

function HealthAndResolveBlock() {
  const { characterID } = useParams();

  //   States need to be set within individual components, or it doesn't persist/update.
  const {
    characterInfoObject,
    // currentSP,
    // setCurrentSP,
    // currentHP,
    // setCurrentHP,
    // currentRP,
    // setCurrentRP,
    // tempSP,
    // setTempSP,
    // tempHP,
    // setTempHP,
    // tempRP,
    // setTempRP,
  } = useContext(CharacterSheetContext);

  const [currentSP, setCurrentSP] = useState<number>(
    getValue(`CurrentSP${characterID}`)
  );
  const [currentHP, setCurrentHP] = useState<number>(
    getValue(`CurrentHP${characterID}`)
  );
  const [currentRP, setCurrentRP] = useState<number>(
    getValue(`CurrentRP${characterID}`)
  );
  const [tempSP, setTempSP] = useState<number>(
    getValue(`TempSP${characterID}`)
  );
  const [tempHP, setTempHP] = useState<number>(
    getValue(`TempHP${characterID}`)
  );
  const [tempRP, setTempRP] = useState<number>(
    getValue(`TempRP${characterID}`)
  );

  //   Max SP is based off value given from class plus your constitution modifier, all multiplied by character level.
  const maxSP: number =
    (classList[characterInfoObject.chClass].classDefaults.hitStaminaPoints +
      GetModifier(getValue(`Constitution${characterID}`))) *
    getValue(`Level${characterID}`);

  //   Max HP is based off value given from class multiplied by character level and value give by race (only once).
  const maxHP: number =
    classList[characterInfoObject.chClass].classDefaults.hitStaminaPoints *
      getValue(`Level${characterID}`) +
    raceList[characterInfoObject.race].raceHP;

  // Max RP equal to half your character level (rounded down and minimum of 1) plus key ability score modifier.
  let mathFloorHalfLevel = 1;

  if (Math.floor(getValue(`Level${characterID}`) / 2) > 0) {
    mathFloorHalfLevel = Math.floor(getValue(`Level${characterID}`)) / 2;
  }

  const keyAbilityObject: AbilityScoreType = getValue(
    `${characterInfoObject.keyAbilityScoreSelected}${characterID}`
  );

  //   Add your Key Ability Score Modifier. If this results negative, then it will be set to a minimum of 1 where the value is called below.
  const maxRP: number = mathFloorHalfLevel + GetModifier(keyAbilityObject);

  const { register, watch } = useForm();

  useEffect(() => {
    const subscription = watch((data) => {
      if (data.currentSP <= maxSP) {
        setValue(`CurrentSP${characterID}`, Number(data.currentSP));
        setCurrentSP(Number(data.currentSP));
      }

      if (data.currentHP <= maxHP) {
        setValue(`CurrentHP${characterID}`, Number(data.currentHP));
        setCurrentHP(data.currentHP);
      }

      if (data.currentRP <= maxRP) {
        setValue(`CurrentRP${characterID}`, Number(data.currentRP));
        setCurrentRP(data.currentRP);
      }

      //   Temp Values
      setValue(`TempSP${characterID}`, Number(data.tempSP));
      setTempSP(data.tempSP);

      setValue(`TempHP${characterID}`, Number(data.tempHP));
      setTempHP(data.tempHP);

      setValue(`TempRP${characterID}`, Number(data.tempRP));
      setTempRP(data.tempRP);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.parentDiv}>
      <SheetLabel sheetLabelText="HEALTH AND RESOLVE" />
      <div className={styles.SHRValuesDiv}>
        <div className={styles.TotalCurrentDiv}>
          <div className={styles.head}>TOTAL</div>
          <div className={styles.head}>CURRENT</div>
          <div className={styles.head}>TEMP</div>
        </div>
        <div className={styles.labelValueDiv}>
          <div className={styles.label}>STAMINA POINTS</div>
          <input type="number" value={maxSP} readOnly />
          <input
            type="number"
            {...register("currentSP")}
            defaultValue={currentSP}
          />
          <input type="number" {...register("tempSP")} defaultValue={tempSP} />
        </div>
        <div className={styles.labelValueDiv}>
          <div className={styles.label}>HIT POINTS</div>
          <input type="number" value={maxHP} readOnly />
          <input
            type="number"
            {...register("currentHP")}
            defaultValue={currentHP}
          />
          <input type="number" {...register("tempHP")} defaultValue={tempHP} />
        </div>
        <div className={styles.labelValueDiv}>
          <div className={styles.label}>RESOLVE POINTS</div>
          <input type="number" value={maxRP > 0 ? maxRP : 1} readOnly />
          <input
            type="number"
            {...register("currentRP")}
            defaultValue={currentRP}
          />
          <input type="number" {...register("tempRP")} defaultValue={tempRP} />
        </div>
      </div>
    </div>
  );
}

export default HealthAndResolveBlock;
