import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';

export function useStaminaHealthResolve() {
	const { characterID } = useParams();

	// const [currentSP, setCurrentSP] = useState<number>(
	// 	getValue(`CurrentSP${characterID}`)
	// );

	// function editCurrentSP(newValues: number) {
	// 	setCurrentSP(newValues);

	// 	setValue(`CurrentSP${characterID}`, newValues);
	// }

	// const [currentHP, setCurrentHP] = useState<number>(
	// 	getValue(`CurrentHP${characterID}`)
	// );

	// function editCurrentHP(newValues: number) {
	// 	setCurrentHP(newValues);

	// 	setValue(`CurrentHP${characterID}`, newValues);
	// }
	// const [currentRP, setCurrentRP] = useState<number>(
	// 	getValue(`CurrentRP${characterID}`)
	// );

	// function editCurrentRP(newValues: number) {
	// 	setCurrentRP(newValues);

	// 	setValue(`CurrentRP${characterID}`, newValues);
	// }
	// const [tempSP, setTempSP] = useState<number>(
	// 	getValue(`TempSP${characterID}`)
	// );

	// function editTempSP(newValues: number) {
	// 	setTempSP(newValues);

	// 	setValue(`TempSP${characterID}`, newValues);
	// }
	// const [tempHP, setTempHP] = useState<number>(
	// 	getValue(`TempHP${characterID}`)
	// );

	// function editTempHP(newValues: number) {
	// 	setTempHP(newValues);

	// 	setValue(`TempHP${characterID}`, newValues);
	// }
	// const [tempRP, setTempRP] = useState<number>(
	// 	getValue(`TempRP${characterID}`)
	// );

	// function editTempRP(newValues: number) {
	// 	setTempRP(newValues);

	// 	setValue(`TempRP${characterID}`, newValues);
	// }

	const currentSP = useMemo<number>(
		() => getValue(`CurrentSP${characterID}`),
		[characterID]
	);

	const currentHP = useMemo<number>(
		() => getValue(`CurrentHP${characterID}`),
		[characterID]
	);

	const currentRP = useMemo<number>(
		() => getValue(`CurrentRP${characterID}`),
		[characterID]
	);

	const tempSP = useMemo<number>(
		() => getValue(`TempSP${characterID}`),
		[characterID]
	);

	const tempHP = useMemo<number>(
		() => getValue(`TempHP${characterID}`),
		[characterID]
	);

	const tempRP = useMemo<number>(
		() => getValue(`TempRP${characterID}`),
		[characterID]
	);

	return {
		currentSP,
		// editCurrentSP,
		currentHP,
		// editCurrentHP,
		currentRP,
		// editCurrentRP,
		tempSP,
		// editTempSP,
		tempHP,
		// editTempHP,
		tempRP,
		// editTempRP,
	};
}
