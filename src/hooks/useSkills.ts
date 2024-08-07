import { useCallback, useEffect, useState } from 'react';
import { getValue } from '../utils/getValue';
import { useParams } from 'react-router-dom';
import { setValue } from '../utils/setValue';

type SkillBlockStatesListType = {
	[key: string]: {
		skillState: SkillListType;
		updateState: (newValue: SkillListType) => void;
	};
};

export function useSkills() {
	const { characterID } = useParams();

	//Acrobatics
	const [acrobatics, setAcrobatics] = useState<SkillListType>(
		getValue(`Acrobatics${characterID}`)
	);

	const updateAcrobatics = useCallback(
		(newValue: SkillListType) => {
			setAcrobatics(newValue);
			setValue(`Acrobatics${characterID}`, newValue);
		},
		[characterID]
	);

	//Athletics
	const [athletics, setAthletics] = useState<SkillListType>(
		getValue(`Athletics${characterID}`)
	);

	const updateAthletics = useCallback(
		(newValue: SkillListType) => {
			setAthletics(newValue);
			setValue(`Athletics${characterID}`, newValue);
		},
		[characterID]
	);

	//Bluff
	const [bluff, setBluff] = useState<SkillListType>(
		getValue(`Bluff${characterID}`)
	);

	const updateBluff = useCallback(
		(newValue: SkillListType) => {
			setBluff(newValue);
			setValue(`Bluff${characterID}`, newValue);
		},
		[characterID]
	);

	//Computers
	const [computers, setComputers] = useState<SkillListType>(
		getValue(`Computers${characterID}`)
	);

	const updateComputers = useCallback(
		(newValue: SkillListType) => {
			setComputers(newValue);
			setValue(`Computers${characterID}`, newValue);
		},
		[characterID]
	);

	//Culture
	const [culture, setCulture] = useState<SkillListType>(
		getValue(`Culture${characterID}`)
	);

	const updateCulture = useCallback(
		(newValue: SkillListType) => {
			setCulture(newValue);
			setValue(`Culture${characterID}`, newValue);
		},
		[characterID]
	);

	//Diplomacy
	const [diplomacy, setDiplomacy] = useState<SkillListType>(
		getValue(`Diplomacy${characterID}`)
	);

	const updateDiplomacy = useCallback(
		(newValue: SkillListType) => {
			setDiplomacy(newValue);
			setValue(`Diplomacy${characterID}`, newValue);
		},
		[characterID]
	);

	//Disguise
	const [disguise, setDisguise] = useState<SkillListType>(
		getValue(`Disguise${characterID}`)
	);

	const updateDisguise = useCallback(
		(newValue: SkillListType) => {
			setDisguise(newValue);
			setValue(`Disguise${characterID}`, newValue);
		},
		[characterID]
	);

	//Engineering
	const [engineering, setEngineering] = useState<SkillListType>(
		getValue(`Engineering${characterID}`)
	);

	const updateEngineering = useCallback(
		(newValue: SkillListType) => {
			setEngineering(newValue);
			setValue(`Engineering${characterID}`, newValue);
		},
		[characterID]
	);

	//Intimidate
	const [intimidate, setIntimidate] = useState<SkillListType>(
		getValue(`Intimidate${characterID}`)
	);

	const updateIntimidate = useCallback(
		(newValue: SkillListType) => {
			setIntimidate(newValue);
			setValue(`Intimidate${characterID}`, newValue);
		},
		[characterID]
	);

	//Life Science
	const [lifeScience, setLifeScience] = useState<SkillListType>(
		getValue(`Life Science${characterID}`)
	);

	const updateLifeScience = useCallback(
		(newValue: SkillListType) => {
			setLifeScience(newValue);
			setValue(`Life Science${characterID}`, newValue);
		},
		[characterID]
	);

	//Medicine
	const [medicine, setMedicine] = useState<SkillListType>(
		getValue(`Medicine${characterID}`)
	);

	const updateMedicine = useCallback(
		(newValue: SkillListType) => {
			setMedicine(newValue);
			setValue(`Medicine${characterID}`, newValue);
		},
		[characterID]
	);

	//Mysticism
	const [mysticism, setMysticism] = useState<SkillListType>(
		getValue(`Mysticism${characterID}`)
	);

	const updateMysticism = useCallback(
		(newValue: SkillListType) => {
			setMysticism(newValue);
			setValue(`Mysticism${characterID}`, newValue);
		},
		[characterID]
	);

	//Perception
	const [perception, setPerception] = useState<SkillListType>(
		getValue(`Perception${characterID}`)
	);

	const updatePerception = useCallback(
		(newValue: SkillListType) => {
			setPerception(newValue);
			setValue(`Perception${characterID}`, newValue);
		},
		[characterID]
	);

	//Physical Science
	const [physicalScience, setPhysicalScience] = useState<SkillListType>(
		getValue(`Physical Science${characterID}`)
	);

	const updatePhysicalScience = useCallback(
		(newValue: SkillListType) => {
			setPhysicalScience(newValue);
			setValue(`Physical Science${characterID}`, newValue);
		},
		[characterID]
	);

	//Piloting
	const [piloting, setPiloting] = useState<SkillListType>(
		getValue(`Piloting${characterID}`)
	);

	const updatePiloting = useCallback(
		(newValue: SkillListType) => {
			setPiloting(newValue);
			setValue(`Piloting${characterID}`, newValue);
		},
		[characterID]
	);

	//Profession
	const [profession, setProfession] = useState<SkillListType>(
		getValue(`Profession${characterID}`)
	);

	const updateProfession = useCallback(
		(newValue: SkillListType) => {
			setProfession(newValue);
			setValue(`Profession${characterID}`, newValue);
		},
		[characterID]
	);

	//Sense Motive
	const [senseMotive, setSenseMotive] = useState<SkillListType>(
		getValue(`Sense Motive${characterID}`)
	);

	const updateSenseMotive = useCallback(
		(newValue: SkillListType) => {
			setSenseMotive(newValue);
			setValue(`Sense Motive${characterID}`, newValue);
		},
		[characterID]
	);

	//Sleight of Hand
	const [sleightOfHand, setSleightOfHand] = useState<SkillListType>(
		getValue(`Sleight of Hand${characterID}`)
	);

	const updateSleightOfHand = useCallback(
		(newValue: SkillListType) => {
			setSleightOfHand(newValue);
			setValue(`Sleight of Hand${characterID}`, newValue);
		},
		[characterID]
	);

	//Stealth
	const [stealth, setStealth] = useState<SkillListType>(
		getValue(`Stealth${characterID}`)
	);

	const updateStealth = useCallback(
		(newValue: SkillListType) => {
			setStealth(newValue);
			setValue(`Stealth${characterID}`, newValue);
		},
		[characterID]
	);

	//Survival
	const [survival, setSurvival] = useState<SkillListType>(
		getValue(`Survival${characterID}`)
	);

	const updateSurvival = useCallback(
		(newValue: SkillListType) => {
			setSurvival(newValue);
			setValue(`Survival${characterID}`, newValue);
		},
		[characterID]
	);

	useEffect(() => {
		Object.keys(SkillBlockStatesList).forEach((key) => {
			SkillBlockStatesList[key].updateState(getValue(`${key}${characterID}`));
		});
	}, [characterID]);

	const SkillBlockStatesList: SkillBlockStatesListType = {
		Acrobatics: {
			skillState: acrobatics,
			updateState: updateAcrobatics,
		},
		Athletics: {
			skillState: athletics,
			updateState: updateAthletics,
		},
		Bluff: {
			skillState: bluff,
			updateState: updateBluff,
		},
		Computers: {
			skillState: computers,
			updateState: updateComputers,
		},
		Culture: {
			skillState: culture,
			updateState: updateCulture,
		},
		Diplomacy: {
			skillState: diplomacy,
			updateState: updateDiplomacy,
		},
		Disguise: {
			skillState: disguise,
			updateState: updateDisguise,
		},
		Engineering: {
			skillState: engineering,
			updateState: updateEngineering,
		},
		Intimidate: {
			skillState: intimidate,
			updateState: updateIntimidate,
		},
		'Life Science': {
			skillState: lifeScience,
			updateState: updateLifeScience,
		},
		Medicine: {
			skillState: medicine,
			updateState: updateMedicine,
		},
		Mysticism: {
			skillState: mysticism,
			updateState: updateMysticism,
		},
		Perception: {
			skillState: perception,
			updateState: updatePerception,
		},
		'Physical Science': {
			skillState: physicalScience,
			updateState: updatePhysicalScience,
		},
		Piloting: {
			skillState: piloting,
			updateState: updatePiloting,
		},
		Profession: {
			skillState: profession,
			updateState: updateProfession,
		},
		'Sense Motive': {
			skillState: senseMotive,
			updateState: updateSenseMotive,
		},
		'Sleight of Hand': {
			skillState: sleightOfHand,
			updateState: updateSleightOfHand,
		},
		Stealth: {
			skillState: stealth,
			updateState: updateStealth,
		},
		Survival: {
			skillState: survival,
			updateState: updateSurvival,
		},
	};

	// // Function to set the skill with updated values.
	function setSkill(rank: number, attributeModBonus: number, skill: string) {
		let tempSkill: SkillListType = getValue(`${skill}${characterID}`);
		tempSkill.ranks = rank;
		// Check if skill is a class skill or not.
		if (
			(tempSkill.isClassSkill && rank > 0) ||
			(tempSkill.isClassSkill && tempSkill.operativeSpecializationSkill)
		) {
			tempSkill.classSkillBonus = 3;
		} else {
			tempSkill.classSkillBonus = 0;
		}
		tempSkill.value =
			rank +
			attributeModBonus +
			tempSkill.classSkillBonus +
			tempSkill.insightBonusToValue +
			tempSkill.racialBonusToValue;
		SkillBlockStatesList[skill].updateState(tempSkill);
	}

	return { SkillBlockStatesList, setSkill };
}
