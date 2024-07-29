import styles from './DescriptionBlock.module.css';
import SheetLabel from '../labels/SheetLabel.tsx';
import { useForm } from 'react-hook-form';
import { getValue } from '../../../utils/getValue.ts';
import { useEffect, useRef } from 'react';
import { setValue } from '../../../utils/setValue.ts';
import { useParams } from 'react-router-dom';

function DescriptionBlock() {
	const { characterID } = useParams();

	// Store our characterID in a useRef. This is needed to not overwrite the data in the previously selected character.
	// Only works if in each individual component and not passed through context.
	const currentID = useRef<string>(characterID!);

	const { register, watch, reset } = useForm();

	useEffect(() => {
		// Change the currentID to the params.
		currentID.current = characterID!;

		// Set default values based on character selected.
		let defaultValues = {
			descriptionBlock: getValue(`Description${characterID}`),
		};

		// Reset the defaultValues
		reset({ ...defaultValues });
	}, [characterID]);

	useEffect(() => {
		const subscription = watch((data) => {
			if (characterID === currentID.current) {
				setValue(`Description${characterID}`, data.descriptionBlock);
			}
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='DESCRIPTION' />
			<textarea
				{...register('descriptionBlock')}
				id={styles.descriptionID}
				spellCheck={false}
			/>
		</div>
	);
}

export default DescriptionBlock;
