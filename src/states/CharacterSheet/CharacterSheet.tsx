import styles from './CharacterSheet.module.css';
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx';
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx';
import LeftSide from '../../components/character-sheet-components/left-side-components/LeftSide/LeftSide.tsx';
import RightSide from '../../components/character-sheet-components/right-side-components/RightSide/RightSide.tsx';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../../utils/getValue.ts';
import { levelUpList } from '../../data/levelUpList.ts';
import FirstLevelMessage from '../../components/character-class-components/FirstLevelMessage/FirstLevelMessage.tsx';
import { useAbilityScores } from '../../hooks/useAbilityScores.ts';
import { useSkills } from '../../hooks/useSkills.ts';
import { useStaminaHealthResolve } from '../../hooks/useStaminaHealthResolve.ts';
import { FormProvider, useForm } from 'react-hook-form';
import { setValue } from '../../utils/setValue.ts';
import { useInitiativeScore } from '../../hooks/useInitiativeScore.ts';
import { useCurrentID } from '../../hooks/useCurrentID.ts';
import { GetModifier } from '../../utils/GetModifier.ts';
import UnderSide from '../../components/character-sheet-components/under-side-components/UnderSide/UnderSide.tsx';
import { useArmorClassBlock } from '../../hooks/useArmorClassBlock.ts';
// import { useAbilities } from '../../hooks/useAbilities.ts';

type SkillBlockStatesListType = {
	[key: string]: {
		skillState: SkillListType;
		updateState: (newValue: SkillListType) => void;
	};
};

export const CharacterSheetContext = createContext<{
	strengthAbility: AbilityScoreType;
	dexterityAbility: AbilityScoreType;
	constitutionAbility: AbilityScoreType;
	intelligenceAbility: AbilityScoreType;
	wisdomAbility: AbilityScoreType;
	charismaAbility: AbilityScoreType;
	initMisc: number;
	currentSP: number;
	currentHP: number;
	currentRP: number;
	tempSP: number;
	tempHP: number;
	tempRP: number;
	SkillBlockStatesList: SkillBlockStatesListType;
	characterInfoObject: CharacterInfoObjectType;
	characterInfoDynamicObject: CharacterBasicInfoDynamicType;
	armorEquipped: ArmorType;
	armorMiscMods: {
		energy: number;
		kenetic: number;
	};
	// abilitiesArray: AbilityListTypes[];
}>({} as any);

