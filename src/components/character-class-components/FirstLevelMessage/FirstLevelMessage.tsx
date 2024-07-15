import { useContext, useEffect, useState } from "react";
import styles from "./FirstLevelMessage.module.css";
import { CharacterSheetContext } from "../../../states/CharacterSheet/CharacterSheet";
import { useForm } from "react-hook-form";
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

  const [tempAbilityScores] = useState<TempAbilityScoreType>({
    strength: strengthAbility.value,
    dexterity: dexterityAbility.value,
    constitution: constitutionAbility.value,
    intelligence: intelligenceAbility.value,
    wisdom: wisdomAbility.value,
    charisma: charismaAbility.value,
  });

  const { register, watch } = useForm({
    defaultValues: tempAbilityScores,
  });

  useEffect(() => {
    const subscription = watch((data) => {
      setValue("tempAbilityScores", {
        strength: Number(data.strength),
        dexterity: Number(data.dexterity),
        constitution: Number(data.constitution),
        intelligence: Number(data.intelligence),
        wisdom: Number(data.wisdom),
        charisma: Number(data.charisma),
      });
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    setValue("tempAbilityScores", tempAbilityScores);
  }, [tempAbilityScores]);

  return (
    <div className={styles.parentDiv}>
      <div className={styles.attributesHeading}>
        Set your starting Attribute vlues. The adjustments from your race and
        theme have already been applied. You will not be able to adjust the base
        value of your Attributes once your character is made from your sheet.
        You can still apply bonuses and penalties as normal.
      </div>
      <div className={styles.attributesDiv}>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>STRENGTH</div>
          <input type="number" value={strengthAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input
            {...register("strength")}
            type="number"
            defaultValue={tempAbilityScores.strength}
          />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>DEXTERITY</div>
          <input type="number" value={dexterityAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input {...register("dexterity")} type="number" />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>CONSTITUTION</div>
          <input type="number" value={constitutionAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input {...register("constitution")} type="number" />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>INTELLIGENCE</div>
          <input type="number" value={intelligenceAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input {...register("intelligence")} type="number" />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>WISDOM</div>
          <input type="number" value={wisdomAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input {...register("wisdom")} type="number" />
        </div>
        <div className={styles.singleAttributeDivParent}>
          <div className={styles.attributeName}>CHARISMA</div>
          <input type="number" value={charismaAbility.value} readOnly />
          <div className={styles.rightArrow}>&rarr;</div>
          <input {...register("charisma")} type="number" />
        </div>
      </div>
    </div>
  );
}

export default FirstLevelMessage;
