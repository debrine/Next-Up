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
	const [dexterityAbility, setDexterityAbility] = useState<AbilityScoreType>(
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

	return {
		strengthAbility,
		// setStrengthAbility,
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
