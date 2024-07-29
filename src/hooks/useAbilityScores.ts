import { useMemo, useRef, useState } from 'react';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';
import { useParams } from 'react-router-dom';

// export function useAbilityScores() {
// 	const { characterID } = useParams();

// 	// Strength
// 	const strengthAbility = useMemo<AbilityScoreType>(
// 		() => getValue(`Strength${characterID}`),
// 		[characterID]
// 	);

// 	// Dexterity
// 	const dexterityAbility = useMemo<AbilityScoreType>(
// 		() => getValue(`Dexterity${characterID}`),
// 		[characterID]
// 	);

// 	// Constitution
// 	const constitutionAbility = useMemo<AbilityScoreType>(
// 		() => getValue(`Constitution${characterID}`),
// 		[characterID]
// 	);

// 	// Intelligence
// 	const intelligenceAbility = useMemo<AbilityScoreType>(
// 		() => getValue(`Intelligence${characterID}`),
// 		[characterID]
// 	);

// 	// Wisdom
// 	const wisdomAbility = useMemo<AbilityScoreType>(
// 		() => getValue(`Wisdom${characterID}`),
// 		[characterID]
// 	);

// 	// Charisma
// 	const charismaAbility = useMemo<AbilityScoreType>(
// 		() => getValue(`Charisma${characterID}`),
// 		[characterID]
// 	);

// 	// Strength
// 	const [strength, setStrength] = useState<AbilityScoreType>(
// 		getValue(`Strength${characterID}`)
// 	);

// 	function editStrength(newValues: AbilityScoreType) {
// 		setStrength(newValues);

// 		setValue(`Strength${characterID}`, newValues);
// 	}

// 	// Dexterity
// 	const [dexterity, setDexterity] = useState<AbilityScoreType>(
// 		getValue(`Dexterity${characterID}`)
// 	);

// 	function editDexterity(newValues: AbilityScoreType) {
// 		setDexterity(newValues);

// 		setValue(`Dexterity${characterID}`, newValues);
// 	}

// 	// Constitution
// 	const [constitution, setConstitution] = useState<AbilityScoreType>(
// 		getValue(`Constitution${characterID}`)
// 	);

// 	function editConstitution(newValues: AbilityScoreType) {
// 		setConstitution(newValues);

// 		setValue(`Constitution${characterID}`, newValues);
// 	}

// 	// Intelligence
// 	const [intelligence, setIntelligence] = useState<AbilityScoreType>(
// 		getValue(`Intelligence${characterID}`)
// 	);

// 	function editIntelligence(newValues: AbilityScoreType) {
// 		setIntelligence(newValues);

// 		setValue(`Intelligence${characterID}`, newValues);
// 	}

// 	// Wisdom
// 	const [wisdom, setWisdom] = useState<AbilityScoreType>(
// 		getValue(`Wisdom${characterID}`)
// 	);

// 	function editWisdom(newValues: AbilityScoreType) {
// 		setWisdom(newValues);

// 		setValue(`Wisdom${characterID}`, newValues);
// 	}

// 	// Charisma
// 	const [charisma, setCharisma] = useState<AbilityScoreType>(
// 		getValue(`Charisma${characterID}`)
// 	);

// 	function editCharisma(newValues: AbilityScoreType) {
// 		setCharisma(newValues);

// 		setValue(`Charisma${characterID}`, newValues);
// 	}

// 	// Function to reset values on character change
// 	function fetchAbilityScores() {
// 		setStrength(getValue(`Strength${characterID}`));
// 		setDexterity(getValue(`Dexterity${characterID}`));
// 		setConstitution(getValue(`Constitution${characterID}`));
// 		setIntelligence(getValue(`Intelligence${characterID}`));
// 		setWisdom(getValue(`Wisdom${characterID}`));
// 		setCharisma(getValue(`Charisma${characterID}`));
// 	}

// 	return {
// 		strengthAbility,
// 		dexterityAbility,
// 		constitutionAbility,
// 		intelligenceAbility,
// 		wisdomAbility,
// 		charismaAbility,
// 		strength,
// 		editStrength,
// 		dexterity,
// 		editDexterity,
// 		constitution,
// 		editConstitution,
// 		intelligence,
// 		editIntelligence,
// 		wisdom,
// 		editWisdom,
// 		charisma,
// 		editCharisma,
// 		fetchAbilityScores,
// 	};
// }

export function useAbilityScores() {
	const { characterID } = useParams();

	// Strength
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

	// Strength
	const [strength, setStrength] = useState<AbilityScoreType>(
		getValue(`Strength${characterID}`)
	);

	function editStrength(newValues: AbilityScoreType) {
		strengthAbility.current = newValues;

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
		strengthAbility,
		dexterityAbility,
		constitutionAbility,
		intelligenceAbility,
		wisdomAbility,
		charismaAbility,
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
