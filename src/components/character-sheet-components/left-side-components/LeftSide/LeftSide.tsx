import AbilityScoreBlock from '../ability-score-components/AbilityScoreBlock/AbilityScoreBlock';
import SkillsBlock from '../SkillsBlock/SkillsBlock';
import styles from './LeftSide.module.css';

function LeftSide() {
	return (
		<div className={styles.parentDiv}>
			<AbilityScoreBlock />
			<SkillsBlock />
		</div>
	);
}

export default LeftSide;
