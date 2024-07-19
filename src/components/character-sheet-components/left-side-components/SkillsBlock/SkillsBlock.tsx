import { useContext, useEffect } from "react";
import styles from "./SkillsBlock.module.css";
import { CharacterSheetContext } from "../../../../states/CharacterSheet/CharacterSheet";
import { skillList } from "../../../../data/skillList";
import { getValue } from "../../../../utils/getValue";
import { useParams } from "react-router-dom";
import { setValue } from "../../../../utils/setValue";
import SheetLabel from "../../labels/SheetLabel";
import { GetModifier } from "../../../../utils/GetModifier";
import { classList } from "../../../../data/class-information/classList";
import { useForm } from "react-hook-form";

function SkillsBlock() {
  const { characterID } = useParams();

  const { characterInfoObject } = useContext(CharacterSheetContext);

  const skillArray: string[] = Object.keys(skillList).map((key: string) => {
    return key;
  });

  let tempSkill: SkillListType = {
    skillName: "",
    isClassSkill: false,
    classSkillBonus: 0,
    trainingRequired: false,
    value: 0,
    insightBonusToValue: 0,
    skillFocus: false,
    racialBonusToValue: 0,
    ranks: 0,
    insightBonusToRank: 0,
    operativeSpecializationSkill: false,
    armorCheckPenalty: false,
    attributeAffecting: "",
  };

  // Function to edit Skill Ranks
  function editSkill(rank: number, attributeModBonus: number, skill: string) {
    tempSkill = getValue(`${skill}${characterID}`);
    tempSkill.ranks = rank;
    tempSkill.value =
      rank +
      attributeModBonus +
      getValue(`${skill}${characterID}`).classSkillBonus +
      getValue(`${skill}${characterID}`).insightBonusToValue +
      getValue(`${skill}${characterID}`).racialBonusToValue;
    setValue(`${skill}${characterID}`, tempSkill);
  }

  // Function to add or remove the 3 to class skills
  function addClassSkillBonus(skill: string) {
    tempSkill = getValue(`${skill}${characterID}`);
    if (tempSkill.isClassSkill && tempSkill.ranks > 0) {
      tempSkill.classSkillBonus = 3;
    } else {
      tempSkill.classSkillBonus = 0;
    }
    setValue(`${skill}${characterID}`, tempSkill);
  }

  function handleClassSkill(skill: string) {
    tempSkill = getValue(`${skill}${characterID}`);
    tempSkill.isClassSkill = !tempSkill.isClassSkill;
    if (tempSkill.isClassSkill && tempSkill.ranks > 0) {
      tempSkill.classSkillBonus = 3;
    } else {
      tempSkill.classSkillBonus = 0;
    }
    setValue(`${skill}${characterID}`, tempSkill);
  }

  //   Turn this into watch individual registers for ranks only to see if it will update
  const { register, watch } = useForm();

  useEffect(() => {
    const subscription = watch((data) => {
      skillArray.forEach((skill) => {
        editSkill(
          Number(data[`${skill}Ranks`]),
          Number(data[`${skill}ModifierBonus`]),
          skill
        );
      });
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.parentDiv}>
      <div className={styles.skillsHead}>
        <SheetLabel sheetLabelText="SKILLS" />
        <div className={styles.skillsHeadRight}>
          <div className={styles.skillsHeadRightTextDiv}>
            <div className={styles.skillsHeadRightText}>SKILL RANKS</div>
            <div className={styles.skillsHeadRightText}>PER LEVEL</div>
          </div>
          <div className={styles.skillsHeadRightRanks}>
            <input
              type="number"
              readOnly
              value={
                (GetModifier(getValue(`Intelligence${characterID}`)) +
                  classList[characterInfoObject.chClass].classDefaults
                    .skillPointsPerLevel) *
                Number(getValue(`Level${characterID}`))
              }
            />
          </div>
        </div>
      </div>
      {skillArray.map((skill) => {
        return (
          <div className={styles.individualSkillDiv} key={skill}>
            <div className={styles.skillLeftSide}>
              <div className={styles.classAndName}>
                {getValue(`${skill}${characterID}`).isClassSkill ? (
                  <input
                    type="checkbox"
                    {...register(`${skill}Checkbox`)}
                    defaultChecked
                    onClick={() => handleClassSkill(skill)}
                  />
                ) : (
                  <input
                    type="checkbox"
                    onClick={() => handleClassSkill(skill)}
                  />
                )}{" "}
                {skill}
              </div>

              {skill === "Profession" && (
                <div className={styles.professionName}>
                  <input type="text" />
                </div>
              )}
            </div>
            <div className={styles.skillRightSide}>
              {/* Total */}
              <input
                type="number"
                {...register(`${skill}Total`)}
                defaultValue={getValue(`${skill}${characterID}`).value}
                readOnly
              />{" "}
              ={/* Ranks */}
              <input
                type="number"
                {...register(`${skill}Ranks`)}
                defaultValue={getValue(`${skill}${characterID}`).ranks}
              />{" "}
              +{/* Class Bonus */}
              <input
                type="number"
                {...register(`${skill}ClassBonus`)}
                defaultValue={
                  getValue(`${skill}${characterID}`).classSkillBonus
                }
                readOnly
              />{" "}
              +{/* Ability Mod */}
              <input
                type="number"
                {...register(`${skill}ModifierBonus`)}
                defaultValue={GetModifier(
                  getValue(
                    `${skillList[skill].attributeAffecting}${characterID}`
                  )
                )}
                readOnly
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsBlock;
