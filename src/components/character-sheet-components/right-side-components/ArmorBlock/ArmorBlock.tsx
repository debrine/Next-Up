import SheetLabel from '../../labels/SheetLabel';
import styles from './ArmorBlock.module.css';

function ArmorBlock() {
	let tempArray = [
		{
			armorName: '', //
			armorType: '', //
			armorProficiency: '', //
			armorLevel: 0, //
			armorEAC: 0, //
			armorKAC: 0, //
			maxDexBonus: 0, //
			isEquipped: false,
		},
		{
			armorName: '', //
			armorType: '', //
			armorProficiency: '', //
			armorLevel: 0, //
			armorEAC: 0, //
			armorKAC: 0, //
			maxDexBonus: 0, //
			isEquipped: false,
		},
	];

	// Temp function to mimic what will be final
	function handleEquip(index: number) {
		tempArray[index].isEquipped = !tempArray[index].isEquipped;
		tempArray.forEach((armor: ArmorType, i: number) => {
			if (i != index) {
				armor.isEquipped = false;
			}
		});
	}
	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='ARMOR' />
			<div className={styles.armorBlockContent}>
				{tempArray.map((armor: ArmorType, index: number) => {
					return (
						<div className={styles.individualArmor} key={index}>
							<div className={styles.delete}>&#128465;</div>
							<div className={styles.topRow}>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>NAME</div>
									<input
										type='text'
										className={styles.textInput}
										spellCheck={false}
										defaultValue={armor.armorName}
									/>
								</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>TYPE</div>
									<input
										type='text'
										className={styles.textInput}
										spellCheck={false}
									/>
								</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>LEVEL</div>
									<input type='number' className={styles.numberInput} />
								</div>
							</div>
							<div className={styles.bottomRow}>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>EQUIP</div>
									<input
										type='checkbox'
										className={styles.checkboxInput}
										onClick={() => handleEquip(index)}
										defaultChecked={armor.isEquipped ? true : false}
									/>
								</div>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>EAC</div>
									<input type='number' className={styles.numberInput} />
								</div>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>KAC</div>
									<input type='number' className={styles.numberInput} />
								</div>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>MAX DEX BONUS</div>
									<input type='number' className={styles.numberInput} />
								</div>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>PROFICIENCY</div>
									<input
										type='text'
										className={styles.textInput}
										spellCheck={false}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ArmorBlock;
