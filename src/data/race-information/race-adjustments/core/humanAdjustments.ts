import EditLocalStorageValue from "../../../EditLocalStorageValue";

export default function humanAdjustments(
    option?: string,
){
    //  +2 to any one option
    if(
        option != undefined &&
        option != ''
    ){
        EditLocalStorageValue(true, 2, option[0])
    }

    // Humans also get an extra feat at 1st level, and bonus skill rank per level.
    // This will be adjusted to when picking first feat and in the skill ranks per level calculations.
}