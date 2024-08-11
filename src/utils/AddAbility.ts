import { getValue } from './getValue.ts';
import { setValue } from './setValue.ts';

export function AddAbility(keyID: string, ability: AbilityListTypes) {
	const newArray = getValue(`Abilities${keyID}`);

	setValue(`Abilities${keyID}`, [...newArray, ability]);
}
