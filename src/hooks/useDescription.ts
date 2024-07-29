import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';

export function useDescription() {
	const { characterID } = useParams();
	const description = useMemo<string>(
		() => getValue(`Description${characterID}`),
		[characterID]
	);
	return { description };
}
