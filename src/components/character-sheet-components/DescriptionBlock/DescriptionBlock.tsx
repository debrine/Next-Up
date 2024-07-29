import styles from './DescriptionBlock.module.css';
import SheetLabel from '../labels/SheetLabel.tsx';
import { useFormContext } from 'react-hook-form';

function DescriptionBlock() {
	const { register } = useFormContext();

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
