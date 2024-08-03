import { useEffect, useRef } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';

export function useAbilityScores() {
	const { characterID } = useParams();

	const strengthAbility = useRef<AbilityScoreType>(
		getValue(`Strength${characterID}`)
	);

	// Dexterity
	const dexterityAbility = useRef<AbilityScoreType>(
		getValue(`Dexterity${characterID}`)
	);

	// Constitution
	const constitutionAbility = useRef<AbilityScoreType>(
		getValue(`Constitution${characterID}`)
	);

	// Intelligence
	const intelligenceAbility = useRef<AbilityScoreType>(
		getValue(`Intelligence${characterID}`)
	);

	// Wisdom
	const wisdomAbility = useRef<AbilityScoreType>(
		getValue(`Wisdom${characterID}`)
	);

	// Charisma
	const charismaAbility = useRef<AbilityScoreType>(
		getValue(`Charisma${characterID}`)
	);

	useEffect(() => {
		strengthAbility.current = getValue(`Strength${characterID}`);

		dexterityAbility.current = getValue(`Dexterity${characterID}`);

		constitutionAbility.current = getValue(`Constitution${characterID}`);

		intelligenceAbility.current = getValue(`Intelligence${characterID}`);

		wisdomAbility.current = getValue(`Wisdom${characterID}`);

		charismaAbility.current = getValue(`Charisma${characterID}`);
	}, [characterID]);

	return {
		strengthAbility,
		dexterityAbility,
		constitutionAbility,
		intelligenceAbility,
		wisdomAbility,
		charismaAbility,
	};
}
