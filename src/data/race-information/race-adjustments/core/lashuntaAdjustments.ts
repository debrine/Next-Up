import EditLocalStorageValue from "../../../EditLocalStorageValue"

export default function lashuntaAdjustments(
    option?: string
){
    if(option != undefined && option != ''){
        // Ability Score adjustments
        // +2 to Charisma and Strength (Korasha). +2 to Intelligence and Constitution (Damaya)
        // -2 to Wisdom/Constitution repectively
    

        if(option === 'Korasha'){
            
            // Charisma
            EditLocalStorageValue(true, 2, 'Charisma')
        
            // Strength
            EditLocalStorageValue(true, 2, 'Strength')
        
            // Wisdom
            EditLocalStorageValue(false, 2, 'Wisdom')

        } else if(option === 'Damaya'){
            
            // Charisma
            EditLocalStorageValue(true, 2, 'Charisma')
        
            // Intelligence
            EditLocalStorageValue(true, 2, 'Intelligence')
        
            // Constitution
            EditLocalStorageValue(false, 2, 'Constitution')
            
        } else{
            // If option isn't for a sub-race, it will be +2 to any skills.
            EditLocalStorageValue(true, 2, option)
        }
    }
}