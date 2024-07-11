import EditTempCharacterInfoValue from "../../../EditTempCharacterInfoValue.ts"

export default function lashuntaAdjustments(
    option?: string
){
    if(option != undefined && option != ''){
        // Ability Score adjustments
        // +2 to Charisma and Strength (Korasha). +2 to Intelligence and Constitution (Damaya)
        // -2 to Wisdom/Constitution repectively
    

        if(option === 'Korasha'){
            
            // Charisma
            EditTempCharacterInfoValue(true, 2, 'Charisma')
        
            // Strength
            EditTempCharacterInfoValue(true, 2, 'Strength')
        
            // Wisdom
            EditTempCharacterInfoValue(false, 2, 'Wisdom')

        } else if(option === 'Damaya'){
            
            // Charisma
            EditTempCharacterInfoValue(true, 2, 'Charisma')
        
            // Intelligence
            EditTempCharacterInfoValue(true, 2, 'Intelligence')
        
            // Constitution
            EditTempCharacterInfoValue(false, 2, 'Constitution')
            
        } else{
            // If option isn't for a sub-race, it will be +2 to any skills.
            EditTempCharacterInfoValue(true, 2, option)
        }
    }
}