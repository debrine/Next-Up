import { Dispatch, SetStateAction } from 'react';
import { getValue } from './getValue';
import { setValue } from './setValue';

export function DeleteAbilityFromSheet(
	index: number,
	keyID: string | undefined,
	setNewArray: Dispatch<SetStateAction<AbilityListTypes[]>>
) {
	const newArray: AbilityListTypes[] = getValue(`Abilities${keyID}`);

	const filteredArray = newArray.filter(
		(ability) => newArray.indexOf(ability) != index
	);
	console.log(index);
	console.log(newArray);
	console.log(filteredArray);

	setValue(`Abilities${keyID}`, [...filteredArray]);
	setNewArray(getValue(`Abilities${keyID}`));
}
