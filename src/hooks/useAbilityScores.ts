import { useEffect, useMemo, useRef, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';
import { useCurrentID } from '../utils/useCurrentID';
import { GetAbilityScoreTotal } from '../utils/GetAbilityScoreTotal';
import { GetModifier } from '../utils/GetModifier';

export function useAbilityScores() {
	const { characterID } = useParams();
	const { currentID } = useCurrentID();

	const strengthAbility = useRef<AbilityScoreType>(
		getValue(`Strength${currentID}`)
	);

	// Dexterity
	const dexterityAbility = useRef<AbilityScoreType>(
		getValue(`Dexterity${currentID}`)
	);

	// Constitution
	const constitutionAbility = useRef<AbilityScoreType>(
		getValue(`Constitution${currentID}`)
	);

	const [wisdomAbility, setWisdomAbility] = useState<AbilityScoreType>(
		getValue(`Wisdom${currentID}`)
	);

	// const [charismaAbility, setCharismaAbility] = useState<AbilityScoreType>(
	// 	getValue(`Charisma${currentID}`)
	// );

	// Intelligence
	const intelligenceAbility = useRef<AbilityScoreType>(
		getValue(`Intelligence${currentID}`)
	);

	// // Wisdom
	// const wisdomAbility = useRef<AbilityScoreType>(
	// 	getValue(`Wisdom${currentID}`)
	// );

	// Charisma
	const charismaAbility = useRef<AbilityScoreType>(
		getValue(`Charisma${currentID}`)
	);

	// Must be changed both in and out of hook. In the CharacterSheet.tsx, call it after setting the data to update it's current value.
	useEffect(() => {
		strengthAbility.current = getValue(`Strength${currentID}`);

		dexterityAbility.current = getValue(`Dexterity${currentID}`);

		constitutionAbility.current = getValue(`Constitution${currentID}`);

		intelligenceAbility.current = getValue(`Intelligence${currentID}`);

		// wisdomAbility.current = getValue(`Wisdom${currentID}`);

		charismaAbility.current = getValue(`Charisma${currentID}`);
	}, [currentID]);

	return {
		strengthAbility,
		dexterityAbility,
		constitutionAbility,
		intelligenceAbility,
		wisdomAbility,
		setWisdomAbility,
		charismaAbility,
		// setCharismaAbility,
	};
}
