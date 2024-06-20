// To be used to add the abilities to the character sheet's ability list.

let operativeAbilityList: {[key:string]:{
    abilityName:string[],
    abilityDescription: string[],
    hasOptions: boolean,
    options:string[]
}} = {
    '1':{
        abilityName:['OPERATIVE\'S EDGE (EX)', 'SPECIALIZAION'],
        abilityDescription: [
            'Your diverse training as an operative grants you a +1 insight bonus to initiative checks and to skill checks. This bonus increases by 1 at 3rd level and every 4 levels thereafter.',
            'Your specialization represents your primary area of expertise. Pick one specialisation upon taking your 1st level of the operative class. Once made, this choice cannot be changed. Descriptions of the specialiations appear on page 94 of the Core Rulebook. Your specialization grants you the Skill Focus feat (see page 161 of the Core Rulebook) in your specialization\'s associated skills, and you gain a free skill rank in each of those skills at each operative level (this does not allow you to exceed the maximum number of skill ranks in a single skill.'
        ],
        hasOptions: true,
        options:['']
    }
}