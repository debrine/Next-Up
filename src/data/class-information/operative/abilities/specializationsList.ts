import { exploitList } from "./exploitsList.ts"

export const specializationList: {[key:string]:SpecializationListTypes}= {
    'Bandit':{
        description: 'You cultivate a menacing persona to coerce your targets.',
        associatedSkills: ['Intimidate','Sense Motive'],
        trickAttackSkill: 'You can attempt an Intimidate check with a +4 bonus to make a trick attack by menacing or threatening your foe.',
        specializationExploit: exploitList['10']['Disarming Command (Ex)'],
        abilityName: 'Commanding Presence (Ex)',
        abilityDescription: 'At 11th level, you can spend 1 Resolve Point as a standard action to attempt an Intimidate check to demoralize any number of creatures within 60 feet, though you take a cumulative -1 penalty to your Intimidate check for every two creatures you attempt to demoralize in this way (rounded down). Then choose a number of creatures you successfully demoralized (up to a number of creatures equal to your Charisma modifier). Those creatures follow a single command you issue for 1 round, per command (Will negates). Once you\'ve targeted a creature with commanding presence, it\'s immune to your commanding presence for 24 hours. This is a mind-affecting, sense-dependent fear effect; the secondary command effect is also language-dependent.',
        actionType:['Standard Action'],
        usesResolve: 1
    },
    'Bully':{
        description: 'You specialize in close combat, leveraging your intimidating presence to crush your foes\' defenses and hinder their attacks.',
        associatedSkills: ['Athletics', 'Intimidate'],
        trickAttackSkill: 'You can attempt an Intimidate check with a +4 bonus to make a trick attack by menacing your opponent, making them hesitate to raise a defense. This is a fear effect, and if your foe has a bonus to saving throws against fear effects, they also apply it to the skill check DC of this Intimidate check.',
        specializationExploit: exploitList['10']['Fearsome Presence (Ex)'],
        abilityName: 'Domineering Strike (Ex)',
        abilityDescription: 'Whenever you make a trick attack against a creature that\'s frightened, panicked, prone, or shaken, you treat any trick attack damage dice that roll a 1 or 2 as if they had rolled a 3 instead.',
        actionType: ['None'],
        usesResolve: 0
    },
    'Daredevil':{
        description: 'You specialize in missions requiring courage and athleticism.',
        associatedSkills: ['Acrobatics','Athletics'],
        trickAttackSkill: 'You can attempt an Acrobatics check to make a trick attack.',
        specializationExploit: exploitList['10']['Versatile Movement (Ex)'],
        abilityName: 'Terrain Attack (Ex)',
        abilityDescription: 'At 11th level, when you and a foe are both balancing, climbing, flying, or swimming, you automatically succeed at any Bluff check required to make a trick attack against that foe.',
        actionType: ['None'],
        usesResolve: 0
    },
    'Explorer':{
        description: 'You\'re an expert in scouting out dangerous locations using your knowledge and survival skills.',
        associatedSkills: ['Culture', 'Survival'],
        trickAttackSkill: 'You can attempt a Survival check with a +4 bonus to make a trick attack by using your surroundings to your advantage.',
        specializationExploit: exploitList['10']['Ever Vigilant (Ex)'],
        abilityName: 'Into the Unknown (Ex)',
        abilityDescription: 'At 11th level, you gain a +4 bonus to Culture and Survival checks. While you\'re outside both the Pact Worlds and your home star system (if different), you gain a +2 bonus to initiative checks. At the GM\'s discretion, in games centered around a different star system than the Pact Worlds, replace the Pact Worlds with that star system.',
        actionType: [''],
        usesResolve: 0
    },
}

// '':{
//         description: '',
//         associatedSkills: [''],
//         trickAttackSkill: '',
//         specializationExploit: '',
//         abilityName: '',
//         abilityDescription: '',
        // actionType: '',
        // usesResolve: 0
//     },