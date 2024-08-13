import { useContext, useEffect, useRef } from 'react';
import SheetLabel from '../../labels/SheetLabel';
import styles from './ArmorClassBlock.module.css';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import { GetModifier } from '../../../../utils/GetModifier';
import { getValue } from '../../../../utils/getValue';
import { useParams } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';
import { useArmorClassBlock } from '../../../../hooks/useArmorClassBlock';

function ArmorClassBlock() {
	const { characterID } = useParams();

	const { dexterityAbility, armorEquipped, armorMiscMods } = useContext(
		CharacterSheetContext
	);

	// const { armorEquipped, armorMiscMods } = useArmorClassBlock();

	const { register } = useFormContext();

	const maxDexBonus = useRef<number>(0);

	// When no armor is equipped, the maxDexBonus will be null. When it is equipped, make sure the bonus from dexterity is not over the max bonus.
	useEffect(() => {
		// const armorEquipped: ArmorType = getValue(`EquippedArmor${characterID}`);

		if (!armorEquipped.isEquipped) {
			maxDexBonus.current = GetModifier(dexterityAbility);
		} else {
			if (GetModifier(dexterityAbility) > armorEquipped.maxDexBonus) {
				maxDexBonus.current = armorEquipped.maxDexBonus;
			} else {
				maxDexBonus.current = GetModifier(dexterityAbility);
			}
		}
	}, [dexterityAbility]);

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='ARMOR CLASS' />
			<div className={styles.ACDiv}>
				<div className={styles.ACRow}>
					<div className={styles.ACTypeBox}>EAC</div>
					<div className={styles.ACTypeText}>
						<div>ENERGY</div>
						<div>ARMOR CLASS</div>
					</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>TOTAL</div>
						<input
							type='number'
							value={10 + maxDexBonus.current + armorMiscMods.energy}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsNumber}> = </div>
					<div className={styles.plusEqualsNumber}> 10 </div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>
							<div>ARMOR</div>
							<div>BONUS</div>
						</div>
						<input type='number' {...register(`bonusEAC`)} readOnly />
					</div>
					<div className={styles.plusEqualsNumber}> + </div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>
							<div>DEX</div>
							<div>MOD</div>
						</div>
						<input type='number' readOnly value={maxDexBonus.current} />
					</div>
					<div className={styles.plusEqualsNumber}> + </div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>
							<div>MISC</div>
							<div>MOD</div>
						</div>
						<input
							type='number'
							{...register('miscModEAC', { valueAsNumber: true })}
						/>
					</div>
				</div>
				<div className={styles.ACRow}>
					<div className={styles.ACTypeBox}>KAC</div>
					<div className={styles.ACTypeText}>
						<div>KENETIC</div>
						<div>ARMOR CLASS</div>
					</div>
					<div className={styles.inputDiv}>
						<input
							type='number'
							value={10 + maxDexBonus.current + armorMiscMods.kenetic}
							readOnly
						/>
					</div>
					<div className={styles.plusEqualsNumber}> = </div>
					<div className={styles.plusEqualsNumber}> 10 </div>
					<div className={styles.inputDiv}>
						<input type='number' {...register(`bonusKAC`)} readOnly />
					</div>
					<div className={styles.plusEqualsNumber}> + </div>
					<div className={styles.inputDiv}>
						<input type='number' readOnly value={maxDexBonus.current} />
					</div>
					<div className={styles.plusEqualsNumber}> + </div>
					<div className={styles.inputDiv}>
						<input
							type='number'
							{...register('miscModKAC', { valueAsNumber: true })}
						/>
					</div>
				</div>
				<div className={styles.ACRow}>
					<div className={styles.CombManLabel}>
						<div>AC VS COMBAT</div>
						<div>MANEUVERS</div>
					</div>
					<input
						type='number'
						value={18 + maxDexBonus.current + armorMiscMods.kenetic}
						readOnly
					/>
					<div className={styles.plusEqualsNumber}> = </div>
					<div className={styles.plusEqualsNumber}> 8 </div>
					<div className={styles.plusEqualsNumber}> + </div>
					<div className={styles.kacBlock}>
						<div className={styles.ACTypeBox}>KAC</div>
					</div>
				</div>
				<div className={styles.ResistancesDR}>
					<div>
						DR
						<input
							type='text'
							{...register('damageReduction')}
							className={styles.ResistancesDRInput}
						/>
					</div>
					<div>
						RESISTANCES
						<input
							type='text'
							{...register('resistances')}
							className={styles.ResistancesDRInput}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ArmorClassBlock;
