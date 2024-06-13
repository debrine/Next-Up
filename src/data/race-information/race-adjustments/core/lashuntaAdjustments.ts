import EditLocalStorageValue from "../../../EditLocalStorageValue"

export default function lashuntaAdjustments(
    option?: string[]
){
    if(option != undefined){
        // Ability Score adjustments
        // +2 to Charisma and Strength (Korasha). +2 to Intelligence and Constitution (Damaya)
        // -2 to Wisdom
    
        // Charisma
        EditLocalStorageValue(true, 2, 'Charisma')

        if(option[0] === 'Korasha'){
        
            // Strength
            EditLocalStorageValue(true, 2, 'Strength')
        
            // Wisdom
            EditLocalStorageValue(false, 2, 'Wisdom')

        } else if(option[0] === 'Damaya'){
        
            // Intelligence
            EditLocalStorageValue(true, 2, 'Intelligence')
        
            // Constitution
            EditLocalStorageValue(false, 2, 'Constitution')
            
        }

        // Add +2 to any two skills.
        EditLocalStorageValue(true, 2, option[1])
        EditLocalStorageValue(true, 2, option[2])
    }
}