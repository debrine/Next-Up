import EditLocalStorageValue from "../../../EditLocalStorageValue";

export default function shirrenAdjustments(){
    
    // Constitution
    EditLocalStorageValue(true, 2, 'Constitution')
    
    // Wisdom
    EditLocalStorageValue(true, 2, 'Wisdom')
    
    // Charisma
    EditLocalStorageValue(false, 2, 'Charisma')

    // +2 to Culture and Diplomacy
    
    // Culture
    EditLocalStorageValue(true, 2, 'Culture')
    
    // Diplomacy
    EditLocalStorageValue(true, 2, 'Diplomacy')

    
}