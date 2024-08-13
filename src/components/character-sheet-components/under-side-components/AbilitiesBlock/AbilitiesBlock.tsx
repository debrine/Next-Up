import SheetLabel from '../../labels/SheetLabel';
import styles from './AbilitiesBlock.module.css';
import AddButtonLabel from '../../../character-creation-components/AddButtonLabel/AddButtonLabel';
import { FieldValues, useFormContext } from 'react-hook-form';
import { useEffect } from 'react';
import { useAbilities } from '../../../../hooks/useAbilities';

// Dylan: Works with no infinite render, but not updating dynamically.

type FormValues = FieldValues & {
	name: AbilityListTypes[];
};

function AbilitiesBlock() {
	const { abilitiesArray } = useAbilities();

	const { handleAddAbility, handleDeleteAbility } = useAbilities();

	const { register } = useFormContext<FormValues>();

	useEffect(() => {
		console.log(abilitiesArray);
	}, []);

	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText='ABILITIES' />
				<div
					className={styles.addAbilityButton}
					onClick={() => {
						handleAddAbility();
					}}
				>
					<AddButtonLabel itemToAdd='ABILITY' />
				</div>
			</div>
			<div className={styles.abilitiesBlockContent}>
				{abilitiesArray.map((ability, index) => {
					return (
						<div
							className={styles.individualAbility}
							key={`${ability.abilityName}${index}`}
						>
							<div
								className={styles.delete}
								onClick={() => {
									handleDeleteAbility(index);
								}}
							>
								&#128465;
							</div>
							<div className={styles.topRow}>
								<div className={styles.inputDiv}>
									<input
										type='text'
										{...register(`abilities.${index}.abilityName`)}
										defaultValue={abilitiesArray[index].abilityName}
										spellCheck={false}
										className={styles.textInput}
									/>
								</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<input
										type='text'
										{...register(`abilities.${index}.abilitySource`)}
										defaultValue={abilitiesArray[index].abilitySource}
										spellCheck={false}
										className={styles.textInput}
									/>
								</div>
								<div className={styles.verticalBar} />
								<div>TYPE</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>RP</div>
									<input
										type='number'
										{...register(`abilities.${index}.usesResolve`)}
										defaultValue={abilitiesArray[index].usesResolve}
										className={styles.numberInput}
									/>
								</div>
							</div>
							<div className={styles.abilityDescription}>
								<textarea
									{...register(`abilities.${index}.abilityDescription`)}
									defaultValue={abilitiesArray[index].abilityDescription}
									className={styles.abilityTextarea}
									spellCheck={false}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default AbilitiesBlock;
