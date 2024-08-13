import { useCallback, useEffect, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';
import { setValue } from '../utils/setValue';

export function useAbilities() {
	const { characterID } = useParams();

	const [abilitiesArray, setAbilitiesArray] = useState<AbilityListTypes[]>(
		getValue(`Abilities${characterID}`)
	);

	useEffect(() => {
		setAbilitiesArray(getValue(`Abilities${characterID}`));
	}, [characterID]);

	const updateAbilityArray = useCallback(
		(newAbilityArray: AbilityListTypes[]) => {
			setAbilitiesArray(newAbilityArray);
			setValue(`Abilities${characterID}`, newAbilityArray);
		},
		[characterID]
	);

	function handleAddAbility() {
		updateAbilityArray([
			...abilitiesArray,
			{
				abilityName: '',
				abilityDescription: '',
				abilitySource: '',
				actionType: [''],
				usesResolve: 0,
			},
		]);
	}

	function handleDeleteAbility(index: number) {
		const filteredArray = abilitiesArray.filter(
			(ability) => abilitiesArray.indexOf(ability) != index
		);
		updateAbilityArray(filteredArray);
	}

	return {
		abilitiesArray,
		updateAbilityArray,
		handleAddAbility,
		handleDeleteAbility,
	};
}
