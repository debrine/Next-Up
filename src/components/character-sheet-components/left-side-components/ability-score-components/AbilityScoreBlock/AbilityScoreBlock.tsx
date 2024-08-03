import SheetLabel from '../../../labels/SheetLabel.tsx';
import styles from './AbilityScoreBlock.module.css';
import AbilityScoreType from '../AbilityScoreType/AbilityScoreType.tsx';
import { useFormContext } from 'react-hook-form';
import { useContext } from 'react';
import { CharacterSheetContext } from '../../../../../states/CharacterSheet/CharacterSheet.tsx';
import { GetModifier } from '../../../../../utils/GetModifier.ts';
import { GetAbilityScoreTotal } from '../../../../../utils/GetAbilityScoreTotal.ts';

// Scores and modifiers not meant to be adjusted.

function AbilityScoreBlock() {
	const {
		strengthAbility,
		dexterityAbility,
		constitutionAbility,
		intelligenceAbility,
		wisdomAbility,
		charismaAbility,
	} = useContext(CharacterSheetContext);

	const { register } = useFormContext();

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='ABILITY SCORES' />
			<div className={styles.attributeBox}>
				<div className={styles.attributeColumn}>
					<AbilityScoreType attributeShort='STR' attributeLong='STRENGTH' />
					<AbilityScoreType attributeShort='DEX' attributeLong='DEXTERITY' />
					<AbilityScoreType attributeShort='CON' attributeLong='CONSTITUTION' />
					<AbilityScoreType attributeShort='INT' attributeLong='INTELLIGENCE' />
					<AbilityScoreType attributeShort='WIS' attributeLong='WISDOM' />
					<AbilityScoreType attributeShort='CHA' attributeLong='CHARISMA' />
				</div>
				<div className={styles.inputDiv}>
					<div className={styles.scoreModifierColumn}>
						<div className={styles.columnLabel}>SCORE</div>
						<input
							type='number'
							value={GetAbilityScoreTotal(strengthAbility).toString()}
							readOnly
						/>
						<input
							type='number'
							value={GetAbilityScoreTotal(dexterityAbility).toString()}
							readOnly
						/>
						<input
							type='number'
							value={GetAbilityScoreTotal(constitutionAbility).toString()}
							readOnly
						/>
						<input
							type='number'
							value={GetAbilityScoreTotal(intelligenceAbility).toString()}
							readOnly
						/>
						<input
							type='number'
							value={GetAbilityScoreTotal(wisdomAbility).toString()}
							readOnly
						/>
						<input
							type='number'
							value={GetAbilityScoreTotal(charismaAbility).toString()}
							readOnly
						/>
					</div>
					<div className={styles.scoreModifierColumn}>
						<div className={styles.columnLabel}>MODIFIER</div>
						<input
							type='number'
							value={GetModifier(strengthAbility)}
							readOnly
						/>
						<input
							type='number'
							value={GetModifier(dexterityAbility)}
							readOnly
						/>
						<input
							type='number'
							value={GetModifier(constitutionAbility)}
							readOnly
						/>
						<input
							type='number'
							value={GetModifier(intelligenceAbility)}
							readOnly
						/>
						<input type='number' value={GetModifier(wisdomAbility)} readOnly />
						<input
							type='number'
							value={GetModifier(charismaAbility)}
							readOnly
						/>
					</div>
					<div className={styles.penDrainColumn}>
						<div className={styles.columnLabel}>BONUS</div>
						<input type='number' {...register('bonusStr')} min={0} />
						<input type='number' {...register('bonusDex')} min={0} />
						<input type='number' {...register('bonusCon')} min={0} />
						<input type='number' {...register('bonusInt')} min={0} />
						<input type='number' {...register('bonusWis')} min={0} />
						<input type='number' {...register('bonusCha')} min={0} />
					</div>
					<div className={styles.penDrainColumn}>
						<div className={styles.columnLabel}>PENALTY</div>
						<input type='number' {...register('penaltyStr')} min={0} />
						<input type='number' {...register('penaltyDex')} min={0} />
						<input type='number' {...register('penaltyCon')} min={0} />
						<input type='number' {...register('penaltyInt')} min={0} />
						<input type='number' {...register('penaltyWis')} min={0} />
						<input type='number' {...register('penaltyCha')} min={0} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AbilityScoreBlock;
