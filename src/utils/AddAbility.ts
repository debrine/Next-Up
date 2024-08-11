import { Dispatch, SetStateAction } from 'react';
import { getValue } from './getValue.ts';
import { setValue } from './setValue.ts';

export function AddAbility(
	keyID: string | undefined,
	setNewArray: Dispatch<SetStateAction<AbilityListTypes[]>>
) {
	const newArray = getValue(`Abilities${keyID}`);

	const blankAbility: AbilityListTypes = {
		abilityName: '',
		abilityDescription: '',
		abilitySource: '',
		actionType: [''],
		usesResolve: 0,
	};

	setValue(`Abilities${keyID}`, [...newArray, blankAbility]);

	setNewArray(getValue(`Abilities${keyID}`));
}
