import { useContext } from 'react';
import SheetLabel from '../../labels/SheetLabel';
import styles from './InitiativeBlock.module.css';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import { useFormContext } from 'react-hook-form';
import { GetModifier } from '../../../../utils/GetModifier';

function InitiativeBlock() {
	const { dexterityAbility, initMisc } = useContext(CharacterSheetContext);

	const { register } = useFormContext();

	return (
		<div className={styles.parentDiv}>
			<div className={styles.leftSide}>
				<SheetLabel sheetLabelText='INITIATIVE' />
			</div>
			<div className={styles.rightSide}>
				<div className={styles.initiativeDiv}>
					<div className={styles.initHead}>TOTAL</div>
					<input
						type='number'
						value={GetModifier(dexterityAbility) + initMisc}
						readOnly
					/>
				</div>
				<div className={styles.plusEquals}> = </div>
				<div className={styles.initiativeDiv}>
					<div className={styles.initHead}>DEX MODIFIER</div>
					<input
						type='number'
						value={GetModifier(dexterityAbility).toString()}
						readOnly
					/>
				</div>
				<div className={styles.plusEquals}> + </div>
				<div className={styles.initiativeDiv}>
					<div className={styles.initHead}>MISC MODIFIER</div>
					<input type='number' {...register(`InitiativeMiscModifier`)} />
				</div>
			</div>
		</div>
	);
}

export default InitiativeBlock;
