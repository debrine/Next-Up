import { useContext } from 'react';
import styles from './SkillsBlock.module.css';
import { CharacterSheetContext } from '../../../../states/CharacterSheet/CharacterSheet';
import { skillList } from '../../../../data/skillList';
import { getValue } from '../../../../utils/getValue';
import { useParams } from 'react-router-dom';
import SheetLabel from '../../labels/SheetLabel';
import { GetModifier } from '../../../../utils/GetModifier';
import { classList } from '../../../../data/class-information/classList';
import { useFormContext } from 'react-hook-form';

function SkillsBlock() {
	const { characterID } = useParams();

	const { characterInfoObject, SkillBlockStatesList } = useContext(
		CharacterSheetContext
	);

	const { register } = useFormContext();

	const skillArray: string[] = Object.keys(skillList).map((key: string) => {
		return key;
	});

	// Skill ranks used
	function getUsedRanks() {
		let tempRanks: number = 0;
		skillArray.forEach((skill) => {
			tempRanks += getValue(`${skill}${characterID}`).ranks;
		});

		return tempRanks;
	}

	// Max Skill ranks (Don't use GetModifier, as bonuses and Penalties do not affect skill ranks per level.)
	function getMaxRanks() {
		return (
			(Math.floor(getValue(`Intelligence${characterID}`).value / 2 - 5) +
				classList[characterInfoObject.chClass].classDefaults
					.skillPointsPerLevel) *
			Number(getValue(`Level${characterID}`))
		);
	}

	// Checkbox function to make skill a class skill/not.
	function handleClassSkill(skill: string) {
		let tempSkill: SkillListType = SkillBlockStatesList[skill].skillState;
		tempSkill.isClassSkill = !tempSkill.isClassSkill;
		SkillBlockStatesList[skill].updateState(tempSkill);
	}

	return (
		<div className={styles.parentDiv}>
			<div className={styles.skillsHead}>
				<SheetLabel sheetLabelText='SKILLS' />
				<div className={styles.skillsHeadRight}>
					<div className={styles.skillsHeadRightTextDiv}>
						<div className={styles.skillsHeadRightText}>SKILL RANKS</div>
						<div className={styles.skillsHeadRightText}>USED</div>
					</div>
					<div className={styles.skillsHeadRightRanks}>
						<input type='number' readOnly value={getUsedRanks()} />
					</div>
					<div className={styles.skillsHeadRightTextDiv}>
						<div className={styles.skillsHeadRightText}>SKILL RANKS</div>
						<div className={styles.skillsHeadRightText}>PER LEVEL</div>
					</div>
					<div className={styles.skillsHeadRightRanks}>
						<input type='number' readOnly value={getMaxRanks()} />
					</div>
				</div>
			</div>
			<div className={styles.skillInputLabels}>
				<div className={styles.IndividualSkillInputLabel}>TOTAL</div>
				<div className={styles.IndividualSkillInputLabel}>RANKS</div>
				<div className={styles.IndividualSkillInputLabel}>CLASS BONUS</div>
				<div className={styles.IndividualSkillInputLabel}>ABILITY MOD</div>
			</div>
			{skillArray.map((skill) => {
				return (
					<div className={styles.individualSkillDiv} key={skill}>
						<div className={styles.skillLeftSide}>
							<div className={styles.classAndName}>
								{/* Why did I do this??? */}
								{/* {SkillBlockStatesList[skill].skillState.isClassSkill ? (
									<input
										type='checkbox'
										{...register(`${skill}Checkbox`)}
										defaultChecked={
											SkillBlockStatesList[skill].skillState.isClassSkill
												? true
												: false
										}
										onClick={() => handleClassSkill(skill)}
									/>
								) : (
									<input
										type='checkbox'
										onClick={() => handleClassSkill(skill)}
									/>
								)} */}
								<input
									type='checkbox'
									{...register(`${skill}Checkbox`)}
									defaultChecked={
										SkillBlockStatesList[skill].skillState.isClassSkill
											? true
											: false
									}
									onClick={() => handleClassSkill(skill)}
								/>{' '}
								{skill.toUpperCase()}
							</div>

							{skill === 'Profession' && (
								<div className={styles.professionName}>
									<input type='text' {...register(`ProfessionName`)} />
								</div>
							)}
						</div>
						<div className={styles.skillRightSide}>
							{/* Total */}
							<input
								type='number'
								value={SkillBlockStatesList[skill].skillState.value.toString()}
								// value={1}
								readOnly
							/>{' '}
							={/* Ranks */}
							<input
								type='number'
								{...register(`${skill}Ranks`)}
								value={
									SkillBlockStatesList[skill].skillState
										.operativeSpecializationSkill
										? getValue(`Level${characterID}`)
										: SkillBlockStatesList[skill].skillState.ranks
								}
								readOnly={
									SkillBlockStatesList[skill].skillState
										.operativeSpecializationSkill
										? true
										: false
								}
								max={getValue(`Level${characterID}`)}
								min={0}
							/>{' '}
							+{/* Class Bonus */}
							<input
								type='number'
								value={SkillBlockStatesList[skill].skillState.classSkillBonus}
								readOnly
							/>{' '}
							+{/* Ability Mod */}
							<input
								type='number'
								value={GetModifier(
									getValue(
										`${skillList[skill].attributeAffecting}${characterID}`
									)
								)}
								readOnly
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SkillsBlock;
