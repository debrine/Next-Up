import { getValue } from './getValue';
import { setValue } from './setValue';

export function DeleteAbility(keyID: string, ability: AbilityListTypes) {
	const newArray: AbilityListTypes[] = getValue(`Abilities${keyID}`);

	const filteredArray = newArray.filter((filteredAbility: AbilityListTypes) => {
		filteredAbility.abilityName != ability.abilityName;
	});

	setValue(`Abilities${keyID}`, [...filteredArray]);
}
