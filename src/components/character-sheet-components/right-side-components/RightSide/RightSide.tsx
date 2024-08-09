import ArmorBlock from '../ArmorBlock/ArmorBlock';
import ArmorClassBlock from '../ArmorClassBlock/ArmorClassBlock';
import AttackBonusesBlock from '../AttackBonusesBlock/AttackBonusesBlock';
import HealthAndResolveBlock from '../HealthAndResolveBlock/HealthAndResolveBlock';
import InitiativeBlock from '../InitiativeBlock/InitiativeBlock';
import SavingThrowsBlock from '../SavingThrowsBlock/SavingThrowsBlock';
import WeaponsBlock from '../WeaponsBlock/WeaponsBlock';
import styles from './RightSide.module.css';

function RightSide() {
	return (
		<div className={styles.parentDiv}>
			<InitiativeBlock />
			<HealthAndResolveBlock />
			<ArmorClassBlock />
			<SavingThrowsBlock />
			<AttackBonusesBlock />
			<WeaponsBlock />
			<ArmorBlock />
		</div>
	);
}

export default RightSide;
