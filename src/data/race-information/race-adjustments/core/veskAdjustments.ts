import EditTempCharacterInfoValue from "../../../EditTempCharacterInfoValue.ts";


export default function veskAdjustments(){
    
    // Strength
    EditTempCharacterInfoValue(true, 2, 'Strength')
    
    // Constitution
    EditTempCharacterInfoValue(true, 2, 'Constitution')
    
    // Intelligence
    EditTempCharacterInfoValue(false, 2, 'Intelligence')
}