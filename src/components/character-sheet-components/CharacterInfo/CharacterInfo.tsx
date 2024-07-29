import styles from './CharacterInfo.module.css';
import SheetLabel from '../labels/SheetLabel.tsx';
import { useContext } from 'react';
import { CharacterSheetContext } from '../../../states/CharacterSheet/CharacterSheet.tsx';
import { getValue } from '../../../utils/getValue.ts';
import { useFormContext } from 'react-hook-form';
import { useParams } from 'react-router-dom';

function CharacterInfo() {
	const { characterID } = useParams();

	const { characterInfoObject } = useContext(CharacterSheetContext);

	const { register } = useFormContext();

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
