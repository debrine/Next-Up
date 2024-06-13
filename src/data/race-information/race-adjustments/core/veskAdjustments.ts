import EditLocalStorageValue from "../../../EditLocalStorageValue";


export default function veskAdjustments(){
    
    // Strength
    EditLocalStorageValue(true, 2, 'Strength')
    
    // Constitution
    EditLocalStorageValue(true, 2, 'Constitution')
    
    // Intelligence
    EditLocalStorageValue(false, 2, 'Intelligence')
}