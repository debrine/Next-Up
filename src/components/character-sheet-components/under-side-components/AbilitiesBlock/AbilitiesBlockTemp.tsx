import SheetLabel from '../../labels/SheetLabel';
import styles from './AbilitiesBlock.module.css';
import { useEffect } from 'react';
import AddButtonLabel from '../../../character-creation-components/AddButtonLabel/AddButtonLabel';
import {
	FieldValues,
	useFieldArray,
	useForm,
	// useFormContext,
} from 'react-hook-form';
import { useAbilities } from '../../../../hooks/useAbilities';
import { useCurrentID } from '../../../../hooks/useCurrentID';

type FormValues = FieldValues & {
	name: AbilityListTypes[];
};

// Dylan: Updates dynamically, but doesn't change between characters.

function AbilitiesBlockTemp() {
	const { currentID } = useCurrentID();

	const { abilitiesArray, updateAbilityArray } = useAbilities();

	const { control, register, watch, reset } = useForm<FormValues>();
	// const { control, register } = useFormContext<FormValues>();

	const { fields, append, remove } = useFieldArray<
		FormValues,
		'abilities',
		'id'
	>({
		control,
		name: 'abilities',
		keyName: 'id',
	});

	useEffect(() => {
		let defaultValues = {
			abilities: abilitiesArray,
		};

		reset({ ...defaultValues });
	}, [currentID]);

	useEffect(() => {
		const subscription = watch((data) => {
			updateAbilityArray(data.abilities);
			console.log(data);
			console.log(currentID);
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
			<div className={styles.abilitiesBlockTempContent}>
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
										// value={abilitiesArray[index].abilityName}
										spellCheck={false}
										className={styles.textInput}
									/>
								</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<input
										type='text'
										{...register(`abilities.${index}.abilitySource`)}
										// defaultValue={abilitiesArray[index].abilitySource}
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
										// defaultValue={abilitiesArray[index].usesResolve}
										className={styles.numberInput}
									/>
								</div>
							</div>
							<div className={styles.abilityDescription}>
								<textarea
									{...register(`abilities.${index}.abilityDescription`)}
									// defaultValue={abilitiesArray[index].abilityDescription}
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

export default AbilitiesBlockTemp;
