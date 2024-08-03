import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';

export function useStaminaHealthResolve() {
	const { characterID } = useParams();

	const currentSP = useRef<number>(getValue(`CurrentSP${characterID}`));

	const currentHP = useRef<number>(getValue(`CurrentHP${characterID}`));

	const currentRP = useRef<number>(getValue(`CurrentRP${characterID}`));

	const tempSP = useRef<number>(getValue(`TempSP${characterID}`));

	const tempHP = useRef<number>(getValue(`TempHP${characterID}`));

	const tempRP = useRef<number>(getValue(`TempRP${characterID}`));

	useEffect(() => {
		currentSP.current = getValue(`CurrentSP${characterID}`);
		currentHP.current = getValue(`CurrentHP${characterID}`);
		currentRP.current = getValue(`CurrentRP${characterID}`);
		tempSP.current = getValue(`TempSP${characterID}`);
		tempHP.current = getValue(`TempHP${characterID}`);
		tempRP.current = getValue(`TempRP${characterID}`);
	}, [characterID]);

	return {
		currentSP,
		currentHP,
		currentRP,
		tempSP,
		tempHP,
		tempRP,
	};
}
