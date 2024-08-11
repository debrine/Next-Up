import { useFormContext } from 'react-hook-form';
import SheetLabel from '../../labels/SheetLabel';
import styles from './SkillNotesBlock.module.css';

function SkillNotesBlock() {
	const { register } = useFormContext();

	return (
		<div className={styles.parentDiv}>
			<SheetLabel sheetLabelText='SKILL NOTES' />
			<div className={styles.textAreaWrap}>
				<textarea {...register('skillNotes')} spellCheck={false} />
			</div>
		</div>
	);
}

export default SkillNotesBlock;
