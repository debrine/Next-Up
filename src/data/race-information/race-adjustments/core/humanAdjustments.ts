import EditTempCharacterInfoValue from "../../../EditTempCharacterInfoValue.ts";

export default function humanAdjustments(
    option?: string,
){
    //  +2 to any one option
    if(
        option != undefined &&
        option != ''
    ){
        EditTempCharacterInfoValue(true, 2, option)
    }

    // Humans also get an extra feat at 1st level, and bonus skill rank per level.
    // This will be adjusted to when picking first feat and in the skill ranks per level calculations.
}