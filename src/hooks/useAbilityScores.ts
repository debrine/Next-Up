import { useState } from 'react';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';
import { useParams } from 'react-router-dom';

export function useAbilityScores() {
	const characterID = useParams();

	// Strength
	const [strength, setStrength] = useState<AbilityScoreType>(
		getValue(`Strength${characterID}`)
	);

	function editStrength(newValues: AbilityScoreType) {
		setStrength(newValues);

		setValue(`Strength${characterID}`, newValues);
	}

	// Dexterity
	const [dexterity, setDexterity] = useState<AbilityScoreType>(
		getValue(`Dexterity${characterID}`)
	);

	function editDexterity(newValues: AbilityScoreType) {
		setDexterity(newValues);

		setValue(`Dexterity${characterID}`, newValues);
	}

	// Constitution
	const [constitution, setConstitution] = useState<AbilityScoreType>(
		getValue(`Constitution${characterID}`)
	);

	function editConstitution(newValues: AbilityScoreType) {
		setConstitution(newValues);

		setValue(`Constitution${characterID}`, newValues);
	}

	// Intelligence
	const [intelligence, setIntelligence] = useState<AbilityScoreType>(
		getValue(`Intelligence${characterID}`)
	);

	function editIntelligence(newValues: AbilityScoreType) {
		setIntelligence(newValues);

		setValue(`Intelligence${characterID}`, newValues);
	}

	// Wisdom
	const [wisdom, setWisdom] = useState<AbilityScoreType>(
		getValue(`Wisdom${characterID}`)
	);

	function editWisdom(newValues: AbilityScoreType) {
		setWisdom(newValues);

		setValue(`Wisdom${characterID}`, newValues);
	}

	// Charisma
	const [charisma, setCharisma] = useState<AbilityScoreType>(
		getValue(`Charisma${characterID}`)
	);

	function editCharisma(newValues: AbilityScoreType) {
		setCharisma(newValues);

		setValue(`Charisma${characterID}`, newValues);
	}

	// Function to reset values on character change
	function fetchAbilityScores() {
		setStrength(getValue(`Strength${characterID}`));
		setDexterity(getValue(`Dexterity${characterID}`));
		setConstitution(getValue(`Constitution${characterID}`));
		setIntelligence(getValue(`Intelligence${characterID}`));
		setWisdom(getValue(`Wisdom${characterID}`));
		setCharisma(getValue(`Charisma${characterID}`));
	}

	return {
		strength,
		editStrength,
		dexterity,
		editDexterity,
		constitution,
		editConstitution,
		intelligence,
		editIntelligence,
		wisdom,
		editWisdom,
		charisma,
		editCharisma,
		fetchAbilityScores,
	};
}
