import { useContext, useEffect, useState } from "react";
import SheetLabel from "../../labels/SheetLabel";
import styles from "./InitiativeBlock.module.css";
import { CharacterSheetContext } from "../../../../states/CharacterSheet/CharacterSheet";
import { getValue } from "../../../../utils/getValue";
import { useForm } from "react-hook-form";
import { setValue } from "../../../../utils/setValue";
import { useParams } from "react-router-dom";
import { GetModifier } from "../../../../utils/GetModifier";

function InitiativeBlock() {
  const { dexterityAbility } = useContext(CharacterSheetContext);

  const { characterID } = useParams();

  const [initMisc, setInitMisc] = useState<number>(
    getValue(`InitiativeMiscModifier${characterID}`)
  );

  const { register, watch } = useForm();

  useEffect(() => {
    const subscription = watch((data) => {
      setValue(
        `InitiativeMiscModifier${characterID}`,
        Number(data.InitiativeMiscModifier)
      );
      setInitMisc(getValue(`InitiativeMiscModifier${characterID}`));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.parentDiv}>
      <div className={styles.leftSide}>
        <SheetLabel sheetLabelText="INITIATIVE" />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.initiativeDiv}>
          <div className={styles.initHead}>TOTAL</div>
          <input
            type="number"
            value={GetModifier(dexterityAbility) + initMisc}
            readOnly
          />
        </div>
        <div className={styles.plusEquals}> = </div>
        <div className={styles.initiativeDiv}>
          <div className={styles.initHead}>DEX MODIFIER</div>
          <input
            type="number"
            value={GetModifier(dexterityAbility).toString()}
            readOnly
          />
        </div>
        <div className={styles.plusEquals}> + </div>
        <div className={styles.initiativeDiv}>
          <div className={styles.initHead}>MISC MODIFIER</div>
          <input
            type="number"
            {...register(`InitiativeMiscModifier`)}
            defaultValue={initMisc}
          />
        </div>
      </div>
    </div>
  );
}

export default InitiativeBlock;
