import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useStaminaHealthResolve() {
	const { characterID } = useParams();

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

	useEffect(() => {
		setCurrentSP(getValue(`CurrentSP${characterID}`));
		setCurrentHP(getValue(`CurrentHP${characterID}`));
		setCurrentRP(getValue(`CurrentRP${characterID}`));
		setTempSP(getValue(`TempSP${characterID}`));
		setTempHP(getValue(`TempHP${characterID}`));
		setTempRP(getValue(`TempRP${characterID}`));
	}, [characterID]);

	const updateCurrentSP = useCallback(
		(newValue: number) => {
			setCurrentSP(newValue);
			setValue(`CurrentSP${characterID}`, newValue);
		},
		[characterID]
	);

	const updateCurrentHP = useCallback(
		(newValue: number) => {
			setCurrentHP(newValue);
			setValue(`CurrentHP${characterID}`, newValue);
		},
		[characterID]
	);

	const updateCurrentRP = useCallback(
		(newValue: number) => {
			setCurrentRP(newValue);
			setValue(`CurrentRP${characterID}`, newValue);
		},
		[characterID]
	);

	const updateTempSP = useCallback(
		(newValue: number) => {
			setTempSP(newValue);
			setValue(`TempSP${characterID}`, newValue);
		},
		[characterID]
	);

	const updateTempHP = useCallback(
		(newValue: number) => {
			setTempHP(newValue);
			setValue(`TempHP${characterID}`, newValue);
		},
		[characterID]
	);

	const updateTempRP = useCallback(
		(newValue: number) => {
			setTempRP(newValue);
			setValue(`TempRP${characterID}`, newValue);
		},
		[characterID]
	);

	return {
		currentSP,
		updateCurrentSP,
		currentHP,
		updateCurrentHP,
		currentRP,
		updateCurrentRP,
		tempSP,
		updateTempSP,
		tempHP,
		updateTempHP,
		tempRP,
		updateTempRP,
	};
}
