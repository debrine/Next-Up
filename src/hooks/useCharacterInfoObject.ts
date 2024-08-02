import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../utils/getValue';

export function useCharacterInfoObject() {
	const { characterID } = useParams();

	const [characterInfoObject, setCharacterInfoObject] =
		useState<CharacterInfoObjectType>(
			getValue(`characterBasicInfo${characterID}`)
		);

	useEffect(() => {
		setCharacterInfoObject(getValue(`characterBasicInfo${characterID}`));
	}, [characterID]);

	return { characterInfoObject };
}
