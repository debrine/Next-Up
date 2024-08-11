import AbilityScoreBlock from '../ability-score-components/AbilityScoreBlock/AbilityScoreBlock';
import SkillNotesBlock from '../SkillNotesBlock/SkillNotesBlock';
import SkillsBlock from '../SkillsBlock/SkillsBlock';
import styles from './LeftSide.module.css';

function LeftSide() {
	return (
		<div className={styles.parentDiv}>
			<AbilityScoreBlock />
			<SkillsBlock />
			<SkillNotesBlock />
		</div>
	);
}

export default LeftSide;
