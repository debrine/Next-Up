import { setValue } from "../../utils/setValue";
import { getValue } from "../../utils/getValue";
import { useParams } from "react-router-dom";

function confirmLevelUpAttributes() {
  const { characterID } = useParams();
  console.log(characterID);

  const tempAbilityScores: TempAbilityScoreType = getValue("tempAbilityScores");
  console.log(tempAbilityScores);

  const strengthAbility: AbilityScoreType = getValue(`Strength${characterID}`);

  // setValue(`Strength${characterID}`, {
  //   aSName: "Strength",
  //   asBonus: strengthAbility.asBonus,
  //   asPenalty: strengthAbility.asPenalty,
  //   value: tempAbilityScores.strength,
  // });

  const dexterityAbility: AbilityScoreType = getValue(
    `Dexterity${characterID}`
  );

  // setValue(`Dexterity${characterID}`, {
  //   aSName: "Dexterity",
  //   asBonus: dexterityAbility.asBonus,
  //   asPenalty: dexterityAbility.asPenalty,
  //   value: tempAbilityScores.dexterity,
  // });

  const constitutionAbility: AbilityScoreType = getValue(
    `Constitution${characterID}`
  );

  // setValue(`Constitution${characterID}`, {
  //   aSName: "Constitution",
  //   asBonus: constitutionAbility.asBonus,
  //   asPenalty: constitutionAbility.asPenalty,
  //   value: tempAbilityScores.constitution,
  // });

  const intelligenceAbility: AbilityScoreType = getValue(
    `Intelligence${characterID}`
  );

  // setValue(`Intelligence${characterID}`, {
  //   aSName: "Intelligence",
  //   asBonus: intelligenceAbility.asBonus,
  //   asPenalty: intelligenceAbility.asPenalty,
  //   value: tempAbilityScores.intelligence,
  // });

  const wisdomAbility: AbilityScoreType = getValue(`Wisdom${characterID}`);

  // setValue(`Wisdom${characterID}`, {
  //   aSName: "Wisdom",
  //   asBonus: wisdomAbility.asBonus,
  //   asPenalty: wisdomAbility.asPenalty,
  //   value: tempAbilityScores.wisdom,
  // });

  const charismaAbility: AbilityScoreType = getValue(`Charisma${characterID}`);

  // setValue(`Charisma${characterID}`, {
  //   aSName: "Charisma",
  //   asBonus: charismaAbility.asBonus,
  //   asPenalty: charismaAbility.asPenalty,
  //   value: tempAbilityScores.charisma,
  // });

  console.log(
    strengthAbility,
    dexterityAbility,
    constitutionAbility,
    intelligenceAbility,
    wisdomAbility,
    charismaAbility
  );
}

export default confirmLevelUpAttributes;
