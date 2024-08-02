import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { classList } from '../data/class-information/classList';
import { useCharacterInfoObject } from './useCharacterInfoObject';
import { GetModifier } from '../utils/GetModifier';
import { raceList } from '../data/race-information/raceList';

export function useStaminaHealthResolve() {
	const { characterID } = useParams();

	const { characterInfoObject } = useCharacterInfoObject();

	const [currentSP, setCurrentSP] = useState<number>(
		getValue(`CurrentSP${characterID}`)
	);

	const [currentHP, setCurrentHP] = useState<number>(
		getValue(`CurrentHP${characterID}`)
	);

	const [currentRP, setCurrentRP] = useState<number>(
		getValue(`CurrentRP${characterID}`)
	);

	const [tempSP, setTempSP] = useState<number>(
		getValue(`TempSP${characterID}`)
	);

	const [tempHP, setTempHP] = useState<number>(
		getValue(`TempHP${characterID}`)
	);

	const [tempRP, setTempRP] = useState<number>(
		getValue(`TempRP${characterID}`)
	);

	//   Max SP is based off value given from class plus your constitution modifier, all multiplied by character level.
	const maxSP: number = useMemo(
		() =>
			(classList[characterInfoObject.chClass].classDefaults.hitStaminaPoints +
				GetModifier(getValue(`Constitution${characterID}`))) *
			getValue(`Level${characterID}`),
		[characterID]
	);

	//   Max HP is based off value given from class multiplied by character level and value give by race (only once).
	const maxHP: number = useMemo(
		() =>
			classList[characterInfoObject.chClass].classDefaults.hitStaminaPoints *
				getValue(`Level${characterID}`) +
			raceList[characterInfoObject.race].raceHP,
		[characterID]
	);

	// Max RP equal to half your character level (rounded down and minimum of 1) plus key ability score modifier.
	const mathFloorHalfLevel = useMemo(() => {
		if (Math.floor(getValue(`Level${characterID}`) / 2) > 0) {
			return Math.floor(getValue(`Level${characterID}`)) / 2;
		} else {
			return 1;
		}
	}, [characterID]);

	const keyAbilityObject: AbilityScoreType = useMemo(
		() =>
			getValue(`${characterInfoObject.keyAbilityScoreSelected}${characterID}`),
		[characterID]
	);

	//   Add your Key Ability Score Modifier. If this results negative, then it will be set to a minimum of 1 where the value is called where the register is initiated in CharacterSheet.tsx.
	const maxRP: number = useMemo(
		() => mathFloorHalfLevel + GetModifier(keyAbilityObject),
		[characterID]
	);

	useEffect(() => {
		setCurrentSP(getValue(`CurrentSP${characterID}`));
		setCurrentHP(getValue(`CurrentHP${characterID}`));
		setCurrentRP(getValue(`CurrentRP${characterID}`));
		setTempSP(getValue(`TempSP${characterID}`));
		setTempHP(getValue(`TempHP${characterID}`));
		setTempRP(getValue(`TempRP${characterID}`));
	}, [characterID]);

	return {
		currentSP,
		setCurrentSP,
		currentHP,
		setCurrentHP,
		currentRP,
		setCurrentRP,
		tempSP,
		setTempSP,
		tempHP,
		setTempHP,
		tempRP,
		setTempRP,
		maxSP,
		maxHP,
		maxRP,
	};
}
