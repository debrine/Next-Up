export function setValue(
    valueName: string,
    value: any
){
    localStorage.setItem(valueName, JSON.stringify(value))
}