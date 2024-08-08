import SheetLabel from '../../labels/SheetLabel';
import styles from './ArmorClassBlock.module.css';

function ArmorClassBlock() {
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
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsNumber}> = </div>
					<div className={styles.plusEqualsNumber}> 10 </div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>
							<div>ARMOR</div>
							<div>BONUS</div>
						</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsNumber}> + </div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>
							<div>DEX</div>
							<div>MOD</div>
						</div>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsNumber}> + </div>
					<div className={styles.inputDiv}>
						<div className={styles.inputLabel}>
							<div>MISC</div>
							<div>MOD</div>
						</div>
						<input type='number' />
					</div>
				</div>
				<div className={styles.ACRow}>
					<div className={styles.ACTypeBox}>KAC</div>
					<div className={styles.ACTypeText}>
						<div>KENETIC</div>
						<div>ARMOR CLASS</div>
					</div>
					<div className={styles.inputDiv}>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsNumber}> = </div>
					<div className={styles.plusEqualsNumber}> 10 </div>
					<div className={styles.inputDiv}>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsNumber}> + </div>
					<div className={styles.inputDiv}>
						<input type='number' readOnly />
					</div>
					<div className={styles.plusEqualsNumber}> + </div>
					<div className={styles.inputDiv}>
						<input type='number' />
					</div>
				</div>
				<div className={styles.ACRow}>
					<div className={styles.CombManLabel}>
						<div>AC VS COMBAT</div>
						<div>MANEUVERS</div>
					</div>
					<input type='number' readOnly />
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
						<input type='text' className={styles.ResistancesDRInput} />
					</div>
					<div>
						RESISTANCES
						<input type='text' className={styles.ResistancesDRInput} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ArmorClassBlock;
