import SheetLabel from '../../labels/SheetLabel';
import styles from './WeaponsBlock.module.css';

function WeaponsBlock() {
	const tempArray = [
		{
			weaponName: '',
			weaponType: '',
			weaponRange: '',
			weaponCritical: '',
			weaponAmmoTotal: 0,
			weaponAmmoCurrent: 0,
			weaponProficiency: '',
			weaponLevel: 0,
			weaponToHit: 0,
			weaponDamageType: '',
			weaponDamageRoll: '',
		},
		{
			weaponName: '',
			weaponType: '',
			weaponRange: '',
			weaponCritical: '',
			weaponAmmoTotal: 0,
			weaponAmmoCurrent: 0,
			weaponProficiency: '',
			weaponLevel: 0,
			weaponToHit: 0,
			weaponDamageType: '',
			weaponDamageRoll: '',
		},
	];
	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='WEAPONS' />
			<div className={styles.weaponsBlockContent}>
				{tempArray.map((weapon: WeaponType, index: number) => {
					return (
						<div className={styles.individualWeapon} key={index}>
							<div className={styles.delete}>&#128465;</div>
							<div className={styles.topRow}>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>NAME</div>
									<input
										type='text'
										className={styles.textInput}
										spellCheck={false}
										defaultValue={weapon.weaponName}
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
							<div className={styles.middleRow}>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>ATTACK ROLL</div>
									<input type='number' className={styles.numberInput} />
								</div>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>DAMAGE ROLL</div>
									<input
										type='text'
										className={styles.textInput}
										spellCheck={false}
									/>
								</div>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>DAMAGE TYPE</div>
									<input
										type='text'
										className={styles.textInput}
										spellCheck={false}
									/>
								</div>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>RANGE</div>
									<input
										type='text'
										className={styles.textInput}
										spellCheck={false}
									/>
								</div>
							</div>
							<div className={styles.bottomRow}>
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>CRITICAL</div>
									<input
										type='text'
										className={styles.textInput}
										spellCheck={false}
									/>
								</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>AMMO</div>
									<input type='number' className={styles.ammoInput} />
									<div className={styles.inputLabel}>OF</div>
									<input type='number' className={styles.ammoInput} />
								</div>
								<div className={styles.verticalBar} />
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

export default WeaponsBlock;
