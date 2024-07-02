type SpecializationListTypes = {
    description: string,
    associatedSkills: string[],
    trickAttackSkill: string,
    specializationExploit: {
        exploitName: string,
        description: string,
        actionType: string[],
        hasFeatOptions: boolean,
        featOptions: string[],
        givesFeat: boolean,
        featGiven: string,
        usesResolve: number
    }, // Changing to .type file later
    abilityName: string,
    abilityDescription: string,
    actionType: string,
    usesResolve: number
}