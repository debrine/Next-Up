import { useCallback, useEffect, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';
import { setValue } from '../utils/setValue';

export function useAbilityScores() {
	const { characterID } = useParams();

	const [strength, setStrength] = useState(getValue(`Strength${characterID}`));
	const [dexterity, setDexterity] = useState(
		getValue(`Dexterity${characterID}`)
	);
	const [constitution, setConstitution] = useState(
		getValue(`Constitution${characterID}`)
	);
	const [intelligence, setIntelligence] = useState(
		getValue(`Intelligence${characterID}`)
	);
	const [wisdom, setWisdom] = useState(getValue(`Wisdom${characterID}`));
	const [charisma, setCharisma] = useState(getValue(`Charisma${characterID}`));

	useEffect(() => {
		setStrength(getValue(`Strength${characterID}`));
		setDexterity(getValue(`Dexterity${characterID}`));
		setConstitution(getValue(`Constitution${characterID}`));
		setIntelligence(getValue(`Intelligence${characterID}`));
		setWisdom(getValue(`Wisdom${characterID}`));
		setCharisma(getValue(`Charisma${characterID}`));
	}, [characterID]);

	// update callbacks that update state + localStorage.
	// state update is important, as it will trigger a component
	// re-render
	const updateStrength = useCallback(
		(newStrength: AbilityScoreType) => {
			setStrength(newStrength);
			setValue(`Strength${characterID}`, newStrength);
		},
		[characterID]
	);

	const updateWisdom = useCallback(
		(newWisdom: AbilityScoreType) => {
			setWisdom(newWisdom);
			setValue(`Wisdom${characterID}`, newWisdom);
		},
		[characterID]
	);

	const updateConstitution = useCallback(
		(newConstitution: AbilityScoreType) => {
			setConstitution(newConstitution);
			setValue(`Constitution${characterID}`, newConstitution);
		},
		[characterID]
	);

	const updateCharisma = useCallback(
		(newCharisma: AbilityScoreType) => {
			setCharisma(newCharisma);
			setValue(`Charisma${characterID}`, newCharisma);
		},
		[characterID]
	);

	const updateIntelligence = useCallback(
		(newIntelligence: AbilityScoreType) => {
			setIntelligence(newIntelligence);
			setValue(`Intelligence${characterID}`, newIntelligence);
		},
		[characterID]
	);

	const updateDexterity = useCallback(
		(newDexterity: AbilityScoreType) => {
			setDexterity(newDexterity);
			setValue(`Dexterity${characterID}`, newDexterity);
		},
		[characterID]
	);

	return {
		strengthAbility: strength,
		dexterityAbility: dexterity,
		constitutionAbility: constitution,
		intelligenceAbility: intelligence,
		wisdomAbility: wisdom,
		charismaAbility: charisma,
		updateStrength,
		updateCharisma,
		updateConstitution,
		updateDexterity,
		updateWisdom,
		updateIntelligence,
	};
}
