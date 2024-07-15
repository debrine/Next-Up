import { setValue } from "../../utils/setValue";
import { getValue } from "../../utils/getValue";
import { useParams } from "react-router-dom";

function confirmLevelUpAttributes(keyID: string) {
  console.log(`In Function`);

  const tempAbilityScores: TempAbilityScoreType = getValue("tempAbilityScores");
  console.log(`In function ${tempAbilityScores}`);

  const strengthAbility: AbilityScoreType = getValue(`Strength${keyID}`);

  setValue(`Strength${keyID}`, {
    aSName: "Strength",
    asBonus: strengthAbility.asBonus,
    asPenalty: strengthAbility.asPenalty,
    value: tempAbilityScores.strength,
  });

  const dexterityAbility: AbilityScoreType = getValue(`Dexterity${keyID}`);

  setValue(`Dexterity${keyID}`, {
    aSName: "Dexterity",
    asBonus: dexterityAbility.asBonus,
    asPenalty: dexterityAbility.asPenalty,
    value: tempAbilityScores.dexterity,
  });

  const constitutionAbility: AbilityScoreType = getValue(
    `Constitution${keyID}`
  );

  setValue(`Constitution${keyID}`, {
    aSName: "Constitution",
    asBonus: constitutionAbility.asBonus,
    asPenalty: constitutionAbility.asPenalty,
    value: tempAbilityScores.constitution,
  });

  const intelligenceAbility: AbilityScoreType = getValue(
    `Intelligence${keyID}`
  );

  setValue(`Intelligence${keyID}`, {
    aSName: "Intelligence",
    asBonus: intelligenceAbility.asBonus,
    asPenalty: intelligenceAbility.asPenalty,
    value: tempAbilityScores.intelligence,
  });

  const wisdomAbility: AbilityScoreType = getValue(`Wisdom${keyID}`);

  setValue(`Wisdom${keyID}`, {
    aSName: "Wisdom",
    asBonus: wisdomAbility.asBonus,
    asPenalty: wisdomAbility.asPenalty,
    value: tempAbilityScores.wisdom,
  });

  const charismaAbility: AbilityScoreType = getValue(`Charisma${keyID}`);

  setValue(`Charisma${keyID}`, {
    aSName: "Charisma",
    asBonus: charismaAbility.asBonus,
    asPenalty: charismaAbility.asPenalty,
    value: tempAbilityScores.charisma,
  });

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
