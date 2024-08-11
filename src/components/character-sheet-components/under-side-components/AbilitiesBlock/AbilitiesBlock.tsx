import { useParams } from 'react-router-dom';
import { getValue } from '../../../../utils/getValue';
import SheetLabel from '../../labels/SheetLabel';
import styles from './AbilitiesBlock.module.css';
import { useEffect, useState } from 'react';
import { DeleteAbility } from '../../../../utils/DeleteAbility';
import { AddAbility } from '../../../../utils/AddAbility';
import AddButtonLabel from '../../../character-creation-components/AddButtonLabel/AddButtonLabel';

function AbilitiesBlock() {
	const { characterID } = useParams();

	const [tempArray, setTempArray] = useState<AbilityListTypes[]>(
		getValue(`Abilities${characterID}`)
	);

	let scrollCounter: number = 0;

	// Dylan: Tyring to get the page to scroll to the last element after a new ability has been added. A nice to have, but not needed right now.
	useEffect(() => {
		if (scrollCounter < 0) {
			const lastPosition: number =
				getValue(`Abilities${characterID}`).length - 1;
			const element = document.getElementById(
				`individualAbility${lastPosition}`
			)!;
			element?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [tempArray]);

	function handleAddAbility() {
		AddAbility(characterID, setTempArray);
		// const lastPosition: number = tempArray.length - 1;
		// const element = document.getElementById(
		// 	`individualAbility${lastPosition}`
		// )!;
		scrollCounter++;
		// element?.scrollIntoView({ behavior: 'smooth' });
		// window.scrollTo({
		// 	top: element.getBoundingClientRect().y,
		// 	behavior: 'smooth',
		// });
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.labelDiv}>
				<SheetLabel sheetLabelText='ABILITIES' />
				<div
					className={styles.addAbilityButton}
					onClick={() => handleAddAbility()}
				>
					<AddButtonLabel itemToAdd='ABILITY' />
				</div>
			</div>
			<div className={styles.abilitiesBlockContent}>
				{tempArray.map((ability: AbilityListTypes, index: number) => {
					return (
						<div className={styles.individualAbility} key={index}>
							<div
								className={styles.delete}
								onClick={() => DeleteAbility(index, characterID, setTempArray)}
							>
								&#128465;
							</div>
							<div className={styles.topRow}>
								<div className={styles.inputDiv}>
									<input
										type='text'
										spellCheck={false}
										className={styles.textInput}
										defaultValue={ability.abilityName}
									/>
								</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<input
										type='text'
										spellCheck={false}
										className={styles.textInput}
										defaultValue={ability.abilitySource}
									/>
								</div>
								<div className={styles.verticalBar} />
								<div>TYPE</div>
								<div className={styles.verticalBar} />
								<div className={styles.inputDiv}>
									<div className={styles.inputLabel}>RP</div>
									<input
										type='number'
										className={styles.numberInput}
										defaultValue={ability.usesResolve}
									/>
								</div>
							</div>
							<div className={styles.abilityDescription}>
								<textarea
									className={styles.abilityTextarea}
									spellCheck={false}
									defaultValue={ability.abilityDescription}
								/>
							</div>
							<div
								className={styles.endOfAbility}
								id={`individualAbility${index}`}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default AbilitiesBlock;
