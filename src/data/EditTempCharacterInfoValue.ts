import { getValue } from "../utils/getValue.ts"
import { setValue } from "../utils/setValue.ts"

export default function EditTempCharacterInfoValue(
    isPositive: boolean,
    numberValue: number,
    parameterToEdit: string,
) {

    // Used to edit a value set in local storage.

    const tempCharInfo = getValue('tempCharacterInfo')

    let valueToAdjust =  getValue(`${parameterToEdit}${tempCharInfo.keyID}`)

    if(isPositive){
        valueToAdjust.value += numberValue
    } else{
        valueToAdjust.value -= numberValue
    }
    setValue(`${parameterToEdit}${tempCharInfo.keyID}`, valueToAdjust)
}