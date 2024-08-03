import { useEffect, useRef } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';

export function useInitiativeScore() {
	const { characterID } = useParams();

	const initMisc = useRef<number>(
		getValue(`InitiativeMiscModifier${characterID}`)
	);

	useEffect(() => {
		initMisc.current = getValue(`InitiativeMiscModifier${characterID}`);
	}, [characterID]);

	return { initMisc };
}
