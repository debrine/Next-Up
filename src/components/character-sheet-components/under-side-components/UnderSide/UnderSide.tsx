import AbilitiesBlock from '../AbilitiesBlock/AbilitiesBlock';
import AbilitiesBlockTemp from '../AbilitiesBlock/AbilitiesBlockTemp';
import styles from './UnderSide.module.css';

function UnderSide() {
	return (
		<div className={styles.parentDiv}>
			<AbilitiesBlock />
			{/* <AbilitiesBlockTemp /> */}
		</div>
	);
}

export default UnderSide;
