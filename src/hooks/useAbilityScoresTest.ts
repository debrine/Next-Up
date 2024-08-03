import { useEffect, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';

export function useAbilityScoresTest() {
	const { characterID } = useParams();

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

	const [wisdomAbility, setWisdomAbility] = useState<AbilityScoreType>(
		getValue(`Wisdom${characterID}`)
	);

	const [charismaAbility, setCharismaAbility] = useState<AbilityScoreType>(
		getValue(`Charisma${characterID}`)
	);

	// Must be changed both in and out of hook. In the CharacterSheet.tsx, call it after setting the data to update it's current value.
	useEffect(() => {
		setStrengthAbility(getValue(`Strength${characterID}`));

		setDexterityAbility(getValue(`Dexterity${characterID}`));

		setConstitutionAbility(getValue(`Constitution${characterID}`));

		setIntelligenceAbility(getValue(`Intelligence${characterID}`));

		setWisdomAbility(getValue(`Wisdom${characterID}`));

		setCharismaAbility(getValue(`Charisma${characterID}`));
	}, [characterID]);

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
