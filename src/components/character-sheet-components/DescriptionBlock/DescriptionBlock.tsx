import styles from './DescriptionBlock.module.css';
import SheetLabel from '../labels/SheetLabel.tsx';
import { useForm } from 'react-hook-form';
import { getValue } from '../../../utils/getValue.ts';
import { useEffect } from 'react';
import { setValue } from '../../../utils/setValue.ts';
import { useParams } from 'react-router-dom';

function DescriptionBlock() {
	const { characterID } = useParams();

	const { register, watch } = useForm({
		defaultValues: {
			descriptionBlock: getValue(`Description${characterID}`),
		},
	});

	useEffect(() => {
		const subscription = watch((data) => {
			setValue(`Description${characterID}`, data.descriptionBlock);
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
