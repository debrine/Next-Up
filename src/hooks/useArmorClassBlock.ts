import { useCallback, useEffect, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';
import { setValue } from '../utils/setValue';

export function useArmorClassBlock() {
	const { characterID } = useParams();

	const [armorEquipped, setArmorEquipped] = useState<ArmorType>(
		getValue(`EquippedArmor${characterID}`)
	);

	const [armorMiscMods, setArmorMiscMods] = useState<{
		energy: number;
		kenetic: number;
	}>(getValue(`ArmorMiscMods${characterID}`));

	useEffect(() => {
		setArmorEquipped(getValue(`EquippedArmor${characterID}`));
		setArmorMiscMods(getValue(`ArmorMiscMods${characterID}`));
	}, [characterID]);

	const updateArmorEquipped = useCallback(
		(newArmorEquipped: ArmorType) => {
			setArmorEquipped(newArmorEquipped);
			setValue(`EquippedArmor${characterID}`, newArmorEquipped);
		},
		[characterID]
	);

	const updateArmorMiscMods = useCallback(
		(newMiscMods: { energy: number; kenetic: number }) => {
			setArmorMiscMods(newMiscMods);
			setValue(`ArmorMiscMods${characterID}`, newMiscMods);
		},
		[characterID]
	);

	return {
		armorEquipped,
		updateArmorEquipped,
		armorMiscMods,
		updateArmorMiscMods,
	};
}
