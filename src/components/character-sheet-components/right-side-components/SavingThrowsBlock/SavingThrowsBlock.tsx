import SheetLabel from '../../labels/SheetLabel';
import styles from './SavingThrowsBlock.module.css';

function SavingThrowsBlock() {
	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='SAVING THROWS' />
			<div className={styles.savingThrowBlockContent}>
				<div className={styles.savingThrowTypeColumn}>
					<div className={styles.savingThrowType}>
						<div className={styles.blackBlock}>FORTITUDE</div>
						<div className={styles.attributeAffecting}>(CONSTITUTION)</div>
					</div>
					<div className={styles.savingThrowType}>
						<div className={styles.blackBlock}>REFLEX</div>
						<div className={styles.attributeAffecting}>(DEXTERITY)</div>
					</div>
					<div className={styles.savingThrowType}>
						<div className={styles.blackBlock}>WILL</div>
						<div className={styles.attributeAffecting}>(WISDOM)</div>
					</div>
				</div>
				<div className={styles.inputColumn}>
					<div className={styles.inputLabel}>TOTAL</div>
					<input type='number' readOnly />
					<input type='number' readOnly />
					<input type='number' readOnly />
				</div>
				<div className={styles.plusEqualsColumn}>
					<div className={styles.top}>=</div>
					<div className={styles.middle}>=</div>
					<div className={styles.bottom}>=</div>
				</div>
				<div className={styles.inputColumn}>
					<div className={styles.inputLabel}>BASE SAVE</div>
					<input type='number' readOnly />
					<input type='number' readOnly />
					<input type='number' readOnly />
				</div>
				<div className={styles.plusEqualsColumn}>
					<div className={styles.top}>+</div>
					<div className={styles.middle}>+</div>
					<div className={styles.bottom}>+</div>
				</div>
				<div className={styles.inputColumn}>
					<div className={styles.inputLabel}>ABILITY MOD</div>
					<input type='number' readOnly />
					<input type='number' readOnly />
					<input type='number' readOnly />
				</div>
				<div className={styles.plusEqualsColumn}>
					<div className={styles.top}>+</div>
					<div className={styles.middle}>+</div>
					<div className={styles.bottom}>+</div>
				</div>
				<div className={styles.inputColumn}>
					<div className={styles.inputLabel}>MISC MOD</div>
					<input type='number' />
					<input type='number' />
					<input type='number' />
				</div>
			</div>
		</div>
	);
}

export default SavingThrowsBlock;
