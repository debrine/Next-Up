import styles from './CharacterInfo.module.css';
import SheetLabel from '../labels/SheetLabel.tsx';
import { useContext, useEffect, useRef } from 'react';
import { CharacterSheetContext } from '../../../states/CharacterSheet/CharacterSheet.tsx';
import { getValue } from '../../../utils/getValue.ts';
import { useForm } from 'react-hook-form';
import { setValue } from '../../../utils/setValue.ts';
import { useParams } from 'react-router-dom';

function CharacterInfo() {
	const { characterID } = useParams();

	const { characterInfoObject, characterInfoDynamicObject } = useContext(
		CharacterSheetContext
	);

	// Store our characterID in a useRef. This is needed to not overwrite the data in the previously selected character.
	// Only works if in each individual component and not passed through context.
	const currentID = useRef<string>(characterID!);

	const { register, watch, reset } = useForm({});

	useEffect(() => {
		// Change the currentID to the params.
		currentID.current = characterID!;

		// Set default values based on character selected.
		let defaultValues: CharacterBasicInfoDynamicType =
			characterInfoDynamicObject;

		// Reset the defaultValues
		reset({ ...defaultValues });
	}, [characterID]);

	useEffect(() => {
		const subscription = watch((data) => {
			if (characterID === currentID.current) {
				setValue(`characterBasicInfoDynamic${characterID}`, data);
			}
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<div className={styles.parentDiv}>
			<div className={styles.characterNameDiv}>
				<SheetLabel sheetLabelText='CHARACTER NAME' />
				<input
					{...register('characterName')}
					type='text'
					className={styles.characterNameBar}
					spellCheck={false}
				/>
			</div>

			<div className={styles.classRaceThemeDiv}>
				<div className={styles.infoInputDiv}>
					<input
						type='text'
						className={styles.infoInput}
						spellCheck={false}
						value={`${characterInfoObject.chClass} ${getValue(
							`Level${characterID}`
						)}`}
						readOnly
					/>
					<div>CLASS/LEVEL</div>
				</div>
				<div className={styles.infoInputDiv}>
					<input
						type='text'
						className={styles.infoInput}
						spellCheck={false}
						value={characterInfoObject.race}
						readOnly
					/>
					<div>RACE</div>
				</div>
				<div className={styles.infoInputDiv}>
					<input
						type='text'
						className={styles.infoInput}
						spellCheck={false}
						value={characterInfoObject.theme}
						readOnly
					/>
					<div>THEME</div>
				</div>
			</div>

			<div className={styles.sizeSpeedGenderHomeDiv}>
				<div className={styles.infoInputDiv}>
					<input
						{...register('characterSize')}
						type='text'
						className={styles.infoInput}
						spellCheck={false}
					/>
					<div>SIZE</div>
				</div>
				<div className={styles.infoInputDiv}>
					<input
						{...register('characterSpeed')}
						type='number'
						className={styles.infoInput}
					/>
					<div>SPEED</div>
				</div>
				<div className={styles.infoInputDiv}>
					<input
						{...register('characterGender')}
						type='text'
						className={styles.infoInput}
						spellCheck={false}
					/>
					<div>GENDER</div>
				</div>
				<div className={styles.infoInputDiv}>
					<input
						{...register('characterHomeWorld')}
						type='text'
						className={styles.infoInput}
						spellCheck={false}
					/>
					<div>HOME WORLD</div>
				</div>
			</div>

			<div className={styles.alignmentDietyPlayerDiv}>
				<div className={styles.infoInputDiv}>
					<input
						{...register('characterAlignment')}
						type='text'
						className={styles.infoInput}
						spellCheck={false}
					/>
					<div>ALIGNMENT</div>
				</div>
				<div className={styles.infoInputDiv}>
					<input
						{...register('characterDiety')}
						type='text'
						className={styles.infoInput}
						spellCheck={false}
					/>
					<div>DIETY</div>
				</div>
				<div className={styles.infoInputDiv}>
					<input
						{...register('playerName')}
						type='text'
						className={styles.infoInput}
						spellCheck={false}
					/>
					<div>PLAYER</div>
				</div>
			</div>
		</div>
	);
}

export default CharacterInfo;
