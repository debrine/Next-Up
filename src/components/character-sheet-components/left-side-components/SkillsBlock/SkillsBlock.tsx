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

  function editSkillRank(rank: number, skill: string) {
    tempSkill = getValue(`${skill}${characterID}`);
    tempSkill.ranks = rank;
    setValue(`${skill}${characterID}`, tempSkill);
  }

  function handleClassSkill(skill: string) {
    tempSkill = getValue(`${skill}${characterID}`);
    tempSkill.isClassSkill = !tempSkill.isClassSkill;
    setValue(`${skill}${characterID}`, tempSkill);
  }

  //   Turn this into watch individual registers for ranks only to see if it will update
  const { register, watch } = useForm();

  useEffect(() => {
    const subscription = watch((data) => {
      Object.keys(data).forEach((key) => {
        tempSkill = getValue(`${key}${characterID}`);
        tempSkill;
      });
    });
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
                (GetModifier(
                  getValue(`Intelligence${characterID}`).value,
                  0,
                  0
                ) +
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
              <input type="number" readOnly /> ={/* Ranks */}
              <input type="number" /> +{/* Class Bonus */}
              <input type="number" /> +{/* Ability Mod */}
              <input type="number" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsBlock;
