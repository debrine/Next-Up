import { useParams } from 'react-router-dom';
import SheetLabel from '../../labels/SheetLabel';
import styles from './HealthAndResolveBlock.module.css';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useRef } from 'react';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import { classList } from '../../../../data/class-information/classList';
import { getValue } from '../../../../utils/getValue';
import { raceList } from '../../../../data/race-information/raceList';
import { setValue } from '../../../../utils/setValue';
import { GetModifier } from '../../../../utils/GetModifier';

function HealthAndResolveBlock() {
	const { characterID } = useParams();

	const {
		characterInfoObject,
		currentSP,
		currentHP,
		currentRP,
		tempSP,
		tempHP,
		tempRP,
	} = useContext(CharacterSheetContext);

	// Store our characterID in a useRef. This is needed to not overwrite the data in the previously selected character.
	// Only works if in each individual component and not passed through context.
	const currentID = useRef<string>(characterID!);

	const { register, watch } = useForm();

	useEffect(() => {
		// Change the currentID to the params.
		currentID.current = characterID!;

		// Set default values based on character selected.
		// let defaultValues = {
		// 	descriptionBlock: getValue(`Description${characterID}`),
		// };

		// // Reset the defaultValues
		// reset({ ...defaultValues });
	}, [characterID]);

	// useEffect(() => {
	// 	setCurrentSP(getValue(`CurrentSP${characterID}`));
	// 	setTempSP(getValue(`TempSP${characterID}`));
	// 	setCurrentHP(getValue(`CurrentHP${characterID}`));
	// 	setTempHP(getValue(`TempHP${characterID}`));
	// 	setCurrentRP(getValue(`CurrentRP${characterID}`));
	// 	setTempRP(getValue(`TempRP${characterID}`));
	// }, [characterID]);

	// const [currentSP, setCurrentSP] = useState<number>(
	// 	getValue(`CurrentSP${characterID}`)
	// );
	// const [currentHP, setCurrentHP] = useState<number>(
	// 	getValue(`CurrentHP${characterID}`)
	// );
	// const [currentRP, setCurrentRP] = useState<number>(
	// 	getValue(`CurrentRP${characterID}`)
	// );
	// const [tempSP, setTempSP] = useState<number>(
	// 	getValue(`TempSP${characterID}`)
	// );
	// const [tempHP, setTempHP] = useState<number>(
	// 	getValue(`TempHP${characterID}`)
	// );
	// const [tempRP, setTempRP] = useState<number>(
	// 	getValue(`TempRP${characterID}`)
	// );

	// const { register, watch } = useForm();

	useEffect(() => {
		const subscription = watch((data) => {
			if (data.currentSP <= maxSP) {
				setValue(`CurrentSP${characterID}`, Number(data.currentSP));
			}

			if (data.currentHP <= maxHP) {
				setValue(`CurrentHP${characterID}`, Number(data.currentHP));
			}

			if (data.currentRP <= maxRP) {
				setValue(`CurrentRP${characterID}`, Number(data.currentRP));
			}

			//   Temp Values
			setValue(`TempSP${characterID}`, Number(data.tempSP));

			setValue(`TempHP${characterID}`, Number(data.tempHP));

			setValue(`TempRP${characterID}`, Number(data.tempRP));
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	//   Max SP is based off value given from class plus your constitution modifier, all multiplied by character level.
	const maxSP: number =
		(classList[characterInfoObject.chClass].classDefaults.hitStaminaPoints +
			GetModifier(getValue(`Constitution${characterID}`))) *
		getValue(`Level${characterID}`);

	//   Max HP is based off value given from class multiplied by character level and value give by race (only once).
	const maxHP: number =
		classList[characterInfoObject.chClass].classDefaults.hitStaminaPoints *
			getValue(`Level${characterID}`) +
		raceList[characterInfoObject.race].raceHP;

	// Max RP equal to half your character level (rounded down and minimum of 1) plus key ability score modifier.
	let mathFloorHalfLevel = 1;

	if (Math.floor(getValue(`Level${characterID}`) / 2) > 0) {
		mathFloorHalfLevel = Math.floor(getValue(`Level${characterID}`)) / 2;
	}

	const keyAbilityObject: AbilityScoreType = getValue(
		`${characterInfoObject.keyAbilityScoreSelected}${characterID}`
	);

	//   Add your Key Ability Score Modifier. If this results negative, then it will be set to a minimum of 1 where the value is called below.
	const maxRP: number = mathFloorHalfLevel + GetModifier(keyAbilityObject);

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='HEALTH AND RESOLVE' />
			<div className={styles.SHRValuesDiv}>
				<div className={styles.TotalCurrentDiv}>
					<div className={styles.head}>TOTAL</div>
					<div className={styles.head}>CURRENT</div>
					<div className={styles.head}>TEMP</div>
				</div>
				<div className={styles.inputDiv}>
					<div className={styles.labelValueColumn}>
						<div className={styles.label}>STAMINA POINTS</div>
						<input type='number' value={maxSP} readOnly />
						<input type='number' {...register('currentSP')} max={maxSP} />
						<input type='number' {...register('tempSP')} />
					</div>
					<div className={styles.labelValueColumn}>
						<div className={styles.label}>HIT POINTS</div>
						<input type='number' value={maxHP} readOnly />
						<input type='number' {...register('currentHP')} max={maxHP} />
						<input type='number' {...register('tempHP')} />
					</div>
					<div className={styles.labelValueColumn}>
						<div className={styles.label}>RESOLVE POINTS</div>
						<input type='number' value={maxRP > 0 ? maxRP : 1} readOnly />
						<input type='number' {...register('currentRP')} max={maxRP} />
						<input type='number' {...register('tempRP')} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HealthAndResolveBlock;
