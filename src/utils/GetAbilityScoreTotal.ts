export function GetAbilityScoreTotal(ability: AbilityScoreType) {
	return (
		Number(ability.value) + Number(ability.asBonus) - Number(ability.asPenalty)
	);
}
