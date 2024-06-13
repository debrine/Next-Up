export default function EditLocalStorageValue(
    isPositive: boolean,
    numberValue: number,
    keyString: string
) {

    // Used to edit a value set in local storage.

    let tempCharInfo = JSON.parse(localStorage.getItem('tempCharacterInfo')!)

    let valueToAdjust =  JSON.parse(localStorage.getItem(`${keyString}${tempCharInfo.keyID}`)!)

    if(isPositive){
        valueToAdjust.value += numberValue
    } else{
        valueToAdjust.value -= numberValue
    }
        localStorage.setItem(`${keyString}${tempCharInfo.keyID}`, JSON.stringify(valueToAdjust))
    

}