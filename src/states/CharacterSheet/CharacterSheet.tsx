import styles from './CharacterSheet.module.css';
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx';
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx';
import LeftSide from '../../components/character-sheet-components/left-side-components/LeftSide/LeftSide.tsx';
import RightSide from '../../components/character-sheet-components/right-side-components/RightSide/RightSide.tsx';
import { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../../utils/getValue.ts';
import { levelUpList } from '../../data/levelUpList.ts';
import FirstLevelMessage from '../../components/character-class-components/FirstLevelMessage/FirstLevelMessage.tsx';
import { useAbilityScores } from '../../hooks/useAbilityScores.ts';
import { useSkills } from '../../hooks/useSkills.ts';
import { useStaminaHealthResolve } from '../../hooks/useStaminaHealthResolve.ts';
import { FormProvider, useForm } from 'react-hook-form';
import { setValue } from '../../utils/setValue.ts';
import { GetModifier } from '../../utils/GetModifier.ts';
import { useInitiativeScore } from '../../hooks/useInitiativeScore.ts';

type SkillBlockStatesListType = {
	[key: string]: {
		skillState: SkillListType;
		setSkill: (newValues: SkillListType) => void;
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
	// setCurrentSP: Dispatch<SetStateAction<number>>;
	currentHP: number;
	// setCurrentHP: Dispatch<SetStateAction<number>>;
	currentRP: number;
	// setCurrentRP: Dispatch<SetStateAction<number>>;
	tempSP: number;
	// setTempSP: Dispatch<SetStateAction<number>>;
	tempHP: number;
	// setTempHP: Dispatch<SetStateAction<number>>;
	tempRP: number;
	// setTempRP: Dispatch<SetStateAction<number>>;
	SkillBlockStatesList: SkillBlockStatesListType;
	characterInfoObject: CharacterInfoObjectType;
	characterInfoDynamicObject: CharacterBasicInfoDynamicType;
}>({} as any);

function CharacterSheet() {
	const { characterID } = useParams();

	// Store the characterID in a useRef. This is needed to not overwrite the data in the previously selected character.
	const currentID = useRef<string | undefined>(characterID);

	const methods = useForm();
	const { reset, watch } = methods;

	const {
		strengthAbility,
		setStrengthAbility,
		dexterityAbility,
		setDexterityAbility,
		constitutionAbility,
		setConstitutionAbility,
		intelligenceAbility,
		setIntelligenceAbility,
		wisdomAbility,
		setWisdomAbility,
		charismaAbility,
		setCharismaAbility,
	} = useAbilityScores();

	const { initMisc, setInitMisc } = useInitiativeScore();

	const { currentSP, currentHP, currentRP, tempSP, tempHP, tempRP } =
		useStaminaHealthResolve();

	const { SkillBlockStatesList } = useSkills();

	// useEffect for all changes related to swapping characters
	useEffect(() => {
		// Change the currentID to the params.
		currentID.current = characterID;

		// Set default values based on character selected.
		let values = {
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

			StrengthModifier: GetModifier(strengthAbility).toString(),
			DexterityModifier: GetModifier(dexterityAbility).toString(),
			ConstitutionModifier: GetModifier(constitutionAbility).toString(),
			IntelligenceModifier: GetModifier(intelligenceAbility).toString(),
			WisdomModifier: GetModifier(wisdomAbility).toString(),
			CharismaModifier: GetModifier(charismaAbility).toString(),

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
		};

		// Reset the defaultValues and values.
		reset({ ...values });

		// Ability Scores set on change.

		setStrengthAbility(getValue(`Strength${characterID}`));
		setCharacterInfoObject(getValue(`characterBasicInfo${characterID}`));
		setDexterityAbility(getValue(`Dexterity${characterID}`));
		setConstitutionAbility(getValue(`Constitution${characterID}`));
		setIntelligenceAbility(getValue(`Intelligence${characterID}`));
		setWisdomAbility(getValue(`Wisdom${characterID}`));
		setCharismaAbility(getValue(`Charisma${characterID}`));

		// Initiative Misc set on change
		setInitMisc(getValue(`InitiativeMiscModifier${characterID}`));

		Object.keys(SkillBlockStatesList).forEach((key) => {
			SkillBlockStatesList[key].setSkill(getValue(`${key}${characterID}`));
		});
	}, [characterID, strengthAbility]);

	useEffect(() => {
		const subscription = watch((data) => {
			if (characterID === currentID.current) {
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

				// Strength
				setValue(`Strength${characterID}`, {
					aSName: 'Strength',
					asBonus: Number(data.bonusStr),
					asPenalty: Number(data.penaltyStr),
					value: Number(strengthAbility.value),
				});
				setStrengthAbility(getValue(`Strength${characterID}`));

				// Dexterity
				setValue(`Dexterity${characterID}`, {
					aSName: 'Dexterity',
					asBonus: Number(data.bonusDex),
					asPenalty: Number(data.penaltyDex),
					value: Number(dexterityAbility.value),
				});
				setDexterityAbility(getValue(`Dexterity${characterID}`));

				// Constitution
				setValue(`Constitution${characterID}`, {
					aSName: 'Constitution',
					asBonus: Number(data.bonusCon),
					asPenalty: Number(data.penaltyCon),
					value: Number(constitutionAbility.value),
				});
				setConstitutionAbility(getValue(`Constitution${characterID}`));

				// Intelligence
				setValue(`Intelligence${characterID}`, {
					aSName: 'Intelligence',
					asBonus: Number(data.bonusInt),
					asPenalty: Number(data.penaltyInt),
					value: Number(intelligenceAbility.value),
				});
				setIntelligenceAbility(getValue(`Intelligence${characterID}`));

				// Wisdom
				setValue(`Wisdom${characterID}`, {
					aSName: 'Wisdom',
					asBonus: Number(data.bonusWis),
					asPenalty: Number(data.penaltyWis),
					value: Number(wisdomAbility.value),
				});
				setWisdomAbility(getValue(`Wisdom${characterID}`));

				// Charisma
				setValue(`Charisma${characterID}`, {
					aSName: 'Charisma',
					asBonus: Number(data.bonusCha),
					asPenalty: Number(data.penaltyCha),
					value: Number(charismaAbility.value),
				});
				setCharismaAbility(getValue(`Charisma${characterID}`));

				// InitiativeBlock registers.
				setValue(
					`InitiativeMiscModifier${characterID}`,
					Number(data.InitiativeMiscModifier)
				);
				setInitMisc(getValue(`InitiativeMiscModifier${characterID}`));
			}
		});
		return () => subscription.unsubscribe();
	}, [characterID, watch]);

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

	/*
    Stamina, Health, and Resolve
  */

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
				// setCurrentSP: setCurrentSP,
				currentHP: currentHP,
				// setCurrentHP: setCurrentHP,
				currentRP: currentRP,
				// setCurrentRP: setCurrentRP,
				tempSP: tempSP,
				// setTempSP: setTempSP,
				tempHP: tempHP,
				// setTempHP: setTempHP,
				tempRP: tempRP,
				// setTempRP: setTempRP,
				SkillBlockStatesList: SkillBlockStatesList,
				characterInfoObject: characterInfoObject,
				characterInfoDynamicObject: characterInfoDynamicObject,
				// setCharacterInfoDynamicObject: setCharacterInfoDynamicObject,
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
						</div>
					</div>
				)}
			</FormProvider>
		</CharacterSheetContext.Provider>
	);
}

export default CharacterSheet;
