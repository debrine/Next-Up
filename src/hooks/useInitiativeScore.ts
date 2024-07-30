import { useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';

export function useInitiativeScore() {
	const { characterID } = useParams();

	const [initMisc, setInitMisc] = useState<number>(
		getValue(`InitiativeMiscModifier${characterID}`)
	);

	return { initMisc, setInitMisc };
}
