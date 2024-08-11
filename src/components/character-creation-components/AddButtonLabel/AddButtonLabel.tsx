import styles from './AddButtonLabel.module.css';

type AddAbilityButtonProps = {
	itemToAdd: string;
};

function AddButtonLabel({ itemToAdd }: AddAbilityButtonProps) {
	return (
		<div className={styles.labelBox}>
			<span className={styles.labelText}>ADD {itemToAdd}</span>
			<span className={styles.labelBoxRight}>
				<div className={styles.labelBoxTopRight} />
				<div className={styles.labelBoxBottomRight} />
			</span>
		</div>
	);
}

export default AddButtonLabel;
