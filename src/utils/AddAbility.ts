import { getValue } from "./getValue";
import { setValue } from "./setValue";

export function AddAbility(keyID:string, ability: AbilityListTypes){
    const newArray = getValue(`Abilities${keyID}`)

    setValue(`Abilities${keyID}`, [
        ...newArray,
        ability
    ])
}