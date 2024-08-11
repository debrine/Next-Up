import styles from './DescriptionBlock.module.css';
import SheetLabel from '../labels/SheetLabel.tsx';
import { useFormContext } from 'react-hook-form';

function DescriptionBlock() {
	const { register } = useFormContext();

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='DESCRIPTION' />
			<div className={styles.descriptionBlockWrap}>
				<textarea {...register('descriptionBlock')} spellCheck={false} />
			</div>
		</div>
	);
}

export default DescriptionBlock;
