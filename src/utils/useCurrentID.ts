import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';

// This is needed to not overwrite the data in the previously selected character. Form will write data before the characterID from useParams would update.

export function useCurrentID() {
	const { characterID } = useParams();

	const currentID = useMemo(() => characterID, [characterID]);

	return { currentID };
}
