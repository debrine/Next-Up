import { useContext, useEffect, useState } from "react";
import styles from "./FirstLevelMessage.module.css";
import { CharacterSheetContext } from "../../../states/CharacterSheet/CharacterSheet";
import { useForm } from "react-hook-form";
import { getValue } from "../../../utils/getValue";
import { setValue } from "../../../utils/setValue";

function FirstLevelMessage() {
  const {
    strengthAbility,
    dexterityAbility,
    constitutionAbility,
    intelligenceAbility,
    wisdomAbility,
    charismaAbility,
  } = useContext(CharacterSheetContext);

  // //   Temp attribute information for confirming level-up changes.
  // setValue("tempAbilityScores", {
  //   strength: strengthAbility.value,
  //   dexterity: dexterityAbility.value,
  //   constitution: constitutionAbility.value,
  //   intelligence: intelligenceAbility.value,
  //   wisdom: wisdomAbility.value,
  //   charisma: charismaAbility.value,
  // });

  const [tempAbilityScores, setTempAbilityScores] =
    useState<TempAbilityScoreType>(getValue("tempAbilityScores"));

  // const { register, watch } = useForm({
  //   defaultValues: tempAbilityScores,
  // });

  // useEffect(() => {
  //   const subscription = watch((data) => {
  //     setValue("tempAbilityScores", {
  //       strength: Number(data.strength),
  //       dexterity: Number(data.dexterity),
  //       constitution: Number(data.constitution),
  //       intelligence: Number(data.intelligence),
  //       wisdom: Number(data.wisdom),
  //       charisma: Number(data.charisma),
  //     });
  //   });
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  useEffect(() => {
    setValue("tempAbilityScores", tempAbilityScores);
  }, [tempAbilityScores]);

  return (
    <div className={styles.parentDiv}>
      <div className={styles.attributesHeading}>
        Set your starting Attribute vlues. The adjustments from your race and
        theme have already been applied.
      </div>
      <div className={styles.attributesDiv}>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>STRENGTH</div>
          <input type="number" value={strengthAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input
            // {...register("strength")}
            type="number"
            defaultValue={tempAbilityScores.strength}
            onChange={(e) => {
              setTempAbilityScores({
                strength: Number(e.target.value),
                dexterity: tempAbilityScores.dexterity,
                constitution: tempAbilityScores.constitution,
                intelligence: tempAbilityScores.intelligence,
                wisdom: tempAbilityScores.wisdom,
                charisma: tempAbilityScores.charisma,
              });
            }}
          />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>DEXTERITY</div>
          <input type="number" value={dexterityAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input
            // {...register("dexterity")}
            type="number"
            defaultValue={tempAbilityScores.dexterity}
          />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>CONSTITUTION</div>
          <input type="number" value={constitutionAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input
            // {...register("constitution")}
            type="number"
            defaultValue={tempAbilityScores.constitution}
          />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>INTELLIGENCE</div>
          <input type="number" value={intelligenceAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input
            // {...register("intelligence")}
            type="number"
            defaultValue={tempAbilityScores.intelligence}
          />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>WISDOM</div>
          <input type="number" value={wisdomAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input
            // {...register("wisdom")}
            type="number"
            defaultValue={tempAbilityScores.wisdom}
          />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>CHARISMA</div>
          <input type="number" value={charismaAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input
            // {...register("charisma")}
            type="number"
            defaultValue={tempAbilityScores.charisma}
          />
        </div>
      </div>
    </div>
  );
}

export default FirstLevelMessage;
