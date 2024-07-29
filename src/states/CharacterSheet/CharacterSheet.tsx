import styles from './CharacterSheet.module.css';
import CharacterInfo from '../../components/character-sheet-components/CharacterInfo/CharacterInfo.tsx';
import DescriptionBlock from '../../components/character-sheet-components/DescriptionBlock/DescriptionBlock.tsx';
import LeftSide from '../../components/character-sheet-components/left-side-components/LeftSide/LeftSide.tsx';
import RightSide from '../../components/character-sheet-components/right-side-components/RightSide/RightSide.tsx';
import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { getValue } from '../../utils/getValue.ts';
import { levelUpList } from '../../data/levelUpList.ts';
import FirstLevelMessage from '../../components/character-class-components/FirstLevelMessage/FirstLevelMessage.tsx';
import { useAbilityScores } from '../../hooks/useAbilityScores.ts';
import { useSkills } from '../../hooks/useSkills.ts';

// Should a reset be called as an onClick for the link itself? Something to look into.

type SkillBlockStatesListType = {
	[key: string]: {
		skillState: SkillListType;
		setSkill: (newValues: SkillListType) => void;
	};
};

export const CharacterSheetContext = createContext<{
	strengthAbility: AbilityScoreType;
	setStrengthAbility: (newValues: AbilityScoreType) => void;
	dexterityAbility: AbilityScoreType;
	setDexterityAbility: (newValues: AbilityScoreType) => void;
	constitutionAbility: AbilityScoreType;
	setConstitutionAbility: (newValues: AbilityScoreType) => void;
	intelligenceAbility: AbilityScoreType;
	setIntelligenceAbility: (newValues: AbilityScoreType) => void;
	wisdomAbility: AbilityScoreType;
	setWisdomAbility: (newValues: AbilityScoreType) => void;
	charismaAbility: AbilityScoreType;
	setCharismaAbility: (newValues: AbilityScoreType) => void;
	currentSP: number;
	setCurrentSP: Dispatch<SetStateAction<number>>;
	currentHP: number;
	setCurrentHP: Dispatch<SetStateAction<number>>;
	currentRP: number;
	setCurrentRP: Dispatch<SetStateAction<number>>;
	tempSP: number;
	setTempSP: Dispatch<SetStateAction<number>>;
	tempHP: number;
	setTempHP: Dispatch<SetStateAction<number>>;
	tempRP: number;
	setTempRP: Dispatch<SetStateAction<number>>;
	SkillBlockStatesList: SkillBlockStatesListType;
	characterInfoObject: CharacterInfoObjectType;
	characterInfoDynamicObject: CharacterBasicInfoDynamicType;
}>({} as any);

function CharacterSheet() {
	const { characterID } = useParams();

	const {
		strength: strengthAbility,
		editStrength: setStrengthAbility,
		dexterity: dexterityAbility,
		editDexterity: setDexterityAbility,
		constitution: constitutionAbility,
		editConstitution: setConstitutionAbility,
		intelligence: intelligenceAbility,
		editIntelligence: setIntelligenceAbility,
		wisdom: wisdomAbility,
		editWisdom: setWisdomAbility,
		charisma: charismaAbility,
		editCharisma: setCharismaAbility,
	} = useAbilityScores();

	const { SkillBlockStatesList } = useSkills();

	useEffect(() => {
		setCharacterInfoObject(getValue(`characterBasicInfo${characterID}`));

		Object.keys(SkillBlockStatesList).forEach((key) => {
			SkillBlockStatesList[key].setSkill(getValue(`${key}${characterID}`));
		});
	}, [characterID]);

	const characterInfoDynamicObject: CharacterBasicInfoDynamicType = useMemo(
		() => getValue(`characterBasicInfoDynamic${characterID}`),
		[characterID]
	);

	const [characterInfoObject, setCharacterInfoObject] =
		useState<CharacterInfoObjectType>(
			getValue(`characterBasicInfo${characterID}`)
		);

	/*
    States to be passed to children.*****************************************************************
    */

	// Character Level

	const characterLevel = getValue(`Level${characterID}`);

	/*
    Stamina, Health, and Resolve
  */
	const [currentSP, setCurrentSP] = useState<number>(
		getValue(`CurrentSP${characterID}`)
	);
	const [currentHP, setCurrentHP] = useState<number>(
		getValue(`CurrentHP${characterID}`)
	);
	const [currentRP, setCurrentRP] = useState<number>(
		getValue(`CurrentRP${characterID}`)
	);
	const [tempSP, setTempSP] = useState<number>(
		getValue(`TempSP${characterID}`)
	);
	const [tempHP, setTempHP] = useState<number>(
		getValue(`TempHP${characterID}`)
	);
	const [tempRP, setTempRP] = useState<number>(
		getValue(`TempRP${characterID}`)
	);

	const Component =
		levelUpList['1'][characterInfoObject.chClass]?.componentForClass;

	return (
		<CharacterSheetContext.Provider
			value={{
				strengthAbility: strengthAbility,
				setStrengthAbility: setStrengthAbility,
				dexterityAbility: dexterityAbility,
				setDexterityAbility: setDexterityAbility,
				constitutionAbility: constitutionAbility,
				setConstitutionAbility: setConstitutionAbility,
				intelligenceAbility: intelligenceAbility,
				setIntelligenceAbility: setIntelligenceAbility,
				wisdomAbility: wisdomAbility,
				setWisdomAbility: setWisdomAbility,
				charismaAbility: charismaAbility,
				setCharismaAbility: setCharismaAbility,
				currentSP: currentSP,
				setCurrentSP: setCurrentSP,
				currentHP: currentHP,
				setCurrentHP: setCurrentHP,
				currentRP: currentRP,
				setCurrentRP: setCurrentRP,
				tempSP: tempSP,
				setTempSP: setTempSP,
				tempHP: tempHP,
				setTempHP: setTempHP,
				tempRP: tempRP,
				setTempRP: setTempRP,
				SkillBlockStatesList: SkillBlockStatesList,
				characterInfoObject: characterInfoObject,
				characterInfoDynamicObject: characterInfoDynamicObject,
				// setCharacterInfoDynamicObject: setCharacterInfoDynamicObject,
			}}
		>
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
		</CharacterSheetContext.Provider>
	);
}

export default CharacterSheet;
