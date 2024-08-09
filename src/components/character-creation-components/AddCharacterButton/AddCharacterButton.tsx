import { useEffect, useRef } from 'react';
import { abilityScoreList } from '../../../data/abilityScoreList.ts';
import { skillList } from '../../../data/skillList.ts';
import { classList } from '../../../data/class-information/classList.ts';
import { raceList } from '../../../data/race-information/raceList.ts';
import { themeList } from '../../../data/theme-information/themeList.ts';
import { getValue } from '../../../utils/getValue.ts';
import { setValue } from '../../../utils/setValue.ts';
import { Link } from 'react-router-dom';
import styles from './AddCharacterButton.module.css';
import { AddAbility } from '../../../utils/AddAbility.ts';

/*
  Things to save:
  `Object with Name and keyID stored in array with the rest of the characters created.
  `BasicInfo - Stuff not meant to be changed
    Class + Key Ability Score
    Race
    Theme

  `Player level will be stored as a number.
    Default 0, after character added, players will have to make their 1st level ability and feat choices.    
  `Size does not need to be stored.
  `Speed will be stored as a number.
    Default 30
  `Gender, Home World, Alignment, Diety, Player all stored as seperate strings.

  `Description will need to be saved as a string.

  `Ability Scores will need to be saved individually for race and theme functions.

  `Skills will need to be saved individually for race and theme functions.

  `Skill notes will need to be saved as a string.

  `Initiative misc modifier will be stored as a number for adding custom amounts to initiative.

  `Total Stamina, Health, and Resolve will not need to be stored, but current and temp will.
  `Saving Throws will need misc modifiers saved.
  `Attack Bonuses will need misc modifiers saved.
  `Proficiencies will need to be saved. They will be saved as a string created from the list.
    Weapon
    Armor

  `Weapons will need to be saved as an array of weapon objects.
    Empty on creation.

  `Armor will need to be saved as an array of armor objects.
    Empty on creation.
    Energy and Kenetic will need to have their misc mod saved.
  
  `Abilities will need to be saved in an array.
    Abilities will come from Race, Theme, and Class and have those listed as their source.

  `Feats will need to be saved in an array.
    Will be able to edit list. Empty on creation.

  `Equipment will need to be saved in an array.
    Will be able to edit list. Empty on creation

  `Other Wealth will need to be saved as a string.
  
  `Languages will need to be saved as a string.
  
  `Experience Points Earned will need to be saved as a string that only accepts numbers.

  `Spells will need to be added as a list from 0-6th level.
    Will be able to edit each list.

  `Card list to use for combat.
    Initial values should be for player.
*/

