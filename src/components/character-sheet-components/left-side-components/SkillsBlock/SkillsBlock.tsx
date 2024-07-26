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

  const { characterInfoObject, SkillBlockStatesList } = useContext(
    CharacterSheetContext
  );

  const { register, watch } = useForm();

  useEffect(() => {
    const subscription = watch((data) => {
      // Set the values as they change.
      skillArray.forEach((skill) => {
        // If it's a Specialization Skill, don't add the rank. It's not supposed to count to the total ranks per level, and always equal to the level of the character.
        if (
          SkillBlockStatesList[skill].skillState.operativeSpecializationSkill
        ) {
          editSkill(0, Number(data[`${skill}ModifierBonus`]), skill);
        } else {
          editSkill(
            Number(data[`${skill}Ranks`]),
            Number(data[`${skill}ModifierBonus`]),
            skill
          );
        }
      });
      setValue(`ProfessionName${characterID}`, data.ProfessionName);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const skillArray: string[] = Object.keys(skillList).map((key: string) => {
    return key;
  });

  // Skill ranks used
  function getUsedRanks() {
    let tempRanks: number = 0;
    skillArray.forEach((skill) => {
      tempRanks += getValue(`${skill}${characterID}`).ranks;
    });

    return tempRanks;
  }

  // Max Skill ranks (Don't use GetModifier, as bonuses and Penalties do not affect skill ranks per level.)
  function getMaxRanks() {
    return (
      (Math.floor(getValue(`Intelligence${characterID}`).value / 2 - 5) +
        classList[characterInfoObject.chClass].classDefaults
          .skillPointsPerLevel) *
      Number(getValue(`Level${characterID}`))
    );
  }

  // Function to edit Skill Ranks
  function editSkill(rank: number, attributeModBonus: number, skill: string) {
    let tempSkill: SkillListType = SkillBlockStatesList[skill].skillState;
    tempSkill.ranks = rank;
    tempSkill.value =
      rank +
      attributeModBonus +
      SkillBlockStatesList[skill].skillState.classSkillBonus +
      SkillBlockStatesList[skill].skillState.insightBonusToValue +
      SkillBlockStatesList[skill].skillState.racialBonusToValue;
    SkillBlockStatesList[skill].setSkill(tempSkill);
    setValue(`${skill}${characterID}`, tempSkill);
  }

  // function handleRankChanges(e: ChangeEvent<HTMLInputElement>, skill: string) {
  //   tempSkill = SkillBlockStatesList[skill].skillState;
  //   tempSkill.ranks = Number(e.target.value);
  //   setValue(`${skill}${characterID}`, tempSkill);
  // }

  function handleClassSkill(skill: string) {
    let tempSkill: SkillListType = SkillBlockStatesList[skill].skillState;
    tempSkill.isClassSkill = !tempSkill.isClassSkill;
    if (tempSkill.isClassSkill && tempSkill.ranks > 0) {
      tempSkill.classSkillBonus = 3;
    } else {
      tempSkill.classSkillBonus = 0;
    }
    SkillBlockStatesList[skill].setSkill(tempSkill);
    setValue(`${skill}${characterID}`, tempSkill);
  }

  useEffect(() => {
    console.log(SkillBlockStatesList[`Acrobatics`].skillState);
  }, [SkillBlockStatesList[`Acrobatics`].skillState]);

  return (
    <div className={styles.parentDiv}>
      <div className={styles.skillsHead}>
        <SheetLabel sheetLabelText="SKILLS" />
        <div className={styles.skillsHeadRight}>
          <div className={styles.skillsHeadRightTextDiv}>
            <div className={styles.skillsHeadRightText}>SKILL RANKS</div>
            <div className={styles.skillsHeadRightText}>USED</div>
          </div>
          <div className={styles.skillsHeadRightRanks}>
            <input type="number" readOnly value={getUsedRanks()} />
          </div>
          <div className={styles.skillsHeadRightTextDiv}>
            <div className={styles.skillsHeadRightText}>SKILL RANKS</div>
            <div className={styles.skillsHeadRightText}>PER LEVEL</div>
          </div>
          <div className={styles.skillsHeadRightRanks}>
            <input type="number" readOnly value={getMaxRanks()} />
          </div>
        </div>
      </div>
      <div className={styles.skillInputLabels}>
        <div className={styles.IndividualSkillInputLabel}>TOTAL</div>
        <div className={styles.IndividualSkillInputLabel}>RANKS</div>
        <div className={styles.IndividualSkillInputLabel}>CLASS BONUS</div>
        <div className={styles.IndividualSkillInputLabel}>ABILITY MOD</div>
      </div>
      {skillArray.map((skill) => {
        return (
          <div className={styles.individualSkillDiv} key={skill}>
            <div className={styles.skillLeftSide}>
              <div className={styles.classAndName}>
                {SkillBlockStatesList[skill].skillState.isClassSkill ? (
                  <input
                    type="checkbox"
                    {...register(`${skill}Checkbox`)}
                    defaultChecked={
                      SkillBlockStatesList[skill].skillState.isClassSkill
                        ? true
                        : false
                    }
                    onClick={() => handleClassSkill(skill)}
                  />
                ) : (
                  <input
                    type="checkbox"
                    onClick={() => handleClassSkill(skill)}
                  />
                )}{" "}
                {skill.toUpperCase()}
              </div>

              {skill === "Profession" && (
                <div className={styles.professionName}>
                  <input
                    type="text"
                    {...register(`ProfessionName`)}
                    defaultValue={getValue(`ProfessionName${characterID}`)}
                  />
                </div>
              )}
            </div>
            <div className={styles.skillRightSide}>
              {/* Total */}
              <input
                type="number"
                {...register(`${skill}Total`)}
                value={SkillBlockStatesList[skill].skillState.value}
                readOnly
              />{" "}
              ={/* Ranks */}
              <input
                type="number"
                {...register(`${skill}Ranks`)}
                value={
                  SkillBlockStatesList[skill].skillState
                    .operativeSpecializationSkill
                    ? getValue(`Level${characterID}`)
                    : SkillBlockStatesList[skill].skillState.ranks
                }
                readOnly={
                  SkillBlockStatesList[skill].skillState
                    .operativeSpecializationSkill
                    ? true
                    : false
                }
                // defaultValue={SkillBlockStatesList[skill].skillState.ranks}
                max={getValue(`Level${characterID}`)}
                min={0}
              />{" "}
              +{/* Class Bonus */}
              <input
                type="number"
                {...register(`${skill}ClassBonus`)}
                value={SkillBlockStatesList[skill].skillState.classSkillBonus}
                readOnly
              />{" "}
              +{/* Ability Mod */}
              <input
                type="number"
                {...register(`${skill}ModifierBonus`)}
                value={GetModifier(
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