function CharacterSheet() {
	const { characterID } = useParams();

	// This is needed to not overwrite the data in the previously selected character. Form will write data before the characterID from useParams would update.
	const { currentID } = useCurrentID();

	// React-hook-form methods.
	const methods = useForm();
	const { reset, watch } = methods;

	// Custom hook states.

	const {
		strengthAbility,
		dexterityAbility,
		constitutionAbility,
		intelligenceAbility,
		wisdomAbility,
		charismaAbility,
		updateCharisma,
		updateConstitution,
		updateDexterity,
		updateIntelligence,
		updateStrength,
		updateWisdom,
	} = useAbilityScores();

	const { initMisc, updateInitMisc } = useInitiativeScore();

	const {
		currentSP,
		updateCurrentSP,
		currentHP,
		updateCurrentHP,
		currentRP,
		updateCurrentRP,
		tempSP,
		updateTempSP,
		tempHP,
		updateTempHP,
		tempRP,
		updateTempRP,
	} = useStaminaHealthResolve();

	const { SkillBlockStatesList, setSkill } = useSkills();

	const {
		armorEquipped,
		updateArmorEquipped,
		armorMiscMods,
		updateArmorMiscMods,
	} = useArmorClassBlock();

	// const { abilitiesArray, updateAbilityArray } = useAbilities();

	// useEffect for all changes related to swapping characters
	useEffect(() => {
		// Set default values based on character selected.
		let defaultValues = {
			// CharacterInfo registers

			characterAlignment: characterInfoDynamicObject.characterAlignment,
			characterDiety: characterInfoDynamicObject.characterDiety,
			characterGender: characterInfoDynamicObject.characterGender,
			characterHomeWorld: characterInfoDynamicObject.characterHomeWorld,
			characterName: characterInfoDynamicObject.characterName,
			characterSize: characterInfoDynamicObject.characterSize,
			characterSpeed: characterInfoDynamicObject.characterSpeed,
			playerName: characterInfoDynamicObject.playerName,

			// DescriptionBlock registers

			descriptionBlock: getValue(`Description${characterID}`),

			// AbilityScoreBlock registers

			bonusStr: strengthAbility.asBonus,
			bonusDex: dexterityAbility.asBonus,
			bonusCon: constitutionAbility.asBonus,
			bonusInt: intelligenceAbility.asBonus,
			bonusWis: wisdomAbility.asBonus,
			bonusCha: charismaAbility.asBonus,

			penaltyStr: strengthAbility.asPenalty,
			penaltyDex: dexterityAbility.asPenalty,
			penaltyCon: constitutionAbility.asPenalty,
			penaltyInt: intelligenceAbility.asPenalty,
			penaltyWis: wisdomAbility.asPenalty,
			penaltyCha: charismaAbility.asPenalty,

			// InitiativeBlock registers
			InitiativeMiscModifier: initMisc,

			// HealthAndResolveBlock registers
			currentSP: currentSP,
			currentHP: currentHP,
			currentRP: currentRP,
			tempSP: tempSP,
			tempHP: tempHP,
			tempRP: tempRP,

			// SkillsBlock registers (Individual skills registered in SkillsBlock.tsx)
			ProfessionName: getValue(`ProfessionName${characterID}`),

			// SkillNotesBlock registers
			skillNotes: getValue(`SkillNotes${characterID}`),

			// ArmorClassBlock register
			bonusEAC: armorEquipped.armorEAC,
			miscModEAC: armorMiscMods.energy,
			bonusKAC: armorEquipped.armorKAC,
			miscModKAC: armorMiscMods.kenetic,
			damageReduction: getValue(`DR${characterID}`),
			resistances: getValue(`Resistances${characterID}`),

			// AbilitiesBlock, WeaponsBlock, and ArmorBlock registers will be done in their components since they use useFieldArray.
			// abilities: abilitiesArray,
		};

		// Reset the defaultValues.
		reset({ ...defaultValues });

		setCharacterInfoObject(getValue(`characterBasicInfo${characterID}`));
	}, [
		currentID,
		strengthAbility,
		constitutionAbility,
		dexterityAbility,
		wisdomAbility,
		intelligenceAbility,
		charismaAbility,
		initMisc,
		currentSP,
		currentHP,
		currentRP,
		tempSP,
		tempHP,
		tempRP,
		// abilitiesArray,
	]);

	// useEffect to save data to local storage.
	useEffect(() => {
		const subscription = watch((data) => {
			// CharacterInfo registers
			setValue(`characterBasicInfoDynamic${characterID}`, {
				characterAlignment: data.characterAlignment,
				characterDiety: data.characterDiety,
				characterGender: data.characterGender,
				characterHomeWorld: data.characterHomeWorld,
				characterName: data.characterName,
				characterSize: data.characterSize,
				characterSpeed: data.characterSpeed,
				playerName: data.playerName,
			});

			// DescriptionBlock registers.
			setValue(`Description${characterID}`, data.descriptionBlock);

			// AbilityScoreBlock registers.

			updateStrength({
				aSName: 'Strength',
				asBonus: Number(data.bonusStr),
				asPenalty: Number(data.penaltyStr),
				value: Number(strengthAbility.value),
			});

			updateDexterity({
				aSName: 'Dexterity',
				asBonus: Number(data.bonusDex),
				asPenalty: Number(data.penaltyDex),
				value: Number(dexterityAbility.value),
			});

			updateConstitution({
				aSName: 'Constitution',
				asBonus: Number(data.bonusCon),
				asPenalty: Number(data.penaltyCon),
				value: Number(constitutionAbility.value),
			});

			updateIntelligence({
				aSName: 'Intelligence',
				asBonus: Number(data.bonusInt),
				asPenalty: Number(data.penaltyInt),
				value: Number(intelligenceAbility.value),
			});

			updateWisdom({
				aSName: 'Wisdom',
				asBonus: Number(data.bonusWis),
				asPenalty: Number(data.penaltyWis),
				value: Number(wisdomAbility.value),
			});

			updateCharisma({
				aSName: 'Charisma',
				asBonus: Number(data.bonusCha),
				asPenalty: Number(data.penaltyCha),
				value: Number(charismaAbility.value),
			});

			// InitiativeBlock registers.
			updateInitMisc(Number(data.InitiativeMiscModifier));

			// HealthAndResolveBlock registers.
			updateCurrentSP(Number(data.currentSP));
			updateCurrentHP(Number(data.currentHP));
			updateCurrentRP(Number(data.currentRP));
			updateTempSP(Number(data.tempSP));
			updateTempHP(Number(data.tempHP));
			updateTempRP(Number(data.tempRP));

			// SkillsBlock registers.
			setValue(`ProfessionName${characterID}`, data.ProfessionName);

			// SkillNotesBlock registers.
			setValue(`SkillNotes${characterID}`, data.skillNotes);

			Object.keys(SkillBlockStatesList).forEach((skill) => {
				// If it's a Specialization Skill, don't add the rank. It's not supposed to count to the total ranks per level, and always equal to the level of the character.
				if (
					SkillBlockStatesList[skill].skillState.operativeSpecializationSkill
				) {
					setSkill(
						0,
						GetModifier(
							getValue(
								`${SkillBlockStatesList[skill].skillState.attributeAffecting}${characterID}`
							)
						),
						skill
					);
				} else {
					setSkill(
						Number(data[`${skill}Ranks`]),
						GetModifier(
							getValue(
								`${SkillBlockStatesList[skill].skillState.attributeAffecting}${characterID}`
							)
						),
						skill
					);
				}
			});

			// ArmorClassBlock registers
			setValue(`DR${characterID}`, data.damageReduction);
			setValue(`Resistances${characterID}`, data.resistances);
			updateArmorMiscMods({
				energy: data.miscModEAC,
				kenetic: data.miscModKAC,
			});

			// AbilitiesBlock registers
			// updateAbilityArray(data.abilities);
		});
		return () => subscription.unsubscribe();
	}, [
		currentID,
		watch,
		updateCharisma,
		updateConstitution,
		updateStrength,
		updateDexterity,
		updateIntelligence,
		updateWisdom,
		strengthAbility,
		wisdomAbility,
		charismaAbility,
		dexterityAbility,
		constitutionAbility,
		intelligenceAbility,
		updateInitMisc,
		initMisc,
		currentSP,
		updateCurrentSP,
		currentHP,
		updateCurrentHP,
		currentRP,
		updateCurrentRP,
		tempSP,
		updateTempSP,
		tempHP,
		updateTempHP,
		tempRP,
		updateTempRP,
		// abilitiesArray,
		// updateAbilityArray,
	]);

	const characterInfoDynamicObject: CharacterBasicInfoDynamicType = useMemo(
		() => getValue(`characterBasicInfoDynamic${characterID}`),
		[characterID]
	);

	const [characterInfoObject, setCharacterInfoObject] =
		useState<CharacterInfoObjectType>(
			getValue(`characterBasicInfo${characterID}`)
		);

	/*
    Static States to be passed to children.*****************************************************************
    */

	// Character Level

	const characterLevel = getValue(`Level${characterID}`);

	const Component =
		levelUpList['1'][characterInfoObject.chClass]?.componentForClass;

	return (
		<CharacterSheetContext.Provider
			value={{
				strengthAbility: strengthAbility,
				dexterityAbility: dexterityAbility,
				constitutionAbility: constitutionAbility,
				intelligenceAbility: intelligenceAbility,
				wisdomAbility: wisdomAbility,
				charismaAbility: charismaAbility,

				initMisc: initMisc,

				currentSP: currentSP,
				currentHP: currentHP,
				currentRP: currentRP,
				tempSP: tempSP,
				tempHP: tempHP,
				tempRP: tempRP,

				SkillBlockStatesList: SkillBlockStatesList,

				characterInfoObject: characterInfoObject,
				characterInfoDynamicObject: characterInfoDynamicObject,

				armorEquipped: armorEquipped,
				armorMiscMods: armorMiscMods,
				// abilitiesArray: abilitiesArray,
			}}
		>
			<FormProvider {...methods}>
				{characterLevel === 0 && characterID ? (
					// Confirm all first level selections based on class, which need to be handled uniquely.
					<div className={styles.FirstLevelSelectionChanges}>
						<FirstLevelMessage />
						<div>{Component ? <Component keyID={characterID} /> : null}</div>
					</div>
				) : (
					// Once character has confirmed choices, move on to sheet.
					<div className={styles.parentDiv}>
						<div className={styles.characterSheetMainDiv}>
							<div className={styles.characterInfoDescriptionBlock}>
								<div className={styles.characterInfoBlock}>
									<CharacterInfo />
								</div>

								<div className={styles.characterDescriptionBlock}>
									<DescriptionBlock />
								</div>
							</div>
							<div className={styles.statArea}>
								<div className={styles.leftSide}>
									<LeftSide />
								</div>

								<div className={styles.rightSide}>
									<RightSide />
								</div>
							</div>
							<div className={styles.underWrapper}>
								<div className={styles.underSide}>
									<UnderSide />
								</div>
							</div>
						</div>
					</div>
				)}
			</FormProvider>
		</CharacterSheetContext.Provider>
	);
}

export default CharacterSheet;
