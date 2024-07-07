import { getValue } from "../utils/getValue"
import { setValue } from "../utils/setValue"

export default function EditLocalStorageValue(
    isPositive: boolean,
    numberValue: number,
    parameterToEdit: string,
) {

    // Used to edit a value set in local storage.

    let tempCharInfo = getValue('tempCharacterInfo')

    let valueToAdjust =  getValue(`${parameterToEdit}${tempCharInfo.keyID}`)

    if(isPositive){
        valueToAdjust.value += numberValue
    } else{
        valueToAdjust.value -= numberValue
    }
    setValue(`${parameterToEdit}${tempCharInfo.keyID}`, valueToAdjust)
}