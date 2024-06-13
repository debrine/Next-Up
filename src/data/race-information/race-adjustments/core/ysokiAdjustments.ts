import EditLocalStorageValue from "../../../EditLocalStorageValue";

export default function ysokiAdjustments(){
    
    // Dexterity
    EditLocalStorageValue(true, 2, 'Dexterity')
    
    // Intelligence
    EditLocalStorageValue(true, 2, 'Intelligence')
    
    // Strength
    EditLocalStorageValue(false, 2, 'Strength')

    // Ysoki receive a +2 racial bonus to Engineering, Stealth, and Survival checks.
    
    // Engineering
    EditLocalStorageValue(true, 2, 'Engineering')
    
    // Stealth
    EditLocalStorageValue(true, 2, 'Stealth')
    
    // Survival
    EditLocalStorageValue(true, 2, 'Survival')
}