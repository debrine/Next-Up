import SheetLabel from "../labels/SheetLabel";
import styles from "./AbilityScoreBlock.module.css";
import AbilityScoreType from "./AbilityScoreType/AbilityScoreType.tsx";
import { useForm } from "react-hook-form";
import { getValue } from "../../../utils/getValue.ts";
import { useContext, useEffect } from "react";
import { setValue } from "../../../utils/setValue.ts";
import { CharacterSheetContext } from "../../../states/CharacterSheet/CharacterSheet.tsx";
import { useParams } from "react-router-dom";

// Scores and modifiers not meant to be adjusted.

function AbilityScoreBlock() {
  // Won't update dynamically if pulled from the same useContext?????
  const { characterID } = useParams();

  const {
    strengthAbility,
    setStrengthAbility,
    dexterityAbility,
    setDexterityAbility,
    constitutionAbility,
    setConstitutionAbility,
    intelligenceAbility,
    setIntelligenceAbility,
    wisdomAbility,
    setWisdomAbility,
    charismaAbility,
    setCharismaAbility,
  } = useContext(CharacterSheetContext);

  const { register, watch } = useForm({
    defaultValues: {
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
    },
  });

  useEffect(() => {
    const subscription = watch((data) => {
      // Strength
      setValue(`Strength${characterID}`, {
        aSName: "Strength",
        asBonus: data.bonusStr,
        asPenalty: data.penaltyStr,
        value: strengthAbility.value,
      });
      setStrengthAbility(getValue(`Strength${characterID}`));

      // Dexterity
      setValue(`Dexterity${characterID}`, {
        aSName: "Dexterity",
        asBonus: data.bonusDex,
        asPenalty: data.penaltyDex,
        value: dexterityAbility.value,
      });
      setDexterityAbility(getValue(`Dexterity${characterID}`));

      // Constitution
      setValue(`Constitution${characterID}`, {
        aSName: "Constitution",
        asBonus: data.bonusCon,
        asPenalty: data.penaltyCon,
        value: constitutionAbility.value,
      });
      setConstitutionAbility(getValue(`Constitution${characterID}`));

      // Intelligence
      setValue(`Intelligence${characterID}`, {
        aSName: "Intelligence",
        asBonus: data.bonusInt,
        asPenalty: data.penaltyInt,
        value: intelligenceAbility.value,
      });
      setIntelligenceAbility(getValue(`Intelligence${characterID}`));

      // Wisdom
      setValue(`Wisdom${characterID}`, {
        aSName: "Wisdom",
        asBonus: data.bonusWis,
        asPenalty: data.penaltyWis,
        value: wisdomAbility.value,
      });
      setWisdomAbility(getValue(`Wisdom${characterID}`));

      // Charisma
      setValue(`Charisma${characterID}`, {
        aSName: "Charisma",
        asBonus: data.bonusCha,
        asPenalty: data.penaltyCha,
        value: charismaAbility.value,
      });
      setCharismaAbility(getValue(`Charisma${characterID}`));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.parentDiv}>
      <SheetLabel sheetLabelText="ABILITY SCORES" />
      <div className={styles.attributeBox}>
        <div className={styles.attributeColumn}>
          <AbilityScoreType attributeShort="STR" attributeLong="STRENGTH" />
          <AbilityScoreType attributeShort="DEX" attributeLong="DEXTERITY" />
          <AbilityScoreType attributeShort="CON" attributeLong="CONSTITUTION" />
          <AbilityScoreType attributeShort="INT" attributeLong="INTELLIGENCE" />
          <AbilityScoreType attributeShort="WIS" attributeLong="WISDOM" />
          <AbilityScoreType attributeShort="CHA" attributeLong="CHARISMA" />
        </div>
        <div className={styles.inputDiv}>
          <div className={styles.scoreModifierColumn}>
            <div className={styles.columnLabel}>SCORE</div>
            <input
              type="number"
              value={(
                Number(strengthAbility.value) +
                Number(strengthAbility.asBonus) -
                Number(strengthAbility.asPenalty)
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={(
                Number(dexterityAbility.value) +
                Number(dexterityAbility.asBonus) -
                Number(dexterityAbility.asPenalty)
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={(
                Number(constitutionAbility.value) +
                Number(constitutionAbility.asBonus) -
                Number(constitutionAbility.asPenalty)
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={(
                Number(intelligenceAbility.value) +
                Number(intelligenceAbility.asBonus) -
                Number(intelligenceAbility.asPenalty)
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={(
                Number(wisdomAbility.value) +
                Number(wisdomAbility.asBonus) -
                Number(wisdomAbility.asPenalty)
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={(
                Number(charismaAbility.value) +
                Number(charismaAbility.asBonus) -
                Number(charismaAbility.asPenalty)
              ).toString()}
              readOnly
            />
          </div>
          <div className={styles.scoreModifierColumn}>
            <div className={styles.columnLabel}>MODIFIER</div>
            <input
              type="number"
              value={Math.floor(
                (Number(strengthAbility.value) +
                  Number(strengthAbility.asBonus) -
                  Number(strengthAbility.asPenalty)) /
                  2 -
                  5
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={Math.floor(
                (Number(dexterityAbility.value) +
                  Number(dexterityAbility.asBonus) -
                  Number(dexterityAbility.asPenalty)) /
                  2 -
                  5
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={Math.floor(
                (Number(constitutionAbility.value) +
                  Number(constitutionAbility.asBonus) -
                  Number(constitutionAbility.asPenalty)) /
                  2 -
                  5
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={Math.floor(
                (Number(intelligenceAbility.value) +
                  Number(intelligenceAbility.asBonus) -
                  Number(intelligenceAbility.asPenalty)) /
                  2 -
                  5
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={Math.floor(
                (Number(wisdomAbility.value) +
                  Number(wisdomAbility.asBonus) -
                  Number(wisdomAbility.asPenalty)) /
                  2 -
                  5
              ).toString()}
              readOnly
            />
            <input
              type="number"
              value={Math.floor(
                (Number(charismaAbility.value) +
                  Number(charismaAbility.asBonus) -
                  Number(charismaAbility.asPenalty)) /
                  2 -
                  5
              ).toString()}
              readOnly
            />
          </div>
          <div className={styles.penDrainColumn}>
            <div className={styles.columnLabel}>BONUS</div>
            {/* <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" /> */}
            <input type="number" {...register("bonusStr")} />
            <input type="number" {...register("bonusDex")} />
            <input type="number" {...register("bonusCon")} />
            <input type="number" {...register("bonusInt")} />
            <input type="number" {...register("bonusWis")} />
            <input type="number" {...register("bonusCha")} />
          </div>
          <div className={styles.penDrainColumn}>
            <div className={styles.columnLabel}>PENALTY</div>
            {/* <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" />
            <input type="number" /> */}
            <input type="number" {...register("penaltyStr")} />
            <input type="number" {...register("penaltyDex")} />
            <input type="number" {...register("penaltyCon")} />
            <input type="number" {...register("penaltyInt")} />
            <input type="number" {...register("penaltyWis")} />
            <input type="number" {...register("penaltyCha")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbilityScoreBlock;
