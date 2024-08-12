import SheetLabel from '../../labels/SheetLabel';
import styles from './AbilitiesBlock.module.css';
import { useEffect } from 'react';
import AddButtonLabel from '../../../character-creation-components/AddButtonLabel/AddButtonLabel';
import { FieldValues, useFieldArray, useForm } from 'react-hook-form';
import { useAbilities } from '../../../../hooks/useAbilities';
import { useCurrentID } from '../../../../hooks/useCurrentID';

type FormValues = FieldValues & {
	name: AbilityListTypes[];
};

function AbilitiesBlock() {
	const { currentID } = useCurrentID();

	const { abilitiesArray, updateAbilityArray } = useAbilities();

	const { control, register, watch } = useForm<FormValues>({
		defaultValues: { abilities: abilitiesArray },
	});

	const { fields, append, remove } = useFieldArray<FormValues>({
		control,
		name: 'abilities',
	});

	useEffect(() => {
		const subscription = watch((data) => {
			updateAbilityArray(data.abilities);
			console.log(data.abilities);
		});
		return () => subscription.unsubscribe();
	}, [currentID, watch]);

	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText='ABILITIES' />
				<div
					className={styles.addAbilityButton}
					onClick={() => {
						append({
							abilityName: '',
							abilityDescription: '',
							abilitySource: '',
							actionType: [''],
							usesResolve: 0,
						});
					}}
				>
					<AddButtonLabel itemToAdd='ABILITY' />
				</div>
			</div>
			<div className={styles.abilitiesBlockContent}>
				{fields.map((field, index) => {
					return (
						<div className={styles.individualAbility} key={field.id}>
							<div className={styles.delete} onClick={() => remove(index)}>
								&#128465;
							</div>
							<div className={styles.topRow}>
								<div className={styles.inputDiv}>
									<input
										type='text'
										{...register(`abilities.${index}.abilityName`)}
										spellCheck={false}
										className={styles.textInput}
									/>
								</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<input
										type='text'
										{...register(`abilities.${index}.abilitySource`)}
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
										className={styles.numberInput}
									/>
								</div>
							</div>
							<div className={styles.abilityDescription}>
								<textarea
									{...register(`abilities.${index}.abilityDescription`)}
									className={styles.abilityTextarea}
									spellCheck={false}
								/>
							</div>
							<div
								className={styles.endOfAbility}
								id={`individualAbility${index}`}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default AbilitiesBlock;
