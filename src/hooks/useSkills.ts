import { useState } from 'react';
import { getValue } from '../utils/getValue';
import { setValue } from '../utils/setValue';
import { useParams } from 'react-router-dom';

type SkillBlockStatesListType = {
	[key: string]: {
		skillState: SkillListType;
		setSkill: (newValues: SkillListType) => void;
	};
};

export function useSkills() {
	const { characterID } = useParams();

	//Acrobatics
	const [acrobatics, setAcrobatics] = useState<SkillListType>(
		getValue(`Acrobatics${characterID}`)
	);

	function editAcrobaticsValue(newValues: SkillListType) {
		setAcrobatics(newValues);

		setValue(`Acrobatics${characterID}`, newValues);
	}

	//Athletics
	const [athletics, setAthletics] = useState<SkillListType>(
		getValue(`Athletics${characterID}`)
	);

	function editAthleticsValue(newValues: SkillListType) {
		setAthletics(newValues);

		setValue(`Athletics${characterID}`, newValues);
	}

	//Bluff
	const [bluff, setBluff] = useState<SkillListType>(
		getValue(`Bluff${characterID}`)
	);

	function editBluffValue(newValues: SkillListType) {
		setBluff(newValues);

		setValue(`Bluff${characterID}`, newValues);
	}

	//Computers
	const [computers, setComputers] = useState<SkillListType>(
		getValue(`Computers${characterID}`)
	);

	function editComputersValue(newValues: SkillListType) {
		setComputers(newValues);

		setValue(`Computers${characterID}`, newValues);
	}

	//Culture
	const [culture, setCulture] = useState<SkillListType>(
		getValue(`Culture${characterID}`)
	);

	function editCultureValue(newValues: SkillListType) {
		setCulture(newValues);

		setValue(`Culture${characterID}`, newValues);
	}

	//Diplomacy
	const [diplomacy, setDiplomacy] = useState<SkillListType>(
		getValue(`Diplomacy${characterID}`)
	);

	function editDiplomacyValue(newValues: SkillListType) {
		setDiplomacy(newValues);

		setValue(`Diplomacy${characterID}`, newValues);
	}

	//Disguise
	const [disguise, setDisguise] = useState<SkillListType>(
		getValue(`Disguise${characterID}`)
	);

	function editDisguiseValue(newValues: SkillListType) {
		setDisguise(newValues);

		setValue(`Disguise${characterID}`, newValues);
	}

	//Engineering
	const [engineering, setEngineering] = useState<SkillListType>(
		getValue(`Engineering${characterID}`)
	);

	function editEngineeringValue(newValues: SkillListType) {
		setEngineering(newValues);

		setValue(`Engineering${characterID}`, newValues);
	}

	//Intimidate
	const [intimidate, setIntimidate] = useState<SkillListType>(
		getValue(`Intimidate${characterID}`)
	);

	function editIntimidateValue(newValues: SkillListType) {
		setIntimidate(newValues);

		setValue(`Intimidate${characterID}`, newValues);
	}

	//Life Science
	const [lifeScience, setLifeScience] = useState<SkillListType>(
		getValue(`Life Science${characterID}`)
	);

	function editLifeScienceValue(newValues: SkillListType) {
		setLifeScience(newValues);

		setValue(`Life Science${characterID}`, newValues);
	}

	//Medicine
	const [medicine, setMedicine] = useState<SkillListType>(
		getValue(`Medicine${characterID}`)
	);

	function editMedicineValue(newValues: SkillListType) {
		setMedicine(newValues);

		setValue(`Medicine${characterID}`, newValues);
	}

	//Mysticism
	const [mysticism, setMysticism] = useState<SkillListType>(
		getValue(`Mysticism${characterID}`)
	);

	function editMysticismValue(newValues: SkillListType) {
		setMysticism(newValues);

		setValue(`Mysticism${characterID}`, newValues);
	}

	//Perception
	const [perception, setPerception] = useState<SkillListType>(
		getValue(`Perception${characterID}`)
	);

	function editPerceptionValue(newValues: SkillListType) {
		setPerception(newValues);

		setValue(`Perception${characterID}`, newValues);
	}

	//Physical Science
	const [physicalScience, setPhysicalScience] = useState<SkillListType>(
		getValue(`Physical Science${characterID}`)
	);

	function editPhysicalScienceValue(newValues: SkillListType) {
		setPhysicalScience(newValues);

		setValue(`Physical Science${characterID}`, newValues);
	}

	//Piloting
	const [piloting, setPiloting] = useState<SkillListType>(
		getValue(`Piloting${characterID}`)
	);

	function editPilotingValue(newValues: SkillListType) {
		setPiloting(newValues);

		setValue(`Piloting${characterID}`, newValues);
	}

	//Profession
	const [profession, setProfession] = useState<SkillListType>(
		getValue(`Profession${characterID}`)
	);

	function editProfessionValue(newValues: SkillListType) {
		setProfession(newValues);

		setValue(`Profession${characterID}`, newValues);
	}

	//Sense Motive
	const [senseMotive, setSenseMotive] = useState<SkillListType>(
		getValue(`Sense Motive${characterID}`)
	);

	function editSenseMotiveValue(newValues: SkillListType) {
		setSenseMotive(newValues);

		setValue(`Sense Motive${characterID}`, newValues);
	}

	//Sleight of Hand
	const [sleightOfHand, setSleightOfHand] = useState<SkillListType>(
		getValue(`Sleight of Hand${characterID}`)
	);

	function editSleightOfHandValue(newValues: SkillListType) {
		setSleightOfHand(newValues);

		setValue(`Sleight of Hand${characterID}`, newValues);
	}

	//Stealth
	const [stealth, setStealth] = useState<SkillListType>(
		getValue(`Stealth${characterID}`)
	);

	function editStealthValue(newValues: SkillListType) {
		setStealth(newValues);

		setValue(`Stealth${characterID}`, newValues);
	}

	//Survival
	const [survival, setSurvival] = useState<SkillListType>(
		getValue(`Survival${characterID}`)
	);

	function editSurvivalValue(newValues: SkillListType) {
		setSurvival(newValues);

		setValue(`Survival${characterID}`, newValues);
	}

	function fetchSkills() {
		setAcrobatics(getValue(`Acrobatics${characterID}`));
		setAthletics(getValue(`Athletics${characterID}`));
		setBluff(getValue(`Bluff${characterID}`));
		setComputers(getValue(`Computers${characterID}`));
		setCulture(getValue(`Culture${characterID}`));
		setDiplomacy(getValue(`Diplomacy${characterID}`));
		setDisguise(getValue(`Disguise${characterID}`));
		setEngineering(getValue(`Engineering${characterID}`));
		setIntimidate(getValue(`Intimidate${characterID}`));
		setLifeScience(getValue(`Life Science${characterID}`));
		setMedicine(getValue(`Medicine${characterID}`));
		setMysticism(getValue(`Mysticism${characterID}`));
		setPerception(getValue(`Perception${characterID}`));
		setPhysicalScience(getValue(`Physical Science${characterID}`));
		setPiloting(getValue(`Piloting${characterID}`));
		setProfession(getValue(`Profession${characterID}`));
		setSenseMotive(getValue(`Sense Motive${characterID}`));
		setSleightOfHand(getValue(`Sleight of Hand${characterID}`));
		setStealth(getValue(`Stealth${characterID}`));
		setSurvival(getValue(`Survival${characterID}`));
	}

	const SkillBlockStatesList: SkillBlockStatesListType = {
		Acrobatics: {
			skillState: acrobatics,
			setSkill: editAcrobaticsValue,
		},
		Athletics: {
			skillState: athletics,
			setSkill: editAthleticsValue,
		},
		Bluff: {
			skillState: bluff,
			setSkill: editBluffValue,
		},
		Computers: {
			skillState: computers,
			setSkill: editComputersValue,
		},
		Culture: {
			skillState: culture,
			setSkill: editCultureValue,
		},
		Diplomacy: {
			skillState: diplomacy,
			setSkill: editDiplomacyValue,
		},
		Disguise: {
			skillState: disguise,
			setSkill: editDisguiseValue,
		},
		Engineering: {
			skillState: engineering,
			setSkill: editEngineeringValue,
		},
		Intimidate: {
			skillState: intimidate,
			setSkill: editIntimidateValue,
		},
		'Life Science': {
			skillState: lifeScience,
			setSkill: editLifeScienceValue,
		},
		Medicine: {
			skillState: medicine,
			setSkill: editMedicineValue,
		},
		Mysticism: {
			skillState: mysticism,
			setSkill: editMysticismValue,
		},
		Perception: {
			skillState: perception,
			setSkill: editPerceptionValue,
		},
		'Physical Science': {
			skillState: physicalScience,
			setSkill: editPhysicalScienceValue,
		},
		Piloting: {
			skillState: piloting,
			setSkill: editPilotingValue,
		},
		Profession: {
			skillState: profession,
			setSkill: editProfessionValue,
		},
		'Sense Motive': {
			skillState: senseMotive,
			setSkill: editSenseMotiveValue,
		},
		'Sleight of Hand': {
			skillState: sleightOfHand,
			setSkill: editSleightOfHandValue,
		},
		Stealth: {
			skillState: stealth,
			setSkill: editStealthValue,
		},
		Survival: {
			skillState: survival,
			setSkill: editSurvivalValue,
		},
	};

	return { fetchSkills, SkillBlockStatesList };
}