function AddCharacterButton() {
	// Get the temp info saved.
	const {
		inputName,
		keyID,
		race,
		chClass,
		keyAbilityScoreSelected,
		theme,
		themeOptionOne,
		themeOptionTwo,
		themeOptionThree,
		raceOptionOne,
		raceOptionTwo,
		raceOptionThree,
	} = getValue('tempCharacterInfo');

	/*
    Character Name
  */
	// Set the character name in local storage to an array of objects.
	// Set the default array
	const nameArray = useRef<{ characterName: string; id: string }[]>([]);
	// Find if the array exists.
	useEffect(() => {
		if (localStorage.getItem('charactersAvailable') != null) {
			nameArray.current = getValue('charactersAvailable');
		}
	}, []);

	function addCharacterhandler() {
		/*
      Character
    */
		// Needs a useRef to point to current and save that version.
		setValue('charactersAvailable', [
			...nameArray.current,
			{
				characterName: inputName,
				id: keyID,
			},
		]);

		/*
      Character Basic Info
    */
		// Values that will be saved to local storage that aren't meant to be changed.
		setValue(`characterBasicInfo${keyID}`, {
			id: keyID,
			race,
			chClass,
			keyAbilityScoreSelected,
			theme,
		});
		// Values that will be saved to local storage that can be changed.
		setValue(`characterBasicInfoDynamic${keyID}`, {
			characterAlignment: '',
			characterDiety: '',
			characterGender: '',
			characterHomeWorld: '',
			characterName: inputName,
			characterSize: raceList[race].raceSize,
			characterSpeed: 30,
			playerName: '',
		});
		// Level
		setValue(`Level${keyID}`, 0);
		// Description
		setValue(`Description${keyID}`, '');

		/*
      Ability Scores
    */
		Object.keys(abilityScoreList).forEach((key: string) => {
			setValue(
				`${abilityScoreList[key].aSName}${keyID}`,
				abilityScoreList[key]
			);
		});

		/*
      Skills
    */
		Object.keys(skillList).forEach((key: string) => {
			setValue(`${skillList[key].skillName}${keyID}`, skillList[key]);
		});

		// Skill notes
		setValue(`SkillNotes${keyID}`, '');

		// Set Class Skills
		classList[chClass].classDefaults.classSkills.forEach((skill) => {
			// Get the object into a temp state.
			const classSkill = getValue(`${skill}${keyID}`);

			if (classSkill != undefined) {
				// Change the isClassSkill value to true, and set it again.
				let tempSkill: SkillListType = Object.assign(classSkill);
				tempSkill.isClassSkill = true;
				tempSkill.classSkillBonus = 3;
				setValue(`${skill}${keyID}`, tempSkill);
			}
		});

		// Set a name for the Profession.
		setValue(`ProfessionName${keyID}`, '');

		/*
      Weapon and Armor proficiencies
    */
		setValue(
			`WeaponProficiencies${keyID}`,
			`${classList[chClass].classDefaults.weaponProficiencies.join(', ')}`
		);
		setValue(
			`ArmorProficiencies${keyID}`,
			`${classList[chClass].classDefaults.armorProficiencies.join(', ')}`
		);

		/*
      Current and Temp Stamina, Health, and Resolve
    */
		setValue(`CurrentSP${keyID}`, 0);
		setValue(`CurrentHP${keyID}`, 0);
		setValue(`CurrentRP${keyID}`, 0);
		setValue(`TempSP${keyID}`, 0);
		setValue(`TempHP${keyID}`, 0);
		setValue(`TempRP${keyID}`, 0);

		/*
      Saving Throw and Attack Bonus misc modifiers.
    */
		setValue(`SavingThrowMiscMods${keyID}`, {
			fortitude: 0,
			reflex: 0,
			will: 0,
		});

		setValue(`AttackBonusesMiscMods${keyID}`, {
			melee: 0,
			ranged: 0,
			thrown: 0,
		});

		/*
      Armor Class Kenetic and Energy misc modifiers, DR, and Resistances, Armor Equipped
     */
		setValue(`Armor${keyID}`, [
			{
				armorName: '',
				armorType: '',
				armorProficiency: '',
				armorLevel: 0,
				armorEAC: 0,
				armorKAC: 0,
				maxDexBonus: 0,
				isEquipped: false,
			},
		]);
		setValue(`ArmorMiscMods${keyID}`, { energy: 0, kenetic: 0 });
		setValue(`DR${keyID}`, '');
		setValue(`Resistances${keyID}`, '');
		setValue(`EquippedArmor${keyID}`, {
			armorName: '',
			armorType: '',
			armorProficiency: '',
			armorLevel: 0,
			armorEAC: 0,
			armorKAC: 0,
			maxDexBonus: 0,
			isEquipped: false,
		});

		/*
      Initiative Misc Modifier, Weapons, Other Wealth, Languages
    */
		setValue(`InitiativeMiscModifier${keyID}`, 0);
		setValue(`Weapons${keyID}`, [
			{
				weaponName: '',
				weaponType: '',
				weaponRange: '',
				weaponCritical: '',
				weaponAmmoTotal: 0,
				weaponAmmoCurrent: 0,
				weaponProficiency: '',
				weaponLevel: 0,
				weaponToHit: 0,
				weaponDamageType: '',
				weaponDamageRoll: '',
			},
		]);
		setValue(`Feats${keyID}`, []);
		setValue(`Equipment${keyID}`, []);
		setValue(`OtherWealth${keyID}`, '');
		setValue(`Languages${keyID}`, '');
		setValue(`XPEarned${keyID}`, '');

		/*
      Abilities
    */
		setValue(`Abilities${keyID}`, []);
		// Abilities from Class will be added upon confirming 1st level.
		// Add abilities from Race.
		raceList[race].raceAbilityName.forEach((ability: String, index: number) => {
			AddAbility(keyID, {
				abilityName: ability.toUpperCase(),
				abilityDescription: raceList[race].raceAbilityDescription[index],
				abilitySource: `Race (${race})`,
				actionType: ['None'],
				usesResolve: 0,
			});
		});
		// Add 1st level ability from Theme.
		AddAbility(keyID, {
			abilityName: themeList[theme].themeAbilityTitle[0].toUpperCase(),
			abilityDescription: themeList[theme].themeAbilityDescription[0],
			abilitySource: `Theme (${theme})`,
			actionType: ['None'],
			usesResolve: 0,
		});

		/*
      Spells
    */
		setValue(`Level0Spells${keyID}`, []);
		setValue(`Level1Spells${keyID}`, []);
		setValue(`Level2Spells${keyID}`, []);
		setValue(`Level3Spells${keyID}`, []);
		setValue(`Level4Spells${keyID}`, []);
		setValue(`Level5Spells${keyID}`, []);
		setValue(`Level6Spells${keyID}`, []);

		/*
      Race and Theme functions to adjust stats.
    */
		raceList[race].raceFunction();
		if (raceList[race].hasOptions) {
			raceList[race].raceFunction(raceOptionOne);
			raceList[race].raceFunction(raceOptionTwo);
			raceList[race].raceFunction(raceOptionThree);
		}
		themeList[theme].themeFunction(keyID);
		if (themeList[theme].hasOptions) {
			themeList[theme].themeFunction(keyID, themeOptionOne);
			themeList[theme].themeFunction(keyID, themeOptionTwo);
			themeList[theme].themeFunction(keyID, themeOptionThree);
		}

		/*
      Initiative Card values.
      Temporary as values have not been confirmed yet.
    */
		const characterInitiative: {
			name: string;
			initiative: number;
			noteArray: {
				note: string;
				expiry: number;
			}[];
			cardColor: string;
			inGroup: boolean;
			groupName: string;
		} = {
			name: inputName,
			initiative: 0,
			noteArray: [],
			cardColor: '',
			inGroup: false,
			groupName: '',
		};

		setValue(`initiativeCards${keyID}`, [characterInitiative]);

		dispatchEvent(new Event('Character Created'));
	}

	return (
		<div className={styles.navBarItem}>
			<Link
				onClick={addCharacterhandler}
				to={`/Next-Up/charactersheet/${keyID}`}
			>
				Add Character
			</Link>
		</div>
	);
}

export default AddCharacterButton;
