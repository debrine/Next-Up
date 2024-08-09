import SheetLabel from '../../labels/SheetLabel';
import styles from './AttackBonusesBlock.module.css';

function AttackBonusesBlock() {
	return (
		<div className={styles.parentDiv}>
			<div className={styles.header}>
				<SheetLabel sheetLabelText='ATTACK BONUSES' />
				<div className={styles.rightHeader}>
					<div className={styles.rightHeaderText}>
						<div>Base Attack Bonus</div>
						<div>(BAB)</div>
					</div>
					<input type='number' readOnly />
				</div>
			</div>
			<div className={styles.attackBonusesBlockContent}>
				<div className={styles.attackRow}>
					<div className={styles.attackType}>MELEE ATTACK</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>TOTAL</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsDiv}>=</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>BAB</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>STR MOD</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>MISC MOD</div>
						<input type='number' />
					</div>
				</div>
				<div className={styles.borderLine} />
				<div className={styles.attackRow}>
					<div className={styles.attackType}>RANGED ATTACK</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>TOTAL</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsDiv}>=</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>BAB</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>DEX MOD</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>MISC MOD</div>
						<input type='number' />
					</div>
				</div>
				<div className={styles.borderLine} />
				<div className={styles.attackRow}>
					<div className={styles.attackType}>THROWN ATTACK</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>TOTAL</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsDiv}>=</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>BAB</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>STR MOD</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsDiv}>+</div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>MISC MOD</div>
						<input type='number' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AttackBonusesBlock;
