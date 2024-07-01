export default function EditLocalStorageValue(
    isPositive: boolean,
    numberValue: number,
    parameterToEdit: string,
) {

    // Used to edit a value set in local storage.

    let tempCharInfo = JSON.parse(localStorage.getItem('tempCharacterInfo')!)

    let valueToAdjust =  JSON.parse(localStorage.getItem(`${parameterToEdit}${tempCharInfo.keyID}`)!)

    if(isPositive){
        valueToAdjust.value += numberValue
    } else{
        valueToAdjust.value -= numberValue
    }
        localStorage.setItem(`${parameterToEdit}${tempCharInfo.keyID}`, JSON.stringify(valueToAdjust))
}