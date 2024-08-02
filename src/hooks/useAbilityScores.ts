import { useEffect, useMemo, useRef, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';
import { useCurrentID } from '../utils/useCurrentID';
import { GetAbilityScoreTotal } from '../utils/GetAbilityScoreTotal';
import { GetModifier } from '../utils/GetModifier';

export function useAbilityScores() {
	const { characterID } = useParams();
	const { currentID } = useCurrentID();

	let strengthAbility: AbilityScoreType = useMemo(
		() => getValue(`Strength${currentID}`),
		[currentID]
	);

	// Dexterity
	const dexterityAbility = useRef<AbilityScoreType>(
		getValue(`Dexterity${currentID}`)
	);

	// Constitution
	const [constitutionAbility, setConstitutionAbility] =
		useState<AbilityScoreType>(getValue(`Constitution${currentID}`));

	// Intelligence
	const [intelligenceAbility, setIntelligenceAbility] =
		useState<AbilityScoreType>(getValue(`Intelligence${currentID}`));

	// Wisdom
	const [wisdomAbility, setWisdomAbility] = useState<AbilityScoreType>(
		getValue(`Wisdom${currentID}`)
	);

	// Charisma
	const [charismaAbility, setCharismaAbility] = useState<AbilityScoreType>(
		getValue(`Charisma${currentID}`)
	);

	// Must be changed both in and out of hook. In the CharacterSheet.tsx, call it after setting the data to update it's current value.
	useEffect(() => {
		dexterityAbility.current = getValue(`Dexterity${currentID}`);
		console.log('In useEffect');
	}, [currentID]);

	return {
		strengthAbility,
		// setStrengthAbility,
		dexterityAbility,
		// setDexterityAbility,
		constitutionAbility,
		setConstitutionAbility,
		intelligenceAbility,
		setIntelligenceAbility,
		wisdomAbility,
		setWisdomAbility,
		charismaAbility,
		setCharismaAbility,
	};
}
