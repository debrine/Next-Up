import { useCallback, useEffect, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';
import { setValue } from '../utils/setValue';

export function useInitiativeScore() {
	const { characterID } = useParams();

	const [initMisc, setInitMisc] = useState<number>(
		getValue(`InitiativeMiscModifier${characterID}`)
	);

	useEffect(() => {
		setInitMisc(getValue(`InitiativeMiscModifier${characterID}`));
	}, [characterID]);

	const updateInitMisc = useCallback(
		(newInitMisc: number) => {
			setInitMisc(newInitMisc);
			setValue(`InitiativeMiscModifier${characterID}`, newInitMisc);
		},
		[characterID]
	);

	return { initMisc, updateInitMisc };
}
