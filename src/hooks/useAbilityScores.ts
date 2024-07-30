import { useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';

export function useAbilityScores() {
	const { characterID } = useParams();

	// // Strength
	// const strengthAbility = useRef<AbilityScoreType>(
	// 	getValue(`Strength${characterID}`)
	// );

	// // Dexterity
	// const dexterityAbility = useRef<AbilityScoreType>(
	// 	getValue(`Dexterity${characterID}`)
	// );

	// // Constitution
	// const constitutionAbility = useRef<AbilityScoreType>(
	// 	getValue(`Constitution${characterID}`)
	// );

	// // Intelligence
	// const intelligenceAbility = useRef<AbilityScoreType>(
	// 	getValue(`Intelligence${characterID}`)
	// );

	// // Wisdom
	// const wisdomAbility = useRef<AbilityScoreType>(
	// 	getValue(`Wisdom${characterID}`)
	// );

	// // Charisma
	// const charismaAbility = useRef<AbilityScoreType>(
	// 	getValue(`Charisma${characterID}`)
	// );

	// Strength
	const [strengthAbility, setStrengthAbility] = useState<AbilityScoreType>(
		getValue(`Strength${characterID}`)
	);

	// Dexterity
	const [dexterityAbility, setDexterityAbility] = useState<AbilityScoreType>(
		getValue(`Dexterity${characterID}`)
	);

	// Constitution
	const [constitutionAbility, setConstitutionAbility] =
		useState<AbilityScoreType>(getValue(`Constitution${characterID}`));

	// Intelligence
	const [intelligenceAbility, setIntelligenceAbility] =
		useState<AbilityScoreType>(getValue(`Intelligence${characterID}`));

	// Wisdom
	const [wisdomAbility, setWisdomAbility] = useState<AbilityScoreType>(
		getValue(`Wisdom${characterID}`)
	);

	// Charisma
	const [charismaAbility, setCharismaAbility] = useState<AbilityScoreType>(
		getValue(`Charisma${characterID}`)
	);

	return {
		strengthAbility,
		setStrengthAbility,
		dexterityAbility,
		setDexterityAbility,
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
