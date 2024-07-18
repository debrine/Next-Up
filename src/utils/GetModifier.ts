export function GetModifier(attribute: AbilityScoreType) {
  return Math.floor(
    (attribute.value + attribute.asBonus - attribute.asPenalty) / 2 - 5
  );
}
